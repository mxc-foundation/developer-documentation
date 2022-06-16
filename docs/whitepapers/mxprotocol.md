---
title: MXProtocol
sidebar_position: 2
---

# MXProtocol : Open and Free Network Infrastructure, Secure and Private Data Stream for Web3 & Metaverse

## Table of Contents

- [Meta X Protocol: Open and Free Network Infrastructure, Secure and Private Data Stream for Web3 & Metaverse](#meta-X-protocol-openfree-network-infrastructure-secureprivate-data-stream)
  - [1. MXC Vision](#1-mxc-vision)
  - [2. Background](#2-background)
    - [2.1 LPWAN vs other technologies](#21-lpwan-vs-other-technologies)
      - [2.1.1 LoRaWAN](#211-lorawan)
      - [2.1.2 NB-IoT](#212-nb-iot)
      - [2.1.3 Deployment considerations](#213-deployment-considerations)
    - [2.2 Satellite LEO](#22-5-5g)
      - [2.2.1 Broadband Web3.0 network](#221-broadband)
      - [2.2.2 Deployment considerations](#221-deployment)
  - [MXC economy](#mxc-economy)
    - [3.1 Edge AI platform](#31-edge-ai)
    - [3.2 Blockchain Non-Fungible Token](#32-non-fungible-token)
    - [3.3 Data bloom](#33-data-bloom)
      - [3.3.1 MXC-assisted parking](#331-mxc-assisted-parking)
      - [3.3.2 MXC-assisted IoT NFT](#332-mxc-assisted-iot-nft)
  - [4. MXProtocol stack](#4-mxprotocol-stack)
    - [4.1 Blockchain Supernodes](#41-blockchain-supernode)
      - [4.1.1 Features](#411-features)
      - [4.1.2 Security and efficiency](#412-security-and-efficiency)
      - [4.1.3 Long-term adoptions](#413-long-term-adoptions)
      - [4.1.4 Staking](#413-staking)
  - [5. Proof of Participation](#5-miner-health)
    - [5.1 Goals of design](#51-goals-of-design)
    - [5.2 Design and implementation](#52-design-and-implementation)
    - [5.3 Miner Health metrics](#53-health-metrics)
    - [5.4 Meta-XP](#54-mxp)
  - [6. Multi-token mining](#6-multi-token)
    - [6.1 Goals of the design](#61-goals-of-the-design)
    - [6.2 Design and implementation](#62-design-and-implementation)
    - [6.3 Third party integration](#63-third-party-integration)
  - [7. Inter-Chain Data Market](#7-inter-chain-data-market)
    - [7.1 Goals of the design](#71-goals-of-the-design)
    - [7.2 Design and implementation](#72-design-and-implementation)
    - [7.3 Polkadot parachain](#73-polkadot-parachain)
    - [7.4 Mining Power](#73-mpower)
  - [8. Proof of Location](#8-pol)
    - [8.1 Goals of design](#81-goals-of-design)
    - [8.2 Design and implementation](#82-design-and-implementation)
    - [8.3 MXC Controller](#83-mxc-controller)
  - [9. Development progress](#9-development-progress)
  - [10. References](#10-references)

## 1. MXC Vision

**Mission**: MXC’s mission is to build the world's first decentralized, fair, and free global data network employing the MXProtocol, where devices are able to communicate and transmit 
valuable encrypted data, in the aim to revolutionize the global data economy by using the power of blockchain technology and the MXC data republic. 

**Vision**: A world where everything is connected and decentralized, all built and verifiable on the blockchain. 

## 2. Background

Meta X Connect is a non-profit organization with offices across many cities worldwide, from Berlin, Shenzhen, Saint Vincent and the Grenadines, through to New York. MXC partners with various LPWAN and Low Earth Orbit (LEO) satellite companies to empower its vision of achieving a robust and thriving data economy. At Meta X Connect, we have built a revolutionary protocol known as the MXProtocol. This protocol uses LPWAN technology and bridges the AI and blockchain data gap between other Web 3.0 infrastructures. 

The Internet of Things (IoT) has been discussed for over a decade and has seen tremendous growth in its applications globally. The primary focus of IoT network applications is to build a bridge or connect  “things” with one another and the internet, aiming to transmit and receive data packets from objects that can’t speak for themselves. 

The applications of this newfound technology for increased data are limited due to the current methods offering low range and high power consumption, making it unattractive for providers to adapt to it. Moreover, they offer very low usability, thus hindering the need for the development of new technology. 

At Meta X Connect, we solve this issue using LPWAN and LEO satellites, ensuring a smooth transmission of device data for Web 3.0 and the metaverse. This is exactly what we are building for the world using the MXProtocol. 

The MXProtocol is central to achieving these objectives, as it's based on our Proof of Participation (PoP) consensus mechanism, taking advantage of LPWAN technology to create a decentralized infrastructure. The protocol supports and extends the massive data economy globally and ensures the decentralization of the sharing economy by its community, making it available to everyone. The beauty of the MXProtocol is that it allows anyone to connect any LoRaWAN device to the network, and one can take advantage of a completely connected world via data transfers.



<a name="fig1"> </a>

<figure>
  <img src="/img/mxprotocol/fig1_lpwan_comparison.png" alt="LPWAN" width="100%" />
</figure>

### 2.1 LPWAN vs other technologies

A low-power wide-area network, or LPWAN, is a type of wireless technology that has gained prominence in recent years with the goal of finding a better data transmission solution to the shortcomings of WiFi, Bluetooth, 3G, 4G, and 5G networks. 

Previously established networks were originally targeted for connecting people, not connecting data generated by “things”. The amount of machine-generated data has exponentially increased over the years. LPWAN technology offers aspects where others simply can’t compete:
-        10-year sensor battery life
-        20 km data reach with just a single miner
-        Extreme amounts of connection points (over 60,000 for a single network cell) supported by LPWAN miners at an extremely low cost


The solution MXC offers compared to current wireless networks is far superior. Illustrated in [Figure 1](#fig1) above, LoRa and NB-IoT are simply the most potent solutions on the LPWAN market. While covering local indoor areas, MXC is planning to offer LEO satellite infrastructure that can even support mobile devices for transmitting data.


#### 2.1.1 LoRaWAN

LoRaWAN has entered the atmosphere as an open-source protocol defined by the LoRa Alliance. This protocol is supported and underwritten by industry giants such as Cisco, IBM, Alibaba, and many more. The advantages of LoRaWAN are the coverage of open space, low data rates (low-levels of kbps (kilobits per second)),  and ultra-low power that allows for 10 years of continued operation on a single battery.

Both gateways and sensors use the LoRaWAN protocol. Devices of any brand are compatible and can be supported and connected to the network as long as they operate on the same LoRa/LPWAN protocol. The MXProtocol is an even better version of the LoRaWAN protocol in various ways. All the LoRaWAN devices are easily integrable and can be connected to the MXC ecosystem by provisioning them to join the network.


#### 2.1.2 NB-IoT

NB-IoT is a narrowband radio technology that’s specified by 3GPP as a licensed telecommunications protocol. NB-IoT lays its focus on mobile communication, low throughput, and long battery life principles, enabling a larger number of connected devices to this network.

The advantage for MXC IoT users is that it gives every individual the power to host their own network wherever and whenever they would like. Compare this with the NB-IoT base stations (which are owned by telecommunications conglomerates) who charge users expensive SIM Card fees to send data packets over the internet through the NB-IoT protocol, and advantages become readily apparent.

The MXProtocol supports all of the aforementioned LPWAN technologies,  LoRaWAN gateways, and LoRaWAN sensors. That’s decentralization and the advantage of running on MXC. 

#### 2.1.3 Deployment considerations

When deploying LPWAN, the first consideration is to understand how to enable the community to maintain the quality of services for the network. Generally, the issue comes from the fact that the community members are mostly radio amateurs that know little about how radio stations work.

As a result, it is typically hard to reach a consensus between these networks, and thus the deployment suffers as the network usage increases. The decentralization and distributed mechanism of the MXProtocol solves this issue by coordinating the networks via blockchain. The network evolves by having users pay for the services like Proof of Location, or NFTs that another one offers. Another consideration pertains to the requirements for individuals and small to medium enterprises (SMEs) to authenticate the location of their devices using LPWAN technology. Within LPWAN, both the data stream and Proof of Location features are simplified, easy to read, and can be digitally validated from many kilometers away. This makes the data service a clear necessity for the needs of the LPWAN market of tomorrow. With respect to the needs of individuals or SMEs, it’s likely that such enterprises will wish to deploy their own LPWAN to cover an entire city or a region for its own specific applications such as asset tracking (e.g. automobile) or sensor data management. This is a perfect solution for “large enterprises”. With its long-range capabilities, LPWAN technology ensures that sensor data is securely transmitted as per the protocol design.

This leads to one of the key aspects of the MXProtocol: making the network open and free, while enabling communities to achieve more. Using the MXProtocol, services within the LPWAN infrastructure will provide third party sensors/end devices, ensuring that the location is conveniently, correctly, and concisely transmitted securely, while being maintained by the support of Supernodes. The industry has been waiting for a decentralized and consensus-based mechanism to improve the usability of LPWAN, and MXC is delivering this.


### 2.2 Satellite LEO
LPWAN mostly covers low data-rate technologies such as NB-IoT and LoRa. The introduction of our MXProtocol elevates IoT technology to another level and can support LEO (Low Earth Orbit) satellite networks that are active at an altitude between 20 and 40 kilometers.

A great complement to this are low data-rate technologies. LEO satellites function as a data channel for devices to connect to the metaverse, which would make the decentralized network much more versatile. MXC can provide stable broadband internet to the public by connecting LEO satellite data with miners powered by Web 3.0 technology.

#### 2.2.1 Broadband Web3.0 network
The 802.11ax standards are designed by the IEEE Committee in order to facilitate the low-power fast throughput of the network. This will allow users to use upwards of gigabits of throughput while keeping the power consumption at 1/10th of what 5G uses. With the MXProtocol we are aiming to integrate LEO satellite technology with 802.11ax as a part of LPWAN in order to deliver a comprehensive data network access to a wider public and allow more devices to connect from ground miner units.

#### 2.2.2 Deployment considerations
Users normally don’t give other users access to their home network where personal home devices are connected. It’s of great importance to differentiate home networks and LEO satellite networks due to user agreements in regard to data transfers. Not everyone wants to share their data with businesses. In addition to this, usually LEO satellites with dishes as antennas need to face a clear sky view in order to have a stable connection with a wide reach. Therefore, using high-performance antennas on LEO satellites is needed to make sure that the home network is accessible from the ground. This feature is considered thoroughly by MXProtocol.


## MXC economy


MXC offers a decentralized “Free and Open Network to All” with collaboration opportunities for the global AI (Artificial Intelligence) industry, the blockchain economies built on Web 3.0, and the metaverse. Any kind of data will be able to be shared on a mass scale with infinite possibilities - permissionless, scalable, and trustless while still ensuring complete end-to-end privacy. MXC tokens tend to be distributed amongst the data owners, data receivers, and data network hosts, allowing for a facilitated cross-over from a commodity-based token into an everyday trading currency in Web 3.0 and the metaverse.

### 3.1 Edge AI platform

The MXC token is a special utility token that is uniquely designed to bridge the current commodity-based trading of cryptocurrency tokens and the devices connected to the global economy. MXC is disruptively utilizing the “sharing economy”, and uses this as an accelerator, allowing large businesses, SMEs and individuals to collect GDPR/CCPA-safe and regulated data from daily scenarios using Edge AI.

An advantage of the Edge AI platform is that it's built with the MXProtocol and connects all the devices that are equipped with neural network hardware capacities. In order to analyze data patterns, the gathered data will be compressed in a package of results and be sent through the MXProtocol to the users. This also emphasizes that the GDPR and CCPA requirements are fulfilled concerning privacy related patterns like human faces or paces that are not pre-trained in the platform. No personal or privacy-related data will be collected, as it is automatically ignored by the hardware neural networks.

Businesses will be able to benefit from this by using these user-based networks to send the validated NFC data for NFT services, and Edge AI data that allows the metaverse to sense the real world. Wallets are stored in the cloud, allowing individuals to benefit from businesses’ Edge AI data and NFC validated data via their LPWAN. The tokens are then sent from the device owners that MXProtocol addresses to the Supernodes for using the service. 

The MXProtocol incentivizes network participants to use, deploy, and trade their Edge AI devices and network elements. In addition to that, it is a people-owned secure and private network that won’t incur GDPR and CCPA violations in regard to collecting personal data.

### 3.2 Blockchain Non-Fungible Token

Meta X Connect and its affiliates have been highly successful with regard to the design and production of high-end LPWAN hardware. The token utility of the sharing economy will allow for a massive influx of Non-Fungible Tokens (NFTs) amongst individuals and companies, supplying better access towards artworks, agricultural products, luxury items, and unique creations. NFTs are also the foundation of the metaverse and a large variety of Web 3.0 applications.

MXC NFTs open a completely new door and new way for individuals and companies to both trade and manage their unique assets. The current assets that are seen as commodities are easily pirated and can be reproduced by anyone without any of them knowing that the data has potentially already been corrupted, seen, and/or shared amongst potential competitors/untrusted parties. LPWAN NFTs allow corporations and individuals to track both physical goods and tangible datasets, ensuring that the buyers/receivers of the goods are the only parties who have received these data/physical goods, and for this information to come from a qualified and reliable source.

LPWAN NFTs bridge the digital world with real-world assets, since each item will have its unique identity that is verifiable on the blockchain through MXProtocol. This adds a great usability to the current NFT exchanges that only support digital products. By applying LPWAN NFTs, individual items can be allocated to one dedicated source. Contrary to this, a buyer of a tangible product, for example, like Nike shoes with a QR code, has no way of knowing that the same shoe hasn’t been sold/reproduced and assigned to potentially multiple parties.


### 3.3 Data bloom

MXC is a decentralized blockchain-based AI platform with both narrow- and broadband networks, designed to revolutionize three core functions based around Web 3.0 and the metaverse industry: data collection, data transactions, and data visualizations.


#### 3.3.1 MXC-assisted parking

The future is here. The one constant evolving technology in everyone’s life from now is the amount of data accelerating and surrounding all of us. In the past, these kinds of statements were referred to as “people-generated data”. The times are changing, and the era of “machine-generated data” is taking over at a phenomenal rate.

The beauty of machine-based generated data when compared with human-based data is that it doesn’t sleep. Machine-based data is constant, and its reliability is unmatched when comparing to people-generated data. MXProtocol brings an unparalleled Edge AI platform that can process data according to pre-trained patterns while protecting data privacy, since all the data patterns that are not trained will be ignored. We call this Edge AI computing.

Google Maps or Here Maps are navigation apps that route people to street parking. Their app features are to show people how many parking lots are available at the final destination of the user. This super simple act of reporting parking lots may seem like an impossible task, but it in fact requires planning and close partner management: When do cars leave? How often should the parking management system report? How many employees are required to report parking lots across the city? MXC simplifies such tasks using MXProtocol.

Deploying and utilizing the Edge AI Camera situated above the streets, allowing analysis of parking data sent via M2 Pro Miners, enables the dApp to report parking lots in real time while still complying with the GDPR and CCPA regulations. What does this mean for the public?

- Saving fuel: Cars that are looking for parking lots will plan the route ahead, as opposed to circling close to their destination in order to find an empty spot, irrespective of whether the street is full or someone is waiting for a spot.
- Business insights: Useful information about parking is collected, including but not limited to: Which brands of cars pass by? How often do cars park? How many people are passing by? Businesses can gain insights on how and which activities and compositions of the neighborhood take place and are able to plan their products and promotions targeting the neighborhoods more efficiently.

- Reducing traffic congestion: Parking your car can be frustrating when searching for empty parking spots. This can increase general traffic significantly. Being aware of the availability of parking lots in certain areas can reduce traffic congestion, thus allowing for a smoother and more efficient traffic flow.


Many of the above highlighted aspects make up the chain of events associated with what are deemed menial tasks but, as shown, the downstream effect is quite significant. The MXProtocol and Edge AI are ready to solve such issues, allowing for simple tasks to be categorized and to ensure that the exact resources that are needed are allocated in the correct way.

#### 3.3.1 MXC-assisted IoT NFT

Utilizing LoRaWAN tags, M2 Pro Miners and gateways can heavily increase the usability of blockchain-based NFTs.

Adding LPWAN tags on any items such as artworks and luxury goods allows individuals to build their own IoT NFT, free from third party firms and networks charging exorbitant costs. IoT NFTs are also blockchain certificates of offline items that can’t be duplicated or eliminated.

The benefits of doing this for an artist is to allow them to issue their own artwork NFT without the need to understand blockchain technology. Using LPWAN significantly reduces the costs, especially when compared to the costs of issuing IoT NFTs using a SIM card.

In addition to artworks, luxury products and expensive machines can be verified as NFTs via LPWAN and NFC, increasing the security, traceability, and authenticity for users, all at a very low cost compared to current methods.

By bringing such key services, MXC provides transparency, which greatly enhances the customer's experience. MXC’s mission is to intensify the sharing of data while forging a union between blockchain, and data service needs, and those without finance but who have access to the network integration and distribution, eliminating borders, intermediaries, and prejudices.

The MXProtocol lays its focus on three foundational pillars:


1. Extending and supporting the massive AI and blockchain data economy
2. Utilizing the decentralized sharing economy
3. Exchanging assets within the current blockchain economy

The MXProtocol connects “things” together utilizing a market-based economy, which adds a plethora of new transmission points allowing more data to be shared, traded, sold, and analyzed for data mining.

Within the decentralized economy of MXC, everyone can validate from the sharing of data; end-to-end encryption grants the authorization of uses of NFT data. In addition to this, entire communities can benefit from transmitting their locations and acting as a network facility to transport the data gathered, bridging the real-world with the blockchain economy.


## 4. MXProtocol stack

The MXProtocol infrastructure consists of IoT NFTs, Edge AI devices, M2 Pro Miners, and cloud solutions. IoT NFTs and Edge AI devices collect data from “things”', data is then sent to the cloud via LPWAN and LEO satellite miners. This is specifically designed to be a decentralized solution, allowing everyone to suit their/the market’s needs. The usability of the hardware is designed as a “plug and play” approach/solution, making installations simple without the need for a professional configuration or technical background. It is designed to be easy to set up and to share the data.


The illustration in [Figure 2](#fig2) demonstrates the flow of MXProtocol, or how LPWAN miners connect to each other in order to form either a decentralized mesh network as a collective cloud or the internet. The IoT NFT and Edge AI devices all communicate with the M2 Pro Miners and/or gateways using LPWAN or LEO satellite technology for bidirectional communication. Notably, the IoT NFT and Edge AI devices are not purely limited to a few products or communication methods. In fact, any LoRaWAN compatible sensors can connect to the decentralized LPWAN network and start sending and receiving messages through Proof of Location by MXC’s device provisioning design.

Device provisioning allows the transfer of MXC from device payments, distributing the tokens to miners according to their Meta-XP, in direct proportion to how long they stay on the network and how well they maintain the devices. In addition, the MXProtocol facilitates the data and value flow of the LPWAN connectivity and makes the network more robust. Inside the ecosystem, each IoT NFT and Edge AI device has a unique MXC wallet within the dedicated Supernode and is assigned to an individual user. This is required in order to both pay for the network provisioning services and to receive mining from miner health services. 

Coinciding with the current LPWAN infrastructure protocols, the data links between M2 Pro Miners and IoT NFT/Edge AI devices are unregulated. As a result, there is no possibility to incentivize for forwarding data from the sensor to Supernode levels via the M2 Pro Miner. This means that, ultimately, the downlink resources would be free – as we believe they should be – only being allocated on a “first come, first serve” basis. There however is a possibility to set up bidding mechanisms for miners to offer premium features and services.

Proof of Location is the key functionality of the network, as miners can triangulate an object’s location thanks to precise GPS timestamps and the design of the LPWAN chip. It would be extremely hard, if not impossible, to fake a location of the object by feeding them wrong GPS coordinates. MXC’s LPWAN infrastructure solves the problem of robustness and the inequality of the network income, delivering the ultimate user experience to SMEs and MNCs.


<a name="fig2"> </a>
<figure>
  <img src="/img/mxprotocol/fig2_dataflow.png" alt="dataflow" width="100%" />
</figure>

MXProtocol facilitates the data and value flow of the LPWAN. Inside this
ecosystem, each IoT NFT and Edge AI device has a MXC wallet in Supernode assigned to an
individual user. This is required in order to both pay for the network provisioning and
to receive mining from miner health services. The device wallet is stored
in the Supernode server in order to maintain the LPWAN low-power requirements. This is also
due to the fact that the CPU is usually resource-constrained. The same wallet is
used as the miner wallet (also found in a user account and stored in the
Supernode). This wallet will receive MXC tokens from transporting the data from
the Supernode to the devices and assists in paying for the other LPWAN’s resource or
data or relevant services.

Coinciding with the current LPWAN infrastructure protocol, the data link between
the Miner and IoT NFT/Edge AI devices is unregulated. As a result, there would be
no possibility to be rewarded for forwarding data from the sensor to supernode via
the Miner, and ultimately the downlink resource would be free, only being
allocated on a “first come, first served” basis. There is also a possibility to setup bidding mechanism for miners to offer premium services. This design with a proper Miner health metrics such as fuel tank can distribute the mining outcome much more better than other designs such as monetizing the downlinks or halving. 

Proof of Location is the key functionality of the network as the miners can triangulate an object's location thanks to precise GPS timestamp and the design of the LPWAN chip. It would be very hard to fake a location of the object unless you cheat 51% of the miners by feeding them wrong GPS coordinates. MXC LPWAN infrastructure solves the problem of robustness and the inequality of the network income,
delivering the ultimate user experience to SMEs and MNCs.

<a name="fig3"> </a>
<figure>
  <img
    src="/img/mxprotocol/fig3_MXProtocol_stack.png"
    alt="dataflow-mxprotocol"
    width="100%"
  />
</figure>

[Figure 3](#fig3)  illustrates the detailed technical stack of the MXProtocol infrastructure. The decentralized and autonomous LPWAN can be built on any permissionless blockchain, such as Ethereum or DataHighway.

All LPWAN devices and miners are connected to the Supernodes that are hosted by blockchain companies, infrastructure companies, or even individuals from the community – this is all made possible by the MXC Controller. Based on this, the multi-token mining between LPWANs, Meta-XP and device provisioning are introduced to answer the LPWAN deployment considerations, as mentioned in [see 2.1.3](#213-deployment-considerations). The inter-chain data NFT marketplace is designed to facilitate the data movement between different LPWAN and dApps. Anyone can easily build the network for the metaverse and teleport the offline world to the online world by collecting the data from devices. 


### 4.1 Blockchain Supernodes.

There are various unique blockchains that each serve a different purpose. Anyone can use cryptographic keys, anyone can be a node and join the network, and anyone can become a participant to serve the network and seek validation like DataHighway, Polkadot, or Ethereum. Participants can walk away from being a node, return if and when they feel like it, and get a full account of all network activity since they have left. This is true decentralization.

In a permissionless blockchain like DataHighway, anyone has access to read the chain, anyone can make legitimate changes, and anyone can write a new block onto the chain as long as they follow the given rules. The decisions for permissionless blockchains are made by the network participants in the structure of a decentralized autonomous organization (DAO). The protocol is based on a consensus protocol. The permissionless blockchain provides a way to reach a consensus without the need to rely on a closed system called “Supernode” to accurately record financial transactions.

Anyone can host a supernode, as the process is automatically judged by MXC holders. The onboarding of Supernodes requires the following metrics:

  - A lock of 6 million MXC towards the Supernode for liquidity provisioning
  - A cloud server with enough resources

Anyone who fulfills the metrics will need to attend a governance event such as a referendum to become a MXC Supernode to facilitate the data movement.

The MXC Supernodes are designed as a layer-2 solution for billions of devices to let them interact with each other, and then book the necessary transactions to the permissionless blockchain.

#### 4.1.1 Features

The MXProtocol exists as an inclusive platform where all participants are encouraged to contribute. It is backed by the resources of numerous tokens, institutional investors, exchanges, and supporters based on a permissionless blockchain protocol. The permissionless blockchain design makes the MXProtocol efficient and independent; the more people that use it, the more robust the network will be.

The blockchain has four key properties: decentralized control, low latency, flexible trust, and asymptotic security. In other words, the MXProtocol should run on a permissionless blockchain that has:

  - A true decentralized network
  - Quick transaction confirmation
  - An anti-spam feature. There should be a preventive measure against nefarious users flooding the network (a DoS attack)



#### 4.1.2 Security and efficiency

There should be a blockchain providing more privacy and efficiency for businesses and individuals collectively. The MXProtocol needs to be run on a secure and efficient blockchain that can provide the devices with good connectivity.

The LPWAN applications introduced by MXC require further fragmented and discrete transactions for sensitive data and services in an IoT realm. That is why MXC continues to develop upon the permissionless blockchain, making the MXProtocol more efficient and more suitable for the needs of LPWAN and IoT applications.


#### 4.1.3 Long-term adoptions

The MXProtocol is a LPWAN platform protocol that brings efficiency and robustness towards the network and the users. For example, the more Supernodes in one region is not necessarily bringing more robustness to the network. There are, however, still several components inside the permissionless blockchain itself that the MXProtocol feels necessary to emphasize. For example, to ensure the long term stability of the LPWAN IoT projects, continued research is still required with regard to the current data interface. Real field deployment will need to be conducted in order to properly satisfy the plethora of data streams connecting from the LPWAN sensors/end devices and ensure they are routed through the network seamlessly.

## 5. Proof of Participation

Due to the governmental regulations within the LPWAN spectrum, downlinks are a precious resource that are closely guarded by sensors and end devices. The MXProtocol designed the Proof of Participation (PoP), which is a uniquely designed consensus that encourages the maintenance of the network and downlinks. As these networks are targeted for enterprises and companies, more aspects should be considered in this design.

The decentralized wireless Web 3.0 network is not like the distributed ledgers; the hardware stays in one place and provides the network resources to the vicinity. A key industry-wide challenge is how to encourage the community to put the hardware miner at a favorable spot and maintain the link resources without turning it off and stacking up together. PoP gives its own answer to the challenge. 

### 5.1 Goals of design

To further overcome industry-wide issues, the MXProtocol implements PoP with mining difficulty and miner health, designed to bring a high level of robustness to the network. Generally, public LPWAN deployments are pushed by both individuals and corporations who do so in order to maintain their reputations in that region. Introducing a PoP mechanism will cause network stability to multiply due to the fact that users can get more PoP validations with more reputation and vice versa. The purpose of this section is to examine the PoP design that would support a well-functioning LPWAN ecosystem. The goals of the designs are to:

  - Allocate network resources adequately
  - Allow all sensors/end devices to trust a decentralized network and use it
  - Offer network deployment validations, guiding a decentralized community to maintain a robust network
  - Ensure that the decentralized LPWAN services are robust
  - Power the decentralized network with autonomous governance to simplify and resolve any issues

### 5.2 Design and implementation


There are lots of variables, ranges, and methods relevant to PoP and its performance. The goal is to allocate the MXC validations to the most stable and committed miners. The design and functionality of PoP is proposed in [Figure 4](#fig4). Sensors/end devices pay for services like Proof of Location, NFTs and AI after they purchase the device provisioning services. This influx of payment and service fees will be needed to be distributed to all miners globally. Depending on the PoP design, this means that all miners in every corner of the world can enjoy the validations of the network if they maintain the Web 3.0 infrastructure. 



<a name="fig4"> </a>

<figure>
  <img
    src="/img/mxprotocol/fig4_mxp_pop.png"
    alt="MXP-pop"
    width="100%"
  />
</figure>

In the example illustrated in [Figure 4](#fig4), you can see that there are validation results needed in order to distribute the MXC to the multi-token miners thanks to the payment of the network services. Meta-XP functions as a checking protocol that determines whether miners are eligible to participate. If not, then the miner has to accumulate more Meta-XP in order to see the validation results. Meta-XP is designed in a way that the M2 Pro Miner will be able to mine for centuries. You can see Meta-XP as an additional protocol layer to the ecosystem. If the validation results are good, the miner has options to choose which token they would like to receive as results for validating, but this can also be multiple tokens. In MXC’s case, miners can receive MXC as validation results and participate in the MXC governance, including referendums or the election of Supernodes.

Usually, the different kinds of tokens users select, such as MXC, DHX, or BTC, increase network robustness since there are multiple assets staked and bonded. This also relates to Meta-XP and the PoP consensus mechanism.

### 5.3 Miner Health

SSensors and devices will already be aware of the status of the gateway in advance, to make sure that the appropriate bid for the resources and services are made, which are provided by the network. To motivate the network administrator to maintain a robust LPWAN network, we define the following metrics of the gateway to let sensors/end devices bid for the dynamic prices:

  - Mean time between failures (MTBF)
  - Gateway density
  - Fuel tank size
  - List of services available

The first key parameter used to measure the stability of the gateway on the network is to determine and measure the downtime. It is highly recommended that a smaller MTBF would be more ideal than a larger one; this is due to the quality of service (QoS) that is required for the sensors. Thus, the high QoS sensors/end devices are willing to pay for the more stable LPWAN gateways.

The gateway density parameter which is expected to motivate the network administrators to deploy more gateways in areas that have little to no coverage. As demonstrated, it’s already clear that sensors will be willing to pay for low gateway density with higher prices. Low density in the network means that the downlink channels and services are limited and that the prices will be high when sensors are competing with each other. Overall, it’s expected that this metric will push people to expand the network in order to provide a better network access to the LPWAN devices.

Fuel tanks are an innovative design that is similar to Proof of Stake (PoS), encouraging the network robustness and reaching a robust consensus mechanism. The MXC miner fuel tank is only available to certain brand miners due to the provisioning system design; other brand miners will not have fuel tanks, as the stability of that (3rd party miner) hardware is not guaranteed.

From time to time, LPWAN will provide a list of services, e.g. firmware upgrades, GPS-free localization, or network configuration optimization. This allows all hardware to be regularly kept up-to-date.

There are a more detailed page which detailed miner health design : https://github.com/mxc-foundation/developer-documentation/blob/main/docs/tutorials/m2-pro/miner-health.mdx

### 5.4 Meta-XP

To elaborate on Meta-XP, it is encouraging crypto users to maintain and build a commercial- ready and decentralized network. MXProtocol introduced the Meta-XP design to adjust the difficulty of the mining. Often we see in Bitcoin and Ethereum design that there are adjustments of mining difficulties depending on how many miners are participating in the network. MXProtocol introduces a similar idea, but Meta-XP is a coefficient from 0 to 1 that tells the network if a miner is more experienced in the network, and encourages them to switch from MXC single token mining to multi-token mining, so they can have the ultimate mining experience. The following are methods found in Meta-XP:

  - Hexagon Density
    - The current limit of the hexagon is 10: if there are more than 10 miners within a hexagon, the later joiners will have a lower Meta-XP. However, there will be implementations or options of adding more Meta-XP to the newly joined miners to promote competition.

  - Altitude
    - The network can gain more Meta-XP by increasing the deployment altitude; however, this metric is very hard to prove through air pressure or GPS coordinates since they can be easily faked. The MXProtocol designed Proof of Location to prove that the altitude is not tampered with. 

  - Total Uptime Accumulated
    - Meta-XP measures the stability of the miner by how long it stays on the network; the longer it stays on the network, the more robust the network will be. Blockchain should encourage miners to use the fuel tank filled to mine multiple tokens like DHX or BTC to future increase the network stability.


## 6. Multi-token mining

With the increasing amount of LPWAN field deployments, the requirement of the stability and the robustness of the network is also increasing.

In 2025, there are expected to be more than 250 billion devices connected to the internet. If the majority of these are to use LPWAN, it can be assumed that it would put quite a demand on the network. As a result of this, the MXProtocol infrastructure has bridged the gap between different networks using the innovative protocol.

### 6.1 Goals of the design

MXProtocol also allows for multi-token mining payments to the network, including multiple cryptocurrencies such as BTC, DOT, ETH, KSM and beyond. When the network is supplied with multiple tokens, the stability and robustness of the network should be stronger than single token mining.

We define goals of the design for the LPWAN ecosystem below:
  - Minimize the M2 Pro Miner downtimes in the region deployed with multiple sensors already using the network.
  - Allocate network payments to the M2 Pro Miners that empower the networks.
  - Enable individual miners to choose the network validation results to diversify their holdings.
  - Settle all monetary transactions in multiple currencies where the MXC token will be used as a utility and governance token.

### 6.2 Design and implementation

The design of multi-token mining is illustrated in [Figure 5](#fig5). The M2 Pro Miner owners are able to choose which cryptocurrency to mine. MXC should be locked in the corresponding wallet to mine from the pool of the paid network services. In the example illustrated in [Figure 5](#fig5), we see that the M2 Pro that mined 100 MXC at the start and now is able to bond these MXC towards any desired cryptocurrency mineable.


<a name="fig5"> </a>
<figure>
  <img
    src="/img/mxprotocol/fig5_multi.png"
    alt="multi-token"
    width="100%"
  />
</figure>

The BTC or other token mining pools are subject to the MXC controller payment for gateways, in which there are more tokens that can be selected and paid from fiat currencies. The pool size will change after a certain period of time as the NFTs and sensor devices are connecting from more places.

Such multi-token mining is expected to occur quite often when future deployments of LPWAN sensors become more dense. A multitude of tokens staked in the network is more stable as a single token pull out won’t affect the network. Thus, the multi-token mining solves the problem of the network stability in a free-licensed band completely.


### 6.3 Third party integration

It is also possible to integrate third-party LPWAN miners to the MXC network, which will also enable the multi-token mining for other brands.

As [Figure 6](#fig6)  shows, the MXC controller enables the miners to integrate with the LoRaWAN protocol to mine multiple tokens. It will create a fuel tank like the other M2 Pro miners and enable the data validations in the MXC network, but these third party miners are not equipped with location engine chips. They can’t provide Proof of Location and other services to the network, thus the participation cannot be that active as the M2 Pro’s participation.


<figure>
  <img
    src="/img/mxprotocol/fig6_thrid-party.png"
    alt="third-party-integration"
    width="100%"
  />
</figure>

## 7. Inter-Chain Data Market

Cryptocurrencies such as Streamr and IOTA all provide mechanisms to make sure that the data stream can be copied and transmitted from the owner to the consumer sequentially.

Is this successfully delivered? In these cases, the smart contract must rely on external oracles from either the GPS data from the package or the LPWAN tag reading from the warehouse. The entire industry continually requires chains such as MXC to feed other chains smart contracts and the interdependent information to the applications.

Oracles are third party services which are not part of the blockchain consensus mechanism. The main challenge with oracles is that people need to trust these sources of information. Whether a website or a sensor, the source of information needs to be consistently trustworthy. In order to solve these issues, MXC proposed data as NFTs to work as oracles.



### 7.1 Goals of the design

Blockchains support NFTs in order to assist with exchanging external data. The reason for this comes from the fact that blockchain applications such as OpenSea and RMRK exchange external data like pictures or music files between each other. As a result, they require location, real-world data feeds for assets and financial applications, and weather-related information for peer-to-peer insurance, all written with NFTs. Here we define the goals of the MXProtocol data market with respect to designing data as NFTs (DaN):

  - Facilitate data usage between different blockchains
  - Establish a trusted resource for the external oracles
  - Enable the purchase of a live real-world data stream
  - Provide APIs for non-blockchain applications to access the data


### 7.2 Design and implementation

The MXProtocol interchain data market is built on both Ethereum and the DataHighway blockchain and provides an effective method to feed the other applications with LPWAN data NFTs captured by sensors and/or end devices.

<a name="fig7"> </a>
<figure>
  <img
    src="/img/mxprotocol/fig7_inter_chain_market.png"
    alt="inter-chain-data-market"
    width="100%"
  />
</figure>

[Figure 7](#fig7) shows the example of the transaction between MXProtocol Data and blockchains like Ethereum and DataHighway. MXProtocol feeds data to Ethereum/DataHighway as NFTs, and gets ETH/DHX payments as compensation. It only requires a simple protocol to trust that the data fetched from the MXProtocol data source is genuine and has not been tampered with. In addition to this, the rich data stream can also be used by external non-blockchain applications via Web APIs after the NFT is purchased by the Web 2.0 companies. 

Major blockchains like Ethereum and Polkadot are short in data for dApps, and the data that is provided by external Oracles aren’t essentially trustworthy. With the MXProtocol Inter-Chain Data Market, the generation and flow of the data can be tracked and verified publicly on the chain. Hence, the security issue for NFT real-world data is solved internally with MXProtocol.

### 7.3 Polkadot and Cosmos

Polkadot is essentially a protocol that communicates between different networks. It solves consensus and transaction deliveries between different chains. DataHighway is a project that is built by an ex-parity team as a DAO.Featuring a parachain as a service, DataHighway will be the project to host all kinds of real-world data NFT transactions.

Cosmos is created to be the interface between blockchains and smart contracts. Instead of using relay-chains as shared security, Cosmos’ design provided inter-blockchain communications protocol (IBC) hub infrastructure for holding and transferring the interchain data to the smart contracts. 

The MXProtocol inter-chain data market uses the idea and mechanisms developed by both Polkadot and DataHighway to deal with the consensus, privacy, transaction deliveries and security. A separate whitepaper on DataHighway is released to elaborate on this design.
## 8. Proof of Location

### 8.1 Goals of design

A location is a very rare resource that needs to be calculated by radio signals. Currently, there are three methods to calculate a location. First is a GPS signal, which only works outdoors, and can easily be tampered with as GPS radios can be emulated by software to fake a location. Secondly, IP address calculations, this is a database technology that relies on the accuracy of the data input about a certain IP address, and often a VPN service can get a new IP for you to fake a location. Thirdly, a Bluetooth-based location tracking, companies such as Apple are using it and it is hard or nearly impossible to fake the Bluetooth receiver that is held by the general public, as they pass by the Bluetooth tags and tell the network the exact location of the object in a decentralized approach.

MXProtocol designs the Proof of Location to solve the problem that Bluetooth often fails to solve – distance. While Bluetooth only reaches 100-200 meters, MXC miners can reach 1-40km to determine the location of the object in a decentralized way, as the miners are held by different users. 

Proof of Location is a localization algorithm that utilizes LPWAN uplink data with timestamps to triangulate the location of LPWAN sensors and M2 Pro miners, in order to triangulate the sensors, the algorithms firstly confirm the location of the miners with the downlinks they sent to the sensors. With regular downlink peer listenings, the algorithm is able to filter out the tampered miner locations as they can’t be heard by peer M2 Pro miners. Those miner locations are confirmed by the Proof of Location and then can respond to the uplink request for location services.


<a name="fig8"></a>
<figure>
  <img src="/img/mxprotocol/fig8_LPWAN.png" alt="LPWAN" width="100%" />
</figure>

In [Figure 8](#fig8) Figure 8 we can see how a sensor NFT’s Proof of Location works. Firstly, the sensor sends data that can be picked up by the miners as usual. Each data packet will be time stamped in the miner with precise time of arrival; this feature is executed by the hardware chip inside the M2 Pro miners. The third party miners won’t be able to provide this service due to the hardware limits.

Next, the MXC Controller needs to rule out the tampered locations of the miners or inaccurate ones with bias and peer Proof of Location data, if the miner is not physically located there or always changes locations, the Proof of Location can easily exclude this kind of data. Time difference of arrival (TDOA) based on location requires at least 3 miners with valid locations to calculate; the more miners present, the more accurate the location data will be.

All the miners that can provide Proof of Location will be able to validate more MXC results than the third party miners.


### 8.2 Design and implementation

It is expected that miners need to be equipped with Semtech SX1303 chips or others that have accurate timestamp functions in order to provide the location services.

The bias and credibility of the location data feed is also dependent on the Meta-XP and miner health factors of the miner, as the location data is mostly self-reporting and peer verified by the Proof of Location networks that are built by the community.


### 8.3 MXC Controller

There are lists of services that LPWAN can provide to the sensors/end devices. For example, an over-the-air firmware update should be multicasted to the sensors and calculate the position, which requires no computation for the resource-limited sensors.

Such a service requires resources of both a miner and the Supernode. Hence, MXC Controller will specify whether it is willing to pay for the service and its accuracy. The more gateways that receive the packets, the more accurate the position will be.

In addition to this, data NFTs can also facilitate data transactions and would need a service to provision and provide the NFT to the blockchain. MXC Controller is designed to bridge the users and supernode/miners for NFT provisioning services.

Through the MXC Controller design, it is possible that the sensors/end devices pay 1 USD for lifetime free usage of the network, while choosing the available services to subscribe or pay. The outcome of the design will be as follows:

  - Some sensors/end devices get the services and the resources that they demand through auction
  - Network deployments receive a compensation by offering services and resources to the LPWAN sensors/end devices
  - All the monetary transactions are done automatically in MXC/BTC/DOT without human intervention


## 9. Development progress

Meta X Connect’s partner MatchX has released the MatchX LPWAN gateway, the M2 Pro low-power multi-token miner, and the LPWAN module with development kits. It has reached more than 170 countries with distributors in Australia, North America, Asia, and Europe.

## 10. References

- _What is LPWAN (low-power wide area network)?_ - Definition from WhatIs.com.
  (2018). IoT Agenda. Retrieved 8 January 2018, from <http://internetofthingsagenda.techtarget.com/definition/LPWAN-low-power-wide-area-network>
- _LoRa Alliance._ (2018). LoRa Alliance. Retrieved 8 January 2018, from <https://www.lora-alliance.org/>
- _Skywire and Viscript | Skycoin Blog._ (2018). Blog.skycoin.net. Retrieved 8 January
  2018, from <https://blog.skycoin.net/skywire/skywire-and-viscript/>
- _Skywire - Skycoin Meshnet Project | Skycoin Blog._ (2018). Blog.skycoin.net. Retrieved
  8 January 2018, from <https://blog.skycoin.net/overview/skywire---skycoin-mesh-net-project/>
- _contributors, S._ (2018). Create an Account | Stellar Developers. Stellar.org. Retrieved
  5 February 2018, from <https://www.stellar.org/developers/guides/get-started/create-account.html>
- Kusmierz, B. (2017). _The first glance at the simulation of the Tangle: discrete model._
- Popov, S. (2016). _The tangle._ IOTA.
- Kim, J. (2014). _Introducing Stellar - Stellar CN._ Stellar CN. Retrieved 5 February
  2018, from <https://www.stellar.org/cn/blog/introducing-stellar>
- _Ethereum Project._ (2018). Ethereum.org. Retrieved 8 January 2018, from <https://
  www.ethereum.org/?
- _Blockapps Developer Edition._ (2018). Developers.blockapps.net. Retrieved 8 January
  2018, from <https://developers.blockapps.net/>
- _RSK._ (2018). RSK. Retrieved 8 January 2018, from <https://www.rsk.co/>
- Dudley, J., Hochstetler, G., Dudley, J., Hearn, M., Hearn, M., \& Hearn, M. (2018).
  _Corda: Frictionless Commerce._ corda.net. Retrieved 8 January 2018, from <https://www.corda.net/>
- _LoRaWAN in Europe._ (2017). Matchx.io. Retrieved 8 January 2018, from <https://matchx.io/community/eu/12-lorawan-in-europe>
- _LoRaWAN regulations in Korea, Australia, India Japan and South East Asia._ (2017).
  Matchx.io. Retrieved 8 January 2018, from <https://matchx.io/community/world/13-lorawan-regulations-in-korea-australia-india-japan-and-south-east-asia>
