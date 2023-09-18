import type { IdentifyEventType } from "@segment/analytics-react-native";
import Survicate from "@survicate/react-native-survicate";

export default (event: IdentifyEventType) => {
  const userId = event.userId;
  const properties = event.traits;

  if (userId !== undefined) {
    Survicate.setUserTrait("userId", userId);
  }

  for (const key in properties) {
    if (properties.hasOwnProperty(key)) {
      const value = properties[key];
      if (typeof value === "string") {
        Survicate.setUserTrait(key, value);
      }
    }
  }
};
