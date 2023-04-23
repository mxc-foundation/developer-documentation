---
title: MXProtocol
sidebar_position: 2
---

# MXProtocol (Machine eXchange Protocol): Premium Network Infrastructure, Infinite Data Stream

## Table of Contents

- [Machine eXchange Protocol: Premium Network Infrastructure, Infinite Data Stream](#machine-exchange-protocol-premium-network-infrastructure-infinite-data-stream)
  - [1. MXC Vision](#1-mxc-vision)
  - [2. Background](#2-background)
    - [2.1 LPWAN vs other technologies](#21-lpwan-vs-other-technologies)
      - [2.1.1 LoRaWAN](#211-lorawan)
      - [2.1.2 NB-IoT](#212-nb-iot)
      - [2.1.3 Deployment considerations](#213-deployment-considerations)
  - [MXC economy](#mxc-economy)
    - [3.1 Commerce network effect](#31-commerce-network-effect)
    - [3.2 Asset-Backed Securitization](#32-asset-backed-securitization)
    - [3.3 Data bloom](#33-data-bloom)
      - [3.3.1 MXC-assisted garbage collection](#331-mxc-assisted-garbage-collection)
      - [3.3.2 MXC-assisted car sharing](#332-mxc-assisted-car-sharing)
  - [4. MXProtocol stack](#4-mxprotocol-stack)
    - [4.1 Permissionless Blockchain](#41-permissionless-blockchain)
      - [4.1.1 Features](#411-features)
      - [4.1.2 Security and efficiency](#412-security-and-efficiency)
      - [4.1.3 Long-term adoptions](#413-long-term-adoptions)
  - [5. Smart Bidding](#5-smart-bidding)
    - [5.1 Goals of design](#51-goals-of-design)
    - [5.2 Design and implementation](#52-design-and-implementation)
    - [5.3 Gateway status](#53-gateway-status)
    - [5.4 Smart Bidding strategy](#54-smart-bidding-strategy)
    - [5.5 Sensor Smart Bidding code](#55-sensor-smart-bidding-code)
  - [6. Anti-Collision Coordinator](#6-anti-collision-coordinator)
    - [6.1 Goals of the design](#61-goals-of-the-design)
    - [6.2 Design and implementation](#62-design-and-implementation)
    - [6.3 Third party integration](#63-third-party-integration)
  - [7. Inter-Chain Data Market](#7-inter-chain-data-market)
    - [7.1 Goals of the design](#71-goals-of-the-design)
    - [7.2 Design and implementation](#72-design-and-implementation)
    - [7.3 Polkadot and Aeternity](#73-polkadot-and-aeternity)
  - [8. Smart Bidding use cases](#8-smart-bidding-use-cases)
    - [8.1 Downlink resource auction](#81-downlink-resource-auction)
    - [8.2 Network coverage market](#82-network-coverage-market)
    - [8.3 Service market](#83-service-market)
  - [9. Development progress](#9-development-progress)
  - [10. References](#10-references)

## 1. MXC Vision

> The MXC vision is to introduce a systematic process to both simplify and increase IoT data transactions.

The decentralized infrastructure upon which MXC’s system is based is the future of Low Power Wide Access Network (LPWAN) and the Machine eXchange Protocol (MXProtocol). Utilizing this solid device network foundation, MXC is introducing an extraordinarily unique coin offering, Machine eXchange Coin (MXC), which allows for increased data transactions and an idiosyncratic data flow monetization within the mammoth data market.

MXProtocol places a keen focus on reducing collision between networks, constructing an inter-chain data market, developing a market for network coverage and introducing an independent Quality of Services (QoS) framework for both data providers and receivers. For the first time ever, individual network users, corporations and enterprises can all participate in the construction of decentralized, ubiquitous and secure LPWAN. Simply by connecting “anything” to the network, adopters will be able to profit and trade MXC.

The trading network is built on the premise of the “sharing economy.” Therefore, it is uniquely and exclusively owned by users — both individuals and enterprises — who take advantage of the monetization of the network in two ways:

1. By increasing uplink and downlink coverage via a Gateway, e.g. a MatchBox LPWAN Gateway, Cisco LPWAN Gateway
2. By unleashing access to a massive network of published and traded data to the marketplace which is securely traded using blockchain technology

Both sensors and connected devices bid (via the integrated QoS) for the downlink network resource to, for example, unlock a door or, alternatively, shut down a faulty radiator, subsequently offering a market-devised price for the uncovered regions. This ultimately increases data network coverage. “Things” can autonomously pay each other with MXC tokens and get accredited by sharing the data with different users/marketplaces.

There has been a phenomenal increase in the sourcing, collection and transmission of big data within the past five years. Additionally, the increasing use of artificial intelligence feeding off this data has assisted people to simplify tedious tasks and to make better informed decisions on everything from projecting a weather forecast, to saving household energy, to even choosing the right music to play at home. The tone has now been set for decades to come. Machines interacting with one another has seen a significant increase over such a short period. This will only increase as our interdependency on machines and machine learning grows and becomes ever more significant in day to day life.

Whether for individuals or big companies, the need for a specified network concentrating on machines and machine data is here to stay. It will play a bigger part in supporting both individuals and businesses than ever before. MXProtocol introduces the next generation of LPWAN with a superior IoT data platform and a premium network experience, allowing for a simplified and expedited way to create a secure and efficient solution for IoT.

The following sections elaborate on the unique advantages of MXProtocol, including its components — permissionless blockchain, Smart Bidding, Anti-Collision Coordinator and Inter-Chain Data Market — that make it a truly innovative technology.

## 2. Background

MXC is a German non-profit organization based in the country’s start-up and blockchain capital, Berlin. MXC is partnering with various LPWAN companies. MXProtocol is a revolutionary design that solves the problem of LPWAN and bridges the data gap between different infrastructures.

IoT is a hot topic that has been intently discussed for over a decade. The one focus and premise of the IoT network is connecting “things” to the Internet and collecting/using this data from the objects that can’t speak for themselves. The application of this new founded, increased data is highly limited due to the current methods offering low range and high power consumption. For example, standard WiFi can generally reach an absolute maximum of around 100 meters, and using 3G/4G consumes a significant amount of power, thus reducing effective battery life and increasing maintenance costs significantly. The fact is, current implementations for data networks are extremely expensive and offer very low usability. The need for a new technology is here and the need for LPWAN will only increase as it solves the current problems of low range/high cost data transmissions.

The fact is, current implementations for data networks are extremely expensive and offer very low usability. The need for a new technology is here and the need for LPWAN will only increase as it solves the current problems of low range/high cost data transmissions.

<a name="fig1"> </a>

<figure>
  <img src="/img/mxprotocol/fig1_lpwan_comparison.png" alt="LPWAN" width="70%" />
</figure>

### 2.1 LPWAN vs other technologies

LPWAN technology emerged to the forefront in recent years with the goal of finding a better data transmission solution to the shortfalls of WiFi, Bluetooth and 3G & 4G networks. These earlier established networks were originally targeted at connecting people, not at connecting the data generated by “things.” The amount of machine-generated data has multiplied significantly in recent times. The new LPWAN technology offers aspects where others simply can’t compete:

- 10 year sensor battery life
- 20 km data reach with just a single Gateway
- Offers an extreme amount of connection points (over 60,000 for a single network cell) supported by LPWAN Gateways at an extremely low cost

Now, when compared to the current wireless network, it’s easy to see the superior advancements that the MXC solutions offer. As illustrated in Figure 1, LoRa and NB-IoT are simply the most potent solutions on the LPWAN market.

#### 2.1.1 LoRaWAN

LoRaWAN is an open-source protocol defined by the LoRa Alliance, which is already supported by industrial giants such as Cisco, Alibaba, Comcast, IBM and SK Telecom and many more. Advantages of LoRaWAN are 20 km open space coverage, low data rates (low-level kbps) and ultra-low power, allowing for 10 years continued operation on a single battery.

Both the Gateways and end sensor devices use the LoRaWAN protocol. In fact, devices of any brand are supported and can be connected to the network as long as they are LoRa/LPWAN compatible.

#### 2.1.2 NB-IoT

NB-IoT is a narrowband radio technology specified by 3GPP as a licensed telecommuni- cation protocol. NB-IoT focuses specifically on indoor coverage, low throughput and long battery life, enabling a large number of connected devices.

The advantage for an MXC IoT user is that it gives an individual the power to host their own network wherever and whenever they like. Compare that with the NB-IoT base stations (which are owned by telecommunications conglomerates) which charge users expensive SIM card fees to send data messages over the Internet through NB-IoT protocol. MXProtocol supports all LPWAN technologies, developed LoRaWAN Gateways, NB-IoT and LoRaWAN sensors. That’s decentralization. That’s yet another MXC advantage.

#### 2.1.3 Deployment considerations

When deploying LPWAN, the first consideration is understanding how to avoid a col- lision between different competing networks residing in the same region. Generally, the issue comes from the fact that both may use the same channel to send out the message at the same time and leave the other available channel empty due to the chosen preferences. As a result, it’s generally hard to reach a consensus between these networks and thus the deployment suffers as network usage increases. The decentralization and distributed mech- anism of MXProtocol solves this issue by coordinating the networks. The network evolves by having users pay micro-payments for the resources that another one offers.

The second concern is due to the shortage of downlink resources for the dense sensor/ end device deployment. Usually there are some sensors/end devices which require no downlink or can bear with the loss of downlinks. This is usually associated with low-activity sensors, such as garbage bins or electricity meters. However, end devices like bike locks or location tracker devices need to receive regular and reliable confirmations from the cloud for every uplink. Hence, they are willing to pay a premium for this reliability and a QoS provided by the networks. MXProtocol provides this bidding resource, ensuring that, for example, a garbage bin sensor won’t take first preference over the vital downlink resource of something like a bike lock.

Another consideration pertains to the requirements for multi-national cooperations (MNC) and small to medium enterprises (SME) trading their data assets publicly generated using LPWAN technology. Within LPWAN, both the data stream and asset trading features are simplified, easy to read and can be digitally transmitted from many kilometers away. This makes the data exchange a clear necessity for the needs of the LPWAN market of tomorrow.

With respect to the needs of MNCs or SMEs, it’s likely that such enterprises will wish to deploy their own LPWAN to cover an entire city or a region for its own specific applica- tions such as asset tracking (e.g. automobile) or sensor data management. This is a perfect solution for “Big Business.” LPWAN technology delivers via its long reach ensuring that sensor/end device uplink packets are securely received as per the protocol design.

This leads to one of the key aspects of the MXProtocol: bringing the monetization of data services to the forefront. Using the MXProtocol, micro-payments within the LPWAN infrastructure will be traded from third party sensors/end devices, ensuring data is conveniently, correctly and concisely transmitted in a secure manner, whilst being maintained by the support of system administrators. The industry has been waiting for a decentralized and consensus-based mechanism to improve the usability of LPWAN, and MXC is delivering.

MXC has designed this next generation LPWAN infrastructure using MXProtocol in order to significantly boost the applications of blockchain and IoT within the real-world context.

## MXC economy

Machine eXchange Coin (MXC) offers a unique and specifically designed decentralized technological “Data Trade Network” to the global Token economy. Data can be shared on a mass scale whilst ensuring complete end to end privacy. The MXC intends to be distributed amongst data owners, data receivers and data network hosts, allowing for a facilitated cross-over from a “commodity” based Coin into an everyday trading Coin currency.

### 3.1 Commerce network effect

Machine eXchange Coin is the first Token designed to bridge current commodity-based trading of cryptocurrency tokens and the cash-based global economy. Utilizing the “sharing economy,” MXC uses this as an axis, allowing large businesses, SMEs and individuals to borrow or rent assets owned by someone else.

Individuals place LoRa-based protocol hardware in opportune positions in order to benefit and profit from their locations and their decentralized LoRaWAN network. Businesses benefit by using these user-based networks to send sensor/device data, building a new “sharing economy.” Wallets are stored in the cloud allowing individuals to profit from businesses sending sensor data via their LoRaWAN LPWAN. The coins are then sent and traded from the sensor holders that MXProtocol addresses to the Gateway distributor.

MXProtocol gives network participants incentives to use, deploy and trade their network elements. In addition to that, it is a people-owned secure and private network that won’t suffer from public congestion like what Ethereum encountered with cryptokitties.

### 3.2 Asset-Backed Securitization

MXC has been highly successful with regards to the design and production of high-end LPWAN hardware. Using the coins and sharing economy will allow for a massive influx of shared sensor data amongst individuals and companies, giving better insights into consumer behavior, environmental impacts and machine-based optimizations.

With MXC, Asset-Backed Securitization (ABS) adds a completely new way for individuals and companies to both trade and manage their data and physical assets. Current methods see sensitive data easily being passed and reproduced to a number of parties without any of them knowing that the data has potentially already been corrupted, seen and/or shared amongst potential competitors/untrusted parties. MXC makes it possible for corporations and individuals to track both physical goods and intangible data, ensuring that buyers/ receivers of the goods are the only party who have received the data/physical good, and for this information to come from a qualified and reliable source.

By applying ABS, the individual data is allocated to one dedicated source. In contrast, a buyer of a tangible paper certificate, for example, has no way of knowing that the same certificate hasn’t been sold/reproduced and assigned to potentially multiple parties.

### 3.3 Data bloom

MXC is a blockchain-based decentralized platform designed to revolutionize three core functions based around the basic financial theory: Lend, Send and Spend.

#### 3.3.1 MXC-assisted garbage collection

The future is here. The one constant in everyone’s life from now on will be the data surrounding all of us. In the past such a statement referred to “people-generated data.” However, times have changed. “Machine-generated data” is taking over at a phenomenal rate.

The beauty of machine-based data, when compared with human-based data, is it doesn’t sleep. Machine-based data is constant and it’s reliability is unmatched when compared with any people-generated data. So why is this important?

Take, for example, a local city council. Their task is to ensure safety, security and general well-being of the local city. One of these responsibilities includes simple tasks such as garbage collection. The simple act of emptying city trash may seem like a monotonous task, but it in fact requires planning and chain management: When do collections occur? How often should trash collections occur? How many employees are required to empty garbage cans across the city? MXC simplifies such tasks using MXProtocol.

Using sensor/end devices situated in garbage cans and allowing them to transmit device data via a Gateway allows the city council to detect the levels of garbage built up within the can. What does this mean for the council?

- Saving fuel: The council only needs to send out garbage trucks when necessary, as opposed to sending out trucks to check cans, irrespective of whether they are full or even completely empty.
- Saving wages: By only sending out employees at the moment a garbage can needs to be emptied, the council can then reallocate human resources, thus saving employee wages.
- Reducing traffic congestion: Garbage trucks are often frustrating for commuters. When parked on the side of the road, they can increase general traffic significantly. Being aware of the need for garbage removal in certain areas can reduce the need for trucks and allow for smoother traffic flows.

Many of these highlighted aspects make up the chain of events associated with what are deemed to be “menial tasks” but, as shown, the flow on effect is quite significant. MXC IoT is ready to solve such issues, allowing for simple tasks to be categorized and ensuring exact resources are allocated only when needed.

#### 3.3.1 MXC-assisted car sharing

Using LoRaWAN sensor/end devices and Gateways can also reduce the cost of car sharing partners.

Covering an entire city center in LPWAN allows individuals to simply build their own completely independent network, free from telecommunications companies and net- works charging exorbitant costs.

The benefits of doing this for a company such as a “car sharing” company allows them to track their vehicles without the need to depend on Telecommunication coverage. Using LPWAN significantly reduces the costs, especially when compared with the costs of tracking using a SIM card.

In addition to GPS tracking, car doors can be locked and unlocked using LPWAN, increasing security for users, all at a very low cost compared to current methods.

By bringing such key services, MXC provides transparency and greatly enhances customer experience. MXC’s mission is to intensify data sharing whilst forging a unity between those with finance and data service needs and those without finance but who have private access to network integration and distribution, thus eliminating borders, intermediaries and prejudices.

MXProtocol focuses on three foundational pillars:

- Extend and support the massive device data economy
- Utilize the decentralized “sharing economy”
- Trade of assets within the current coin economy

MXProtocol connects “things” utilizing a market-based economy, which adds a plethora of new transmission points allowing more data to be shared, traded, sold and analyzed for data mining.

Within the new decentralized MXC economy, everyone can profit from the sharing of data; end to end encryption grants authorized usage of the data; and entire communities can benefit from using their locations to act as a network facility to transport this data — trading assets, profiting from the coin economy.

## 4. MXProtocol stack

MXProtocol infrastructure consists of both sensor and end devices, Gateway and cloud. Sensors and end devices collect data from “things,” and send to the cloud via the Gateway. This is uniquely designed to specifically be a decentralized solution allowing for everyone to suit their/the market’s needs. The usability of the hardware has been specifically designed as a “plug and play” solution, making installation simple without the need for a professional configuration. It is designed to be easy to set up and easy to share data.

As the flow in [Figure 2](#fig2) demonstrates, LPWAN Gateways connect to each other to form either a mesh network as a collective cloud or the Internet. The sensors or end devices communicate with Gateways using LPWAN technology for bi-directional communication. Notably, the sensors and end devices are not purely limited to a single LPWAN product. In fact, any LoRaWAN compatible sensors are able to connect to the LPWAN network and can start sending and receiving messages.

<a name="fig2"> </a>
<figure>
  <img src="/img/mxprotocol/fig2_dataflow.png" alt="dataflow" width="70%" />
</figure>

MXProtocol facilitates the data and value flow of the LPWAN. Inside this ecosystem, each sensor or end device has a MXC wallet address assigned to an individual user. This is required in order to both pay for the network usage and to receive money from selling the data and services. The sensor wallet is stored in the cloud in order to maintain the LPWAN low-power requirements. This is also due to the fact that the CPU is usually resource-constrained. The same wallet is used as the Gateway wallet (also found in a user account and stored in the cloud). This wallet will receive coins from uploading/downloading the data from the cloud to the sensor and assists in paying for the other LPWAN’s resource or data.

Coinciding with the current LPWAN infrastructure protocol, the data link between the Gateway and sensor end devices is unregulated. As a result, there would be no possibility to be rewarded for forwarding data from the sensor to cloud via the Gateway, and ultimately the downlink resource would be limited, only being allocated on a “first come, first served” basis. This system as is would negatively impact low-level data procurement services offered by things such as a door lock or car charging station system and would result in the data link not being appropriately monetized. MXC LPWAN infrastructure solves such issues, delivering the ultimate user experience to SMEs and MNCs.

<a name="fig3"> </a>
<figure>
  <img
    src="/img/mxprotocol/fig3_MXProtocol_stack.png"
    alt="dataflow-mxprotocol"
    width="50%"
  />
</figure>

[Figure 3](#fig3) shows the detailed technical stack of the MXProtocol infrastructure. The decentralized and autonomous LPWAN can be built on any permissionless blockchain, such as IOTA, Stellar, Skywire and NEO.

Based on this, the Anti-Collision Coordinator between LPWANs, Smart Bidding and Inter-chain data market are introduced to answer the LPWAN deployment considerations mentioned in the previous chapter [see 2.1.3](#213-deployment-considerations).

### 4.1 Permissionless Blockchain

There are various kinds of blockchain. Anyone can use cryptographic keys, anyone can be a node and join the network, and anyone can become a participant to service the network and seek a reward. Participants can walk away from being a node, return if and when they feel like it and get a full account of all network activity since they left.

In a permissionless blockchain, anyone can read the chain, anyone can make legitimate changes and anyone can write a new block into the chain as long as they follow the rules. Decisions on a permissionless blockchain are made by the network participants. The protocol is based on a consensus protocol. The permissionless blockchain provides a way to reach consensus without relying on a closed system to accurately record financial transactions.

#### 4.1.1 Features

MXC built MXProtocol as an inclusive platform where all participants are encouraged to contribute. MXProtocol is a distributed network protocol backed by monetization of the resources and incentives from enterprises and individuals based on permissionless blockchain. The permissionless blockchain design makes MXProtocol efficient and independent: the more people use it, the more robust the network will be.

The blockchain should have four key properties: decentralized control, low latency, flexible trust, and asymptotic security. In other words, MXProtocol should run on a permissionless blockchain that has:

- A true decentralized network.
- It has eliminated mining rewards.
- All transactions get confirmed quickly.
- There is an anti-spam role. There should be a preventive measure against nefarious users flooding the network (a DoS attack).

#### 4.1.2 Security and efficiency

Often, the speed and privacy of a network is the concern for SMEs and MNCs. Public blockchains, such as Ethereum and Bitcoin, often suffer from big computing slow downs, practically grinding the systems to a halt, leading to a situation where the whole network and the 51 percent resources can attack the blocks. There should be a blockchain providing more privacy and efficiency for businesses and individuals collectively. MXProtocol needs to be run on a secure and efficient blockchain that can provide the devices with good connectivity.

The MXC-introduced LPWAN application requires further fragmented and discrete transactions for sensitive data and services in an IoT realm. That is why MXC continues to develop upon the permissionless blockchain, making MXProtocol more efficient and more suitable for the needs of LPWAN and IoT applications.

#### 4.1.3 Long-term adoptions

As previously stated, MXProtocol is a LPWAN platform protocol that brings efficiency and robustness to the users. There are, however, still several components inside permissionless blockchain itself that MXC feels necessary to emphasize. For example, to ensure the long term stability of the LPWAN IoT projects, continued research is still required with regards to the current data interface. Real field deployment will need to be conducted in order to properly satisfy the plethora of data streams connecting from the LPWAN sensors/end devices and ensure they are routed to the network seamlessly.

## 5. Smart Bidding

Due to governmental regulations of the LPWAN spectrum, the downlink is a precious resource that is closely guarded by sensors and end devices. The majority of the world uses eight downlink channels for acknowledgement or confirmation of the sensor data, and each channel usually has to wait anywhere from a few milliseconds up to a few minutes in order to send another packet.

The downlink channels are fixed in the protocol and code, and the waiting time for each downlink is dependent on the data rate of the sensor/end device. A key side note to this point is that LPWAN Gateways use the latest in “Listen Before Talk” technology allowing them to send data more regularly. This means that data may be sent when the channel is free, and therefore doesn’t have to wait for a specific time period to elapse.

### 5.1 Goals of design

To further overcome such industry-wide issues, MXProtocol implements a bidding mechanism, designed to bring the needed resources to those devices that are willing to bid the most. Generally public LPWAN deployment is pushed by both individuals and corporations who do so in order to extend their own individual network reach. Introducing a bidding mechanism will cause network reaches to multiply due to the fact that users can both earn and learn from the data that are sent by the sensors. The purpose of this section is to examine the Smart Bidding design that would support a well-functioning LPWAN ecosystem. The goals of the design are to:

- Allocate downlink resources adequately
- Allow all sensors/end devices to compete on a market platform for network resources
- Offer network deployments incentives, assisting them to monetize
- Ensure LPWAN services are monetized
- Power the decentralized ledger with MXProtocol to simplify and resolve any issues

### 5.2 Design and implementation

There are different bidding models, ranges and methods to be set in Smart Bidding. The goal is to assign the network resource to the highest bidder. The design and functionality of the Smart Bidding process is proposed in [Figure 4](#fig4). Sensors/end devices bid on one single downlink channel out of the eight available on the LPWAN Gateway. The Smart Bidding code sensors/end devices are hosted on the cloud code, enabling them to place a bid. The LPWAN Gateway then provides the status of the network and provides resources to the sensors/end devices.

In the example illustrated in in Figure 4, there are three sensors/end devices are bidding on one single channel for the downlink resource. The sensor on the right doesn’t participate in the auction due to the specification of its code. Let’s say this is due to the sensor that is used for a minor purpose, e.g. to monitor a garbage can or electricity meter, so the downlink confirmation can acceptably be lost. This leaves the other two devices to bid for the downlink. In this case, the door lock wins the auction. Should the downlink arrive, the payment is then automatically sent from the sensor wallet to the Gateway wallet which provided the resource.

Usually one Gateway offers eight channels for the sensors/end devices to bid and the prices change dynamically due to the status of the Gateway, or alternatively, the willingness of the sensors.

<a name="fig4"> </a>

<figure>
  <img
    src="/img/mxprotocol/fig4_mxp_smart_bidding.png"
    alt="MXP-smart-bidding"
    width="70%"
  />
</figure>

### 5.3 Gateway status

Sensors and end devices will already be aware of the status of the Gateway in advance in order to make an appropriate bid for the resources and the services that provided by the network. To motivate the network administrator to maintain a robust LPWAN, we define the following metrics of the Gateway to let sensors/end devices to bid for the dynamic prices:

- Mean time between failures (MTBF)
- Number of downlink packets sent
- Gateway density
- List of services available

The first key parameter used to measure the stability of a Gateway on the network is determined by measuring the down time. It is recommended that a smaller MTBF be used than a larger one, because of the QoS that is required for the sensors. Thus, the high QoS sensors/end devices are willing to pay for the more stable LPWAN Gateways.

The number of downlink packets sent by the Gateway represents the popularity of the device. This usually means the end devices/sensors around the Gateway are dense. If a sensor requires a downlink from the Gateway, which has a high number of downlink packets, it will need to place a higher bid or increase the overall bidding range accordingly.

Gateway density is a parameter which is expected to motivate network administrators to deploy more Gateways in the areas that have little to no coverage. As demonstrated, it’s already clear that sensors will be willing to pay for low Gateway density with higher prices. Low density means the downlink channels and the services are limited and that the prices will be high when sensors are competing with each other. Overall, it’s expected that this metric will push people to expand the network in order to provide better network access to the LPWAN devices.

From time to time, LPWAN will provide a list of services, e.g. firmware upgrades, GPS-free localization, network configuration optimization. This allows all hardware to be regularly kept up to date. Sensors and end devices would then choose from the Gateway bids for services, combined with the MTBF and the number of downlinks sent for the auction.

### 5.4 Smart Bidding strategy

The following are the standard auction methods found in the system:

- Auction
  - Increase: When the initial bid fails, an increased bid is made in order to secure the auction.
  - Decrease: Similar to the Google Keyword style bidding auctions, the user states their bidding range. The system then states (considering all factors) the nec- essary bidding rate. In many instances, this will save customer coins.
- Fixed price
  - The network resource or service are offered at a fixed price, with limited or unlimited quantity. Sensors/end devices just pay per use.
- Quantitative purchase
  - The network resource or service are bid by quantitative metrics, like a period of time for downlink resource, the region of a whole city’s downlink and the amount of resources that are needed.

### 5.5 Sensor Smart Bidding code

Sensors and end devices are programmed with a snippet of code to enable them to bid for network resources and services that are provided by Gateways. This is implemented on the cloud so third party sensors can still use the logic easily by porting the code. There are several parameters to receive from a Gateway in advance, such as the density of the deployment and the list of services that are available to the sensors, just to name a few.

After the information has been obtained by the Gateway, sensors would bid for resources of the service according to the type of the auction. For example, a bike lock would bid for a downlink resource using the increase method. This specifies the range of the coins that the bike lock is willing to pay for each transaction and the market dictates the end price.

A dedicated technical white paper about the logic, design and implementation of the Smart Bidding will be released and the APIs with documentation will be available on the MXC website.

```cpp
bid bike lock {

  /* Define the willingness to pay for the services or resources */
  type bidder

  /* Define the gateway status it will use for the auction */
  struct gw {
      uint mtbf;
      uint numdl;
      uint density;
      address service;
  }

  address lock1;
  gw[] gwstats;

  /* Parse the status that received from the gateway */
  function Parse(gwstats) public {
    gwstats [ lock1 ] = msg. sender
    lock1 = gwstats [ lock1 ]. service
  }

  fuction bid(coin) constant returns (bytes32) {
    coin.maximum = 10
    coin.minimum = 6
    auction.type = liner
    auction.block = once

    return coin
  }
}
```

## 6. Anti-Collision Coordinator

With the increasing amount of LPWAN field deployments, the problem of network congestion is anticipated to rapidly increase. This is especially so when the network coverage targets ultra-long ranges of 20 km or more.

In 2020, there are expected to be more than 75 billion devices connected to the Internet. If the majority of these are to use LPWAN, it can be assumed that it would put quite a strain on the network resources. As a result, MXProtocol infrastructure has bridged the gap between different networks using the innovative protocol.

### 6.1 Goals of the design

> The MXProtocol also offers a general overwhelming consensus for all public LPWAN by adding a community-based consensus, permissions and deployment permission etiquette.

Here we define the goals of the design for the LPWAN ecosystem:

- Minimize packet collision for uplinks in the same region deployed with multiple networks.
- Allocate new resources to the sensors/end devices that need downlink for the networks.
- Enable individual networks to pay for other networks resources and services, i.e. network roaming.
- Settle all monetary transactions in MXC.

### 6.2 Design and implementation

The design of the Anti-Collision Coordinator is illustrated in [Figure 5](#fig5). The coordinator has two responsibilities. The first is to make payments between networks using MXC. The second is to coordinate between networks about the downlink and uplink status. In the example illustrated in [Figure 5](#fig5), we see the door lock has successfully bid the downlink from the MXProtocol at downlink channel 1. However, the network that deployed over 1 km is also using the downlink channel 1 for the garbage sensor, and the pending collision is obvious. The solution would be that the Anti-Collision.

<a name="fig5"> </a>
<figure>
  <img
    src="/img/mxprotocol/fig5_anti_collision_coordinator.png"
    alt="anti-collision-coordinator"
    width="70%"
  />
</figure>

Coordinator would pay for Cisco’s network resource, allowing the Gateway to pause downlink channel 1 for this time’s message, thus allowing the door lock to receive the “unlock door” confirmation from the cloud.

On the other side, the two networks report each other’s uplink lost message, since the LoRaWAN protocol has the counter for the uplink. Later, the coordinator finds out that the majority of the packets that are lost come from both street lighting and the parking meter due to the fact that their sending intervals are overlapped and they are quite close to each other.

The coordinator then delays the street light’s sending interval or, alternatively, it changes the data rate to make sure that they won’t collide with each other, and the fees for a delay should be paid by the parking meter. Such network coordination is expected to occur quite often when future deployment of LPWAN sensors becomes more dense. Thus, the Anti-Collision Coordinator solves the problem of the network resource allocation in free-licensed bands completely.

### 6.3 Third party integration

The Anti-Collision Coordinator is indeed a protocol plug-in for the LoRaWAN server to control the Media Access Control (MAC) layer of LoRaWAN uplinks and downlinks.

There are two ways to integrate the Anti-Collision Coordinator into the LPWAN server. First is to run the full node which integrates the anti-collision mechanism into the protocol layer like illustrated in [Figure 3](#fig3). Another solution is to run a light node with the anti-collision module that could be compatible with all the LoRaWAN servers.

As [Figure 6](#fig6) shows, the Anti-Collision Coordinator is essentially a plug-in for the other LoRaWAN servers that is compatible with LoRaWAN protocol. The plug-in is a protocol enhancement that controls the uplink and downlink based on the payment logic and resource requirement between two or more networks.

A light node connects to the full node to assign the LPWAN a wallet for sending and receiving MXCs. The Anti-Collision Coordinator controls the MAC layer for all the LoRaWAN devices. A separate white paper will be released about the protocol design of the Anti-Collision Coordinator and its APIs for LoRaWAN servers.

<figure>
  <img
    src="/img/mxprotocol/fig6_anti_collision_integration.png"
    alt="anti-collision-third-party-integration"
    width="70%"
  />
</figure>

## 7. Inter-Chain Data Market

Currently, there are several traditional data markets that originate from cryptocurrencies, e.g. Streamr, IOTA and Mobius. All provide a secure mechanism to make sure that the data stream can be copied and transmitted from the owner to the consumer in a sequential manner.

Most cryptocurrencies are in need of data. This data is fed into the system to provide checks and balances, ensuring all players along the chain have performed their role correctly. For example, a smart contract specifies which goods need to be delivered from city A to city B and this requires the buyer to pay the seller, e.g. 10 ETH. So, how can one determine whether the goods have been successfully delivered? The smart contract must rely on external Oracles from either the GPS data from the package or the LPWAN tag reading from the warehouse.

> The entire industry continually requires chains such as Mobius or MXC to feed other chains smart contracts and the interdependent information to the applications.

Oracles are third party services which are not part of the blockchain consensus mechanism. The main challenge with Oracles is that people need to trust these sources of information. Whether a website or a sensor, the source of information needs to be consistently trustworthy. In order to solve these issues, Oracles have different trusted computing techniques.

### 7.1 Goals of the design

Blockchains support Oracles in order to assist with fetching external data. The reason for this comes from the fact that blockchain applications, such as Bitcoin scripts and smart contracts cannot access and fetch data directly. As a result, they require pricing feeds for assets and financial applications and weather-related information for peer-to-peer insurance, all written with smart contracts. Here we define the goals of the MXProtocol data market with respect to designing for Oracles:

- Facilitate data usage between different blockchains
- Establish a trusted resource for the external Oracles
- Stack up the data for later purchase
- Enable purchase of a live data stream
- Provide APIs for non-blockchain applications to access the data
- Settle all monetary transfers within MXC

### 7.2 Design and implementation

The MXProtocol Inter-Chain Data Market provides an effective method to feed the other smart contracts with LPWAN data captured by sensors or end devices.

<a name="fig7"> </a>
<figure>
  <img
    src="/img/mxprotocol/fig7_inter_chain_market.png"
    alt="inter-chain-data-market"
    width="70%"
  />
</figure>

[Figure 7](#fig7) shows the example of the transaction between MXProtocol data and blockchains like Ethereum.

MXProtocol feeds data to Ethereum smart contracts, and gets Ethereum payments as rewards. It only requires a simple protocol to trust that the data fetched from the MXProtocol data source is genuine and untampered. In addition to that, the rich data stream can also be used by external non-blockchain applications via Web APIs.

Major block chains like Ethereum are short in data for smart contracts, and the data that is provided by external Oracles essentially may not be trustworthy. With the MXProtocol Inter-chain data market, the generation and flow of the data can be tracked and verified publicly on the chain. Hence, the security issue is solved internally with MXProtocol.

### 7.3 Polkadot and Aeternity

Polkadot is essentially a protocol that communicates between different networks. It solves consensus and transaction delivery between different chains.

Aeternity is created to be the interface between real world data and smart contracts. Instead of using Oracles that can cause a single point of failure, Aeternity’s design provides decen- tralized infrastructure for holding and transferring the data to smart contracts.

The MXProtocol Inter-chain data market uses the idea and mechanism developed by both Polkadot and Aeternity to deal with consensus, privacy, transaction delivery and security. A separate white paper will be released about this design.

## 8. Smart Bidding use cases

### 8.1 Downlink resource auction

Downlink resource auctions occur when it is the only option for the Gateways to decide which sensor/end devices to communicate with. The Gateway usually has eight downlink channels, supporting more than 60,000 sensors that need to be acknowledged in sequence. Uplinks are free for the sensors since all the Gateways will pick up the packets and forward them within the same network, and the Anti-Collision Coordinator needs to pay the other network when collisions need to be avoided. The downlink resources need to be allocated to some sensors that need downlinks to execute the commands ([See Figure 8](#fig8)). Smart Bidding codes decide the willingness for the sensor/end devices to pay for the resources, and all the transactions are settled in MXC.

Both the European and U.S. radio committees impose regulations on the spectrum access for LPWAN radios using 868/915Mhz bands. These regulations cover issues from maximum time on air to maximum duty cycle, which, in turn, introduces waiting times between two packets. For Gateways without Listen-Before-Talk Technology, this waiting time can range anywhere from a few milliseconds to minutes depending on the data rate and number of bytes being sent.

<a name="fig8"></a>
<figure>
  <img src="/img/mxprotocol/fig8_LPWAN.png" alt="LPWAN" width="70%" />
</figure>

Currently, the downlink resource is distributed on a “first come first served” basis, which can lead to many potential problems for various devices. For example, if an electricity monitoring meter were to get downlink priority over a door lock, the door lock in turn doesn’t receive the confirmation to unlock the door. The MXProtocol Smart Bidding solves this problem as covered in the following two aspects:

- Allocate the downlink resource within the same LPWAN using the Smart Bidding code snippet for the auction.
- Enable different networks to trade for the downlink resources for the sensors/ end devices that are willing to pay.

The snippet of code inside the sensors/end devices decides the market prices of the LPWAN. For a dense Gateway deployment like a city center, the prices can be lower due to the abundant resources of the downlink channels available. While in the mountains or suburban areas, few sensors would compete for the downlink resources and thus the prices will rise. The sensors will bid according to the MTBF, downlink numbers and the density of the network.

The auction method and logic behind the bidding can be programmed by the owner of the sensor. It is expected that AI-driven algorithms will later be introduced to offer smarter bidding strategy for the sensors and end devices.

### 8.2 Network coverage market

It is expected that the supply of downlink resources will gradually increase with the demand of the sensors/end devices. The bidders will pay for the high prices for the lower Gateway density, which gives SMEs and MNCs incentives to expand the network coverage to get more MXC coin rewards.

Figure 6 illustrates the market placed by Smart Bidding codes. The prices are lower at the dense deployment where the two LPWAN coverages overlap, and higher where there is only one LPWAN coverage.

Some sensors travel around the city. Their code specifies the maximum amount of coins that it would like to pay for a single downlink. However, they have been to the places where no LPWAN coverage is available. Once they are back to the network, they put the last off-chain bid to the chain, and notify the whole network that they are willing to pay a pre-determined price from the Smart Bidding code.

The prices and the amount of off-chain bids will surely motivate companies and individuals to deploy the LPWAN Gateway to the field, thus expanding the network coverage for the chain. MXProtocol shifts control from telecommunication conglomerates to companies and individuals by allowing them to deploy their own LPWAN.

### 8.3 Service market

There are lists of services that LPWAN can provide to the sensors/end devices. For example, an Over-the-air firmware update should be multi-casted to the sensors with downlink and it requires the sensors to bid for the resource.

The most attractive aspect of the LPWAN is to implement GPS-free localization, which also works indoors and underground. In contrast to GPS or SIM card’s high power consumption and limited reach, LPWAN localization uses the packets sent by the sensors to calculate the position, which requires no computation from the resource-limited sensors.

Such a service requires the resources of both a Gateway and the cloud. Hence, the Smart Bidding code will specify whether it is willing to pay for the service and its accuracy. The more Gateways that receive the packets, the more accurate the position will be.

LPWAN sometimes needs to change the channel configurations like the arrangement or the allowed data rate. This kind of coordination will need to be applied globally and the network will have to try to synchronize such a configuration as much as possible. Smart Bidding can also accept “free auctions” where they require no one to pay.

Through the MXProtocol Smart Bidding design, it is possible that sensors/end devices pay for the services that the network offers to them. The outcome of the design will be:

- Some sensors/end devices get the services and the resources that they demand through auction
- Network deployment receives reward by offering services and resources to the LPWAN sensors/end devices
- All the monetary transactions are done automatically in MXC without human intervention

## 9. Development progress

MXC Foundation’s partner MatchX has released the MatchBox LPWAN Gateway, and the LPWAN module with development kits. It has reached more than 40 countries with distributors in Australia, North America, Asia and Europe.

The first Proof-of-Concept has been performed in conjunction with the Stellar Development Foundation, utilizing the LPWAN coverage and enabling sensors to pay with each other.

## 10. References

- _What is LPWAN (low-power wide area network)?_ - Definition from WhatIs.com. (2018). IoT Agenda. Retrieved 8 January 2018, from <http://internetofthingsagenda.techtarget.com/definition/LPWAN-low-power-wide-area-network>
- _LoRa Alliance._ (2018). LoRa Alliance. Retrieved 8 January 2018, from <https://www.lora-alliance.org/>
- _Skywire and Viscript | Skycoin Blog._ (2018). Blog.skycoin.net. Retrieved 8 January 2018, from <https://blog.skycoin.net/skywire/skywire-and-viscript/>
- _Skywire - Skycoin Meshnet Project | Skycoin Blog._ (2018). Blog.skycoin.net. Retrieved 8 January 2018, from <https://blog.skycoin.net/overview/skywire---skycoin-mesh-net-project/>
- _contributors, S._ (2018). Create an Account | Stellar Developers. Stellar.org. Retrieved 5 February 2018, from <https://www.stellar.org/developers/guides/get-started/create-account.html>
- Kusmierz, B. (2017). _The first glance at the simulation of the Tangle: discrete model._
- Popov, S. (2016). _The tangle._ IOTA.
- Kim, J. (2014). _Introducing Stellar - Stellar CN._ Stellar CN. Retrieved 5 February 2018, from <https://www.stellar.org/cn/blog/introducing-stellar>
- _Ethereum Project._ (2018). Ethereum.org. Retrieved 8 January 2018, from <https:// www.ethereum.org/?
- _Blockapps Developer Edition._ (2018). Developers.blockapps.net. Retrieved 8 January 2018, from <https://developers.blockapps.net/>
- _RSK._ (2018). RSK. Retrieved 8 January 2018, from <https://www.rsk.co/>
- Dudley, J., Hochstetler, G., Dudley, J., Hearn, M., Hearn, M., \& Hearn, M. (2018). _Corda: Frictionless Commerce._ corda.net. Retrieved 8 January 2018, from <https://www.corda.net/>
- _LoRaWAN in Europe._ (2017). Matchx.io. Retrieved 8 January 2018, from <https://matchx.io/community/eu/12-lorawan-in-europe>
- _LoRaWAN regulations in Korea, Australia, India Japan and South East Asia._ (2017). Matchx.io. Retrieved 8 January 2018, from <https://matchx.io/community/world/13-lorawan-regulations-in-korea-australia-india-japan-and-south-east-asia>
