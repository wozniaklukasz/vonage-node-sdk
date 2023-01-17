import { RecordingResponse } from './recordingResponse';

export interface RecordingResponsePage {
    _embedded: {
        recordings: RecordingResponse[]
    }
}
