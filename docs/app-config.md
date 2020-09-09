---
id: app-config
title: App Configuration
sidebar_label: App Configuration
---


## Change the basic config

The base settings are easy to change in the following file `lib/data/constants/app_config.dart` you should change the following things in the file depending on your requirements.

### Changing the in-app title 

Changing the in-app title can be easily done by changing the following section in the AppConfig mixin 

```dart 
  static String appName = 'YOUR APP NAME'; // <---- Your app name to display inside of the app
```

Were the variable `appName` would be your app name. 

### Change the basic image logo

By default, the image logo is loaded from a remote URL and can be easily changed by changing the following section in the app config.

```dart 
  static String imageUrl = 'YOUR IMAGE URL'; // Please make sure the url is https
```

### Checking you config

Please make sure that the AppConfig still contains the required variables shown down below.

```dart
mixin AppConfig {
  // General Config
  // In-app name
  static String appName = 'YOUR APP NAME'; // <---- Your app name to display inside of the app

  // In-app logo
  static String imageUrl;

  // Wordpress website base url
  static String baseUrl = 'YOUR WORDPRESS URL'; // <---- Your WordPress url, please make sure the url has a valid ssl cert

  // Your WordPress post categories with ids and titles to display on the home screen
  static List<NewsCategory> newsCategories = [ 
    NewsCategory(
      title: "YOUR CATEGORY TITLE",
      id: YOUR CATEGORY ID,
    ),
  ];
  // Sign-in Config
  static bool enableGoogleSignin = true;
  static bool enableFacebookSignin = true;
  static bool enableAppleSignin = true;

  // Profile Config
  static final List<MoreMenuModel> menuItems = [
    MoreMenuModel(
      "Contact",
      Icons.email_rounded,
      url: "https://newstime.qreate.website/contact/",
    ),
    MoreMenuModel(
      "About",
      Icons.info_rounded,
      url: "https://newstime.qreate.website/authors-page/",
    ),
  ];
}

```

## App icon
To change the app icon for both platforms simply replace the `icon.png` in `assets/icon/` with your icon. 

And then run ``` flutter pub run flutter_launcher_icons:main```.

## Android app and package name
### App name
You can change the app name by opening `android/app/src/main/AndroidManifest.xml` and changing `android:label="NewsTime"` in the application tag to a name of your choice.

### Package name
You can change the package name by opening `android/app/build.gradle` and changing the value of `applicationId` in `defaultConfig` to a value of your choice. You will also need to change the `package="com.qreate.newstime"` tag in `android/app/src/main/AndroidManifest.xml` .
## iOS app name and bundle id
### App name
You can change app name by opening `ios/Runner/Info.plist` and changing ```<key>CFBundleName</key>
<string>NewsTime</string>``` to ```<key>CFBundleName</key>
  <string>Your app name</string>```.
### Bundle id

You can change the bundle id by opening `ios/Runner.xcworkspace` with Xcode and change the `Bundle Identifier` on the Runner.


