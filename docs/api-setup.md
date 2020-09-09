---
id: api-setup
title: Setup
sidebar_label: Api
---

## Api Setup

To host the project its highly recommended to use firebase functions. This guide is also written for this setup specificly. 

Follow the setup described [here](https://firebase.google.com/docs/cli), before continuing.

Then go to the top folder of both the mobile app folder and api in your terminal and run `firebase init` then enable both `Functions: Configure and deploy Cloud Functions` and ` Hosting: Configure and deploy Firebase Hosting sites`. 

This should setup the firebase project, if there are any issues during the setup please contact us.

To deploy the api run `firebase deploy`.
 
