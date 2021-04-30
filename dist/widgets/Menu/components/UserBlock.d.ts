import React from "react";
import { Login } from "../../WalletModal/types";
interface Props {
    account?: string;
    login: Login;
    logout: () => void;
    darumaAddress: string;
}
declare const UserBlock: React.FC<Props>;
export default UserBlock;
