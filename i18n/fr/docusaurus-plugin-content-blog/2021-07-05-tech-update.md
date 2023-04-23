---
slug: 07-07-2021-05-Mise à jour technique
title: Mise à jour Tech - 5 Juillet 2021
author: Jeff Stahlnecker
author_title: Responsable du développement à la Fondation MXC
author_url: https://github.com/jeffstahlnecker
author_image_url: https://avatars.githubusercontent.com/u/16069751
tags:
  - mise à jour technique
  - datadash
  - supernode
  - dhx
---

Bienvenue à la toute première mise à jour MXC tech !

Cette semaine, l'équipe technique a été extrêmement occupée. Tout au long du sprint passé, nous nous sommes concentrés sur la réussite de tous les projets en cours. Cela nous a ramenés à quelques éléments « à faible accroche » qui ajouteront une valeur EPIC à nos utilisateurs — en particulier ceux qui sont intéressés par la connexion de périphériques LoRa.

## Approvisionnement de l'appareil
Notre ingénieur de backend Lixuan a testé dans les moindres recoins le système d'approvisionnement de l'appareil construit par Ian pour s'assurer qu'il était prêt à être ajouté à notre code live. Elle a résolu un certain nombre de conflits (le provisionnement de l'appareil est *prêt* depuis janvier!), puis a effectué une série de tests rigoureux. Cela a été fait en collaboration avec l'ingénieur logiciel de MatchX, Ian. Ils ont fait du très bon travail, et vous verrez que l'approvisionnement de l'appareil sera disponible dès le début de la semaine. En attendant, vous pouvez consulter la documentation technique ici : [FAQ approvisionnement de périphériques](/docs/tutorials/devices/provisioning)

Dans le cadre de notre focalisation sur les appareils au cours des deux dernières semaines, Lixuan a également résolu un problème qui a empêché les utilisateurs d'ajouter de nouveaux périphériques sur une supernode. We should be in ship-shape, and ready for some developer interaction. Feel free to send us your feedback! :)

## Foundation for DHX Simulator Improvement
The DataDash DHX Simulator has been a long-standing issue. While it works, it's a little buggy, and once in a while spits out something unexpected. Our backend developer Pavel decided enough is enough, and jumped in to solve the challenge of the buggy simulator. To accomplish this he brought together the required information from a ton of different sources and built an API for the DataDash team to integrate. For those developers out there, I'll update this post with a link to the API as soon as it is live.

## Improved Technical Support
We've been working hard to improve the technical support services provided by both MXC and MatchX. Our Tech Support Engineer Latifah has been hard at work building a ticketing system, integrating Discord, writing an internal support knowledgebase, while naturally also responding to your support requests. She's done an excellent job, and has set a strong foundation for reliable support moving forward.

## Cleaning up the DataDash
Over the past two weeks our DataDash team has focused primarily on solving some pesky issues with the app. We also added support for DHX in the in-app address book. Just another feature to make life a little easier for you.

## Contributing to DataHighway
Team members Luke, Ayush and Christian updated the DataHighway blockchain to add multisig functionality. They also made a number of improvements, and fixed issues with the Harbour testnet. You can review the full release notes [here](https://github.com/DataHighway-DHX/node/releases/tag/v3.0.5).

That's the newest from Tech, and I'll be sure to update this post with that API link as soon as it goes live. 