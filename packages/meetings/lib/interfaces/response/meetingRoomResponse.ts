import { APILinks, APILink } from '@vonage/server-client';
import { MeetingRoom } from '../../types';

export interface MeetingRoomResponse extends MeetingRoom {
    _links: APILinks & { host_url?: APILink; guest_url?: APILink }
}
