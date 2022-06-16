---
title: Integration - Datacake
sidebar_label: Integration - Datacake
sidebar_position: 3
---

## Overview

Datacake is an IoT platform that helps the user to create custom IoT applications.

https://datacake.co/

We use the MQTT interface to integrate the Datacake with our Supernode. The Uplink data will feed to the Datacake, then they will be decoded and stored at Datacake. With the features of Datacake, the user could visualise their data easily.

![BLOCK_DIAGRAM](/img/datacake/block_diagram.png)



## Prerequisite

1. Created an account on Datacake.

2. Created an account on our Supernode.

3. You have a LoRa device.

4. You are within the range of a LoRaWAN gateway (for example an M2Pro) that is connected to our Supernode.



*The following example is using our US Supernode (ussn.matchx.io). You may change the domain name to the Supernode that suits you.*



## Get the organization ID

You need this ID when getting the MQTT Auth Token.

Login to the Supernode and go to the Gateway page or Device page. Then look at the URL bar of your browser. The number on the URL is the organization ID.

![GET_ORG_ID](/img/datacake/supernode_org_id.png)



## Get the HTTP Auth Token

This is a temporary step to get an Auth Token. After the new Supernode Web UI is released, you can get the Token from the Web UI directly.

The HTTP Auth Token will be used in the next step to get the MQTT Auth Token.

1. Login to the Supernode.

1. Enable the developer tools of your browser.

   For Chrome, click the right menu button, select the "More tools" and then the "Developer tools".

   ![SN_GET_TOKEN_1](/img/datacake/supernode_api_token_1.png)

2. Select the "Network" tool. We need to get the token from the HTTP request.

   Refresh the page and let the tool capture some HTTP traffic.

   Select one of the requests, scroll down and find the "Request Headers".

   You can get the token from the header "Grpc-Metadata-Authorization".

   ![SN_GET_TOKEN_2](/img/datacake/supernode_api_token_2.png)



## Get the MQTT Auth Token

When connecting to the Supernode with MQTT, an Auth Token is needed.



### **Get via command line (curl).**

1. Replace the value of the header "Grpc-Metadata-Authorization" on the following command line with the HTTP Auth Token you got above.

   ```
   curl -X POST --header 'Content-Type: application/json' --header 'Grpc-Metadata-Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' -d '{ "organizationId": "27", "ttlInSeconds": "31557600"}' 'https://ussn.matchx.io/api/mosquitto-auth/login'
   ```

2. Run the command.

   The responses will be like this. The string of the characters is the MQTT Auth Token.

   ```
   {"jwtMqttAuth":"yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"}
   ```

   

<br/>

### **Get via Postman (GUI).**

1. Open an request, and set the URL to ```https://ussn.matchx.io/api/mosquitto-auth/login```. Add the header ```Content-Type``` = ```application/json```.

   ![POSTMAN_MQTT_1](/img/datacake/postman_mqtt_1.png)

4. Set the Authorization Type to Bearer and enter the HTTP Auth Token you got from above.

   ![POSTMAN_MQTT_2](/img/datacake/postman_mqtt_2.png)

5. Set the method to ```POST```, and set a raw body of your login information. The organizationId is the number you got from the Supernode above. The ttlInSeconds is the expiration time, this example is set to 1 year.

   ```{ "organizationId": "27", "ttlInSeconds": "31557600"}```

   Then click the [Send] button to issue the request. You will get the MQTT Auth Token.

   ![POSTMAN_MQTT_3](/img/datacake/postman_mqtt_3.png)



## Create Device profile

The device profile is the LoRaWAN setting of the devices. It is needed when creating a device at Supernode.

1. Login to the Supernode, go to "Devices" page, then "SMB Device Profile" Tab. Click the [Create] button to create a profile.

   ![DEV_PROFILE_1](/img/datacake/supernode_dev_profile_1.png)

2. At the "General" tab, enter the name for the new profile. Select the Network Server (it should only one available). Then select the LoRaWAN MAC Version that matches your device.

   ![DEV_PROFILE_2](/img/datacake/supernode_dev_profile_2.png)

3. Go the the "Join" tab, enable the OTAA. If the device supports OTAA, you should use it. At last, click [Create] button to create the Device Profile.

   ![DEV_PROFILE_3](/img/datacake/supernode_dev_profile_3.png)



## Create Application

One Application on Supernode will map to one Product on Datacake. At Datacake, data decoding is separated by the product. You should group the same (or close similar) type of devices into one Application.

After the Application creation, you will get the Application ID, which is needed for the MQTT topic.

1. At "Device" page, select the "Application" tab and click [Create] button to create an Application.

   ![APPLICATAION_1](/img/datacake/supernode_application_1.png)

