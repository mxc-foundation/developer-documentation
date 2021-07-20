---
slug: 2021-07-20-tech-update
title: Tech Update - July 20, 2021
author: Jeff Stahlnecker
author_title: Head of Development @ MXC Foundation
author_url: https://github.com/jeffstahlnecker
author_image_url: https://avatars.githubusercontent.com/u/45363541?v=4
tags: [tech update, datadash, dhx, mxc controller, device provisioning]
---

It's hard to believe it's been another two weeks --- and we've been EXTREMELY busy polishing up some pretty epic features. 

### All About Device Provisioning
It took us quite some time to get the [device provisioning](/docs/tutorials/devices/provisioning) developer preview ready. A bit longer than expected. Device provisioning interacts with a number of supernode systems on a regular basis, meaning that each of these interactions had to be thoroughly tested. During that process we found some items that could cause issues when the system scales, so we went ahead and took the time to resolve those before pushing out the feature. I'm excited to say that the device provisioning developer preview is now live and ready for action. If you want to get a manufacturer ID and begin testing the system, email support@mxc.org.

In the meantime, Ian is actively working on providing a sample lora device source code to make it easier for manufacturers (and tinkerers) to get started.

### DataDash Goes Dark (for beta testers)
That's right! We're working hard on getting dark mode out there for all of you night owls. If you want to get a sneak peek at dark mode and provide some epic feedback for us, you can join the live beta by using the command `!role ios` or `!role android` in our [Discord Community](https://mxc.news/discord). This will get you access to the dedicated beta channel for your phone, which provides you with the information you need to get signed up. 

:::caution

Beta releases have bugs. By joining the beta, you will experience these bugs. If you find an issue, always report it directly to us in our [GitHub Repo](https://github.com/mxc-foundation/supernode-app/issues/new?assignees=&labels=bug%2Ctriage&template=bug_report.yml&title=%5BBug%5D%3A+).

:::

### Tech Support Continues to Amaze
Ok I just had to say this one. Yes it sounds markety, and I know not everyone is always amazed, but I'm very happy with it. Within a few weeks our new Tech Support Engineer Latifah has gone from "first day with LoRa" to actively troubleshooting miners, certifying issues, finding solutions for said issues, and of course ensuring that each member of our community receives top of the line technical support. 

Keep in mind, the only way to get "official" technical support is to email support@mxc.org or by using the `/support` command in our [Discord Server](https://mxc.news/discord).

### MXC Controller - the news on the Web App
For those of you digging into the nitty-gritty of the LoRa/LPWAN infrastructure, I'm sure you've noticed a few issues with the current web app. We know about those, and we're working on rolling out a new web app to solve all of these issues. Because we've decided to move from React to a Flutter based web app, it will take us just a bit of time to get started. 

This week we started cross-training our React developer Nam to start working with Flutter. While he's been studying, he also worked with the Flutter team to outline the base architecture of the application so that we can finalize the overall design in our upcoming sprint. 

The MXC Controller will be available as beta during development. This will provide you with early access to key pages, while keeping you informed that it's beta, and will probably have a few bugs.

:::caution

Beta releases will have bugs. Just pointing that out again.

:::

Our first release will include:
* Base architecture
* Sign-in / Register
* Device Management/Configuration pages

I'll keep you updated on the status of this as we move forward, and of course I'll share the GitHub repo when the development begins.


### Continuing our Contribution to DataHighway
We haven't forgotten DataHighway and we still strongly believe in the future of this project. Blockchain developers Luke and Ayush have been hard at work to both improve the DataHighway, and bring governance on chain. There's been some progress made in that direction, however we're being über careful. As we progress further with the development, we'll start contributing to the documentation as well to ensure it's easier for others to participate.

### Community Contributions
This documentation is fluid, and anyone can work to help improve it. If you see something that you know about, and feel confident writing an article about, feel free to fork the repo, make the changes, and submit a pull request.

Now I know that not everyone is familiar with GitHub. In that case, let me know on Discord and I'll open up a channel for us to chat. Either I'll teach you what you need to know to participate directly on GitHub, or you can just send me the article you believe should be in the documentation. 

That's been this week's news update --- uh yeah ok wrong channel. ;)