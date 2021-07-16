---
sidebar_position: 5
---

# Troubleshooting
Experiencing a problem with your M2 Pro? This tutorial will help you find it. Naturally you can also ask for help in one of our communities, or reach out for manufacturer support by writing [support@matchx.io](mailto:support@matchx.io).

## Connectivity (uptime)
If your uptime is taking a hit, there's an easy way to find out if the miner is at fault, or your local network connection. To do that follow the following steps:
### 1. Access the M2 Pro Miner web interface 
You can find the interface here: `http://yourSerialNumber.local`
  * Your computer or phone must be on the same network as the M2 Pro Miner
  * This URL works only on iOS, Win10 and Linux. It doesn't work on Android.
```
Username: admin
Password: your serial number using all caps
```



### 2. View the miner logs:
1. After logging in, you can view or download your logs by clicking on `SysLog` in the menu
   ![log file structure](/img/troubleshooting/sysLog.png)
   * If you're having an ongoing issue, you may want to download your logs regularly. The miner can only store logs for the past 48 hours, so if additional troubleshooting is needed, you should download your logs once every two days.
### 3. Reading the logs   

First step is to check if offline is happening due to failed heartbeat. Use the search/find function (ctl+f, cmd+f) and type in the word failure to see any failed heartbeat.
    
This is the example of a successful heartbeat session.
  ```
  Jun 29 04:58:09 M2XLCTRM3ZW daemon.info gwconfd[619]: Received hb response: fw  conf
  ```
Here is an example of a failed heartbeat session. 

```
Jun 29 04:56:07 M2XLCTRM3ZW daemon.err gwconfd[619]: Heartbeat api failure:4: Deadline Exceeded
```
A failed heartbeat can happen due to many reason but the most common reason is an unstable network connection. To rule this out, you need to check if the internet connection is good. 

These are the list of common errors which indicates unstable, loss or bad internet connection.
1. Connectivity error from network issue
```
Jun 24 06:49:53 M2XLCTRM3ZW daemon.err tlsDaemon[606]: Setup TLS error: TCP Connection error.
```

2. Unstable/dropping WiFi connection
```
Jun 17 07:25:29 M2XLCTRM3ZW user.info kernel: CFG80211-ERROR) wl_is_linkdown : Link down Reason : WLC_E_LINK
```
3. Internet connection loss 
```
Jun 13 15:05:50 M2XLCTRM3ZW daemon.info netMgmtDaemon[614]: Internet connection loss
```

In most cases, the issue is related to unstable internet connection at user's end and the miner is working fine (not a hardware issue).

To isolate this further,  you can try the following:
* If the miner is connected using wireless connection – try using wired connection.
* If wired connection is not possible – move the miner closer to the router as see if the uptime improves
* If both still not solving the issue - try putting the miner on a different network (such as, at friend's home). If the miner is working fine on another network, the issue is related to your home network connection.

### 4. Checking LoRa Connectivity [in the LoRa Log menu option]
For LoRa, when you see that a miner is offline you can check on the Last Seen. This is pretty straight forward as you just need to search these two lines. If you get PUSH_ACK, that means it is fine.
```
[2021-06-17 08:58:48.437] [loraMgmtDaemon] [info] INFO: [up] PUSH_ACK received in 43 ms
```
This message is sent every 30 seconds.

