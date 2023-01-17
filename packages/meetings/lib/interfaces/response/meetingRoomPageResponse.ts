import { APILinks, APILink } from '@vonage/server-client';
import { MeetingRoom } from '../../types/index';

export interface MeetingRoomPageResponse {
    pageSize: number
    totalItems: number
    _embedded: MeetingRoom[]
    _links: APILinks & { next?: APILink; prev?: APILink; start?: APILink }
}
