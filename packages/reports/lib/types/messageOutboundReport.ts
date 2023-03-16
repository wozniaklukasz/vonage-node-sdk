import { OutboundMessageRecord } from './records';
import { ProductType, RequestStatus } from '../enums';

export type MessageOutboundReport = {
  requestId: string;
  requestStatus: RequestStatus;
  receivedAt: string;
  price: string;
  currency: string;
  accountId: string;
  idsNotFound: string;
  product: ProductType.MESSAGES;
  direction?: string;
  includeMessage?: string;
  showConcatenated?: string;
  itemsCount: number;
  records: OutboundMessageRecord[];
}
