import React, { useEffect, useState } from "react";
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
  const [darumaAddress, setDarumaAddress] = useState('')

  useEffect(() => {
    const updateAddress = () => {
      const addr = window.localStorage.getItem(darumaAddressKey)
      if (addr){
        if (!darumaAddress){
          setDarumaAddress(addr)
        }
      }else{
        setDarumaAddress('')
      }
    }
    const interval = setInterval(updateAddress, 100)
    return () => clearInterval(interval)
  },[darumaAddress])

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
              {darumaAddress.substring(0, 4)}...{darumaAddress.substring(darumaAddress.length - 4)}
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
