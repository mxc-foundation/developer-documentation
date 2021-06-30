---
sidebar_position: 3
title: Integrations
---

# Device Integrations

By default supernode provides MQTT broker service for users to subscribe or pushlish events on their devices.

Users can subscribe to MQTT broker under topics in the servers after authentication. Before that, you need to make sure you have mosquitto package installed. Use the package manager apt to install these dependencies on the Ubuntu 18.04 LTS server:

```
sudo apt-add-repository ppa:mosquitto-dev/mosquitto-ppa
sudo apt-get update
sudo apt install mosquitto mosquitto-clients
```

## Subscription

You can either subscribe to the broker in your console or you can use package for Subscription inside your program.

A template of subscribing to the topic:

```shell
mosquitto_sub -h {{ .SUPERNODE_URL }} -p 8883 -t '{{ .EVENT_TOPIC_STRING }}' -v  -u '{{ .USER_MQTT_AUTH_JWT }}' -P 'default' -i '`hostname`-$$' --capath /etc/ssl/certs
```

### How to get `{{ .SUPERNODE_URL }}`

`{{ .SUPERNODE_URL }}` is the URL of supernode where you registered your devices:

- matchx EU `lora.supernode.matchx.io`
- matchx US `ussn.matchx.io`
- hHuaweikeji `lora.hunanhuaweikeji.com`
- mxcxy `mxcxy.com`
- k-supernode `k-supernode.com`
- enlink `lora.rosanetworks.com`
- du-capital `supernode.iot-ducapital.net`

### How to get `{{ .EVENT_TOPIC_STRING }}`

1. Get JWT for supernode user account, in the following content, we call it `{{ .SUPERNODE_JWT }}`

`{{ .SUPERNODE_JWT }}` will be used for authenticate your further requests.

Call

```shell
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{ "password": "{{ .SUPERNODE_PASSWORD }}", "username": "{{ .SUPERNODE_USERNAME }}"}' 'https://{{ .SUPERNODE_URL }}/api/internal/login'
```

Response

```json
{
  "jwt": "{{ .SUPERNODE_JWT }}",
  "is2faRequired": false
}
```

2. Get organization list

`{{ .ORG_ID }}` is important parameter for your further requests.

Call

```shell
curl -X GET --header 'Accept: application/json' --header 'Grpc-Metadata-Authorization: Bearer {{ .SUPERNODE_JWT }}' 'https://{{ .SUPERNODE_URL }}/api/organizations?limit=999&offset=0'
```

Response

```json
{
  "totalCount": "1",
  "result": [
    {
      "id": "{{ .ORG_ID }}",
      "name": "Your Organization Name",
      "displayName": "Your Organization Display Name",
      "canHaveGateways": true,
      "createdAt": "2020-04-22T09:53:38.928940Z",
      "updatedAt": "2021-05-12T12:50:02.391191Z"
    }
  ]
}
```

3. Get application list with given `{{ .ORG_ID }}`

Call

```shell
curl -X GET --header 'Accept: application/json' --header 'Grpc-Metadata-Authorization: Bearer {{ .SUPERNODE_JWT }}' 'https://{{ .SUPERNODE_URL }}/api/applications?limit=999&offset=0&organizationID={{ .ORG_ID }}'
```

Response

```json
{
  "totalCount": "1",
  "result": [
    {
      "id": "{{ .APPLICATION_ID }}",
      "name": "Your application name",
      "description": "description",
      "organizationID": "{{ .ORG_ID }}",
      "serviceProfileID": "service profile id",
      "serviceProfileName": "service proile name"
    }
  ]
}
```

4. Get `{{ .EVENT_TOPIC_STRING }}` for subscribing to all devices' events under same application

Call

```shell
curl -X GET --header 'Accept: application/json' --header 'Grpc-Metadata-Authorization: Bearer {{ .SUPERNODE_JWT }}' 'https://{{ .SUPERNODE_URL }}/api/mosquitto-auth/subscribe-application-events?applicationId={{ .APPLICATION_ID }}&organizationId={{ .ORG_ID }}'
```

Response

```json
{
  "topic": "Topic for subscribing to application {{ .APPLICATION_ID }}: 'application/{{ .APPLICATION_ID }}/device/+/event/+'"
}
```

