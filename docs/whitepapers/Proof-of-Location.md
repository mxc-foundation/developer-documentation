---
title: Proof-of-Reality
sidebar_position: 3
---

# Proof-of-Reality

## Table of Contents

- [Proof of Reality](#Proof-of-Reality)
    - [1. Definition](#1-Definition)
    - [2. Design Aims](#2-Design-Aims)
        - [2.1 location](#21-location)
        - [2.2 Physical existence](#22-Physical-existence)
    - [3. Existence Proof of Miner](#3-Existence-Proof-of-Miner)
    - [4. trustworthy of miner](#4-trustworthy-of-miner)
    - [5. GPS validation](#5-gps-validation)
    - [6. Miner Peer Listening](#6-Miner-Peer-Listening)
    - [7. IP address](#7-ip-address)
    - [8. device messages data](#8-device-messages-data)
    - [9. Miner health metrics and its corresponding scores](#9-Miner-health-metrics-and-its-corresponding-scores)
        - [9.1 Fuel](#91-fuel)
        - [9.2 uptime](#92-uptime)
        - [9.3 GPS Signal](#93-GPS-Signal)
        - [9.4 Orientation](#94-Orientation)
        - [9.5 Proximity](#95-Proximity)
        - [9.6 Altitude](#96-Altitude)
        - [9.7 Summary](#97-Summary)
    - [10. penalties](#10-penalties)
    - [11. Synchronization of miners in network](#11-Synchronization-of-miners-in-network)
    - [12. Localization algorithms](#12-Localization-algorithms)
        - [12.1 localization through triangulation](#121-localization-through-triangulation)
        - [12.2 localization through Trilateration for m3 lite](#122-localization-through-Trilateration-for-m3-lite)
    - [13. third party application](#13-third-party-application)
        - [13.1 trustworthy localization](#131-trustworthy-localization)
        - [13.2 advantages of LPWAN against peer communications](#132-advantages-of-lpwan-against-peer-communications)

mxc controller before 10 point
for point 5 we neeed to talk about design of existence of also the tags, need to talk about the penalty if miner or tag is fake
in chapter 1 talk about the problems of synchronization point 8.
chapter 8 talk about the idea with m3 lite. a new layer of trust through the triangulation of m3 lite through m2 pro.
active tag electricity powered tag
point 10 with mxc controller


## 1. Definition
Proof of Reality is an upgrade of proof of location. 
In Proof of Reality we overcome the disadvantage of Proof of 
location which only determines the location of said object.
one of these disadvantage for example is the location can be faked by GPS spoofing.
on the other hand, Proof of Reality proves the physical existence of the object 
and also triangulate the location of the object.
so Proof of Reality provides two things:
* location of item
* physical existence of the item

## 2. Design Aims
### 2.1 location
A location is a rare resource that needs to be calculated by radio signals. 
Currently, there are three methods to calculate a location.
* First is a GPS signal, which only works outdoors, and can easily be tampered with as GPS radios can be emulated by software to fake a location. 
* Secondly, IP address calculations, this is a database technology that relies on the accuracy of the data input about a certain IP address, and often a VPN service can get a new IP for you to fake a location. 
* Thirdly, a Bluetooth-based location tracking, companies such as Apple are using it. it is hard or nearly impossible to fake the Bluetooth receiver that is held by the general public, as they pass by the Bluetooth tags and tell the network the exact location of the object in a decentralized approach.

MXProtocol designs the Proof of Reality to solve the problem that Bluetooth often
fails to solve – distance. While Bluetooth only reaches 100-200 meters, MXC miners
can reach 1-40km to determine the location of the object in a decentralized way, as
the miners are held by different users.

Proof of Reality has a localization algorithm that utilizes LPWAN uplink data with timestamps to triangulate the location of LPWAN sensors and M2 Pro miners. 
In order to triangulate the sensors, the algorithms first confirm the location of the miners with the downlinks they sent to the sensors. 
With regular downlink peer listenings, the algorithm is able to filter out the tampered miner locations as they can’t be heard by peer M2 Pro miners. 
Those miner locations are confirmed by the Proof of Reality and then can respond to the uplink request for location services.

![Proof of reality design for location](/img/POL/img1.JPG)

In the figure above, we can see how a sensor NFT’s Proof of reality works. 
* First of all, the sensor sends data that can be picked up by the miners as usual. Each data packet will be time stamped in the miner with precise time of arrival; this feature is executed by the hardware chip inside the M2 Pro miners. The third party miners won’t be able to provide this service due to the hardware limits. 
* Next, the MXC Controller needs to rule out the tampered locations of the miners or inaccurate ones with bias and peer Proof of Reality data, if the miner is not physically located there or always changes locations, the Proof of Reality can easily exclude this kind of data. Time difference of arrival (TDOA) based on location requires at least 3 miners with valid locations to calculate; the more miners present, the more accurate the location data will be.

All the miners that can provide Proof of Reality will be able to validate more MXC results than the third party miners.

### 2.2 Physical existence
In order to determine the correct existence of the object concerned. The miner has a score according to the miner health.
the miner health is an indication of the validity of the miner. in addition, we need to have a very accurate result 
which has minimum error when locating the miner.
in order to reach this accuracy we determined that a synchronization of nanosecond timestamp is required.
methods like GPS helps us synchronize the miners. then the item using the network can be quickly located 
by triangulation or Trilateration algorithms.


## . MXC Controller
There are lists of services that LPWAN can provide to the sensors/end devices. 
For example, an over-the-air firmware update should be multi-casted to the sensors and calculate the position, which requires no computation for the resource-limited sensors.
Such a service requires resources of both a miner and the Supernode. 
Hence, MXC Controller will specify whether it is willing to pay for the service and its accuracy.
The more gateways that receive the packets, the more accurate the position will be.
In addition to this, data NFTs can also facilitate data transactions and would need a service to provision and provide the NFT to the blockchain. 
MXC Controller is designed to bridge the users and supernode/miners for NFT provisioning services.
Through the MXC Controller design, it is possible that the sensors/end devices pay 1 USD for lifetime free usage of the network, while choosing the available services to subscribe or pay. The outcome of the design will be as follows:
* Some sensors/end devices get the services and the resources that they demand through auction.
* Network deployments receive a compensation by offering services and resources to the LPWAN sensors/end devices.
* All the monetary transactions are done automatically in MXC/BTC/DOT without human intervention

## 3. Existence Proof of Miner
As a decentralized network we do not want a trusted 3rd party to proof that our community miners exist, because this 
defeats the idea of decentralization. to further explain a GPS location can be faked from a  device that emulates the
miner. however this fake device does not contain MXC tokens.
Since the blockchain is secured and can be tracked by the community, We had the brilliant idea that the Miner can hold
Cryptocurrencies AKA Miner Fuel to proof that the miner exist in the network since it exist in the blockchain.

(add picture ????)
(picture of miner network parallel to it a picture of blockchain network)

so the proof of stacking in Miner helps in proving the existence of the miner.
the more the miner stack the more trustworthy the miner is. this is one aspect of miner health.

## 4. trustworthy of miner
We are building this network so 3rd party businesses can utilize it. naturally these businesses would prefer to use
nodes (miners) that are functional and trustworthy. 
One of the main reasons we introduced miner health is to proof that the miner physically exist and the more
percentage a miner has the more trustworthy the miner is.
a miner is trustworthy when the following metrics are accurate:
* GPS Location of miner (excluding for m3 lite miners)
  * Time Difference of Arrival (TDoA) with another device with known location.
  * comparison of Multilateration or triangulation equation output with device known location.
* Miner peer listening
  * Miners in surrounding area
* the IP address of the miner
  * constant IP address
* Device messages Data
  * 3rd party devices connected to your miner 
* Miner Health metrics
  * Fuel
  * Uptime
  * GPS Signal
  * Orientation
  * Proximity
  * Altitude

each of this metrics will have a score:

| metric               | score name         | score | score present as      |
|----------------------|--------------------|-------|-----------------------|
| GPS validation       | anti-spoof score   | 1     | Trusted or Fake       |
| Miner peer listening | family score       | 5     | integer 5             |
| IP address           | Relic score        | 30    | percentage out of 30  |
| Device messages Data | popularity score   | 100%  | percentage            |
| Miner Health metrics | Reliability score  | 200   | percentage out of 200 |

So as follows proof of stack through blockchain proofs the validity of the above-mentioned metrics.
when these metrics are trustworthy and accurate then the physical existence of the miner is proved and the location
of the miner is validated. thus proof of Reality achieved.

with the help of the valid information of the location of the miner and its physical existence. we can now
locate items that is utilizing the network. through triangulation algorithms using timestamps and gps location or
through Trilateration algorithms using ip addresses and peer miner listening information.

since the miner has proof of reality and the item in the network is validated through said miner.
therefore the item itself will be proved to exist by getting its location, and it exists physically because it holds 
MXC tokens.
therefore the item itself achieved proof of reality

## 5. GPS validation
With good programming and hardware skills hackers can spoof GPS location. We can counter that by simply testing the TDoA of each miner to a
device with predefined location.
* each Miner will provide a TDoA to locate a device.
* device will send an encrypted code that will make the Miner send the TDoA.
* Miner will send a package data with TDoA value to the device.
* As the position of the device is known it should calculate the expected TDoA.
* if the TDoA received from the Miner is different from the TDoA calculated, flag this miner that it spoof its location
* also the resulted calculation from the triangulation algorithm will be deviate from expected result.

another method is to use mobile device connected to the miner through the data dash application
* if the location of the miner and mobile device are close to each other in regard to GPS then Miner location can be valid

in this regard a score of True (1) or False (0) will be given to the score. 
* True as trusted
* False as fake

## 6. Miner Peer Listening
We have created a system where we have a mapper that divide the space into hexagons. each hexagon can accommodate upto 5 Miners.
more miners can exist in the hexagon but the systems does not require that.
the score is simple:
* we count the number of miners in the hexagon upto 5 this is our score
When the hexagon is full this is an indication that the communication between the miners is reliable and strong creating a family. 
therefore named family score.

## 7. IP address
constant IP address is an indication that the miner does not use VPN or keeps on changing location.
the longer the miner holds onto the same IP address more stoic, rigid, eternal and immutable.
The relic score is calculated by the number of days the IP address of miner did not change:
* if miners has same IP address for 15 days then it has a score of 15
* if miners has same IP address for 30 days then it has a score of 30

additionally we can utilize IP address to verify position of miner using mobile device.
since both miner and mobile device are connected through the data dash application.
if both of them are utilizing the same network and comparing the GPS location of mobile device with registered location
of the Miner then we can consider the location of the miner to be valid

## 8. device messages data
going back to the hexagon system. it was told that it can hold upto 5 miners. however the number of devices connected
to the miners existing in the hexagon is not limited. it depends on the amount of data and speed of LORAWAN of sender and 
receiver.
theoretically the Miner can handle 16 packets of 50 kilobyte of data. some packets can be larger than 50 kilobytes so the
miner handles fewer packets. on the other hand, the opposite can occur therefore the miner can handle more data packets.

the score will be a graph of average utilization per hour in a 24-hour period.

the popularity percentage score depends on the data bandwidth consumed will be divided into three categories.
- under utilized between 0% to 33.3% which is not reliable
- optimum between 33.3% to 66.6% with 50% is the most optimum
- crowded between 66.6% to 100% which is bad and crowded

here is an example

| 00| 01| 02| 03| 04| 05| 06| 07| 08| 09| 10| 11| 12| 13| 14| 15| 16| 17| 18| 19| 20| 21| 22| 23| 24|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|10%|05%|02%|00%|00%|00%|05%|10%|20%|40%|50%|70%|80%|85%|75%|60%|75%|80%|83%|77%|60%|40%|30%|20%|10%|

so the score will be the mean of all previous calculated mean utilization of this hour.

## 9. Miner health metrics and its corresponding scores
The miner health has a percentage score that influences the daily rate it mines
for cryptocurrency. however this score is not the trustworthy score that
will be used by 3rd party businesses.
the weighted trustworthy score also uses the same metrics in the miner health:
* Fuel (Live)
* Uptime (Live)
* GPS Signal
* Orientation
* Proximity
* Altitude


for more information about the definition of these metrics please go [here](../docs/tutorials/m2-pro/miner-health.mdx).
each metric will have a different score. in total the score will be 200.

### 9.1 Fuel
The Fuel refers to the Cryptocurrency stacked in the tank.
* if the tank has 100 tokens and the tank capacity is 100. then this miner Fuel score is 100%
* if the tank has  0  tokens and the tank capacity is 100. then this miner Fuel score is 0%
* if the tank has  200  tokens and the tank capacity is 100. then this miner Fuel score is still 100%
 however the trustworthy score will be more.

having 0% tokens gives you -10 points trustworthy
having 100% tokens gives you 0 points trustworthy
having 200% tokens gives you +10 points trustworthy

### 9.2 Uptime
Naturally when a 3rd party is using your services they want that service
to be running 24 hrs every day. if the miner went down it will affect the quality
of the service.

if the miner was up for the last 7 days it will get a score of +50 trustworthy
if it was up for 5 days it will get 0 trustworthy
if it was down for 7 days it will get -50 trustworthy

the equation for calculating uptime score is 
2.1428571428571 x^2 - 0.71428571428571 x - 50

### 9.3 GPS Signal
if the GPS signal of the miner is not strong 3rd parties will not be able to
use the miner. to locate their items using network you need strong signals from 
nodes to triangulate the location of the item. therefore the GPS signal score is also 50.

theory; if the GPS location and the peer miner communication has a huge error
the less score you have. the less the error the more score you have

delta error is 20 m

if error is 0 m trustworthy score is + 50
if error is 2 m trustworthy score is 0
if error is 20 m trustworthy score is -50

the equation for calculating GPS signal score is
1.1111111111111 x^2 - 27.222222222222 |x| + 50

### 9.4 Orientation
naturally the service user would prefer that the miner covers the largest area possible so their business
would have an extended range.

theory; if the Miner is tilted then the area covered is less.

if the miner is orientation miner health percentage is 7% it will have a score of +50
if the miner is  orientation miner health percentage is 6.2% it will have a score of 0
if the miner is mounted horizontally or orientation miner health percentage is 0% it will have -50 score

the equation for calculating the orientation score is
0.048611111111111 x^2 - 5.4861111111111 |x| + 50

### 9.5 Proximity
unlike the effect the proximity has on miner health. the more miners are in the 
surroundings the more trustworthy score the miner has. due to the validity of peer miner
communication

if miner proximity metric in miner health is 0 percent the trustworthy score is +20
if miner proximity metric in miner health is 3.5 percent the trustworthy score is +10
if miner proximity metric in miner health is 7 percent the trustworthy score is 0

the equation for calculating the Proximity score is
- 2.8571428571429 x + 20

### 9.6 Altitude
the high altitude of the miner influence its connectivity with other items in the network

if miner Altitude metric in miner health is 5 percent the trustworthy score is +20
if miner Altitude metric in miner health is 2.5 percent the trustworthy score is +10
if miner Altitude metric in miner health is 0 percent the trustworthy score is 0

the equation for calculating the Altitude score is
4 x

### 9.7 Summary
for a total score of 200 the scores are divided as follows.
* 10 p Fuel
* 50 p Uptime
* 50 p GPS Signal
* 50 p Orientation
* 20 p Proximity
* 20 p Altitude

| metric       | best case                  | neutral case               | worst case                                      |
|--------------|----------------------------|----------------------------|-------------------------------------------------|
| Fuel         | +10 P 200% capacity        | 0 P 100% capacity          | -10 P 0% capacity                               |
| Uptime       | +50 P 7 days uptime        | 0 p 5 days uptime          | -50 P 0 days uptime                             |
| GPS Signal   | +50 p error = 0 m          | 0 p error = 2 m            | -50 p error >= 20 m                             |
| Orientation  | +50 p 7% Orientation score | 0 p 6.2% Orientation score | -50 p horizontal mount or 0% Orientation score  |
| Proximity    | +20 p 0% proximity score   | +10 p 3.5% proximity score | 0 p 7% proximity score                          |
| Altitude     | +20 p 5% Altitude score    | +10 p 2.5% Altitude score  | 0 p 0% Altitude score                           |

the higher the trustworthy score of the miner the stronger the proof of reality of the miner.
in addition, the more valid are the following metrics:
* GPS Location of miner (excluding for m3 lite miners)
* Timestamp
* authenticity of information gathered from Miner peer listening
* the IP address of the miner
* Device messages
* information package held within miner

through these metrics we can locate the position of any item in the network and proof its reality too.
we need special algorithms in order to locate these data

## 10. penalties
The previous scores are either an indication for User about the mining rate of the miner or the reliability and availability of
miner for 3rd party users.
We need to create protection for the system.
a common term for that is slashing. in the following table we will discuss the causes of penalties

| Cause                                                            | action                                                                     | penalty                                                                                                                 | slash score                                    | How to avoid                                                                                     |
|------------------------------------------------------------------|----------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|------------------------------------------------|--------------------------------------------------------------------------------------------------|
| Faking miner location                                            | All Miners owned will be Locked                                            | Lose all Crypto connected to Miner and banned from Blockchain                                                           | 100                                            | do not fake miner location                                                                       |
| miner is down more than 7 days and is still registered in mapper | notification will be sent to owner profile in application and through mail | no benefits from mining or 3rd party using miner as gateway for the same amount of days the miner was down after 7 days | 5                                              | always try to keep miner on. if not possible notify the customer support or unregister the miner |
| GPS Signal                                                       | +50 p error = 0 m                                                          | 0 p error = 2 m                                                                                                         | -50 p error >= 20 m                            |                                                                                                  |
| Orientation                                                      | +50 p 7% Orientation score                                                 | 0 p 6.2% Orientation score                                                                                              | -50 p horizontal mount or 0% Orientation score |
| Proximity                                                        | +20 p 0% proximity score                                                   | +10 p 3.5% proximity score                                                                                              | 0 p 7% proximity score                         |
| Altitude                                                         | +20 p 5% Altitude score                                                    | +10 p 2.5% Altitude score                                                                                               | 0 p 0% Altitude score                          |

## 11. Synchronization of miners in network
for miners other than m3 lite we can synchronize the miners using GPS signal from satellite. 
generating pps which is quick and reach accuracy in nanosecond. this is possible with GPS.
since we proved the reality of the miner the GPS signal is also valid.
therefore it is a reliable resource.

on the other hand for the m3 lite we can determine the location of the m3 lite by triangulating it using other miners
using GPS technology. or through the peer to peer communication, IP address or device messages which is slower.


## 12. Localization algorithms
1. Trilateration:
   This algorithm uses the distances between the LPWAN device and three or more reference points (e.g., base stations) to calculate the device's position.
2. Multilateration:
   This algorithm is similar to trilateration, but it uses the time difference of arrival (TDOA) of signals from the LPWAN device to multiple reference points to calculate the device's position.

3. Trilateration will be used for M3 lite but Multilateration will be used for miners that has GPS support

### 12.1 localization through Trilateration
Trilateration is a good algorithm to use when you want to find the position of a device using three LPWAN devices (or reference points). Trilateration works by calculating the position of the device based on the distances between the device and the three LPWAN devices.

To use trilateration, you need to know the positions of the three LPWAN devices and the distance between the device and each of the LPWAN devices. There are various methods for measuring the distance between the device and the LPWAN devices, such as using the time of flight of a signal or the strength of the signal.

Once you have this information, you can use trilateration to calculate the position of the device by solving a system of three equations, one for each of the LPWAN devices. This can be done using a variety of methods, such as linear least squares or iterative methods.

Overall, trilateration is a relatively simple and power-efficient method for finding the position of a device using three LPWAN devices, and it is often used in applications where accuracy is important.
```c
#include <math.h>
#include <stdio.h>

struct Point {
  double x;
  double y;
  double z;
};

// Computes the distance between two points
double distance(struct Point a, struct Point b) {
  return sqrt((a.x - b.x) * (a.x - b.x) +
              (a.y - b.y) * (a.y - b.y) +
              (a.z - b.z) * (a.z - b.z));
}

// Solves for the location of the object using trilateration
struct Point trilaterate(struct Point referencePoints[3], double distances[3]) {
  struct Point objectLocation;

  // Compute position of reference point 0 in spherical coordinates
  double x0 = referencePoints[0].x;
  double y0 = referencePoints[0].y;
  double z0 = referencePoints[0].z;
  double r0 = distances[0];
  double phi0 = atan2(y0, x0);
  double theta0 = atan2(sqrt(x0 * x0 + y0 * y0), z0);

  // Compute position of reference point 1 in spherical coordinates
  double x1 = referencePoints[1].x;
  double y1 = referencePoints[1].y;
  double z1 = referencePoints[1].z;
  double r1 = distances[1];
  double phi1 = atan2(y1, x1);
  double theta1 = atan2(sqrt(x1 * x1 + y1 * y1), z1);

  // Compute position of reference point 2 in spherical coordinates
  double x2 = referencePoints[2].x;
  double y2 = referencePoints[2].y;
  double z2 = referencePoints[2].z;
  double r2 = distances[2];
  double phi2 = atan2(y2, x2);
  double theta2 = atan2(sqrt(x2 * x2 + y2 * y2), z2);

  // Convert spherical coordinates to Cartesian coordinates
  struct Point p0 = {r0 * sin(theta0) * cos(phi0), r0 * sin(theta0) * sin(phi0), r0 * cos(theta0)};
  struct Point p1 = {r1 * sin(theta1) * cos(phi1), r1 * sin(theta1) * sin(phi1), r1 * cos(theta1)};
  struct Point p2 = {r2 * sin(theta2) * cos(phi2), r2 * sin(theta2) * sin(phi2), r2 * cos(theta2)};

  // Compute cross product of p1 - p0 and p2 - p0
  double cx = (p1.y - p0.y) * (p2.z - p0.z) - (p2.y - p0.y) * (p1.z - p0.z);
  double cy = (p1.z - p0.z) * (p2.x - p0.x) - (p2.z - p0.z) * (p1.x - p0.x);
  double cz = (p1.x - p0.x) * (p2.y - p0.y) - (p2.x - p0.x) * (p1.y - p0.y);
  double p01 = sqrt((p1.x - p0.x) * (p1.x - p0.x) + (p1.y - p0.y) * (p1.y - p0.y) + (p1.z - p0.z) * (p1.z - p0.z));
  double p02 = sqrt((p2.x - p0.x) * (p2.x - p0.x) + (p2.y - p0.y) * (p2.y - p0.y) + (p2.z - p0.z) * (p2.z - p0.z));
  double p12 = sqrt((p2.x - p1.x) * (p2.x - p1.x) + (p2.y - p1.y) * (p2.y - p1.y) + (p2.z - p1.z) * (p2.z - p1.z));
  double denom = 2 * ((p1.x - p0.x) * (p2.x - p0.x) + (p1.y - p0.y) * (p2.y - p0.y) + (p1.z - p0.z) * (p2.z - p0.z))

  // Compute object location using trilateration formula
  objectLocation.x = p0.x + ((r0 * r0 - r1 * r1 + p01 * p01) / denom) * (p2.x - p0.x) + ((r0 * r0 - r2 * r2 + p02 * p02) / denom) * (p1.x - p0.x);
  objectLocation.y = p0.y + ((r0 * r0 - r1 * r1 + p01 * p01) / denom) * (p2.y - p0.y) + ((r0 * r0 - r2 * r2 + p02 * p02) / denom) * (p1.y - p0.y);
  objectLocation.z = p0.z + ((r0 * r0 - r1 * r1 + p01 * p01) / denom) * (p2.z - p0.z) + ((r0 * r0 - r2 * r2 + p02 * p02) / denom) * (p1.z - p0.z);

   // Check if trilateration is valid by verifying that the object is within the sphere defined by each reference point
   if (fabs(distance(objectLocation, referencePoints[0]) - r0) > 0.001 ||
       fabs(distance(objectLocation, referencePoints[1]) - r1) > 0.001 ||
       fabs(distance(objectLocation, referencePoints[2]) - r2) > 0.001) {
        // Trilateration is invalid, set object location to (0, 0, 0)
        objectLocation.x = 0;
        objectLocation.y = 0;
        objectLocation.z = 0;
    }
    return objectLocation;
}
int main(int argc, char** argv) {
  // Set up reference points
  struct Point referencePoints[3];
  referencePoints[0] = (struct Point){0, 0, 0};
  referencePoints[1] = (struct Point){10, 0, 0};
  referencePoints[2] = (struct Point){0, 10, 0};

  // Set up distances to reference points
  double distances[3] = {10, 15, 20};

  // Determine object location using trilateration
  struct Point objectLocation = trilaterate(referencePoints, distances);

  printf("Object location: (%.2f, %.2f, %.2f)\n", objectLocation.x, objectLocation.y, objectLocation.z);

  return 0;
}
```
### 12.2 localization through Multilateration
If each of the LPWAN devices has a GPS time stamp, it may be possible to use the GPS data to more accurately determine the position of the device. One approach would be to use the GPS time stamps to synchronize the clocks of the LPWAN devices, and then use a technique such as multilateration to calculate the position of the device based on the time difference of arrival (TDOA) of signals from the device to the LPWAN devices.

Multilateration is similar to trilateration, but it uses the TDOA of signals from the device to multiple reference points (in this case, the LPWAN devices) to calculate the device's position. By measuring the TDOA of the signals, it is possible to determine the distance between the device and each of the LPWAN devices more accurately than using techniques such as time of flight or signal strength.

Overall, using the GPS time stamps in conjunction with a technique such as multilateration can potentially provide more accurate positioning than using trilateration alone, but it may also be more complex and power-intensive. The best approach will depend on the specific requirements and constraints of the application.

example code for multilateration
```c
#include <math.h>
#include <stdio.h>

#define NUM_REFERENCE_POINTS 3

struct Point {
  double x;
  double y;
  double z;
};

struct ReferencePoint {
  struct Point location;
  double distance;
};

// Computes the distance between two points
double distance(struct Point a, struct Point b) {
  return sqrt((a.x - b.x) * (a.x - b.x) +
              (a.y - b.y) * (a.y - b.y) +
              (a.z - b.z) * (a.z - b.z));
}

// Solves for the location of the object using multilateration
struct Point multilaterate(struct ReferencePoint referencePoints[]) {
  struct Point objectLocation;

  // Initialize matrices
  double A[NUM_REFERENCE_POINTS][3];
  double b[NUM_REFERENCE_POINTS];

  // Set up least squares system
  for (int i = 0; i < NUM_REFERENCE_POINTS; i++) {
    struct Point rp = referencePoints[i].location;
    double d = referencePoints[i].distance;
    A[i][0] = 2 * (rp.x - objectLocation.x);
    A[i][1] = 2 * (rp.y - objectLocation.y);
    A[i][2] = 2 * (rp.z - objectLocation.z);
    b[i] = d * d - objectLocation.x * objectLocation.x - objectLocation.y * objectLocation.y - objectLocation.z * objectLocation.z + rp.x * rp.x + rp.y * rp.y + rp.z * rp.z;
  }

  // Solve least squares system
  gsl_matrix_view m = gsl_matrix_view_array(A, NUM_REFERENCE_POINTS, 3);
  gsl_vector_view c = gsl_vector_view_array(b, NUM_REFERENCE_POINTS);
  gsl_vector *x = gsl_vector_alloc(3);
  int s;
  gsl_permutation *p = gsl_permutation_alloc(3);
  gsl_linalg_LU_decomp(&m.matrix, p, &s);
  gsl_linalg_LU_solve(&m.matrix, p, &c.vector, x);

  // Update object location
  objectLocation.x = gsl_vector_get(x, 0);
  objectLocation.y = gsl_vector_get(x, 1);
  objectLocation.z = gsl_vector_get(x, 2);

  // Clean up
  gsl_permutation_free(p);
  gsl_vector_free(x);

  return objectLocation;
}

int main(int argc, char** argv) {
  // Set up reference points
  struct ReferencePoint referencePoints[NUM_REFERENCE_POINTS];
  referencePoints[0].location = (struct Point){0, 0, 0};
  referencePoints[0].distance = 10;
  referencePoints[1].location = (struct Point){10, 0, 0};
  referencePoints[1].distance = 15;
  referencePoints[2].location = (struct Point){0, 10, 0};
  referencePoints[2].distance = 20;

  // Determine object location using multilateration
  struct Point objectLocation = multilaterate(referencePoints);

  printf("Object location: (%.2f, %.2f, %.2f)\n", objectLocation.x, objectLocation.y, objectLocation.z);

  return 0;
}
```
This implementation uses the GNU Scientific Library (GSL) to solve a least squares system of equations to determine the location of the object. It sets up the system of equations using the reference points and distances, and then uses GSL's linear algebra functions to solve for the location of the object.

Note that you will need to include the GSL header files and link against the GSL library in order to use this code. You can find more information on installing and using GSL at the following link: https://www.gnu.org/software/gsl/

## 13. third party application
plug and play API
### 13.1 trustworthy localization
### 13.2 advantages of LPWAN against peer communications