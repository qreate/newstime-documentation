---
id: localization-setup
title: Setup
sidebar_label: Localizations
---

## Flutter localization setup

  
The flutter localization settings are easy to change in the following file `lib/data/constants/app_config.dart` you should change the following things in the file depending on your requirements.

``` dart
// Localization
  static final List<Locale> supportedLocales = [
    Locale(
      'en',
    ),
  ];
```

Afterwards, add your translation file to `assets/translations`, please check the `en.json` file for the structure and keys.

To enable languages for iOS open `ios/Runner/Info.plist` and add your language keys to the following array.

``` xml
<key>CFBundleLocalizations</key>
<array>
  <string>en</string>
</array>
```
