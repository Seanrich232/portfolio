import React, { Component } from 'react';
import { Element } from 'react-scroll';


import { ContactContainer, ContentWrapper, ContactHeader, ContactSubHeader, SocialWrapper, Astyle, CopyrightText } from './ContactStyles';

class Contact extends Component {
  

  render() {

    return (
      <Element name="Contact">
        <ContactContainer>
          <ContentWrapper>
            <ContactHeader>Contact</ContactHeader>
            <ContactSubHeader>Want to work together?</ContactSubHeader>
            <SocialWrapper>
              <Astyle
                href="https://www.linkedin.com/in/sean-rich/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin" />
              </Astyle>

              <Astyle
                href="https://github.com/Seanrich232"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github" />
              </Astyle>

              <Astyle
                href="mailto:Sean2s2rich@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-envelope" />
              </Astyle>
            </SocialWrapper>
            <CopyrightText>Sean Rich ©2019</CopyrightText>
          </ContentWrapper>
        </ContactContainer>
      </Element>
    );
  }
}

export default Contact;