export type InboundMessageRecord =  {
  accountId: string;
  messageId: string;
  direction: string;
  from: string;
  to: string;
  messageBody: string;
  provider: string;
  dateReceived: string;
  currency: string;
  totalPrice: string;
}
