function Decoder(topic, payload) {
    try {
        var jpayload = JSON.parse(payload);
        if ((jpayload.data) && (jpayload.deviceName) && (jpayload.devEUI)) {
            var rawdata = fromBase64String(jpayload.data);
            var ret_data = MatchXDecode(rawdata);

            ret_data.push({
                field: "RAWDATA",
                value: arrayToHex(rawdata)
            });
            ret_data.push({
                field: "RAWDATALEN",
                value: rawdata.length
            })
            ret_data.push({
                field: "DEVEUI",
                value: jpayload.devEUI
            })

            for (var i = 0; i < ret_data.length; i++) {
                // Add device id
                ret_data[i].device = jpayload.deviceName;

                // Uppercase to all field
                ret_data[i].field = ret_data[i].field.toUpperCase();
            }

            console.log('ret_data=' + JSON.stringify(ret_data));
            return ret_data;
        }
    }
    catch (error) {
        console.log("ERROR: " + error);
    }
}

function bytes2Float32(bytes) {
    var sign = (bytes & 0x80000000) ? -1 : 1;
    var exponent = ((bytes >> 23) & 0xFF) - 127;
    var significand = (bytes & ~(-1 << 23));

    if (exponent == 128)
        return sign * ((significand) ? Number.NaN : Number.POSITIVE_INFINITY);

    if (exponent == -127) {
        if (significand == 0) return sign * 0.0;
        exponent = -126;
        significand /= (1 << 22);
    } else significand = (significand | (1 << 23)) / (1 << 23);

    return sign * significand * Math.pow(2, exponent);
}

function decodeGenericValue(aData) {
    var ret_value = NaN;
    //    console.log("decodeGenericValue: " + arrayToHex(aData));
    if (aData.length == 4) {
        // 32bits Floating point
        var raw_value = (aData[0] << 24) | (aData[1] << 16) | (aData[2] << 8) | aData[3];
        ret_value = bytes2Float32(raw_value);
    }
    else if (aData.length == 2) {
        // Signed 16bits fixed point
        var raw_value = (aData[0] << 8) | aData[1];
        if (raw_value > 0x7fff) {
            ret_value = ((raw_value ^ 0xffff) + 1) * -1;
        }
        else {
            ret_value = raw_value;
        }
        ret_value = ret_value / 256;
    }
    else if (aData.length == 1) {
        if (aData[0] > 0x7f) {
            ret_value = ((aData[0] ^ 0xff) + 1) * -1;
        }
        else {
            ret_value = aData[0];
        }
    }

    return ret_value;
}

function decodeUint32(aData) {
    //    console.log("decodeUint32: " + arrayToHex(aData));
    if (aData.length == 4) {
        raw_value = ((aData[0] & 0x7f) << 24) + (aData[1] << 16) + (aData[2] << 8) + aData[3];
        if ((aData[0] & 0x80) != 0) {
            raw_value += Math.pow(2, 31);
        }
        return raw_value;
    }
    else {
        return 0;
    }
}

function decodeDigital(aData) {
    //    console.log("decodeDigital: " + arrayToHex(aData));
    if (aData.length == 1) {
        if ((aData[0]) == 0) return 0;
        if ((aData[0]) == 1) return 1;
        return -1;
    }
    else {
        return -1;
    }
}

function getTypeName(aType) {
    switch (aType) {
        case 0:
            return "paramValue";
        case 1:
            return "sensorData";
        case 2:
            return "batteryLevel";
        case 3:
            return "batteryPercent";
        case 4:
            return "eventData";
    }
    return "";
}

