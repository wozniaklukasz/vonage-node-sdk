import { SMSStatus } from '../../enums/smsStatus';

export type OutboundSMSRecord = {
  accountId: string;
  messageId: string;
  clientRef: string;
  concatenated: string;
  direction: 'inbound' | 'outbound';
  from: string;
  to: string;
  network: string;
  networkName: string;
  country: string;
  countryName: string;
  dateReceived: string;
  dateFinalized: string;
  latency: string;
  status: SMSStatus,
  errorCode: string;
  errorCodeDescription: string;
  currency: string;
  totalPrice: string;
  messageBody: string;
}
