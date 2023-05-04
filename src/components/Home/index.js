import styled from 'styled-components';
import {colors, Button} from '../../variables';
import { FaTelegramPlane } from "react-icons/fa";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect} from 'react';
 



const HomeWrapper = styled.div`
  height: 100vh;
  width: 100%;
  padding-top: 0vw;
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) and (max-width: 992px) {
    height: 100%
  }
`;
const HeroIntro = styled.h1`
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
  color: ${colors.primaryColor}};
  @media screen and (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 0rem;
  }
  `;

const HeroDescription = styled(HeroIntro)`
  font-weight: 400;
  margin-bottom: 3rem;
  color: rgba(255, 255, 255, 0.7);
  width: 75%;

  @media screen and (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 2rem;
    width: 100%;
  }
`;

const HeroTitle = styled.h1`
    font-weight: 600;
    font-size: 55px;
    line-height: 47px;
    letter-spacing: 0.05em;
    margin-bottom: 1rem;
    color: ${colors.textColor};

    @media screen and (max-width: 768px) {
      font-size: 30px;
      margin-bottom: 0;
    }
`;

const HeroSubtitle = styled(HeroTitle)`
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 3rem;
  @media screen and (max-width: 768px) {
    font-size: 30px;
    margin-bottom: 1.5rem;
    line-height: 30px;
  }
`;


const HeroImg = styled.img`
  width:100%; height:100%;

  @media screen and (min-width: 768px) and (max-width: 992px) {
    height: 80% !important; 
    margin-top: 8vw;
    width: 80% !important;
  }
  @media screen and (max-width: 768px) {
    margin-top: 23vw;
  }
`;

const HeroSection = styled.div`
  margin-top: 3rem;
`;



const HomeButton = styled(Button)`
@media screen and (max-width: 1000px) {
  margin-right: auto;
  margin-left: auto;
}
  `;

const Home = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const { top, bottom } = section.getBoundingClientRect();
        if (top <= 50 && bottom >= 50) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    const element = document.querySelector(`#${id}`);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HomeWrapper id='home'>
      <Row >
        <Col xxl={7} lg={6} md={12} sm={12}>
          <Col  xxl={5} md={12} sm={12} className='teste'>
            <HeroImg src={require('../../assets/colxa.png')} />
          </Col>
          <HeroSection>
            <HeroIntro>Hi, my name is</HeroIntro>
            <HeroTitle>Thiago Pierre</HeroTitle>
            <HeroSubtitle>I'm a Full Stack Developer</HeroSubtitle>
            <HeroDescription>
             I specialize in building exceptional digital experiences with Angular, React, and .NET.
             Currently, at Ticketshare, I'm focused on creating an accessible and user-friendly ticket selling startup.
            </HeroDescription>
            <HomeButton active={activeSection === 'contact'} onClick={() => handleLinkClick('contact')}>
              <h5>Get in Touch!</h5>
              <h5 style={{marginLeft: '0.5rem'}}>
                <FaTelegramPlane />
              </h5>
            </HomeButton>
          </HeroSection>
        </Col>
        <Col md={6} lg={6} xxl={5} sm={12} className='teste2'><HeroImg src={require('../../assets/colxa.png')} /></Col>
      </Row>
    </HomeWrapper>
  );
};

export default Home;