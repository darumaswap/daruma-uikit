import { Config } from "./types";
declare const connectors: Config[];
export default connectors;
export declare const connectorLocalStorageKey = "connectorId";
export declare const deviceUIDKey = "deviceUID";
export declare const tokenUIDKey = "tokenUID";
export declare const darumaAddressKey = "darumaAddress";
export declare const unlockWalletKey = "unlockWallet";
export declare const triggerUnlockKey = "triggerWallet";
export declare const BASE_DARUMA_URL_SIGNIN = "https://app-qc.darumawallet.com/embed/daruma-shop/link";
export declare const BASE_DARUMA_URL_LOGOUT = "https://app-qc.darumawallet.com/#/auth/logout";
export declare const BASE_DARUMA_WALLET_SOCKET = "ws://app-qc.darumawallet.com/api/wallet";
