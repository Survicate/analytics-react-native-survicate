# @segment/analytics-react-native-plugin-sprig

`DestinationPlugin` for [Sprig](https://www.sprig.com). This is a segment analytics plugin that wraps [`react-native-userleap`](https://www.npmjs.com/package/react-native-userleap).

## Prerequisite

Please make sure that your product currently uses segment analytics in your application. 
If you do not currently, but want to get started, please checkout [Segment's documentation](https://segment.com/docs/connections/sources/catalog/libraries/mobile/react-native/#plugin-architecture). Or follow Segment's [instructions on github](https://github.com/segmentio/analytics-react-native#installation).

## Installation

You need to install the `@sprig-technologies/analytics-react-native-plugin-sprig` and the `react-native-userleap` dependency.
```bash
yarn add @sprig-technologies/analytics-react-native-plugin-sprig react-native-userleap
# or
npm install --save @sprig-technologies/analytics-react-native-plugin-sprig react-native-userleap
```

Run `pod install` after the installation to autolink the Sprig SDK.

## Usage

In your code where you initialize the analytics client call the `.add({ plugin })` method with an `SprigPlugin` instance. 

```ts
// App.js

import { createClient } from '@segment/analytics-react-native';
import { SprigPlugin } from '@sprig-technologies/analytics-react-native-plugin-sprig';

const segmentClient = createClient({
  writeKey: 'SEGMENT_WRITE_KEY'
});

const plugin = new SprigPlugin();

segmentClient.add({ plugin });
```
After this set up, any segment `track` and `identify` functionalities will also forward the events and identify the user id and attributes to Sprig respectively. The users will automatically see the survey if they are eligible without additional work. 

Follow the [instructions for adding plugins](https://github.com/segmentio/analytics-react-native#adding-plugins) on the Analytics client for segment related documentations.

## Example

We included a simple react native app that implements the plugin under `./example` 

## Support

Please use Github issues, Pull Requests, or feel free to reach out to our [support team](https://docs.sprig.com/docs/support).

## License
Please see LICENSE file