function MatchXDecode(aData) {
    var s_type = 0;
    var s_data = 1;

    var sensorDataList = [
        { type: 0, name: "unknown", idx: 0, decodeFunc: null },
        { type: 1, name: "gps", idx: 0, decodeFunc: decodeGenericValue },
        { type: 2, name: "temp", idx: 0, decodeFunc: decodeGenericValue },
        { type: 3, name: "humi", idx: 0, decodeFunc: decodeGenericValue },
        { type: 4, name: "pressure", idx: 0, decodeFunc: decodeGenericValue },
        { type: 5, name: "pm10", idx: 0, decodeFunc: decodeGenericValue },
        { type: 6, name: "pm2.5", idx: 0, decodeFunc: decodeGenericValue },
        { type: 7, name: "tvoc", idx: 0, decodeFunc: decodeGenericValue },
        { type: 8, name: "no2", idx: 0, decodeFunc: decodeGenericValue },
        { type: 9, name: "co2", idx: 0, decodeFunc: decodeGenericValue },
        { type: 10, name: "airFlow", idx: 0, decodeFunc: decodeGenericValue },
        { type: 11, name: "voltage", idx: 0, decodeFunc: decodeGenericValue },
        { type: 12, name: "current", idx: 0, decodeFunc: decodeGenericValue },
        { type: 13, name: "power", idx: 0, decodeFunc: decodeGenericValue },
        { type: 14, name: "powerUsage", idx: 0, decodeFunc: decodeGenericValue },
        { type: 15, name: "waterUsage", idx: 0, decodeFunc: decodeGenericValue },
        { type: 16, name: "speed", idx: 0, decodeFunc: decodeGenericValue },
        { type: 17, name: "rotation", idx: 0, decodeFunc: decodeGenericValue },
        { type: 18, name: "counter", idx: 0, decodeFunc: decodeUint32 },
        { type: 19, name: "digital", idx: 0, decodeFunc: decodeDigital },
        { type: 20, name: "percent", idx: 0, decodeFunc: decodeGenericValue },
        { type: 21, name: "powerFactor", idx: 0, decodeFunc: decodeGenericValue },
        { type: 254, name: "uplinkPower", idx: 0, decodeFunc: decodeGenericValue }
    ];

    var state = s_type;
    var data_type = -1;
    var data_len = -1
    var ret_obj = [];

    //
    console.log("MatchXDecode: " + arrayToHex(aData));
    idx = 0
    while (idx < aData.length) {
        ch = aData[idx]
        switch (state) {
            case s_type:
                data_type = ch >> 4
                data_len = ch & 0x0f
                if (data_len > 0) {
                    state = s_data;
                }
                idx = idx + 1
                break;
            case s_data:
                if (data_len <= (aData.length - idx)) {
                    if (data_type == 1) {
                        sensor_type = aData[idx];
                        for (var i = 0; i < sensorDataList.length; i++) {
                            if (sensorDataList[i].type == sensor_type) {
                                if (sensorDataList[i].decodeFunc) {
                                    var value = sensorDataList[i].decodeFunc(aData.slice(idx + 1, idx + data_len));
                                    var name = sensorDataList[i].name + sensorDataList[i].idx;
                                    sensorDataList[i].idx++;
                                    if (!isNaN(value)) {
                                        ret_obj.push({ field: name, value: value });
                                    }
                                }
                            }
                        }
                    }
                    else if (data_type == 2) {
                        ret_obj.push({ field: getTypeName(data_type), value: aData[idx] * 0.01 + 2 });
                    }
                    else if (data_type == 3) {
                        ret_obj.push({ field: getTypeName(data_type), value: aData[idx] });
                    }
                    idx = idx + data_len
                }
                else {
                    return [];
                }
                state = s_type;

                break;
            default:
                state = s_type;
        }
    }
    if (state == s_data) {
        return [];
    }
    return ret_obj;
}

function fromBase64String(str) {
    var alpha =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var value = [];
    var index = 0;
    var destIndex = 0;
    var padding = false;
    while (true) {

        var first = getNextChr(str, index, padding, alpha);
        var second = getNextChr(str, first.nextIndex, first.padding, alpha);
        var third = getNextChr(str, second.nextIndex, second.padding, alpha);
        var fourth = getNextChr(str, third.nextIndex, third.padding, alpha);

        index = fourth.nextIndex;
        padding = fourth.padding;

        // ffffffss sssstttt ttffffff
        var base64_first = first.code == null ? 0 : first.code;
        var base64_second = second.code == null ? 0 : second.code;
        var base64_third = third.code == null ? 0 : third.code;
        var base64_fourth = fourth.code == null ? 0 : fourth.code;

        var a = ((base64_first << 2) & 0xFC) | ((base64_second >> 4) & 0x03);
        var b = ((base64_second << 4) & 0xF0) | ((base64_third >> 2) & 0x0F);
        var c = ((base64_third << 6) & 0xC0) | ((base64_fourth >> 0) & 0x3F);

        value[destIndex++] = a;
        if (!third.padding) {
            value[destIndex++] = b;
        } else {
            break;
        }
        if (!fourth.padding) {
            value[destIndex++] = c;
        } else {
            break;
        }
        if (index >= str.length) {
            break;
        }
    }
    return value;
}

function getNextChr(str, index, equalSignReceived, alpha) {
    var chr = null;
    var code = 0;
    var padding = equalSignReceived;
    while (index < str.length) {
        chr = str.charAt(index);
        if (chr == " " || chr == "\r" || chr == "\n" || chr == "\t") {
            index++;
            continue;
        }
        if (chr == "=") {
            padding = true;
        } else {
            if (equalSignReceived) {
                throw new Error("Invalid Base64 Endcoding character \""
                    + chr + "\" with code " + str.charCodeAt(index)
                    + " on position " + index
                    + " received afer an equal sign (=) padding "
                    + "character has already been received. "
                    + "The equal sign padding character is the only "
                    + "possible padding character at the end.");
            }
            code = alpha.indexOf(chr);
            if (code == -1) {
                throw new Error("Invalid Base64 Encoding character \""
                    + chr + "\" with code " + str.charCodeAt(index)
                    + " on position " + index + ".");
            }
        }
        break;
    }
    return { character: chr, code: code, padding: padding, nextIndex: ++index };
}

function decimalToHex(d, padding) {
    var hex = Number(d).toString(16);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

    while (hex.length < padding) {
        hex = "0" + hex;
    }

    return hex.toUpperCase();
}

function arrayToHex(arr) {
    var result = '';
    for (var i = 0; i < arr.length; i++) {
        if (result.length > 0) {
            result += ' ';
        }
        result += decimalToHex(arr[i], 2);
    }
    return result;
}