2. Enter the name and description for the Application. Then select the "Service Profile". If you cannot see any Service Profile, please contact our support team to help you.

   Click [Create] button to save the settings.

   ![APPLICATAION_2](/img/datacake/supernode_application_2.png)

3. After the Application is created, you can see the Application ID in the Application list.

   ![APPLICATAION_3](/img/datacake/supernode_application_3.png)



## Create Datacake Device

1. Login to Datacake and go to "Devices" page. Click the [Add Device] button to create a device.

   ![DC_ADD_DEV_1](/img/datacake/datacake_add_dev_1.png)

2. Select the type as "API" and select "New Product". When you create an additional device of the same type next time, select the "Existing Product".

   Give a name for the Product, and click [Next] button.

   ![DC_ADD_DEV_2](/img/datacake/datacake_add_dev_2.png)

3. Enter the device name and click [Next] button.

   ![DC_ADD_DEV_3](/img/datacake/datacake_add_dev_3.png)

4. Select the Datacake service plan. Click [Add device] button to finish the creation.

   ![DC_ADD_DEV_4](/img/datacake/datacake_add_dev_4.png)

5. Go to the newly created device page, and you will see the "Serial Number" of this device. You need this as the device name on Supernode.

   ![DC_ADD_DEV_5](/img/datacake/datacake_add_dev_5.png)



## Create Supernode Device

1. Login to the Supernode, go to the "Devices" page and "Applications" Tab. Click the [Add Device] button to create a device.

   ![SN_ADD_DEV_1](/img/datacake/supernode_add_device_1.png)

2. Select the "Application" and "Device Profile" you created above.

   Enter the Device EUI, you should find it on your device (normally on a label).

   Copy the "Serial Number" from the Datacake device and paste it as the "Device Name" here.

   Enter the "Device Description", we suggested using the Datacake device name for easier reference in the future.

   Click the [Create] button.

   ![SN_ADD_DEV_2](/img/datacake/supernode_add_device_2.png)

3. For LoRaWAN 1.0.x OTAA, you need an AppKey (called NwkKey on 1.1).  Same as the Device EUI, you should find it on your device.

   Click [Update] button, then the device will be created.

   ![SN_ADD_DEV_3](/img/datacake/supernode_add_device_3.png)

4. Back to the "Application" Tab, click the application to show the devices list.

   ![SN_ADD_DEV_4](/img/datacake/supernode_add_device_4.png)

5. Click the newly created device to show its detail.

   ![SN_ADD_DEV_5](/img/datacake/supernode_add_device_5.png)

6. Go to the "LoRaWAN Frames" Tab to check the frame received.

   Power up (or reset) your device to kick start the OTAA process.

   You should see a "JoinRequest" frame sent from the device.

   If the Key is correct, Supernode will send back a "JoinAccept" to the device.

   After that, there will be some data frames sent from the device. If you got this, you are ready to decode them at Datacake.

   ![SN_ADD_DEV_6](/img/datacake/supernode_add_device_6.png)



## Setup MQTT at Datacake

1. Go to the device page at Datacake and switch to the "Configuration" tab.

   ![SETUP_MQTT_1](/img/datacake/datacake_mqtt_1.png)

2. Scroll down to the "MQTT Configuration" panel. Click the [Add new MQTT server] button to add our Supernode to Datacake.

   For the next device on the same Supernode, you just need to select the MQTT server from the list.

   ![SETUP_MQTT_2](/img/datacake/datacake_mqtt_2.png)

3. Select the "Protocol" as "MQTTS".

   Enter the Supernode domain to "Hostname" and set the "Port" as ```8883```.

   Select "SSL/TLS Mode" as "CA signed server certification".

   Enter the MQTT Auth Token you got from above to the "Username" field.

   Enter ```default``` to the "Password" field.

   Click [Test Connection] to check the settings are good. You will see the result in the upper right message box.

   Click [Add MQTT Server] to save the settings.

   ![SETUP_MQTT_3](/img/datacake/datacake_mqtt_3.png)

4. At the "MQTT Configuration" panel, click [Add Uplink Decoder].

   ![SETUP_MQTT_4](/img/datacake/datacake_mqtt_4.png)

5. In the following string, replace the ```YOUR_APP_ID``` to the Application ID you got from above. Then set it to the MQTT topic.

   ```application/YOUR_APP_ID/device/+/event/+```

   If you are using the MatchX LoRa Device, copy the content of our generic uplink decoder to the "Decoder function". For other devices, you may modify the raw data decoder to fit it.

   [MatchX Generic Uplink Decoder](/text/datacake/matchx_generic_uplink.txt)

   [Raw Data Only Uplink Decoder](/text/datacake/rawdata_only_uplink.txt)

   Click the [Add uplink decoder]  button to save the configuration.

   ![SETUP_MQTT_5](/img/datacake/datacake_mqtt_5.png)

