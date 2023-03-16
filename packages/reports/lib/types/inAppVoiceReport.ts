import { InAppVoiceRecord } from "./records";
import { ProductType, RequestStatus } from '../enums';

export type InAppVoiceReport = {
  requestId: string;
  requestStatus: RequestStatus;
  receivedAt: string;
  price: string;
  currency: string;
  accountId: string;
  idsNotFound: string;
  product: ProductType.IN_APP_VOICE;
  itemsCount: number;
  records: InAppVoiceRecord[],
}

