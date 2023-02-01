---
title: Low-Scale-Certification
sidebar_position: 3
---

# Low-Scale-Certification

## Table of Contents

- [Low-Scale-Certification](#low-scale-certification)
    - [1. Definitions](#1-definitions)
      - [1.1 Low Scale Certification](#11-low-scale-certification)
      - [1.2 Proof of Reality](#12-proof-of-reality)
    - [2. Design Aims](#2-design-aims)
      - [2.1 Logic of design](#21-logic-of-design)
        - [2.1.1 Problem definition](#211-problem-definition)
        - [2.1.2 Current designs](#212-current-designs)
        - [2.1.3 Prerequisite](#213-prerequisite)
      - [2.2 Location](#22-location)
        - [2.2.1 How are objects localized](#221-how-are-objects-localized)
        - [2.2.2 Challenges of current localization methods](#222-challenges-of-current-localization-methods) 
        - [2.2.3 Our localization method goal](#223-our-localization-method-goal)
      - [2.3 Physical existence](#23-physical-existence)
        - [2.3.1 Current methods to prove object exists](#231-current-methods-to-prove-object-exists)
        - [2.3.2 Challenges of current proof of existence methods](#232-challenges-of-current-proof-of-existence-methods)
        - [2.3.3 Our proof of physicality and existence methods](#233-our-proof-of-physicality-and-existence-methods)
          - [Holding MXC tokens](#holding-mxc-tokens)
          - [Objective Measurement Techniques](#objective-measurement-techniques)
      - [2.4 Synchronization of miners in network](#24-synchronization-of-miners-in-network)
        - [2.3.1 Why do we require synchronization](#241-why-do-we-require-synchronization)
        - [2.3.2 Our synchronization method](#242-our-synchronization-method)
    - [3. LSC of miner and sensors](#3-lsc-of-miner-and-sensors)
      - [3.1 Risks of fake devices](#31-risks-of-fake-devices)
      - [3.2 Decentralized solution](#32-decentralized-solution)
        - [3.2.1 LSC device provisioning](#321-lsc-device-provisioning)
          - [definition](#definition)
          - [method](#method)
        - [3.2.2 Conventional Solutions](#322-conventional-solution)
    - [4. Miner trust](#4-miner-trust)
      - [4.1 GPS validation](#41-gps-validation)
      - [4.2 Miner Peer Listening](#42-miner-peer-listening)
      - [4.3 IP address](#43-ip-address)
      - [4.4 device messages data](#44-device-messages-data)
      - [4.5 Miner health metrics and its corresponding scores](#45-miner-health-metrics-and-its-corresponding-scores)
        - [4.5.1 Fuel](#451-fuel)
        - [4.5.2 Uptime](#452-uptime)
        - [4.5.3 GPS Signal](#453-gps-signal)
        - [4.5.4 Orientation](#454-orientation)
        - [4.5.5 Proximity](#455-proximity)
        - [4.5.6 Altitude](#456-altitude)
        - [4.5.7 Summary](#457-summary)
    - [5. Localization algorithms](#5-localization-algorithms)
      - [5.1 Localization through Trilateration](#51-localization-through-trilateration)
      - [5.2 Localization through Multilateration](#52-localization-through-multilateration)
    - [6. penalties](#6-penalties)
    - [8. third party application](#8-third-party-application)
      - [8.1 trustworthy localization](#81-trustworthy-localization)
      - [8.2 advantages of LPWAN against peer communications](#82-advantages-of-lpwan-against-peer-communications)

bias score
mxc controller before 10 point
for point 5 we need to talk about design of existence of also the tags, need to talk about the penalty if miner or tag is fake
in chapter 1 talk about the problems of synchronization point 8.
chapter 8 talk about the idea with m3 lite. a new layer of trust through the triangulation of m3 lite through m2 pro.
active tag electricity powered tag
point 10 with mxc controller


## 1. Definitions
### 1.1 Low Scale Certification
* Low-scale certification in LPWAN refers to the verification of standards and requirements for LPWAN devices and networks on a smaller scale. 
* It is used to validate the performance and reliability of LPWAN devices and networks in a controlled environment. 
* The standards and requirements for low-scale certification vary based on the specific technology and certifying body. 
* Low-scale certification ensures that LPWAN devices and networks function properly and meet quality and performance standards before widespread deployment. 
* The main purpose of low-scale certification in LPWAN is to provide assurance of device and network quality before deployment.


### 1.2 Proof of Reality 
POR is an upgrade of proof of location. 
In Proof of Reality we overcome the disadvantage of Proof of 
location which only determines the location of said object.
one of these disadvantage for example is the location can be faked by GPS spoofing.
on the other hand, Proof of Reality proves the physical existence of the object 
and also triangulate the location of the object.

so Proof of Reality provides two things:
* location of item
* physical existence of the item

## 2. Design Aims
Our main aim is to connect the metaverse with the physical world. 
to achieve that we need to authenticate the miners and devices in out network using multiple tools to create a blockchain that will be parallel to the Real World and Meta-verse.

### 2.1 Logic of design
#### 2.1.1 Problem definition
If the metaverse and the physical world are not connected, it can lead to a number of issues. 
First and foremost, it becomes easier for scammers and attackers to create fake devices, items, and identities within either metaverse or real world. 
Without a connection to between the two domains, it is more difficult to verify the authenticity of items and devices, making it easier for fraudsters to pass off counterfeit items as the real thing.

Additionally, the lack of connection between the metaverse and the physical world can also make it more difficult to prevent 
and detect fraud and other malicious activity within the metaverse. 
For example, if a device or item in the metaverse is supposed to represent a physical asset, 
but there is no way to verify that the device or item actually exists in the physical world, 
it becomes much easier for attackers to create fake devices or items that are not backed by any real-world assets.

Furthermore, not connecting the metaverse and the physical world can lead to the creation of virtual items that have no real-world value, 
which can lead to a lack of trust in the virtual economy and a decrease in the overall value of virtual assets.

However, connecting the metaverse and the physical world through a blockchain technology can ensure that all items and 
devices within the metaverse are verified and can be traced back to real-world assets. 
This can prevent fraud and other malicious activity within the metaverse, 
and increase trust in the virtual economy and the overall value of virtual assets.

#### 2.1.2 Current designs
Currently, the metaverse and the real world are seperated. There are several ways that people in the industry are attempting to connect the metaverse to the real world. 
* Using blockchain technology: Some companies are using blockchain technology to create decentralized virtual worlds and marketplaces where users can buy, sell, and trade virtual assets, such as virtual real estate, in-game items, and other digital goods. 
* Virtual and Augmented Reality: Developers are using virtual and augmented reality to create immersive experiences that allow users to interact with the metaverse in a more realistic way. 
* Tokenization: Tokenization of virtual assets is another way to connect the metaverse to the real world. By giving virtual assets a unique digital identity, they can be bought, sold, traded, and even used as collateral for loans in the real world.
* NFTs (Non-Fungible Tokens): NFTs are digital assets that are unique and cannot be replaced by another asset. They are used to represent ownership of digital assets such as virtual real estate, art, and collectibles in the metaverse and can be bought and sold in the real world. 
* Real world assets: Some companies are experimenting with the idea of creating virtual representations of real-world assets and allowing them to be traded in the metaverse. This could include anything from virtual stock options to virtual real estate. 
* Gaming: Games and game items are a significant part of the metaverse, allowing players to earn in-game currency and items that can be used in other games or sold for real-world money.

these solutions however do not affect the physical world. it is true a virtual representation of an object in the real world can be made in the metaverse, however the live state and condition of that said object 
is not connected to the metaverse. the item could be damaged, destroyed, repaired or changed. it could be moved from one place to another. however the current solution does not show that.

#### 2.1.3 Prerequisite
in order to achieve true connection between the Metaverse and the Real world. the state, location and ownership of the object should always be known, updated
and observable.
the tools we will use to achieve that are:
* Low Scale Certification (LSC)
* Proof of Reality (POR)


### 2.2 Location
A location is a rare resource that needs to be calculated by radio signals.
#### 2.2.1 How are objects localized
Currently, there are three methods to calculate a location.

* GPS: Global Positioning System (GPS) is a widely used tool for determining the location of an object. It uses a network of satellites to triangulate the position of a device on the ground.
* BLE (Bluetooth Low Energy): Bluetooth Low Energy (BLE) is a wireless technology that can be used to determine the location of an object. It uses a technique called "beaconing" where a device sends out a signal that can be picked up by other devices in the area. 
* RTLS (Real-Time Location Systems): Real-Time Location Systems (RTLS) are a set of technologies that can be used to determine the location of an object in real-time. They can use a combination of technologies such as GPS, BLE, Wi-Fi, and RFID to determine the location of an object.

#### 2.2.2 Challenges of current localization methods

* GPS: A person can potentially use a GPS spoofing device or software to fake their location. These devices or software programs can mimic the signals of a GPS satellite and trick a GPS receiver into thinking it is in a different location.
* BLE (Bluetooth Low Energy): A person can potentially use a BLE jammer to interfere with the signals being sent by the BLE beacons that are used to determine location. This can cause the system to provide inaccurate location data.
* RTLS (Real-Time Location Systems): A person can potentially use a jammer or a device that generates false location data to interfere with the signals being used by the RTLS system. Additionally, a person can potentially use a device that can mimic or imitate the signal of another device in the same network, tricking the system into believing the fake device is in a different location


#### 2.2.3 Our localization method goal

In our solution we will counter all tampering attempts and provide accurate result by using a combination of technologies and verification method.

Proof of Reality has a localization algorithm that utilizes LPWAN uplink data with timestamps to triangulate the location of LPWAN sensors and M2 Pro miners. 
In order to triangulate the sensors, the algorithms first confirm the location of the miners with the downlinks they sent to the sensors. 
With regular downlink peer listenings, the algorithm is able to filter out the tampered miner locations as they can’t be heard by peer M2 Pro miners. 
Those miner locations are confirmed by the Proof of Reality and then can respond to the uplink request for location services.

![Proof of reality design for location](/img/POL/img1.JPG)

In the figure above, we can see how a sensor NFT’s Proof of reality works. 
* First of all, the sensor sends data that can be picked up by the miners as usual. Each data packet will be time stamped in the miner with precise time of arrival; this feature is executed by the hardware chip inside the M2 Pro miners. The third party miners won’t be able to provide this service due to the hardware limits. 
* Next, the MXC Controller needs to rule out the tampered locations of the miners or inaccurate ones with bias and peer Proof of Reality data, if the miner is not physically located there or always changes locations, the Proof of Reality can easily exclude this kind of data. Time difference of arrival (TDOA) based on location requires at least 3 miners with valid locations to calculate; the more miners present, the more accurate the location data will be.

All the miners that can provide Proof of Reality will be able to validate more MXC results than the third party miners.

### 2.3 Physical existence
"I think therefore I am", is the first principle of René Descartes's philosophy to prove our existence. well in MXC this
is not enough, to prove the reality of a 3rd party device utilizing our network we need to verify that miners used are unbiased and tamper free.
The objects in the blockchain should always be observable and updated by the system, so it can achieve true connection between the metaverse and reality.

#### 2.3.1 Current methods to prove object exists

* RFID (Radio-Frequency Identification) tags: Many blockchain companies, use RFID tags to link physical objects to a unique digital identity on the blockchain. These tags can be affixed to the object and can contain information such as the object's location, condition, and other characteristics. This information is recorded on the blockchain, providing a permanent and unchangeable record of the object's existence. 
* IoT (Internet of Things) devices: Some blockchain companies, use IoT devices, such as sensors, to collect data on an object's location, condition, and other characteristics. This data is then recorded on the blockchain, providing a permanent and unchangeable record of the object's existence. 
* Using smart contract: Some blockchain companies use smart contract to prove the existence of an object, the smart contract is designed to execute automatically when certain conditions are met, for example, when the physical object is delivered to a specific location, the smart contract will automatically update the blockchain with the object’s location and other information.  
* QR Codes: Some blockchain companies use QR codes to provide a unique identification for the physical object, the QR code when scanned will lead to a webpage that contains information about the object, location, authenticity, and other information that can prove the object's existence
* Hash of the object's information : Some blockchain companies use the hash of the object's information and store it on the blockchain, this hash can be used later to prove the object's existence.

#### 2.3.2 Challenges of current proof of existence methods
Do these methods replace the eye? The ultimate proof of an object's existence is through direct observation with the human eye.
That is why whatever method is chosen it will always have a challenge. but we try to minimize it and make it as small as possible.
Therefore, it's important to consider the use of multiple methods to confirm the authenticity of an object.

* RFID tag cloning: RFID tags can be cloned by using specialized equipment to copy the information stored on the tag. This would allow an attacker to create a counterfeit RFID tag that is identical to the original, making it difficult to detect.
* IoT device spoofing: IoT devices can be spoofed by creating a fake device that mimics the behavior of the real device. This would allow an attacker to send false information to the blockchain, making it difficult to detect. 
* Smart contract manipulation: Smart contracts can be manipulated by an attacker to change the conditions required to execute the contract. This would allow an attacker to change the location or condition of an object, making it difficult to detect.  
* QR code tampering: QR codes can be tampered with by altering the information that it points to or by creating a fake QR code that points to a fake webpage. 
* Hash manipulation: The hash of the object's information can be manipulated by altering the information of the object before calculating the hash and storing it on the blockchain.

#### 2.3.3 Our proof of physicality and existence methods
Since the ultimate proof of an object's existence is through direct observation with the human eye, 
it's important to understand that any method used alone cannot replace the human eye's capabilities entirely. 
However, By utilizing a combination of several observation and analysis methods, 
we can approach the human eye's capabilities as much as possible. 
This can provide a comprehensive and robust proof of an object's physicality, 
making it more difficult for counterfeiters to successfully replicate an object. 
By using multiple methods, we can gather information on the object's characteristics and detect any inconsistencies, 
making it easier to confirm the authenticity of an object.

##### Holding MXC tokens
Allowing devices in the MXC network to hold MXC tokens is an effective method for providing verification that these 
devices are genuine members of the network. The MXC tokens themselves, being a digital asset on the blockchain, 
are resistant to counterfeiting due to their immutable and transparent nature. By being signed and verified on the blockchain, 
these tokens can be traced back to the device that holds them, making it near impossible for an attacker to counterfeit them. This provides a strong proof of the device's authenticity and its membership in the MXC network.
Furthermore, this approach also allows for a decentralized and trustless verification of the devices within the network, as the blockchain ensures that the tokens are securely and transparently distributed to the devices that are part of the network. This eliminates the need for a centralized authority to verify devices, reducing the risk of fraud and increasing the overall security of the network. Additionally, the ability to trace the history of the tokens ensures that the devices have not been tampered with or compromised. Overall, allowing devices in the MXC network to hold MXC tokens provides a robust and secure method for verifying the authenticity of devices within the network, as well as ensuring the integrity of the network as a whole.

##### Objective Measurement Techniques
OMT in the case of determining the physical existence of an object covers 4 possibilities:
1. Use multiple sources to verify the existence of the object. This could include using multiple observers to look for the object, or using sensors or other automated systems to detect its presence. 
   * Like creating a classification machine learning model that verifies and cross-reference that object with its database.
2. Use objective measurement tools and protocols to quantify the characteristics of the object and its location. For example, you could use a tape measure to accurately determine the size and shape of the object, or use GPS technology to precisely locate its position.
   * attaching tags on the corners of the object that return its location to the cloud and then the dimension is calculated and then cross-referenced with dimension of model.
   * the location of the item and it's tags can be determined by triangulation. 
3. Use controlled conditions to eliminate the potential for external factors to influence the measurement. For example, you could conduct the measurement in a controlled environment, or use shielding or other methods to block out any external interference.
   * making sure that the measurement devices are part of our system. through peer listening and IP address of miner, in addition miner health metrics.
4. Use statistical analysis to confirm the existence of the object. By analyzing the data from the measurement process, you can use statistical techniques to determine the likelihood that the object exists in the specified location.
    * Bandwidth utilized by miner and the amount of data sent or received by the object. validity of the triangulation process.

In the next chapters, Miner scores affecting Physical existence will be discussed covering
* GPS Location
* Miner peer listening
* IP address
* Bandwidth
* Miner health
* Triangulation

### 2.4 Synchronization of miners in network
Our System tracks the devices in Real-time. monitoring and tracking of the devices to observe any changes as they occur in real-time.
In order to achieve that we require good synchronization of miners in the network.

#### 2.4.1 Why do we require synchronization
If there is no synchronization between LPWAN devices, several challenges may arise when trying to determine the location of a device using
localization algorithms.
1. Time of Arrival (ToA) or Time Difference of Arrival (TDoA) based methods rely on accurate timestamps of when the signal was received by each device, so if there is no synchronization between devices, the timestamps may be inaccurate, leading to errors in the calculated distances and ultimately resulting in a less accurate location estimate.
2. Without synchronization, it becomes difficult to determine the time of flight of the signal, resulting in less accurate distance estimates, which ultimately leads to a less accurate location estimate.
3. The error caused by lack of synchronization will be different at different distances, making it harder to estimate the distance and location of the device.
4. An alternative to ToA methods is Received Signal Strength Indicator (RSSI), but it is less precise and more affected by the environment, especially when the devices are far away from the gateways, also it's not recommended to use it alone as it's not a deterministic method.
5. Without synchronization, it becomes difficult to determine the time of flight of the signal, resulting in less accurate distance estimates, which ultimately leads to a less accurate location estimate.
6. Additionally, the lack of synchronization can also make it harder to analyze the data from the devices over time, as it becomes harder to relate the data from different devices to a common time frame.

#### 2.4.2 Our synchronization method

Our System utilizes advanced synchronization techniques to ensure that all devices and gateways in the network are in sync with one another. 
This includes the use of GPS time, NTP time, and PTP time to accurately synchronize the devices and gateways.

By implementing these methods, we are able to overcome the challenges of determining the location of a device using localization algorithms. 
This allows us to achieve a high degree of accuracy and precision in our location estimates, 
and ensures that our system is able to effectively track and monitor devices in real-time, observing any changes as they occur.

Additionally, our synchronization methods also make it easier to analyze data from the devices over time, 
as all data can be related to a common time frame. This allows us to gain a deeper understanding of the devices and their behaviors, 
and make more informed decisions based on the data collected. 
Overall, our synchronization techniques are crucial in ensuring the effectiveness and reliability of our real-time tracking and monitoring system.


## 3. LSC of Miner and sensors
Proving that a miner is a miner is a challenge because it is difficult to verify the physical existence 
and authenticity of the mining equipment and the same goes for sensors.
A fake device could be created that mimics the characteristics of a legitimate miner or device, 
and it can be used to gain unauthorized access to the network and potentially compromise the security of the blockchain system.
### 3.1 Risks of fake devices
Proving that a miner is a legitimate miner can be challenging because malicious actors can create fake devices that mimic the characteristics of real miners.
a fake device can:
* disrupt the network by flooding it with fake transactions, slowing down the network and making it difficult for legitimate miners to participate. 
* manipulate the network by controlling a large percentage of the mining power, potentially leading to a 51% attack and allowing the attacker to control the network, double spend, and reverse transactions. 
* also disrupt the consensus mechanism by falsely reporting the state of the network, leading to forks and causing confusion among the honest nodes. 
* also cause damage to the network's security by attempting to steal private keys or personal information from users connected to it.

### 3.2 Decentralized solution

As a decentralized network we do not need a 3rd party to prove that our community's miners exist, because this 
defeats the idea of decentralization.
Although determining the location of Miner by secure peer listening or GPS localization. these aspects can be hacked
as an extra protection we will implement certain methods

#### 3.2.1 LSC device provisioning
##### definition
##### method

#### 3.2.2 Conventional solutions

layer the miners will hold MXC tokens, and we will implement that the item in the network will 
hold MXC tokens.

Since the blockchain is secured and can be tracked by the community, We had the idea that the Miner can hold
Cryptocurrencies AKA Miner Fuel to prove that the miner exist in the network since it exist in the blockchain.

(add picture ????)
(picture of miner network parallel to it a picture of blockchain network)

so the proof of staking in Miner helps in proving the existence of the miner.
the more the miner stake the more trustworthy the miner is. this is one aspect of miner health.

## 4. Miner trust
We are building this network so 3rd party businesses can utilize it. naturally these businesses would prefer to use
nodes (miners) that are functional and trustworthy. 

This score model will be weighted and score based. The MXC community will have control over the weight of each metric.
the sum score of the model should be 1.
Weighted average model will be used

The following is the miner metrics score that will later be processed and summed:
* GPS Location of miner (excluding for m3 lite miners) *******************9
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

| metric               | score name         | score | score present as        |
|----------------------|--------------------|-------|-------------------------|
| GPS validation       | anti-spoof score   | 1     | Trusted (1) or Fake (0) |
| Miner peer listening | family score       | 5     | percentage out of 5     |
| IP address           | Relic score        | 30    | percentage out of 30    |
| Device messages Data | popularity score   | 100%  | percentage              |
| Miner Health metrics | Reliability score  | 200   | percentage out of 200   |

So as follows proof of stake through blockchain proofs the validity of the above-mentioned metrics.
when these metrics are trustworthy and accurate then the physical existence of the miner is proved and the location
of the miner is validated. thus proof of Reality achieved.

with the help of the valid information of the location of the miner and its physical existence. we can now
locate items that is utilizing the network. through triangulation algorithms using timestamps and gps location or
through Trilateration algorithms using ip addresses and peer miner listening information.

since the miner has proof of reality and the item in the network is validated through said miner.
therefore the item itself will be proved to exist by getting its location, and it exists physically because it holds 
MXC tokens.
therefore the item itself achieved proof of reality

### 4.1 GPS validation
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

### 4.2 Miner Peer Listening
We have created a system where we have a mapper that divide the space into hexagons. each hexagon can accommodate upto 5 Miners.
more miners can exist in the hexagon but the systems does not require that.
the score is simple:
* we count the number of miners in the hexagon upto 5 this is our score
When the hexagon is full this is an indication that the communication between the miners is reliable and strong creating a family. 
therefore named family score.

### 4.3 IP address
constant IP address is an indication that the miner does not use VPN or keeps on changing location.
the longer the miner holds onto the same IP address more stoic, rigid, eternal and immutable.
The relic score is calculated by the number of days the IP address of miner did not change:
* if miners has same IP address for 15 days then it has a score of 15
* if miners has same IP address for 30 days then it has a score of 30

additionally we can utilize IP address to verify position of miner using mobile device.
since both miner and mobile device are connected through the data dash application.
if both of them are utilizing the same network and comparing the GPS location of mobile device with registered location
of the Miner then we can consider the location of the miner to be valid

### 4.4 device messages data
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

### 4.5 Miner health metrics and its corresponding scores
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

#### 4.5.1 Fuel
The Fuel refers to the Cryptocurrency stored in the tank.
* if the tank has 100 tokens and the tank capacity is 100. then this miner Fuel score is 100%
* if the tank has  0  tokens and the tank capacity is 100. then this miner Fuel score is 0%
* if the tank has  200  tokens and the tank capacity is 100. then this miner Fuel score is still 100%
 however the trustworthy score will be more.

having 0% tokens gives you -10 points trustworthy
having 100% tokens gives you 0 points trustworthy
having 200% tokens gives you +10 points trustworthy

#### 4.5.2 Uptime
Naturally when a 3rd party is using your services they want that service
to be running 24 hrs every day. if the miner went down it will affect the quality
of the service.

if the miner was up for the last 7 days it will get a score of +50 trustworthy
if it was up for 5 days it will get 0 trustworthy
if it was down for 7 days it will get -50 trustworthy

the equation for calculating uptime score is 
2.1428571428571 x^2 - 0.71428571428571 x - 50

#### 4.5.3 GPS Signal
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

#### 4.5.4 Orientation
naturally the service user would prefer that the miner covers the largest area possible so their business
would have an extended range.

theory; if the Miner is tilted then the area covered is less.

if the miner is orientation miner health percentage is 7% it will have a score of +50
if the miner is  orientation miner health percentage is 6.2% it will have a score of 0
if the miner is mounted horizontally or orientation miner health percentage is 0% it will have -50 score

the equation for calculating the orientation score is
0.048611111111111 x^2 - 5.4861111111111 |x| + 50

#### 4.5.5 Proximity
unlike the effect the proximity has on miner health. the more miners are in the 
surroundings the more trustworthy score the miner has. due to the validity of peer miner
communication

if miner proximity metric in miner health is 0 percent the trustworthy score is +20
if miner proximity metric in miner health is 3.5 percent the trustworthy score is +10
if miner proximity metric in miner health is 7 percent the trustworthy score is 0

the equation for calculating the Proximity score is
- 2.8571428571429 x + 20

#### 4.5.6 Altitude
the high altitude of the miner influence its connectivity with other items in the network

if miner Altitude metric in miner health is 5 percent the trustworthy score is +20
if miner Altitude metric in miner health is 2.5 percent the trustworthy score is +10
if miner Altitude metric in miner health is 0 percent the trustworthy score is 0

the equation for calculating the Altitude score is
4 x

#### 4.5.7 Summary
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
* Miner peer listening
* the IP address of the miner
* Device messages data

through these metrics we can locate the position of any item in the network and proof its reality too.
we need special algorithms in order to locate these data

## 5. Localization algorithms
1. Trilateration:
   This algorithm uses the distances between the LPWAN device and three or more reference points (e.g., base stations) to calculate the device's position.
2. Multilateration:
   This algorithm is similar to trilateration, but it uses the time difference of arrival (TDOA) of signals from the LPWAN device to multiple reference points to calculate the device's position.

Trilateration will be used for M3 lite but Multilateration will be used for miners that has GPS support

### 5.1 Localization through Trilateration
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
### 5.2 Localization through Multilateration
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


## 6. penalties
The previous scores are either an indication for User about the mining rate of the miner or the reliability and availability of
miner for 3rd party users.
We need to create protection for the system from abuse.
in the following table we will discuss the causes of penalties

| Cause                                                            | action                                                                     | penalty                                                                                                                 | slash score                                    | How to avoid                                                                                     |
|------------------------------------------------------------------|----------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|------------------------------------------------|--------------------------------------------------------------------------------------------------|
| Faking miner location                                            | All Miners owned will be Locked                                            | Lose all Crypto connected to Miner and banned from Blockchain                                                           | 100                                            | do not fake miner location                                                                       |
| miner is down more than 7 days and is still registered in mapper | notification will be sent to owner profile in application and through mail | no benefits from mining or 3rd party using miner as gateway for the same amount of days the miner was down after 7 days | 5                                              | always try to keep miner on. if not possible notify the customer support or unregister the miner |






## 8. third party application
plug and play API
### 8.1 trustworthy localization
### 8.2 advantages of LPWAN against peer communications

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