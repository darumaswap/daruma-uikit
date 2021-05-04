import useWebSocket from 'react-use-websocket';
import { deviceUIDKey, tokenUIDKey } from "../widgets/WalletModal";
import { BASE_DARUMA_WALLET_SOCKET } from "../widgets/WalletModal/config";

const useWs = () => {
  const deviceUID = window.localStorage.getItem(deviceUIDKey)
  const tokenUID = window.localStorage.getItem(tokenUIDKey)

  const { sendJsonMessage, lastJsonMessage } = useWebSocket(`${BASE_DARUMA_WALLET_SOCKET}/v1/personal/link/init/ws/?device_uid=${deviceUID}&token=${tokenUID}`, {
    onOpen: () => console.log(`ws connected`),
    shouldReconnect: () => true,
    reconnectInterval: 1000
  });
  return { sendJsonMessage, lastJsonMessage }
}

export default useWs;