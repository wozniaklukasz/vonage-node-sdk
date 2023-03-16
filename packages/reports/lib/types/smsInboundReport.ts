import { InboundSMSRecord } from './records';
import { ProductType, RequestStatus } from '../enums';

export type SMSInboundReport = {
  requestId: string;
  requestStatus: RequestStatus;
  receivedAt: string;
  price: string;
  currency: string;
  accountId: string;
  idsNotFound: string;
  product: ProductType.SMS;
  direction: string;
  includeMessage: string;
  showConcatenated: string;
  itemsCount: number;
  records: InboundSMSRecord[]
}

