import { IdentifyEventType, isString, isNumber, isBoolean, isDate } from "@segment/analytics-react-native";
import Survicate, {UserTrait} from "@survicate/react-native-survicate";

export default (event: IdentifyEventType) => {
  const userId = event.userId;
  const properties = event.traits;

  if (userId !== undefined) {
    const userIdTrait = new UserTrait("userId", userId);
    Survicate.setUserTrait(userIdTrait);
  }

  for (const key in properties) {
    if (properties.hasOwnProperty(key)) {
      const value = properties[key];
      let trait;
      switch (true) {
        case isString(value):
          trait = new UserTrait(key, value);
          break;
        case isNumber(value):
          trait = new UserTrait(key, value);
          break;
        case isBoolean(value):
          trait = new UserTrait(key, value);
          break;
        case isDate(value):
          trait = new UserTrait(key, value);
          break;
      }
      if (trait) {
        Survicate.setUserTrait(trait);
      }
    }
  }
};
