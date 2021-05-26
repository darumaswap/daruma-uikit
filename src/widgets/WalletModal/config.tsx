// import Metamask from "./icons/Metamask";
// import MathWallet from "./icons/MathWallet";
// import TokenPocket from "./icons/TokenPocket";
// import TrustWallet from "./icons/TrustWallet";
// import WalletConnect from "./icons/WalletConnect";
// import BinanceChain from "./icons/BinanceChain";
// import SafePalWallet from "./icons/SafePalWallet";
import { v4 as uuidv4 } from 'uuid';
import DarunaWallet from "./icons/DarumaWallet";
import { Config, ConnectorNames } from "./types";

const connectors: Config[] = [
  {
    title: "DarumaWallet",
    icon: DarunaWallet,
    connectorId: ConnectorNames.Injected,
  }/* ,
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "TrustWallet",
    icon: TrustWallet,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "MathWallet",
    icon: MathWallet,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "TokenPocket",
    icon: TokenPocket,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "WalletConnect",
    icon: WalletConnect,
    connectorId: ConnectorNames.WalletConnect,
  },
  {
    title: "Binance Chain Wallet",
    icon: BinanceChain,
    connectorId: ConnectorNames.BSC,
  },
  {
    title: "SafePal Wallet",
    icon: SafePalWallet,
    connectorId: ConnectorNames.Injected,
  }, */
];

export default connectors;
export const connectorLocalStorageKey = "connectorId";
export const deviceUIDKey = uuidv4();
export const tokenUIDKey = uuidv4();
export const darumaAddressKey = uuidv4();
export const triggerUnlockKey = uuidv4();
export const BASE_DARUMA_URL_SIGNIN = process.env.REACT_APP_BASE_DARUMA_URL_SIGNIN;
export const BASE_BSC_SCAN = process.env.REACT_APP_BASE_BSC_URL;
export const BASE_DARUMA_URL = process.env.REACT_APP_BASE_DARUMA_WALLET;
export const NFT_CONTRACT_ADDRESS = process.env.REACT_APP_NFT_CONTRACT;