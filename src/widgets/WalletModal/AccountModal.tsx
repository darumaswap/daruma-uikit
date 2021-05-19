import React from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import LinkExternal from "../../components/Link/LinkExternal";
import Flex from "../../components/Box/Flex";
import { Modal } from "../Modal";
import CopyToClipboard from "./CopyToClipboard";
import { BASE_BSC_SCAN, connectorLocalStorageKey, darumaAddressKey, triggerUnlockKey } from "./config";

interface Props {
  account: string;
  logout: () => void;
  onDismiss?: () => void;
}

const AccountModal: React.FC<Props> = ({ account, logout, onDismiss = () => null }) => {
  const darumaAddress = window.localStorage.getItem(darumaAddressKey)

  const handleLogout = () => {
    if (darumaAddress) {
      window.localStorage.removeItem(darumaAddressKey);
      window.localStorage.setItem(triggerUnlockKey, '0');
      window.location.reload();
    }else {
      logout();
      window.localStorage.removeItem(connectorLocalStorageKey);
      onDismiss();
    }
  }

  return (
    <Modal title="Your wallet" onDismiss={onDismiss}>
      <Text
        fontSize="20px"
        bold
        style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" }}
      >
        {darumaAddress || (
          account
        )}
      </Text>
      <Flex mb="32px">
        <LinkExternal small href={`${BASE_BSC_SCAN}/address/${darumaAddress}`} mr="16px">
          View on BscScan
        </LinkExternal>
        <CopyToClipboard toCopy={darumaAddress || account}>Copy Address</CopyToClipboard>
      </Flex>
      <Flex justifyContent="center">
        <Button
          scale="sm"
          variant="secondary"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Flex>
    </Modal>
  )
}

export default AccountModal;
