import type {
  SegmentAPISettings,
  UpdateType,
} from "@segment/analytics-react-native";
import Survicate from "@survicate/react-native-survicate";
import { SegmentSurvicateSettings } from "src/types";

const integrationsKey = "Survicate";

export default async (settings: SegmentAPISettings, type: UpdateType) => {
  if (type === "initial") {
    const survicateSettings = settings.integrations[
      integrationsKey
    ] as SegmentSurvicateSettings;

    if (survicateSettings !== undefined) {
      const key = survicateSettings.workspaceKey;
      if (key !== undefined) {
        Survicate.setWorkspaceKey(key);
      }
    }

    Survicate.initializeSdk();
  }
};
