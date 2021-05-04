declare const useWs: () => {
    sendJsonMessage: import("react-use-websocket/dist/lib/types").SendJsonMessage;
    lastJsonMessage: any;
};
export default useWs;
