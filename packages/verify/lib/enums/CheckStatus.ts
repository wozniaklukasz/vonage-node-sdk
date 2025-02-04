export enum CheckStatus {
    SUCCESS = '0',
    THROTTLED = '1',
    MISSING_REQUIRED_PARAM = '2',
    INVALID_PARAM = '3',
    INVALID_CREDENTIALS = '4',
    INTERNAL_ERROR = '5',
    FAILED_TO_PROCESS = '6',
    BARRED_API_KEY = '8',
    PARTNER_QUOTA_EXCEEDED = '9',
    CONCURRENT_VERIFICATIONS = '10',
    UNSUPPORTED_NETWORK = '15',
    CODE_MISMATCH = '16',
    INVALID_CODE = '17',
    DELIEVERY_FAILED = '19',
    PIN_NOT_SUPPORTED = '20',
    NON_PREMITTED_DESTINATION = '29',
}
