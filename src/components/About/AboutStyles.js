import styled from 'styled-components';

export const AboutContainer = styled.div`
  background: #fffdff;
  font-family: 'Arvo', serif;
  padding: 100px 0;
`;

export const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutHeader = styled.div`
  font-size: 3rem;
  font-weight: 600;
  color: #444649;
  opacity: 0.9;
  padding: 0 0 40px 0;
  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

export const AboutSubHeader = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  color: #444649;
  opacity: 0.7;
  margin-top: 60px;
  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 60px;
  @media (max-width: 600px) {
    margin-top: 35px;
  }
`;

export const IconWrapper = styled.div`
  max-width: 500px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding: 10px 25px;
  @media (max-width: 600px) {
    max-width: 300px;
  }
`;

export const ImgIcon = styled.img`
    width: 70px;
    height: 70px;
    margin: 1px;
    border: 1px solid gray;
    transition: transform 0.2s ease-out 0s;

    &:hover {
      cursor: pointer;
      transition: 0.4s;
      transform: scale(1.05);
    }
    }
`;

export const BioWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ProfilePic = styled.img`
  width: 200px
  border-radius: 50%
  border: 3px solid #444649;
  margin: 0 35px 20px 35px;
`;

export const BioTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 20px;
  max-width: 655px;
  @media (max-width: 800px) {
    margin: 0;
    align-items: center;
  }
`;

export const BioText = styled.div`
  text-align: left;
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 5px;
  padding: 0 15px;
  color: #444649;
  @media (max-width: 600px) {
    font-size: 1.1rem;
    text-align: center;
  }
`;