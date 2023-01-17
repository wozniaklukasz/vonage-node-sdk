import { APILink } from '@vonage/server-client';
import { RecordingStatus } from '../../enums/index';

export interface RecordingResponse {
    id: string
    session_id: string
    started_at: string
    ended_at: string
    status: RecordingStatus
    _links: {
        url: APILink
    }
}
