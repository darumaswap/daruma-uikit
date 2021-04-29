import React from "react";
import styled from "styled-components";
import { Profile } from "../types";
import NoProfileAvatar from "../../../components/Svg/Icons/NoProfileAvatar";

interface AvatarProps {
  profile: Profile;
}

const StyledAvatar = styled.div`
  margin-left: 8px;
  position: relative;

  img {
    border-radius: 50%;
  }
`;

const Pip = styled.div`
  background-color: ${({ theme }) => theme.colors.failure};
  border-radius: 50%;
  pointer-events: none;
  height: 8px;
  position: absolute;
  right: 0;
  top: 0;
  width: 8px;
`;

const Avatar: React.FC<AvatarProps> = ({ profile }) => {
  const { darumaAddress, image } = profile;

  const icon = image ? (
    <img src={image} alt="profile avatar" height="32px" width="32px" />
  ) : (
    <NoProfileAvatar width="32px" height="32px" />
  );

  return (
    <StyledAvatar title={username}>
      <a href="" aria-label="">
        {icon}
      </a>
    </StyledAvatar>
  );
};

export default Avatar;