6. At the "MQTT Configuration", check the MQTT Server and MQTT Uplink decoder is selected.

   Click the [Save] button to save the configuration.

   ![SETUP_MQTT_6](/img/datacake/datacake_mqtt_6.png)

7. Go to the "Integration" page. You should see the new MQTT server on the list.

   Wait for the server status to be changed to "Connected". You may need to refresh this page to get it updated.

   ![SETUP_MQTT_7](/img/datacake/datacake_mqtt_7.png)

   ![SETUP_MQTT_8](/img/datacake/datacake_mqtt_8.png)



## Setup MatchX Analog Shield (Data fields)

We show you here to set up our Analog Shield at Datacake. The data from the decoder is a list of data (pair of field and value). The Datacake store the values to the device fields with the same "Identifier" (in all upper case).

For other devices, you need to adjust the decoder and fields.

1. Go to the device page at Datacake and switch to the "Configuration" tab. Scroll down to the "MQTT Configuration" panel.

   You should see the "LAST DATA" has been updated. If not, double-check the MQTT setting.

   Click the icon button to check the MQTT message received.

   ![ANA_DECODE_1](/img/datacake/analogshield_decode_1.png)

2. At the latest "up" message, copy the "PAYLOAD". We will use it to test the decoder.

   Click the upper-right cross button to close the list.

   ![ANA_DECODE_2](/img/datacake/analogshield_decode_2.png)

3. At the "MQTT Configuration" panel, click the Menu button of the MQTT topic and click "Edit Decoder".

   ![ANA_DECODE_3](/img/datacake/analogshield_decode_3.png)

4. At the decoder dialog, click the [Show] button to expand the "Try decoder function".

   ![ANA_DECODE_4](/img/datacake/analogshield_decode_4.png)

5. Paste the copied "PAYLOAD" to the "Payload" field.

   Click the [Try decoder function] to decode the payload.

   ![ANA_DECODE_5](/img/datacake/analogshield_decode_5.png)

6. If successful, you can see a list of paired fields and values. That is the data decoded from the LoRa payload, which means the data sent by the device.

   Click the upper-right cross button to close the dialog.

   ![ANA_DECODE_6](/img/datacake/analogshield_decode_6.png)

7. Now, we can add fields to the device. So the decoded values will be stored at Datacake.

   Click the [Add Field] at the "Fields" Panel.

   ![ANA_DECODE_7](/img/datacake/analogshield_decode_7.png)

8. Setup a field for Device EUI (the unique LoRaWAN device id). It is the basic field of the device and you need it when sending data (Downlink).

   ![ANA_DECODE_8](/img/datacake/analogshield_decode_8.png)

9. Setup fields for raw data. These two are optional, but it is good for debugging.

   ![ANA_DECODE_9](/img/datacake/analogshield_decode_9.png)

   ![ANA_DECODE_10](/img/datacake/analogshield_decode_10.png)

10. Setup fields for the data of MatchX Analog Shield. For other devices, you will have a different set of fields.

    ![ANA_DECODE_11](/img/datacake/analogshield_decode_11.png)

    ![ANA_DECODE_12](/img/datacake/analogshield_decode_12.png)

    ![ANA_DECODE_13](/img/datacake/analogshield_decode_13.png)

    ![ANA_DECODE_14](/img/datacake/analogshield_decode_14.png)

    ![ANA_DECODE_15](/img/datacake/analogshield_decode_15.png)

    ![ANA_DECODE_16](/img/datacake/analogshield_decode_16.png)

11. After all fields are added, wait for a while at the "Fields" panel. You will see the values being updated.

    ![ANA_DECODE_17](/img/datacake/analogshield_decode_17.png)

12. Here is the table to map the hardware signal of the Analog Shield and the decoded fields.

    | Field     | Hardware Signal |
    | --------- | --------------- |
    | voltage0  | AIN1            |
    | voltatge1 | AIN2            |
    | digital0  | DIN1            |
    | digital1  | DIN2            |
    | digital2  | Current DOUT1   |

    

13. To make the AIN1&2 show meaningful value, you could add a mapping field to achieve it.

    Click the menu button on the right of the field, then select "Add Mapping Field".

    ![ANA_DECODE_18](/img/datacake/analogshield_decode_18.png)

14. Here, we show an example to convert the voltage to current, with the onboard 240Ω resistor.

    ![ANA_DECODE_19](/img/datacake/analogshield_decode_19.png)

15. Wait for a while for the next data, you will see the converted result.

    ![ANA_DECODE_20](/img/datacake/analogshield_decode_20.png)



## Setup MatchX Analog Shield (Downlinks)

1. Go to the device page at Datacake and switch to the "Configuration" tab. Scroll down to the "Fields" panel. Then add a field for controlling the DOUT1.

   ![ANA_ENCODE_1](/img/datacake/analogshield_encode_1.png)

