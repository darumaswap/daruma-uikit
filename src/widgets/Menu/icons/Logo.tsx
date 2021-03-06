import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg";

interface LogoProps extends SvgProps {
    isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {

    return (
      <Svg viewBox="0 0 205 32" {...props}>
        {isDark ? (
          <image width="183" height="32" href='/images/logo-nav-title-dark.png' />
        ):(
          <image width="172" height="32" href='/images/logo-nav-title-white.png' />
        )}
      </Svg>
    )
};

export default Logo;
