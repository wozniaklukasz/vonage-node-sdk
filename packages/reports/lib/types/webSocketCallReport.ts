import { WebSocketCallRecord } from './records';
import { ProductType, RequestStatus } from '../enums';

export type WebSocketCallReport = {
  requestId: string;
  requestStatus: RequestStatus;
  receivedAt: string;
  price: string;
  currency: string;
  accountId: string;
  idsNotFound: string;
  product: ProductType.WEBSOCKET_CALL;
  itemsCount: number;
  records WebSocketCallRecord[];
}
