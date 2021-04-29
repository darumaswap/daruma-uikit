import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
    return (
      <Svg viewBox="0 0 96 96" {...props}>
          <circle cx="48" cy="48" r="48" fill="white" />
          <img src='/images/dar.svg' height="96" alt=""/>
      </Svg>
    );
};

export default Icon;
