import { VerifyRecord } from './records';
import { ProductType, RequestStatus } from '../enums';

export type VerifyReport = {
  requestId: string;
  requestStatus: RequestStatus;
  receivedAt: string;
  price: string;
  currency: string;
  accountId: string;
  idsNotFound: string;
  product: ProductType.VERIFY_API;
  itemsCount: number;
  records: VerifyRecord[],
}
