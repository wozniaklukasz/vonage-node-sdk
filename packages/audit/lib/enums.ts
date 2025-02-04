export enum AuditEventTypes {
    'USER_STATUS' = 'USER_STATUS',
    'USER_UPDATE' = 'USER_UPDATE',
    'USER_BILLING_UPDATE' = 'USER_BILLING_UPDATE',
    'USER_CREATE' = 'USER_CREATE',
    'USER_LOGIN' = 'USER_LOGIN',
    'USER_LOGOUT' = 'USER_LOGOUT',
    'USER_PRODUCT_SEARCH' = 'USER_PRODUCT_SEARCH',
    'USER_API_KEYS_UPDATE' = 'USER_API_KEYS_UPDATE',
    'ACCOUNT_SECRET_DELETE' = 'ACCOUNT_SECRET_DELETE',
    'ACCOUNT_SECRET_CREATE' = 'ACCOUNT_SECRET_CREATE',
    'ACCOUNT_UPDATE_SPAMMER' = 'ACCOUNT_UPDATE_SPAMMER',
    'ACCOUNT_UPDATE_SETTINGS_API' = 'ACCOUNT_UPDATE_SETTINGS_API',
    'NUMBER_ASSIGN' = 'NUMBER_ASSIGN',
    'NUMBER_UPDATED' = 'NUMBER_UPDATED',
    'NUMBER_RELEASE' = 'NUMBER_RELEASE',
    'NUMBER_LINKED' = 'NUMBER_LINKED',
    'NUMBER_UNLINKED' = 'NUMBER_UNLINKED',
    'APP_CREATE' = 'APP_CREATE',
    'APP_UPDATE' = 'APP_UPDATE',
    'APP_DELETE' = 'APP_DELETE',
    'APP_DISABLE' = 'APP_DISABLE',
    'APP_ENABLE' = 'APP_ENABLE',
    'IP_WHITELIST_CREATE' = 'IP_WHITELIST_CREATE',
    'IP_WHITELIST_DELETE' = 'IP_WHITELIST_DELETE',
    'AUTORELOAD_ENABLE' = 'AUTORELOAD_ENABLE',
    'AUTORELOAD_UPDATE' = 'AUTORELOAD_UPDATE',
    'AUTORELOAD_DISABLE' = 'AUTORELOAD_DISABLE',
}
