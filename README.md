# @segment/analytics-react-native-survicate ![NPM Version](https://img.shields.io/npm/v/%40survicate%2Fanalytics-react-native-survicate)


`SurvicatePlugin` for [Survicate](https://survicate.com/). Wraps [`react-native-survicate`](https://github.com/survicate/react-native-survicate).

## Installation

You need to install the `@survicate/analytics-react-native-survicate` and the `@survicate/react-native-survicate` dependency.

Using NPM:
```bash
npm install --save @survicate/analytics-react-native-survicate @survicate/react-native-survicate
```

Using Yarn:
```bash
yarn add @survicate/analytics-react-native-survicate @survicate/react-native-survicate
```

## Configuration

### Configuring Survicate Bindings for Android

- Add maven repository to your project `build.gradle` located under `android` directory
```
allprojects {
    repositories {
        // ...
        maven { url 'https://repo.survicate.com' }
    }
}
```

### Provide workspace key
You can do this in 2 ways:

1. Add workspace key in Segment panel -> Destinations -> Your Android app destination -> Settings. You need to put the key inside the Connection Settings as a "Workspace Key" (from plugin version 5.0.0).

2. Alternatively, you can add your Survicate workspace key as a metadata inside AndroidManifest and info.plist

#### Android
- Add your Survicate workspace key to `AndroidManifest.xml`
```xml
<application
    android:name=".MyApp">
    <!-- ... -->
    <meta-data android:name="com.survicate.surveys.workspaceKey" android:value="YOUR_WORKSPACE_KEY"/>
</application>
```	

#### iOS
- Add your Survicate workspace key to `Info.plist`
```
<key>Survicate</key>
<dict>
	<key>WorkspaceKey</key>
	<string>YOUR_WORKSPACE_KEY</string>
</dict>
```
- run command `pod install` in your `ios` directory

## Usage

> **Note:** From plugin version 5.0.0 Survicate SDK is initialized upon Segment initialization. Please remove any calls to `Survicate.initializeSdk()` as it may lead to undesired behavior in cases where workspace key is set after initialization.

Follow the [instructions for adding plugins](https://github.com/segmentio/analytics-react-native#adding-plugins) on the main Analytics client:

In your code where you initialize the analytics client call the `.add(plugin)` method with an `SurvicatePlugin` instance:

```ts
import { createClient } from '@segment/analytics-react-native';

import { SurvicatePlugin } from '@survicate/analytics-react-native-survicate';

const segmentClient = createClient({
  writeKey: 'SEGMENT_KEY'
});

segmentClient.add({ plugin: new SurvicatePlugin() });
```

### using the Survicate plugin

***identify***

In the SurvicateDestination plugin, the identify event from Segment is transferred to the setUserTrait method of Survicate. This is achieved within the identify function of the SurvicateDestination class. The traits and user Id from the IdentifyEvent are extracted and set as user traits in Survicate using the setUserTrait method. The traits are a dictionary where each key-value pair is set as a user trait. The user Id is also set as a user trait with the key "user_id".

***track***

In the SurvicateDestination plugin, the track method from Segment is used as the invokeEvent method in Survicate. This means that when you track an event in Segment, it will be invoked in Survicate. Moreover every String property passed in track properties argument will be passed to Survicate SDK.

***screen***

Similarly, the screen method from Segment is used as the enterScreen method in Survicate. This means that when you track a screen in Segment, it will be entered in Survicate.

***reset***

The reset method from Segment is used as the reset method in Survicate. This means that when you reset the Segment client, the Survicate client will also be reset.

## Issues

Got an Issue?

To make things more streamlined, we’ve transitioned our issue reporting to our customer support platform. If you encounter any bugs or have feedback, please reach out to our customer support team. Your insights are invaluable to us, and we’re here to help ensure your experience is top-notch!

Contact us via Intercom in the application, or drop us an email at: [hello@survicate.com]

Thank you for your support and understanding!