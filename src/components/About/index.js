import React from 'react'
import { SectionSeparatorText, Button } from '../../variables'
import styled from 'styled-components';
import { colors } from '../../variables';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Curriculo from '../../assets/cv/Curriculo.pdf';
import CurriculoEN from '../../assets/cv/Thiago_Pierre_EN_CV.pdf';

const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    padding-top: 0vw;
    margin-left: calc((100vw - 12.5vw)/12);
    background-color: transparent;
    color: ${colors.textColor};
    @media screen and (max-width: 768px) {
        height: 100%;
        margin-left: 0;
    }

    @media screen and (max-width: 1400px) {
      height: 100%;
    }
`;

const AboutTitle = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;
    margin-bottom: 1rem;

    letter-spacing: 0.05em;

    @media screen and (max-width: 768px) {
      font-size: 24px;
    }
`;

const AboutDescription = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 170%;
    margin-bottom: 3rem;
    /* or 34px */

    letter-spacing: 0.05em;

    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
`;

const AboutImg = styled.img`
    width:100%; height:60%;

    @media screen and (min-width: 768px) and (max-width: 992px) {
      width: 70%; height: 50%;
      margin-left: 10vw;
      margin-bottom: 5vh;
    }

    @media screen and (max-width: 768px) {
      width: 100%;
    }

    @media screen and (min-width: 1000px) and (max-width: 1200px) {
      height: 30%;
    }
    @media screen and (min-width: 1200px) and (max-width: 1300px) {
      height: 40%;
    }
`;

const AboutTextWrapper = styled.div`
    margin-top: 5rem;

    @media screen and (max-width: 768px) {
        margin-top: 2rem;
    }
`;

const AboutButton = styled(Button)`
@media screen and (max-width: 1200px) {
  margin: auto;
  max-width: 40vw;
  padding: 1.5rem 2rem;
  margin-top: 2rem;
}
`;


const About = () => {
  return (
    <AboutWrapper id="about">
      <SectionSeparatorText width={'49vw'}> <span style={{ color: '#5aac98', marginRight: '1rem' }}>01.</span>About Me</SectionSeparatorText>

      <AboutTextWrapper>
        <Row>
          <Col lg={5} md={10} sm={12} className='teste2'>
            <AboutImg src={require('../../assets/colxa.png')} />
          </Col>
          <Col lg={1} md={1}> </Col>
          <Col lg={5} md={10} sm={12}>
            <AboutTitle>Hello There, i am <span style={{ color: '#5aac98' }}>Thiago Pierre.</span></AboutTitle>
            <AboutDescription>I'm passionate about building exceptional
              digital experiences. My interest in web development started
              when I began working on a project developed with Angular and 
              .NET during my internship at Pitang. Since then, I've had the
              privilege of working as a Full-stack Developer at Ticketshare 
              and Examroom.AI, where I honed my skills in front-end and back-end 
              development, as well as DevOps and cloud platforms like Google Cloud.
              My main focus these days is building accessible,

              user-friendly products that exceed client expectations 
              and drive business success. At Ticketshare, I led the development
              of a ticket-selling startup application for concerts and shows, where
              I leveraged my technical expertise and project management skills to 
              deliver a high-quality product that met the needs of the startup and 
              its customers.
              I'm constantly expanding my skill set to stay up-to-date with the latest 
              technologies, and I take pride in delivering exceptional work that helps 
              businesses succeed.
            </AboutDescription>
            <Col lg={4} sm={12} className='teste'>
              <AboutImg src={require('../../assets/colxa.png')} />
            </Col>
            <Row>
              <Col>
                <a style={{textDecoration: "none"}} href={CurriculoEN} download="Currículo EN">
                  <AboutButton>Download CV-EN</AboutButton>
                </a>
              </Col>
              <Col>
                <a style={{textDecoration: "none"}} href={Curriculo} download="Currículo PT-BR">
                  <AboutButton>Download CV-PT</AboutButton>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </AboutTextWrapper>
    </AboutWrapper>
  )
}

export default About