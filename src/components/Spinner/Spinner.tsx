import React from "react";
import styled, { keyframes } from "styled-components";
import DarumaIcon from "./DarumaIcon";
import { SpinnerProps } from "./types";

const Container = styled.div`
  position: relative;
`;

const scale = keyframes`
	0% {
		transform: scale(1);
	}
	100% {
		transform: scale(1.2);
	}
`;

const ScaleDarumaIcon = styled(DarumaIcon)`
  animation: ${scale} 1s ease-in-out infinite;
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 51 }) => {
  return (
    <Container>
      <ScaleDarumaIcon width={`${size}px`} />
    </Container>
  );
};

export default Spinner;