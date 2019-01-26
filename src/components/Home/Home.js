import React, { Component } from 'react';
import { Element, scroller } from 'react-scroll';
import Button from '../Button/Button';
import Particles from '../Particles/Particles';

import { HomeContainer, HeaderContainer, TextContainer, NameText, JobText } from './HomeStyles';

class Home extends Component {
  smoothScroll() {
    scroller.scrollTo('About', {
      duration: 500,
      delay: 1,
      smooth: true,
    });
  }

  render() {
    return (
      <Element name="Home">
        <HomeContainer>
          <Particles />
            <HeaderContainer>
              <TextContainer>
                <NameText>Sean Rich</NameText>
                <JobText>Full Stack Developer</JobText>
              </TextContainer>
              <Button
                name="Explore"
                color="#c0c0c0"
                border="2px solid #c0c0c0"
                bgColor="#ced3db"
                hoverFontColor="#ced3db"
                borderColor="#ced3db"
                onClick={this.smoothScroll}
                fontSize="1.4rem"
                width="160px"
                mobileFontSize="1.2rem"
                mobileWidth="140px"
                mobileHeight="40px" />
            </HeaderContainer>
        </HomeContainer>
      </Element>
    );
  }
}

export default Home;