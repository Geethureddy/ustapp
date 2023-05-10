import React from "react";
import styled from "styled-components";

const SocialMediaIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 40px;
`;

const SocialMediaIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 22px;
`;

const SocialMediaIcons = (props) => {
  return (
    <SocialMediaIconsWrapper>
      <SocialMediaIcon src={props.linkedinIcon} alt="LinkedIn" />
      <SocialMediaIcon src={props.instagramIcon} alt="Instagram" />
      <SocialMediaIcon src={props.facebookIcon} alt="Facebook" />
      <SocialMediaIcon src={props.twitterIcon} alt="Twitter" />
      <SocialMediaIcon src={props.youtubeIcon} alt="YouTube" />
    </SocialMediaIconsWrapper>
  );
};
export default SocialMediaIcons;
