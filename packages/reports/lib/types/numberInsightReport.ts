import { NumberInsightRecord } from './records';
import { ProductType, RequestStatus } from '../enums';

export type NumberInsightReport = {
  requestId: string;
  requestStatus: RequestStatus;
  receivedAt: string;
  price: string;
  currency: string;
  accountId: string;
  idsNotFound: string;
  product: ProductType.NUMBER_INSIGHT;
  itemsCount: number;
  records: NumberInsightRecord[];
}
