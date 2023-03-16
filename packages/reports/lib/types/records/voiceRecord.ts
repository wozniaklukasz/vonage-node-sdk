import { VoiceStatus } from "../../enums/voiceStatus";

export type VoiceRecord = {
  accountId: string;
  callId: string;
  direction: 'inbound' | 'outbound';
  from: string;
  to: string;
  network: string;
  networkName: string;
  country: string;
  countryName: string;
  dateStart: string;
  dateEnd: string;
  duration: string;
  status: VoiceStatus,
  statusDescription: string;
  currency: string;
  price: string;
  totalPrice: string;
}
