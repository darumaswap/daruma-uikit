import React from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import {
  BASE_DARUMA_URL_SIGNIN,
  connectorLocalStorageKey, deviceUIDKey, tokenUIDKey
} from "./config";
import { Login, Config } from "./types";

interface Props {
  walletConfig: Config;
  login: Login;
  onDismiss: () => void;
  mb: string;
}

const WalletCard: React.FC<Props> = ({ login, walletConfig, onDismiss, mb }) => {
  const { title, icon: Icon } = walletConfig;
  const deviceUID = window.localStorage.getItem(deviceUIDKey)
  const tokenUID = window.localStorage.getItem(tokenUIDKey)

  const handleWalletConnect = () => {
    if (title === 'DarumaWallet') {
      window.open(`${BASE_DARUMA_URL_SIGNIN}/${deviceUID}/${tokenUID}`)
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
