var applicationId = 0;

function Encoder(device, measurements) {
    console.log(JSON.stringify(measurements));
    if ((measurements.DEVEUI) && (measurements.DEVEUI.value)
        && (measurements.CONTROL0) && (measurements.DIGITAL2)) {

        if (measurements.DIGITAL2.value != measurements.CONTROL0.value) {
            var topic = "application/" + applicationId + "/device/" + measurements.DEVEUI.value + "/command/down";
            var payload = {
                confirmed: true,
                fPort: 10,
                data: "QhMA"
            }
            if (measurements.CONTROL0.value) {
                payload.data = "QhMB";
            }
            return { topic: topic, payload: JSON.stringify(payload) };
        }
        else {
            return { topic: "", payload: "" };;
        }
    }
}
