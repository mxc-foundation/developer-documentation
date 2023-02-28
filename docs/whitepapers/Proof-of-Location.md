---
title: Low-Scale-Certification
sidebar_position: 3
---

# Low-Scale-Certification

## Table of Contents

- [Low-Scale-Certification](#low-scale-certification)
    - [1. Definitions](#1-definitions)
      - [1.1 Low Scale Certification](#11-low-scale-certification)
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
      - [2.4 Synchronization of miners in network](#24-synchronization-of-miners-in-network)
        - [2.4.1 Why do we require synchronization](#241-why-do-we-require-synchronization)
        - [2.4.2 Our synchronization method](#242-our-synchronization-method)
    - [3. LSC of miner and sensors](#3-lsc-of-miner-and-sensors)
      - [3.1 Risks of fake devices](#31-risks-of-fake-devices)
      - [3.2 Decentralized solution](#32-decentralized-solution)
        - [3.2.1 LSC device provisioning](#321-lsc-device-provisioning)
          - [definition](#definition)
          - [method](#method)
        - [3.2.2 Conventional Solutions](#322-conventional-solutions)
          - [Holding MXC tokens](#holding-mxc-tokens)
          - [Objective Measurement Techniques](#objective-measurement-techniques)
    - [4. LSC of location](#4-lsc-of-location)
      - [4.1 Miner score](#41-miner-score)
        - [4.1.1 GPS validation](#411-gps-validation)
        - [4.1.2 Miner Peer Listening](#412-miner-peer-listening)
        - [4.1.3 IP address](#413-ip-address)
        - [4.1.4 device messages data](#414-device-messages-data)
        - [4.1.5 Miner health metrics and its corresponding scores](#415-miner-health-metrics-and-its-corresponding-scores)
          - [Fuel](#fuel)
          - [Uptime](#uptime)
          - [GPS Signal](#gps-signal)
          - [Orientation](#orientation)
          - [Proximity](#proximity)
          - [Altitude](#altitude)
          - [Summary](#summary)
      - [4.2 Localization algorithms](#42-localization-algorithms)
        - [4.2.1 Localization through Trilateration](#421-localization-through-trilateration)
        - [4.2.2 Localization through Multilateration](#422-localization-through-multilateration)
    - [5. Consensus Group](#5-consensus-group)
      - [5.1 why we need Consensus Groups](#51-why-we-need-consensus-groups)
      - [5.2 Consensus Group Ground Rules](#52-consensus-group-ground-rules)
        - [5.2.1 Decision-making Process](#521-decision-making-process)
        - [5.2.2 Inclusiveness](#522-inclusiveness)
        - [5.2.3 Accountability](#523-accountability)
        - [5.2.4 Flexibility](#524-flexibility)
        - [5.2.5 Shared Control](#525-shared-control)
        - [5.2.6 Commitment to implementation](#526-commitment-to-implementation)
        - [5.2.7 Validation](#527-validation)
        - [5.2.8 Time Synchronization](#528-time-synchronization)
        - [5.2.9 Quorum](#529-quorum)
        - [5.2.10 Data Aggregation](#5210-data-aggregation)
        - [5.2.11 Decision Threshold](#5211-decision-threshold)
        - [5.2.12 Penalty Mechanism](#5212-penalty-mechanism)
    - [6. MXC Controller](#6-mxc-controller)


## 1. Definitions
### 1.1 Low Scale Certification
Low-scale certification in LPWAN refers to the verification of standards and requirements for LPWAN devices and networks on a smaller scale.
* It is used to validate the performance and reliability of LPWAN devices and networks in a controlled environment. 
* The standards and requirements for low-scale certification vary based on the specific technology and certifying body. 
* Low-scale certification ensures that LPWAN devices and networks function properly and meet quality and performance standards before widespread deployment. 

The main purpose of low-scale certification in LPWAN is to provide assurance of device and network quality before deployment.


LSC refine Proof of Location. 
LSC addresses the limitations of Proof of Location, which only confirms the location of an object, 
by incorporating measures to prove the physical existence of the object and providing more accurate location information. 
One such limitation of Proof of Location is the possibility of location manipulation through GPS spoofing. 
LSC overcomes this by providing a more comprehensive and secure method of determining both the physical presence and location of an object.


LSC provides two key benefits:
* Location of Item: LSC confirms the location of an object, providing accurate and reliable information about its whereabouts.


* Physical Existence of Item: LSC verifies the physical existence of an object, ensuring that it is a tangible, 
real-world item and not a virtual or simulated representation. This provides added security and confidence in the 
authenticity of the object's location information.

Together, these two aspects of LSC provide a comprehensive and secure method of determining both the physical presence and location of an object.

### 1.2 Consensus Group
A consensus group in blockchain technology is a group of nodes that participate in the process of validating 
and confirming transactions on a blockchain network. 
The goal of a consensus group is to achieve agreement or consensus among its members on the state of the blockchain ledger, 
ensuring that all transactions are valid and consistent with the rules of the network.

In blockchain technology, consensus is crucial to the security and integrity of the network. 
By ensuring that all nodes agree on the state of the blockchain, 
the consensus group prevents any single node from acting maliciously or tampering with the blockchain. 
This is achieved through a consensus algorithm, which establishes a set of rules and procedures for validating 
and confirming transactions, and for resolving conflicts or discrepancies between nodes.

Consensus groups in blockchain technology are often decentralized and open, 
meaning that anyone can participate in the validation process by running a node on the network. 
This helps to ensure that the decision-making process is transparent, fair, and democratic, 
and that the network is resilient to attacks or failures.

## 2. Design Aims
Our primary objective is to establish a seamless connection between the metaverse and the physical world. 
To accomplish this, we aim to authenticate the miners and devices in our network through the use of multiple tools, 
in order to create a blockchain that is parallel to both the real world and the metaverse. 
This will allow us to realize our vision of bridging the gap between these two distinct domains, 
enabling seamless interaction and collaboration between users in both worlds.

### 2.1 Logic of design
#### 2.1.1 Problem definition
The lack of connection between the metaverse and the physical world poses significant challenges and risks. 
Firstly, it facilitates the creation of fake devices, items, and identities, making it easier for scammers and attackers to deceive users. 
This creates a trust issue, as the authenticity of items and devices becomes difficult to verify, 
thereby increasing the likelihood of counterfeit items being passed off as genuine.

Moreover, the absence of a connection between the two domains can result in an increased risk of fraud 
and other malicious activities within the metaverse. 
For instance, if there is no way to confirm the physical existence of a device or item within the metaverse, 
attackers can create fake devices or items that are not backed by any real-world assets, 
thereby undermining the value and trust in the virtual economy.

Furthermore, the failure to connect the metaverse and the physical world may result in 
the creation of virtual items that have no tangible value, further eroding trust in the virtual economy and diminishing 
the overall value of virtual assets.

However, by leveraging blockchain technology to connect the metaverse and the physical world, 
it is possible to ensure that all items and devices within the metaverse are verified and can be traced back to real-world assets. 
This can help prevent fraud and other malicious activities within the metaverse, and increase trust and confidence in the virtual economy, 
thereby enhancing the value of virtual assets.

#### 2.1.2 Current designs
Currently, the metaverse and the real world are seperated. 
There are several ways that people in the industry are attempting to connect the metaverse to the real world. 
* Using blockchain technology: Some companies are using blockchain technology to create 
decentralized virtual worlds and marketplaces where users can buy, sell, and trade virtual assets, 
such as virtual real estate, in-game items, and other digital goods. 


* Virtual and Augmented Reality: Developers are using virtual and augmented reality to create immersive experiences 
that allow users to interact with the metaverse in a more realistic way. 


* Tokenization: Tokenization of virtual assets is another way to connect the metaverse to the real world. 
By giving virtual assets a unique digital identity, they can be bought, sold, traded, and even used as collateral for loans in the real world.


* NFTs (Non-Fungible Tokens): NFTs are digital assets that are unique and cannot be replaced by another asset. 
They are used to represent ownership of digital assets such as virtual real estate, art, 
and collectibles in the metaverse and can be bought and sold in the real world. 

* Real world assets: Some companies are experimenting with the idea of creating virtual representations 
of real-world assets and allowing them to be traded in the metaverse. 
This could include anything from virtual stock options to virtual real estate. 


* Gaming: Games and game items are a significant part of the metaverse, 
allowing players to earn in-game currency and items that can be used in other games or sold for real-world money.

these solutions however do not affect the physical world. it is true a virtual representation of an object in the real world can be made in the metaverse, however the live state and condition of that said object 
is not connected to the metaverse. the item could be damaged, destroyed, repaired or changed. it could be moved from one place to another. however the current solution does not show that.

#### 2.1.3 Prerequisite
In order to establish a true connection between the metaverse and the real world, it is imperative that the state, location, and ownership of objects are constantly known, updated, and observable.

To achieve this, we will utilize two key tools:

- Low-Scale Certification (LSC) Physical existence
- Low-Scale Certification (LSC) Location


LSC will allow us to track and verify the authenticity of objects within the metaverse, 
ensuring that their state, location, and ownership information is up-to-date and accurate. 
By using these tools, we aim to bridge the gap between the metaverse and the real world, creating a seamless connection between the two domains.


### 2.2 Location
A location is a rare resource that needs to be calculated by radio signals.
#### 2.2.1 How are objects localized
Examples of methods to calculate a location.

* GPS: Global Positioning System (GPS) is a widely used tool for determining the location of an object. 
It uses a network of satellites to triangulate the position of a device on the ground.


* BLE (Bluetooth Low Energy): Bluetooth Low Energy (BLE) is a wireless technology that can be used to determine the location of an object. 
It uses a technique called "beaconing" where a device sends out a signal that can be picked up by other devices in the area.


* RTLS (Real-Time Location Systems): Real-Time Location Systems (RTLS) are a set of technologies that can be used 
to determine the location of an object in real-time. 
They can use a combination of technologies such as GPS, BLE, Wi-Fi, and RFID to determine the location of an object.

#### 2.2.2 Challenges of current localization methods

* GPS: A person can potentially use a GPS spoofing device or software to fake their location. 
These devices or software programs can mimic the signals of a GPS satellite and trick a GPS receiver into thinking it is in a different location.


* BLE (Bluetooth Low Energy): A person can potentially use a BLE jammer to interfere with the signals being sent by 
the BLE beacons that are used to determine location. This can cause the system to provide inaccurate location data.


* RTLS (Real-Time Location Systems): A person can potentially use a jammer or a device that generates false location 
data to interfere with the signals being used by the RTLS system. 
Additionally, a person can potentially use a device that can mimic or imitate the signal of another device in the same network, 
tricking the system into believing the fake device is in a different location


#### 2.2.3 Our localization method goal

In our solution we will counter all tampering attempts and provide accurate result by using 
a combination of technologies and verification method.


### 2.3 Physical existence
"I think therefore I am", is the first principle of René Descartes's philosophy to prove our existence. well in MXC this
is not enough, to prove the reality of a 3rd party device utilizing our network we need to verify that miners used are unbiased and tamper free.
The objects in the blockchain should always be observable and updated by the system, 
so it can achieve true connection between the metaverse and reality.

#### 2.3.1 Current methods to prove object exists

* RFID (Radio-Frequency Identification) tags: Many blockchain companies, use RFID tags to link physical objects 
to a unique digital identity on the blockchain. 
These tags can be affixed to the object and can contain information such as the object's location, 
condition, and other characteristics. This information is recorded on the blockchain, 
providing a permanent and unchangeable record of the object's existence.


* IoT (Internet of Things) devices: Some blockchain companies, use IoT devices, such as sensors, 
to collect data on an object's location, condition, and other characteristics. 
This data is then recorded on the blockchain, providing a permanent and unchangeable record of the object's existence.


* Using smart contract: Some blockchain companies use smart contract to prove the existence of an object, 
the smart contract is designed to execute automatically when certain conditions are met, for example, 
when the physical object is delivered to a specific location, the smart contract will automatically update 
the blockchain with the object’s location and other information.

* QR Codes: Some blockchain companies use QR codes to provide a unique identification 
for the physical object, the QR code when scanned will lead to a webpage that contains information about 
the object, location, authenticity, and other information that can prove the object's existence.


* Hash of the object's information : Some blockchain companies use the hash of the object's information 
and store it on the blockchain, this hash can be used later to prove the object's existence.

#### 2.3.2 Challenges of current proof of existence methods
Do these methods replace the eye? The ultimate proof of an object's existence is through direct observation with the human eye.
That is why whatever method is chosen it will always have a challenge. but we try to minimize it and make it as small as possible.
Therefore, it's important to consider the use of multiple methods to confirm the authenticity of an object.

* RFID tag cloning: RFID tags can be cloned by using specialized equipment to copy the information stored on the tag. 
This would allow an attacker to create a counterfeit RFID tag that is identical to the original, making it difficult to detect.

* IoT device spoofing: IoT devices can be spoofed by creating a fake device that mimics the behavior of the real device. 
This would allow an attacker to send false information to the blockchain, making it difficult to detect.

* Smart contract manipulation: Smart contracts can be manipulated by an attacker to change the conditions required to 
execute the contract. This would allow an attacker to change the location or condition of an object, making it difficult to detect.

* QR code tampering: QR codes can be tampered with by altering the information that it points to or by creating
a fake QR code that points to a fake webpage. 

* Hash manipulation: The hash of the object's information can be manipulated by altering the information of 
the object before calculating the hash and storing it on the blockchain.

#### 2.3.3 Our proof of physicality and existence methods
Since the ultimate proof of an object's existence is through direct observation with the human eye, 
it's important to understand that any method used alone cannot replace the human eye's capabilities entirely. 
However, By utilizing a combination of several observation and analysis methods, 
we can approach the human eye's capabilities as much as possible. 
This can provide a comprehensive and robust proof of an object's physicality, 
making it more difficult for counterfeiters to successfully replicate an object. 
By using multiple methods, we can gather information on the object's characteristics and detect any inconsistencies, 
making it easier to confirm the authenticity of an object.


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
LSC is a technology used to prove the existence of a LPWAN device in the real world. 
It is important in applications where LPWAN end-devices perform tasks for which require interactions with blockchain. 
It is important to create a strategy of detecting and minimizing the risk of malicious actions by actors pretending 
to be a real, physical device.

##### method
Device provisioning of the LPWAN device is a process of establishing a shared secret key between the device 
and the cloud server to exchange information in an encrypted and secure way.  
The protocol is based on the Key exchange protocol that uses asymmetric cryptography and it's based on PID unique device identifier. 
PID is purchased by the device manufacturer from the SuperNode for a fee.
- this PID is valid for 12 months and a new fee is paid to get another 12 months extension.

###### Step 1 Generate the PID
The PID is created by the Device creator on the Super Node using MXC Controller. 
The PID costs some fee. The SN then creates a NFT on the blockchain with 
the PID attached a secret, only visible to the owner of the NFT. The NFT is then sent to Creators wallet.

###### Step 2 PID is programmed into the device.
The creator needs to flash the PID into the sensor device it wants to produce. 
Also needs to print a label with the PID so the device can be added to the DD app by scanning it.

###### Step 3 Device provisioning
PID is just an authenticator of the device, to be able to join the device needs to perform self provisioning after it is manufactured.

Two types of keys should be created and exchanged during this process - AS128 keys for LPWAN, and ECC keys 
for authentication and signing. The AS128 key will be stored on the Device Provisioning server. 
The Public ECC key will be stored on blockchain and the Private ECC key will be only known to the device itself.

The provisioning message sent by the Sensor Device is forwarded to the SuperNode by the Miner, 
Miner signs the message with its private Key. The miner has its Public Key stored on the blockchain because 
it was provisioned earlier so we know it is real.

Supernode generates all the keys and sends the AS128 and ECC keys to the Device. 
At the same time it signs the received signed message from the Miner with its own private key 
and creates a new NFT with this message chain and Device Public key and attaches it to the original NFT with PID on the blockchain. 
The NFT can contain more information like the EUI of the device, certificate of the manufacturer and so on.


#### 3.2.2 Conventional solutions

##### Holding MXC tokens
Allowing devices in the MXC network to hold MXC tokens is an effective method for providing verification that these
devices are genuine members of the network. The MXC tokens themselves, being a digital asset on the blockchain,
are resistant to counterfeiting due to their immutable and transparent nature. By being signed and verified on the blockchain,
these tokens can be traced back to the device that holds them, making it near impossible for an attacker to counterfeit them.
This provides a strong proof of the device's authenticity and its membership in the MXC network.
Furthermore, this approach also allows for a decentralized and trustless verification of the devices within the network,
as the blockchain ensures that the tokens are securely and transparently distributed to the devices that are part of the network.
This eliminates the need for a centralized authority to verify devices, reducing the risk of fraud and increasing
the overall security of the network. Additionally, the ability to trace the history of the tokens ensures that the
devices have not been tampered with or compromised. Overall, allowing devices in the MXC network to hold MXC tokens
provides a robust and secure method for verifying the authenticity of devices within the network, as well as ensuring
the integrity of the network as a whole.

layer the miners will hold MXC tokens, and we will implement that the item in the network will
hold MXC tokens.

Since the blockchain is secured and can be tracked by the community, We had the idea that the Miner can hold
Cryptocurrencies AKA Miner Fuel to prove that the miner exist in the network since it exist in the blockchain.

(add picture ????)
(picture of miner network parallel to it a picture of blockchain network)

so the proof of staking in Miner helps in proving the existence of the miner.
the more the miner stake the more trustworthy the miner is. this is one aspect of miner health.

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


## 4. LSC of location
We are building this network so 3rd party services can utilize it. naturally these businesses would prefer to use
nodes (miners) that are functional and trustworthy.

Our solution has a localization algorithm that utilizes LPWAN uplink data with timestamps to triangulate the location of LPWAN sensors and our miners.
In order to triangulate the sensors, the algorithms first confirm the location of the miners with the downlinks they sent to the sensors.
With regular downlink peer listenings, the algorithm is able to filter out the tampered miner locations as they can’t be heard by peer miners.
Those miner locations are confirmed by the LSC and then can respond to the uplink request for location services.

![LSC design for location](/img/POL/img1.JPG)

In the figure above, we can see how a sensor NFT’s LSC works.
* First of all, the sensor sends data that can be picked up by the miners as usual.
  Each data packet will be time stamped in the miner with precise time of arrival;
  this feature is executed by the hardware chip inside the M2 Pro miners.
  The third party miners won’t be able to provide this service due to the hardware limits.


* Next, the MXC Controller needs to rule out the tampered locations of the miners or inaccurate ones with bias and peer
  data, if the miner is not physically located there or always changes locations, the LSC can easily exclude this kind of data. Time difference of arrival (TDOA) based on location requires
  at least 3 miners with valid locations to calculate; the more miners present, the more accurate the location data will be.

All the miners that can provide LSC will be able to validate more MXC results than the third party miners.

### 4.1 Miner score
We developed a score model to evaluate each miner. This score is influenced by many variables.

This score model will be weighted and score based. The MXC community will have control over the weight of each metric.
the sum score of the model should be 1.
Weighted average model will be used

The following is the miner metrics score that will later be processed and summed:
* GPS Location of miner (excluding m3 lite miners) ***********************
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

Proof of Stake through blockchain technology verifies the validity of the previously mentioned metrics. 
When these metrics attain high scores, proof of the location of the miner and its physical existence can be trusted and 
considered as LSC. 
This validation grants the miner access to the LSC program.

By utilizing accurate information about the miner's location and physical existence, 
we can identify items on the network through multilateration or triangulation algorithms that utilize timestamps and 
GPS location or that utilize Bluetooth, IP addresses, and information from peer miners.

As the miner possesses LSC and the item on the network is validated through the miner, 
the item's existence can be confirmed through its location and physical form, demonstrated by its possession of MXC tokens. 
As a result, the item itself also achieves LSC.


#### 4.1.1 GPS validation
With good programming and hardware hackers can spoof GPS location. We can counter that by simply testing the TDoA of each miner to a
device with predefined location.
* each Miner will provide a TDoA to locate a device.
* device will send an encrypted code that will make the Miner send the TDoA.
* Miner will send a package data with TDoA value to the device.
* As the position of the device is known it should calculate the expected TDoA.
* if the TDoA received from the Miner is different from the TDoA calculated, flag this miner that has a false location.
* also the resulted calculation from the triangulation algorithm will deviate from expected result.

another method is to use mobile device connected to the miner through the data dash application
* if the location of the miner and mobile device are close to GPS Miner location. then miner location is valid

in this regard a score of True (1) or False (0) will be given to the score. 
* True as trusted
* False as fake

#### 4.1.2 Miner Peer Listening
We have created a system where we have a mapper that divide the earth into hexagons. each hexagon can accommodate upto 5 Miners.
more miners can exist in the hexagon but the systems does not require that.
the score is simple:
* we count the number of miners in the hexagon upto 5 this is our score
When the hexagon is full this is an indication that the communication between the miners is reliable and strong creating a family. 
therefore named family score.

#### 4.1.3 IP address
constant IP address is an indication that the miner does not use VPN or keeps on changing location.
the longer the miner holds onto the same IP address more stoic, rigid, eternal and immutable.
The relic score is calculated by the number of days the IP address of miner did not change:
* if miners has the same IP address for 15 days then it has a score of 15.
* if miners has the same IP address for 30 days then it has a score of 30.

additionally we can utilize IP address to verify position of miner using mobile device.
since both miner and mobile device are connected through the data dash application.
if both of them are utilizing the same network and comparing the GPS location of mobile device with registered location
of the Miner then we can consider the location of the miner to be valid

#### 4.1.4 device messages data
going back to the hexagon system. it was mentioned that each hexagon can hold upto 5 miners. however the number of devices connected
to the miners existing in the hexagon is not limited. it depends on the amount of data and speed of LORAWAN of sender and 
receiver.
theoretically the Miner can handle 16 packets of 50 kilobyte of data. some packets can be larger than 50 kilobytes so the
miner handles fewer packets. on the other hand, the opposite can occur therefore the miner can handle more data packets.

the score will be a graph of average utilization per hour in a 24-hour period.

the popularity percentage score depends on the data bandwidth consumed will be divided into three categories.
- under utilized between 0% to 33.3% which is not reliable
- optimum between 33.3% to 66.6% with 50% is the most optimum
- crowded between 66.6% to 100% which is good but crowded

here is an example

| 00| 01| 02| 03| 04| 05| 06| 07| 08| 09| 10| 11| 12| 13| 14| 15| 16| 17| 18| 19| 20| 21| 22| 23| 24|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|10%|05%|02%|00%|00%|00%|05%|10%|20%|40%|50%|70%|80%|85%|75%|60%|75%|80%|83%|77%|60%|40%|30%|20%|10%|

so the score will be the mean of all previous calculated mean utilization of this hour.

#### 4.1.5 Miner health metrics and its corresponding scores
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

##### Fuel
The Fuel refers to the Cryptocurrency stored in the tank.
* if the tank has 100 tokens and the tank capacity is 100. then this miner Fuel score is 100%
* if the tank has  0  tokens and the tank capacity is 100. then this miner Fuel score is 0%
* if the tank has  200  tokens and the tank capacity is 100. then this miner Fuel score is still 100%
 however the trustworthy score will be more.

having 0% tokens gives you -10 points trustworthy
having 100% tokens gives you 0 points trustworthy
having 200% tokens gives you +10 points trustworthy

##### Uptime
Naturally when a 3rd party is using your services they want that service
to be running 24 hrs every day. if the miner went down it will affect the quality
of the service.

if the miner was up for the last 7 days it will get a score of +50 trustworthy
if it was up for 5 days it will get 0 trustworthy
if it was down for 7 days it will get -50 trustworthy

the equation for calculating uptime score is 
2.1428571428571 x^2 - 0.71428571428571 x - 50

##### GPS Signal
if the GPS signal of the miner is not strong 3rd parties will not be able to
use the miner. to locate their items using network you need strong signals from 
nodes to triangulate the location of the item. therefore the GPS signal score is also 50.

theory; if the GPS location and the TDoA triangulation from other miners has a huge error
the less score you have. the less the error the more score you have

delta error is 20 m

if error is 0 m trustworthy score is + 50
if error is 2 m trustworthy score is 0
if error is 20 m trustworthy score is -50

the equation for calculating GPS signal score is
1.1111111111111 x^2 - 27.222222222222 |x| + 50

##### Orientation
naturally the service user would prefer that the miner covers the largest area possible so their business
would have an extended range.

theory; if the Miner is tilted then the area covered is less.

if the miner is orientation miner health percentage is 7% it will have a score of +50
if the miner is  orientation miner health percentage is 6.2% it will have a score of 0
if the miner is mounted horizontally or orientation miner health percentage is 0% it will have -50 score

the equation for calculating the orientation score is
0.048611111111111 x^2 - 5.4861111111111 |x| + 50

##### Proximity
unlike the effect the proximity has on miner health. the more miners are in the 
surroundings the more trustworthy score the miner has. due to the validity of peer miner
communication

if miner proximity metric in miner health is 0 percent the trustworthy score is +20
if miner proximity metric in miner health is 3.5 percent the trustworthy score is +10
if miner proximity metric in miner health is 7 percent the trustworthy score is 0

the equation for calculating the Proximity score is
- 2.8571428571429 x + 20

##### Altitude
the high altitude of the miner influence its connectivity with other items in the network

if miner Altitude metric in miner health is 5 percent the trustworthy score is +20
if miner Altitude metric in miner health is 2.5 percent the trustworthy score is +10
if miner Altitude metric in miner health is 0 percent the trustworthy score is 0

the equation for calculating the Altitude score is
4 x

##### Summary
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

the higher the trustworthy score of the miner the stronger the LSC of the miner.
in addition, the more valid are the following metrics:
* GPS Location of miner (excluding for m3 lite miners)
* Miner peer listening
* the IP address of the miner
* Device messages data

through these metrics we can locate the position of any item in the network and proof its reality too.
we need special algorithms in order to locate these data

### 4.2 Localization algorithms
1. Trilateration:
   This algorithm uses the distances between the LPWAN device and three or more reference points (e.g., base stations) to calculate the device's position.
2. Multilateration:
   This algorithm is similar to trilateration, but it uses the time difference of arrival (TDOA) of signals from the LPWAN device to multiple reference points to calculate the device's position.

Trilateration will be used for M3 lite but Multilateration will be used for miners that has GPS support

#### 4.2.1 Localization through Trilateration
Trilateration is a good algorithm to use when you want to find the position of a device using three LPWAN devices (or reference points).
Trilateration works by calculating the position of the device based on the distances between the device and the three LPWAN devices.

To use trilateration, you need to know the positions of the three LPWAN devices and the distance between the device and 
each of the LPWAN devices. There are various methods for measuring the distance between the device and the LPWAN devices, 
such as using the time of flight of a signal or the strength of the signal.

Once you have this information, you can use trilateration to calculate the position of the device by solving 
a system of three equations, one for each of the LPWAN devices. 
This can be done using a variety of methods, such as linear least squares or iterative methods.

Overall, trilateration is a relatively simple and power-efficient method for finding the position of a device using 
three LPWAN devices, and it is often used in applications where accuracy is important.

#### 4.2.2 Localization through Multilateration
If each of the LPWAN devices has a GPS time stamp, it may be possible to use the GPS data to more accurately determine 
the position of the device. One approach would be to use the GPS time stamps to synchronize the clocks of the LPWAN devices, 
and then use a technique such as multilateration to calculate the position of the device based on the time difference of arrival 
(TDOA) of signals from the device to the LPWAN devices.

Multilateration is similar to trilateration, but it uses the TDOA of signals from the device to multiple 
reference points (in this case, the LPWAN devices) to calculate the device's position. By measuring the TDOA of the signals, 
it is possible to determine the distance between the device and each of the LPWAN devices more accurately than using techniques 
such as time of flight or signal strength.

Overall, using the GPS time stamps in conjunction with a technique such as multilateration can potentially provide more accurate 
positioning than using trilateration alone, but it may also be more complex and power-intensive. 
The best approach will depend on the specific requirements and constraints of the application.


## 5. Consensus Group
The consensus group in our blockchain network starts with small clusters of nodes located all over the globe. 
These small consensus groups use a consensus algorithm to validate and confirm transactions on the network and 
maintain the integrity of the blockchain ledger.

As more nodes join the network and start running the consensus algorithm, 
these small clusters begin to merge with one another, gradually growing in size and complexity. 
Over time, these small clusters coalesce into a larger, more powerful consensus group that spans the entire network.

### 5.1 why we need Consensus Groups
This process of merging and growing is crucial to the stability and security of the network, 
as it ensures that all nodes are working together to maintain the integrity of the blockchain. 
By combining their computational power and expertise, these nodes are able to achieve greater consensus on 
the state of the network, and are more resistant to attacks or failures.

As the consensus group grows and evolves, it may adopt new rules or procedures for validating transactions, 
or may incorporate new features or technologies to improve its performance. 
However, the core goal of the consensus group remains the same: 
to ensure that all transactions on the blockchain are valid, consistent, and secure.

### 5.2 Consensus Group Ground Rules
Each consensus process is unique and so is our process. in the following the consensus group rules will be listed.
The first small cluster groups will be the first consensus groups which merge together to form a bigger one.
#### 5.2.1 Decision-making Process
The consensus decision-making process will involve two clusters of LPWAN devices agreeing upon 
the location of each other miners location and devices covered in their area. 
The two clusters will exchange information and use a set of rules to determine the device's location. 
If both clusters agree, the location will be considered final. 
If the two clusters disagree, a third cluster will be used to test and determine the device's location. 
If the third cluster agrees with one of the previous two clusters, the different cluster will be punished. 
If the third cluster does not agree, a fourth cluster will be used to test the location. 
If no cluster agrees on the location, the device will be flagged and punished.

#### 5.2.2 Inclusiveness
The consensus group will take into account the amount of crypto staked, 
GPS strength, orientation of the device, and the number of devices in the cluster. 
These factors will be used to determine the device's location.

#### 5.2.3 Accountability
The consensus group will use the blockchain to hold the records of LPWAN devices' 
locations and devices utilizing the network. The blockchain will also track 
which clusters were flagged and which devices were flagged. 
Any attempt to fake location or attack the system will result in punishment.

#### 5.2.4 Flexibility
The cluster group can be changed easily, and it is best if the clusters are not in the same "hexagon tile." 
This will help to ensure that the consensus group can adapt to changes in the network.

#### 5.2.5 Shared Control
All participants will agree to the ground rules for determining the device's location. 
They will also commit to working together as a cluster and checking the location of other LPWAN devices. 
Each cluster should have at least three LPWAN devices and at least one miner in 3 different hexagon tiles.

#### 5.2.6 Commitment to implementation
All LPWAN devices and devices utilizing the network will be accounted for. 
The consensus group will ensure that all participants follow the set of rules and procedures to reach a consensus on device location.
Miner health metrics will be used to ensure that the miners will match consensus group requirments.

#### 5.2.7 Validation 
Before the consensus group starts the decision-making process, each LPWAN device should validate 
its own GPS location and strength. This will ensure that the data provided by each device is accurate.

#### 5.2.8 Time Synchronization
All LPWAN devices in the consensus group should have their clocks synchronized. 
This will help to ensure that the time data used to determine the device's location is accurate.

#### 5.2.9 Quorum
The consensus group should establish a quorum for making decisions. 
The quorum should be based on a percentage of the total number of LPWAN devices in the cluster. 
This will help to ensure that the decision-making process is representative of the cluster's consensus.
The more miners in a cluster, also the better their health metrics the heavier their weight.

#### 5.2.10 Data Aggregation
The consensus group should aggregate the data provided by all LPWAN devices in the cluster. 
This will help to ensure that the decision-making process is based on all available data.

#### 5.2.11 Decision Threshold
The consensus group should establish a decision threshold for determining the device's location. 
The decision threshold should be based on a percentage of the total number of LPWAN devices in the cluster. 
This will help to ensure that the decision-making process is based on a consensus of the majority.

#### 5.2.12 Penalty Mechanism
The consensus group should establish a penalty mechanism for LPWAN devices or clusters 
that do not follow the rules and procedures. 
This will help to ensure that all participants are committed 
to the implementation of the consensus group's decision-making process.

### 6. MXC Controller
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