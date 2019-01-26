import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

import { Element } from 'react-scroll';

import SummerQuest from '../../assets/projectpic/01.jpg';

import {
  ProjectContainer,
  ProjectHeader,
  ProjectSubHeader,
  ThumbnailContainer,
  ContentWrapper,
  Thumbnail,
  Astyle,
  FullSize,
  ModalTextWrapper,
  ModalTitle,
  ModalSubTitle,
  ModalDescription,
  ModalFooter,
} from './ProjectStyles';


const thumbSize = { width: '370px', height: '217px' };
const fullSize = { width: '100%' };

class Projects extends Component {
  state = {
    modalProofd: false,
    modalCrytpoGym: false,
    modalProfJones: false,
    modalBCAD: false,
    modalReactMovies: false,
    modalSummerQuest: false,
  };

  toggleProofd = () => {
    this.setState({
      modalProofd: !this.state.modalProofd,
    });
  };

  toggleCryptoGym = () => {
    this.setState({
      modalCrytpoGym: !this.state.modalCrytpoGym,
    });
  };

  toggleProfJones = () => {
    this.setState({
      modalProfJones: !this.state.modalProfJones,
    });
  };

  toggleBCAD = () => {
    this.setState({
      modalBCAD: !this.state.modalBCAD,
    });
  };

  toggleReactMovies = () => {
    this.setState({
      modalReactMovies: !this.state.modalReactMovies,
    });
  };

  toggleSummerQuest = () => {
    this.setState({
      modalSummerQuest: !this.state.modalSummerQuest,
    });
  };

  render() {
    return (
      <Element name="Projects">
        <ProjectContainer>
          <ContentWrapper>
            <ProjectHeader>Portfolio</ProjectHeader>
            <ProjectSubHeader>
              Click on a project to learn more
            </ProjectSubHeader>
            <ThumbnailContainer>
              <Thumbnail
                src={SummerQuest}
                style={thumbSize}
                onClick={this.toggleSummerQuest}
                alt="SummerQuest"
              />
            </ThumbnailContainer>
          </ContentWrapper>
        </ProjectContainer>

        {/* Modal SummerQuest */}
        <Modal
          isOpen={this.state.modalSummerQuest}
          toggle={this.toggleSummerQuest}
        >
          <ModalBody>
            <a
              href="https://github.com/Seanrich232/SummerQuest"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FullSize
                src={SummerQuest}
                style={fullSize}
                alt="React Movies"
              />
            </a>
          </ModalBody>
          <ModalHeader style={{ paddingTop: '0' }}>
            <ModalTextWrapper>
              <ModalTitle>SummerQuest</ModalTitle>
              <ModalSubTitle>
                Group project of four people
              </ModalSubTitle>
              <ModalDescription>
                SummerQuest was a CodingDojo week project made in c#.
              </ModalDescription>
            </ModalTextWrapper>
          </ModalHeader>
          <ModalFooter toggle={this.toggleSummerQuest}>

            {/* web */}
            {/* <Astyle href="https://github.com/Seanrich232/SummerQuest" target="_blank">
              <i className="fas fa-globe fa-2x" />
            </Astyle>{' '} */}
            {/* github */}
            <Astyle
              href="https://github.com/Seanrich232/SummerQuest"
              target="_blank"
            >
              <i className="fab fa-github fa-2x" />
            </Astyle>
            {/* youtube */}
            {/* <Astyle
              href="https://github.com/Seanrich232/SummerQuest"
              target="_blank"
            >
              <i className="fab fa-youtube fa-2x" />
            </Astyle> */}
          </ModalFooter>
        </Modal>
      </Element>
    );
  }
}

export default Projects;
