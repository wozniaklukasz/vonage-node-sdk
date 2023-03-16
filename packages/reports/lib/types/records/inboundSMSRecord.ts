export type InboundSMSRecord = {
  accountId: string;
  messageId: string;
  direction: 'inbound';
  from: string;
  to: string;
  network: string;
  networkName: string;
  country: string;
  countryName: string;
  dateReceived: string;
  currency: string;
  totalPrice: string;
  messageBody: string;
}
