import { DestinationPlugin, IdentifyEventType, PluginType, TrackEventType, UpdateType, SegmentAPISettings, ScreenEventType } from '@segment/analytics-react-native';
export declare class SurvicatePlugin extends DestinationPlugin {
    type: PluginType;
    key: string;
    private hasInitialized;
    update(settings: SegmentAPISettings, _: UpdateType): void;
    identify(event: IdentifyEventType): IdentifyEventType;
    track(event: TrackEventType): TrackEventType;
    screen(event: ScreenEventType): ScreenEventType;
    reset(): void;
}
