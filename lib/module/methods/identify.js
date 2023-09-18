import Survicate from '@survicate/react-native-survicate';
export default (event => {
  const userId = event.userId;
  const properties = event.traits;
  console.log('SurvicatePlugin.identify', userId);

  if (userId !== undefined) {
    Survicate.setUserTrait('userId', userId);

    for (const key in properties) {
      if (properties.hasOwnProperty(key)) {
        const value = properties[key];

        if (typeof value === 'string') {
          Survicate.setUserTrait(key, value);
        }
      }
    }
  }
});
//# sourceMappingURL=identify.js.map