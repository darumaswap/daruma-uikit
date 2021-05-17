import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon } from "../../../components/Svg";
import Skeleton from "../../../components/Skeleton/Skeleton";
import { BASE_BSC_SCAN, NFT_CONTRACT_ADDRESS } from "../../WalletModal/config";

interface Props {
  cakePriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const CakePrice: React.FC<Props> = ({ cakePriceUsd }) => {
  return cakePriceUsd ? (
    <PriceLink href={`${BASE_BSC_SCAN}/token/${NFT_CONTRACT_ADDRESS}`} target="_blank">
      <PancakeRoundIcon width="24px" mr="8px" />
      {/* <Text color="textSubtle" bold>{`$${cakePriceUsd.toFixed(3)}`}</Text> */}
      {/* <Text color="textSubtle" bold>$0</Text> */}
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(CakePrice);
