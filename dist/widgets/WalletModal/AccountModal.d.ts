import React from "react";
interface Props {
    account: string;
    logout: () => void;
    onDismiss?: () => void;
    darumaAddress?: string;
}
declare const AccountModal: React.FC<Props>;
export default AccountModal;