5. Get `{{ .EVENT_TOPIC_STRING }}` for subscribing to events with given {{ .DEV_EUI }} and {{ .ORG_ID }}

Call

```shell
curl -X GET --header 'Accept: application/json' --header 'Grpc-Metadata-Authorization: Bearer {{ .SUPERNODE_JWT }}' 'https://{{ .SUPERNODE_URL }}/api/mosquitto-auth/subscribe-device-events?devEui={{ .DEV_EUI }}&organizationId={{ .ORG_ID }}'

```

Response

```json
{
  "topic": [
    "Topic for subscribing to device {{ .DEV_EUI }} on event up: 'application/{{ .APPLICATION_ID }}/device/{{ .DEV_EUI }}/event/up'",
    "Topic for subscribing to device {{ .DEV_EUI }} on event join: 'application/{{ .APPLICATION_ID }}/device/{{ .DEV_EUI }}/event/join'",
    "Topic for subscribing to device {{ .DEV_EUI }} on event ack: 'application/{{ .APPLICATION_ID }}/device/{{ .DEV_EUI }}/event/ack'",
    "Topic for subscribing to device {{ .DEV_EUI }} on event error: 'application/{{ .APPLICATION_ID }}/device/{{ .DEV_EUI }}/event/error'",
    "Topic for subscribing to device {{ .DEV_EUI }} on event status: 'application/{{ .APPLICATION_ID }}/device/{{ .DEV_EUI }}/event/status'",
    "Topic for subscribing to device {{ .DEV_EUI }} on event location: 'application/{{ .APPLICATION_ID }}/device/{{ .DEV_EUI }}/event/location'",
    "Topic for subscribing to device {{ .DEV_EUI }} on event txack: 'application/{{ .APPLICATION_ID }}/device/{{ .DEV_EUI }}/event/txack'",
    "Topic for subscribing to device {{ .DEV_EUI }} on all events: 'application/{{ .APPLICATION_ID }}/device/{{ .DEV_EUI }}/event/+'"
  ]
}
```

### How to get `{{ .USER_MQTT_AUTH_JWT }}`

Call

```shell
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'Grpc-Metadata-Authorization: Bearer {{ .SUPERNODE_JWT }}' -d '{ "organizationId": "{{ .ORG_ID }}"}' 'https://{{ .SUPERNODE_URL }}/api/mosquitto-auth/login'
```

Response

```json
{
  "jwtMqttAuth": "{{ .USER_MQTT_AUTH_JWT }}"
}
```

## Publishing

A template of publishing with mosquitto_pub looks as this:

```shell
mosquitto_pub -h {{ .SUPERNODE_URL }} -p 8883 -u '{{ .USER_MQTT_AUTH_JWT }}' -P 'default' -i '`hostname`-$$' -t '{{ .COMMAND_TOPIC_STRING }}' -m '{{ .MESSAGE }}' --capath /etc/ssl/certs 

```

### How to get `{{ .COMMAND_TOPIC_STRING }}`

Call

```shell
curl -X GET --header 'Accept: application/json' --header 'Grpc-Metadata-Authorization: Bearer {{ .SUPERNODE_JWT }}' 'https://{{ .SUPERNODE_URL }}/api/mosquitto-auth/send-command?devEui={{ .DEV_EUI }}&organizationId={{ .ORG_ID }}'
```

Response

```json
{
  "topic": "Topic for publishing to device {{ .DEV_EUI }}: 'application/{{ .APPLICATION_ID }}/device/{{ .DEV_EUI }}/command/down'"
}
```

### How to get `{{ .MESSAGE }}`

The message format should be as follow:

```json
{
  "confirmed": true,
  "fPort": 10,
  "data": "....",
  "object": {
    "temperatureSensor": {
      "1": 25
    },
    "humiditySensor": {
      "1": 32
    }
  }
}
```

- `confirmed`: whether the payload must be sent as confirmed data down or not
- `fPort`: FPort to use (must be > 0)
- `data`: base64 encoded data (plaintext, will be encrypted by Network Server)
- `object`: decoded object (when application codec has been configured), when providing the 'object', you can omit ' data'
