import React from "react";
import "./Footer.css";
import logo from "../../Assets/logo_main.png";
import arrow from "../../Assets/Right_green.png";
import SocialMediaIcons from "../footer/SocialIcons";
import linkedinIconblack from "../../Assets/LinkedIn.png";
import instagramIconblack from "../../Assets/Instagram.png";
import facebookIconblack from "../../Assets/Facebook.png";
import twitterIconblack from "../../Assets/Twitter.png";
import youtubeIconblack from "../../Assets/Youtube.png";
import linkedinIconwhite from "../../Assets/LinkedInwhite.png";
import instagramIconwhite from "../../Assets/Instagramwhite.png";
import facebookIconwhite from "../../Assets/Facebookwhite.png";
import twitterIconwhite from "../../Assets/Twitterwhite.png";
import youtubeIconwhite from "../../Assets/Youtubewhite.png";

const Footer = () => {
  const items1 = [
    "Our thinking",
    "Join the team",
    "Our approach",
    "Social commitment",
  ];
  const items2 = [
    "About us",
    "How can we help?",
    "FInd your next opportunities",
    "Subscribe",
  ];
  const items3 = [
    "Privacy policy",
    "Our collaboration space",
    "Acknowledgement",
  ];
  const SignUp = () => {
    return (
      <div className="signUp">
        <p className="signUp_text">Sign up</p>
        <img className="arrow_image" src={arrow} alt="arrow" />
      </div>
    );
  };
  const FooterItem = (props) => {
    return (
      <ul className="footerItems" style={{ width: "16.68rem" }}>
        {props.items.map((item) => (
          <li className="footer_item">{item}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="footer">
      <img className="footer_logo" src={logo} alt="ust_logo" />
      <div className="footer_content">
        <div className="left_footer">
          <p className="stay">Stay in the know</p>
          <p className="about">
            Sign up to hear more about what we're thinking and where you can
            find us.
          </p>
          <SignUp />
          <SocialMediaIcons
            facebookIcon={facebookIconblack}
            twitterIcon={twitterIconblack}
            instagramIcon={instagramIconblack}
            linkedinIcon={linkedinIconblack}
            youtubeIcon={youtubeIconblack}
          />
        </div>
        <div className="right_footer">
          <div className="items">
            <FooterItem items={items1} />
            <FooterItem items={items2} />
            <FooterItem items={items3} />
          </div>

          <p className="cookies">
            We use cookies to provide you with the best experience of this
            website. To accept cookies continue browsing as normal or read how
            to decline them in our cookie policy. Please also see our privacy
            policy.
          </p>
        </div>
      </div>
      <p className="copyright">Copyright ©2021 All rights reserved UST</p>
      <SocialMediaIcons
        facebookIcon={facebookIconwhite}
        twitterIcon={twitterIconwhite}
        instagramIcon={instagramIconwhite}
        linkedinIcon={linkedinIconwhite}
        youtubeIcon={youtubeIconwhite}
      />
    </div>
  );
};

export default Footer;
