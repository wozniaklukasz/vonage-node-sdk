import { OutboundSMSRecord } from './records';
import { ProductType, RequestStatus } from '../enums';

export type SMSOutboundReport = {
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
  itemsCount: number;records: OutboundSMSRecord[],
}
