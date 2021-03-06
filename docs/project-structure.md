---
id: project-structure
title: Structure
sidebar_label: Project Structure
---


## Flutter project structure

The project consists of 2 parts, the API/backend part and the mobile app. The mobile part consists only of dart code and some native default code which should not be changed for most use cases. The API part contains TypeScript code to manage the notifications.

###  Mobile app
|Folder| Nested Folder | Content |
|--|--|--|
| android |  | Android native code. |
| ios |  | iOS native code. |
| lib   | | Project code. |
| lib   | bloc | Contains all the project BLoC code more information about BLoC can be found [here](https://bloclibrary.dev/#/whybloc). |
| lib   | components | Contains all the UI components like cards, buttons, etc.
| lib   | data | Contains all the data models, data repositories and constant values.
| lib   | helpers | Contains helpers for managing data, extending default functions and helping UI components.
| lib   | pages | Contains all the pages you can find in the app. With logical names for the views. This is the place where you can view the app.
| lib   | routes | Contains all the routes and route management for the app.
| web   |  | Contains the base structure for the web app flutter export.

###  API
|Folder| Nested Folder | Content |
|--|--|--|
| lib |  | Contains the generated code which can be deployed to production. |
| src |  | Contains the notification code. |
