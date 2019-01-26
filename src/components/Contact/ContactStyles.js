import styled from 'styled-components';

export const ContactContainer = styled.div`
  background: #182327;
  padding: 100px 0 60px 0;
  font-family: 'Arvo', serif;
`;

export const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

export const ContactHeader = styled.div`
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
  color: #ced3db;

  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

export const ContactSubHeader = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  color: #ced3db;
  padding-top: 20px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`;

export const ContactForm = styled.div`
  max-width: 600px;
  margin: 40px auto 0;
  padding: 0 20px;
`;

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 10px;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 600px;
  margin: 70px auto 40px;
`;

export const Astyle = styled.a`
  color: #ced3db;
  font-size: 2.8em;

  &:hover {
    color: #fffdff;
  }

  @media (max-width: 600px) {
    font-size: 2.2rem;
  }
`;

export const CopyrightText = styled.p`
  text-align: center;
  padding: 30px;
  color: #c0c0c0;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;
