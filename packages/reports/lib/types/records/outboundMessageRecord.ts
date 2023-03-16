export type OutboundMessageRecord = {
  accountId: string;
  messageId: string;
  clientRef: string;
  direction: string;
  from: string;
  to: string;
  messageBody: string;
  country: string;
  countryName: string;
  provider: string;
  dateReceived: string;
  dateFinalized: string;
  latency: string;
  status: string;
  errorCode: string;
  currency: string;
  totalPrice: string;
}
