import React, { useEffect, useState } from "react";
import Button from "../../../components/Button/Button";
import { darumaAddressKey, useWalletModal } from "../../WalletModal";
import { Login } from "../../WalletModal/types";
import { unlockWalletKey } from "../../WalletModal/config";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
}

const UserBlock: React.FC<Props> = ({ account, login, logout}) => {
  const [enable, setEnable] = useState("0")
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  const [darumaAddress, setDarumaAddress] = useState(window.localStorage.getItem(darumaAddressKey))

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
    const interval = setInterval(updateAddress, 500)
    return () => clearInterval(interval)
  },[darumaAddress])

  useEffect(() => {
    const checkWalletButton = () => {
      const isEnable = window.localStorage.getItem(unlockWalletKey)
      if (isEnable){
        setEnable(isEnable.toString())
      }
    }
    const interval = setInterval(checkWalletButton, 500)
    return () => clearInterval(interval)
  }, [])

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
              disabled={enable === "0"}
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
