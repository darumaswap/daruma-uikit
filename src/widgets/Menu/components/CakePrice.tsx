import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon } from "../../../components/Svg";
import Skeleton from "../../../components/Skeleton/Skeleton";

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
    <PriceLink href="https://bscscan.com/token/0x990ad46af2696690694fd4ef8e3134515a403c00" target="_blank">
      <PancakeRoundIcon width="24px" mr="8px" />
      {/* <Text color="textSubtle" bold>{`$${cakePriceUsd.toFixed(3)}`}</Text> */}
      {/* <Text color="textSubtle" bold>$0</Text> */}
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(CakePrice);
