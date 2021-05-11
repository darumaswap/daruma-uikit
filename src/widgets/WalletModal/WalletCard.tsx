import React from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import {
  BASE_DARUMA_URL_SIGNIN,
  connectorLocalStorageKey, deviceUIDKey, tokenUIDKey, triggerUnlockKey
} from "./config";
import { Login, Config } from "./types";

interface Props {
  walletConfig: Config;
  login: Login;
  onDismiss: () => void;
  mb: string;
}

const popupWindow = (url: string, windowName: string, width: number, height: number) => {
  const y = window.top.outerHeight / 2 + window.top.screenY - ( height / 2);
  const x = window.top.outerWidth / 2 + window.top.screenX - ( width / 2);
  return window.open(url, windowName, `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${y}, left=${x}`);
}

const WalletCard: React.FC<Props> = ({ login, walletConfig, onDismiss, mb }) => {
  const { title, icon: Icon } = walletConfig;
  const deviceUID = window.localStorage.getItem(deviceUIDKey)
  const tokenUID = window.localStorage.getItem(tokenUIDKey)

  const handleWalletConnect = () => {
    if (title === 'DarumaWallet') {
      window.localStorage.setItem(triggerUnlockKey, '1')
      popupWindow(`${BASE_DARUMA_URL_SIGNIN}/${deviceUID}/${tokenUID}`, "Daruma Wallet", 600, 600)
    }else {
      login(walletConfig.connectorId);
      window.localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
    }
    onDismiss();
  }

  return (
    <Button
      width="100%"
      variant="tertiary"
      onClick={handleWalletConnect}
      style={{ justifyContent: "space-between" }}
      mb={mb}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
    >
      <Text bold color="primary" mr="16px">
        {title}
      </Text>
      <Icon width="32px" />
    </Button>
  );
};

export default WalletCard;
