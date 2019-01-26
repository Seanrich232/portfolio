import React, { Component } from 'react';
import PDF from '../PDF/PDF';
import Button from '../Button/Button';
import { Element } from 'react-scroll';

import icon2 from '../../assets/Icons/icon2.png';
import icon3 from '../../assets/Icons/icon3.png';
import icon4 from '../../assets/Icons/icon4.png';
import icon5 from '../../assets/Icons/icon5.png';
import icon6 from '../../assets/Icons/icon6.png';
import icon7 from '../../assets/Icons/icon7.png';
import icon8 from '../../assets/Icons/icon8.png';
import icon9 from '../../assets/Icons/icon9.png';
import icon10 from '../../assets/Icons/icon10.png';
import icon11 from '../../assets/Icons/icon11.png';
import icon12 from '../../assets/Icons/icon12.png';
import icon13 from '../../assets/Icons/icon13.png';
import icon14 from '../../assets/Icons/icon14.png';
import icon15 from '../../assets/Icons/icon15.png';
import icon16 from '../../assets/Icons/icon16.png';
import icon17 from '../../assets/Icons/icon17.png';

import { AboutContainer, ContentWrapper, AboutHeader, AboutSubHeader, IconContainer, ImgIcon, IconWrapper, BioWrapper, BioTextWrapper, ProfilePic, BioText } from './AboutStyles';

import profileImage from '../../assets/propic/Sean.jpg';

class About extends Component {
  state = {
    modal: false,
  };

  togglePDF = () => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    return (
      <Element name="About">
        <AboutContainer>
          <ContentWrapper>
            <AboutHeader>About</AboutHeader>
            <BioWrapper>
              <ProfilePic src={profileImage} />
              <BioTextWrapper>
                <BioText>
                  Hello. I'm Sean, a software developer in Seattle. I
                  thrive on being challenged and finding unique solutions to
                  complex problems. I love turning ideas into reality.
                </BioText>
                <Button
                  name="View Resume"
                  color="#444649"
                  border="2px solid #444649"
                  hoverFontColor="#fffdff"
                  bgColor="#444649"
                  borderColor="#444649"
                  width="180px"
                  fontSize="1.2rem"
                  onClick={this.togglePDF} />
              </BioTextWrapper>
            </BioWrapper>
            <AboutSubHeader>I build apps in</AboutSubHeader>
            <IconContainer>
            <IconWrapper>
                <ImgIcon src={icon2} alt="html5"/>
                <ImgIcon src={icon3} alt="bootstrap"/>
                <ImgIcon src={icon12} alt="jQuery"/>
            </IconWrapper>
            <IconWrapper>
                <ImgIcon src={icon4} alt="javascrip"/>
                <ImgIcon src={icon5} alt="React"/>
                <ImgIcon src={icon17} alt="Angular"/>
                <ImgIcon src={icon6} alt="node.jss"/>
                <ImgIcon src={icon7} alt="express.js"/>
              </IconWrapper>
              <IconWrapper>
                <ImgIcon src={icon9} alt="C#"/>
                <ImgIcon src={icon10} alt=".netMVC"/>
                <ImgIcon src={icon11} alt=".netCore"/>
              </IconWrapper>
              <IconWrapper>
                <ImgIcon src={icon14} alt="Python"/>
                <ImgIcon src={icon15} alt="Flask"/>
                <ImgIcon src={icon16} alt="django"/>
              </IconWrapper>
              <IconWrapper>
                <ImgIcon src={icon13} alt="MySQL"/>
                <ImgIcon src={icon8} alt="mongoDB"/>
              </IconWrapper>
            </IconContainer>
          </ContentWrapper>
          <PDF toggle={this.togglePDF} isOpen={this.state.modal} />
        </AboutContainer>
      </Element>
    );
  }
}
export default About;