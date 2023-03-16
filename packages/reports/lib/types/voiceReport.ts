import { VoiceRecord } from './records';
import { ProductType, RequestStatus } from '../enums';

export type VoiceReport = {
  requestId: string;
  requestStatus: RequestStatus;
  receivedAt: string;
  price: string;
  currency: string;
  accountId: string;
  idsNotFound: string;
  product: ProductType.VOICE_CALL;
  direction: string;
  itemsCount: number;
  records: VoiceRecord[],
}
