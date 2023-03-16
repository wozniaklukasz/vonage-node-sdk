import { ConversationRecord } from './records';
import { ProductType, RequestStatus } from '../enums';

export type ConversationReport = {
  requestId: string;
  requestStatus: RequestStatus;
  receivedAt: string;
  price: string;
  currency: string;
  accountId: string;
  idsNotFound: string;
  product: ProductType.CONVERSATIONS;
  direction?: string;
  includeMessage?: string;
  showConcatenated?: string;
  itemsCount: number;
  records: ConversationRecord[];
}
