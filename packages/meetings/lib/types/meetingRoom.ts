import { AvailableFeatures } from './availableFeatures';
import { RecordingOptions } from './recordingOptions';
import {
  MicrophoneSate,
  MeetingType,
  JoinType,
  RoomLanguage,
} from '../enums/index';
import { RoomCallbackURLS } from '../types/roomCallbackURLS';

export type MeetingRoom = {
    id?: string
    displayName: string
    metadata: string
    type: MeetingType
    meetingCode?: string
    isAvailable?: boolean
    themeId?: string
    createdAt?: string
    expiresAt?: string
    expireAfterUse?: boolean
    joinApprovalLevel?: JoinType
    recordingOptions?: RecordingOptions
    initialJoinOptions?: {
        microphoneState?: MicrophoneSate
    }
    callbackUrls?: RoomCallbackURLS
    availableFeatures: AvailableFeatures
    uiSettings?: {
        language?: RoomLanguage
    }
    hostUrl?: string
    guestUrl?: string
}
