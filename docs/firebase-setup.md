---
id: firebase-setup
title: Setup
sidebar_label: Firebase
---


## Account setup

First, go to the [Firebase console](https://console.firebase.google.com/) and create a project if you don't already have one. After this continue to overview screen. 

## iOS Firebase setup

Now click on the iOS option to add an iOS app to the project. Fill in the required information and download the `GoogleService-Info.plist` file, now you can skip all the following steps.

Now replace the `GoogleService-Info.plist` file in `ios/Runner` with the one you just downloaded.

Open `ios/Runner/Info.plist` and replace `CFBundleURLSchemes` first array item with the `REVERSED_CLIENT_ID` that can be found in the `GoogleService-Info.plist` you just downloaded

    <dict>
            <key>CFBundleTypeRole</key>
            <string>Editor</string>
            <key>CFBundleURLSchemes</key>
            <array>
                <string>YOUR REVERSED_CLIENT_ID</string>
            </array>
    </dict>


 

## Android Firebase setup

Now click on the Android option to add an Android app to the project. Fill in the required information and download the `google-services.json` file, now you can skip all the following steps.

Now replace the `google-services.json` file in `android/app/` with the one you just downloaded.

## Messaging and social login setup

Messaging and social logins should be the same as this is on native platforms. For more information about this its best to check the documentation specifically made for the implementations. 

Most of this implementation is already done. Only keys and values should be changed.

 - [Google Sign-In](https://pub.dev/packages/google_sign_in)
 - [Facebook Auth](https://pub.dev/packages/flutter_facebook_login)
 - [Apple Sign-In](https://pub.dev/packages/sign_in_with_apple) 
 - [Firebase Messasing & Auth](https://firebase.flutter.dev/docs/overview)

## Issues

If you run into any issues during this setup, first contact us at joran@qreate.io or create a GitHub issue.
