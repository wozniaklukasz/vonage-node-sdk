import { ASRRecord } from './records';
import { ProductType, RequestStatus } from '../enums';

export type  ASRReport = {
  requestId: string;
  requestStatus: RequestStatus;
  receivedAt: string;
  price: string;
  currency: string;
  accountId: string;
  idsNotFound: string;
  product: ProductType.ASR;
  itemsCount: number;
  records: ASRRecord[];
}
