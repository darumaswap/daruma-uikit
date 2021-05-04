import React from "react";
import Button from "../../../components/Button/Button";
import { useWalletModal } from "../../WalletModal";
import { Login } from "../../WalletModal/types";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
  darumaAddress: string;
}

const UserBlock: React.FC<Props> = ({ account, login, logout, darumaAddress}) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account, darumaAddress);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  const darumaEllipsis = darumaAddress ? `${darumaAddress.substring(0, 4)}...${darumaAddress.substring(darumaAddress.length - 4)}` : null;

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
          {darumaAddress ? (
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
