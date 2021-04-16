import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg";

interface LogoProps extends SvgProps {
    isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
    return (
      <Svg viewBox="0 0 205 26" {...props}>
          <image width="205" height="26" href={isDark ? '/images/logo-nav-dark.png' : '/images/logo-nav-white.png'}/>
      </Svg>
    )
};

export default Logo;