2. Switch to the "Downlinks" tab. Click the [Add Downlink] button.

   ![ANA_ENCODE_2](/img/datacake/analogshield_encode_2.png)

3. Enter the name and description.

   Select the new added field "control0" and "digital2".

   Mark the "Trigger on measurement" checkbox.

   Copy the content of the following file to the "Payload encoder".

   [Analog Shield Downlink](/text/datacake/matchx_analog-shield_downlink.txt)

   Modify the application ID to the one you got above.

   Click the [Add downlink] button to save the Downlink.

   ![ANA_ENCODE_3](/img/datacake/analogshield_encode_3.png)

4. Clink the [Configure and send downlink] button to test the created Downlink.

   ![ANA_ENCODE_4](/img/datacake/analogshield_encode_4.png)

5. Mark the "control0" checkbox and click the [Save & send downlink] button.

   After that, the downlink will enqueue to Supernode.

   ![ANA_ENCODE_5](/img/datacake/analogshield_encode_5.png)

6. You can check the queue on Supernode.

   ![ANA_ENCODE_6](/img/datacake/analogshield_encode_6.png)

7. Wait for the downlink to be sent to the device. The DOUT1 of the Analog Shield will change.



## Setup MatchX Analog Shield (Dashboard)

The dashboard is the place to visualise your data. Here is an example of our Analog Shield.

1. Go to the device page at Datacake and switch to the "Dashboard" tab.

   Click the most right switch to enter edit mode. 

   Click the [Add Widget] button to add the first widget.

   ![ANA_DASHBOARD_1](/img/datacake/analogshield_dashboard_1.png)

2. Select the "Value" type. This will show a single value of the device.

   ![ANA_DASHBOARD_2](/img/datacake/analogshield_dashboard_2.png)

3. At the "Edit Value Widget" dialog, select the "Data" Tab.

   Select the "Field" as "devEUI". We want to show the Device EUI on the dashboard for reference.

   ![ANA_DASHBOARD_3](/img/datacake/analogshield_dashboard_3.png)

4. Switch to the "Basics" tab, enter the title for this widget.

   Click the [Save] button.

   ![ANA_DASHBOARD_4](/img/datacake/analogshield_dashboard_4.png)

5. You can see the newly created widget on the dashboard.

   ![ANA_DASHBOARD_5](/img/datacake/analogshield_dashboard_5.png)

6. Click the [Add Widget] button to add a Chart Widget. This one will show the reported battery level of the device.

   At the "Data" tab, select the "Field" as "batteryLevel". Select the "Line Chart".

   ![ANA_DASHBOARD_6](/img/datacake/analogshield_dashboard_6.png)

7. At the "Axes" tab, set the "Domain From" to 2 and "Domain To" to 5. This will fix the y-axis from 2 to 5.

   ![ANA_DASHBOARD_7](/img/datacake/analogshield_dashboard_7.png)

8. At the "Timeframe" Tab, select the "Week". This will show you the data from now to the past 7 days (week).

   ![ANA_DASHBOARD_8](/img/datacake/analogshield_dashboard_8.png)

9. At the "Reference Lines" Tab, add two reference lines for battery "Full" and "Low".

   ![ANA_DASHBOARD_9](/img/datacake/analogshield_dashboard_9.png)

10. Back to the "Basics" tab, enter the title for this widget and click the [Save] button.

    ![ANA_DASHBOARD_10](/img/datacake/analogshield_dashboard_10.png)

11. Click the [Add Widget] button to add a Switch Widget. This one will use to control the DOUT1 of the Analog Shield.

    Enter the title, select the "Field" as "control0".

    Click the [Save] button.

    ![ANA_DASHBOARD_11](/img/datacake/analogshield_dashboard_11.png)

12. Click the [Add Widget] button to add a Boolean Widget. This one will show the reported DOUT1 status.

    At the "Data" tab, select the "Field" as "digital2".

    At the "Basics" tab, enter the title and click the [Save] button to finish.

    ![ANA_DASHBOARD_12](/img/datacake/analogshield_dashboard_12.png)

    ![ANA_DASHBOARD_13](/img/datacake/analogshield_dashboard_13.png)

13. Continue adding the widgets that fit your need.

    At last, click the most right switch to end the edit mode. 

    ![ANA_DASHBOARD_14](/img/datacake/analogshield_dashboard_14.png)

15. Wait for a while and you can see data will update on the Dashboard.

    ![ANA_DASHBOARD_15](/img/datacake/analogshield_dashboard_15.png)



## Decoder for 3rd party devices



### Oyster LoRaWAN GPS Tracker

[Uplink Decoder](/text/datacake/oyster_lorawan_uplink.txt)
