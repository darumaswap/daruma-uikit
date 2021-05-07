import React from "react";
import Button from "../../../components/Button/Button";
import { darumaAddressKey, useWalletModal } from "../../WalletModal";
import { Login } from "../../WalletModal/types";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
}

const UserBlock: React.FC<Props> = ({ account, login, logout}) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  const mdarumaAddress = window.localStorage.getItem(darumaAddressKey)
  const darumaEllipsis = mdarumaAddress ? `${mdarumaAddress.substring(0, 4)}...${mdarumaAddress.substring(mdarumaAddress.length - 4)}` : null;

  return (
    <div>
      {account ? (
        <Button
          scale="sm"
          variant="tertiary"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </Button>
      ) : (
        <>
          {mdarumaAddress ? (
            <Button
              scale="sm"
              variant="tertiary"
              onClick={() => {
                onPresentAccountModal();
              }}
            >
              {darumaEllipsis}
            </Button>
          ):(
            <Button
              scale="sm"
              onClick={() => {
                onPresentConnectModal();
              }}
            >
              Connect
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default UserBlock;
