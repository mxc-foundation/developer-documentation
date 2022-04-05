function Decoder(topic, payload) {
    try {
        var jpayload = JSON.parse(payload);
        if ((jpayload.data) && (jpayload.deviceName) && (jpayload.devEUI)) {
            var rawdata = fromBase64String(jpayload.data);
            var ret_data = [];
            // =====================================================
            // You may decode the raw data here and push to ret_data
            // =====================================================
            

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
                // Add device id (Datacake device serial number)
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
