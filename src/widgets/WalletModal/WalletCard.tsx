import React from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import { connectorLocalStorageKey } from "./config";
import { Login, Config } from "./types";

interface Props {
  walletConfig: Config;
  login: Login;
  onDismiss: () => void;
  mb: string;
  deviceUID: string
  tokenID: string
}

const WalletCard: React.FC<Props> = ({ login, walletConfig, onDismiss, mb, deviceUID, tokenID }) => {
  const { title, icon: Icon } = walletConfig;

  const handleWalletConnect = () => {
    if (title === 'DarumaWallet') {
      window.open(`https://app-qc.darumawallet.com/#/embed/daruma-wallet/link/${deviceUID}/${tokenID}`)
      onDismiss();
    }else {
      login(walletConfig.connectorId);
      window.localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
      onDismiss();
    }
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
