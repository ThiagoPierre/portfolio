import React, { useState } from 'react';
import styled from 'styled-components';
import { SectionSeparatorText, colors } from '../../variables';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from "react-router-dom"

import ticketshare from '../../assets/ticketshare/TicketshareLogo.png'
import dtMoneyLogo from '../../assets/dtmoney/dtMoneylogo.png'
import VaCoxalogo from '../../assets/VaCoxa/VaCoxaLogo.png'



const PortfolioWrapper = styled.div`
  display: flex;
  height: 60vh;
  align-items: center;
  width: 100%;  
  max-width: 60vw;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    align-items: flex-start;
    height: 100%;
    margin-top: 2rem;
  }

  @media screen and (max-width: 1700px) {
    max-width: 70vw;    
  }
  @media screen and (max-width: 1000px) {
    max-width: 75vw;    
  }
`;

const Container = styled.div`
    margin-left: calc((100vw - 12.5vw)/12);
    width: 100%; 
    @media screen and (max-width: 768px) {
        margin-left: 0;
        margin-top: 4rem;
      }
`;

const PortfolioRow = styled(Row)`
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 768px) {

        margin-top: 4rem;
        }
`;

const PortfolioImg = styled.img`
    width: 21rem;
    height: 13.5rem;
    border-radius: 20px;
    margin-top: 2rem;

    @media screen and (max-width: 768px) {
      width: 100%;
      height: 100%;
    }
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: 1.5rem;
    width: 100%;
`;

const ProjectTitle = styled.h1`
    font-size: 1.8rem;
    color: ${colors.primaryColor};
    margin-bottom: 1rem;
`;

const ProjectSubtitle = styled.h2`
    font-size: 1rem;
    color: ${colors.primary};
    margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
    font-size: 1rem;
    color: ${colors.primary};
    margin-bottom: 1rem;
`;

const MyBestWork = styled.h1`
    font-size: 1.5rem;
    opacity: 0.7;
    color: ${colors.primaryColor};
    margin-bottom: -1rem;
    margin-top: 3rem;
    text-align: center;
    margin-left: calc((-100vw - 12.5vw)/12);

`;

const ProjectWrapper = styled.div`
    margin-left: 2rem;

    transition:0.3s;

    &:hover {
        cursor: pointer;
        transform: scale(1.1);
        size: 1.1rem;
    }
    `;


const Portfolio = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const projects = [
    { imageSrc: ticketshare, title: 'Ticketshare', text: 'Ticketshare is a ticket-selling startup designed to provide an easy-to-use platform for buying and selling tickets. It simplifies the ticket-buying process and provides a safe and secure way for users to exchange tickets.' },
    { imageSrc: dtMoneyLogo, title: 'DT Money', text: 'Dtmoney is a financial management application with a similar concept to dev.finances, but with more advanced technologies and resources. It incorporates open-source libraries developed by the community, resulting in a more comprehensive and robust tool for users.' },
    { imageSrc: VaCoxalogo, title: 'SwiftVax', text: 'SwiftVax simplifies the scheduling process of COVID-19 vaccine appointments with two interfaces - one for clients and one for healthcare providers. It aims to make the vaccination process more efficient and accessible by allowing clients to schedule their appointments and healthcare providers to manage them.' },
  ]


  return (
    <Container id="portfolio">
      <SectionSeparatorText width={"45vw"} > <span style={{ color: '#5aac98', marginRight: '1rem' }}>04.</span>My Projects</SectionSeparatorText>
{/*       <MyBestWork>Some of my best work</MyBestWork>
 */}      <PortfolioWrapper>
        <Swiper
          breakpoints={{
            400: {
              slidesPerView: 1.8,
            },
            639: {
              slidesPerView: 1.8,
            },
            865: {
              slidesPerView: 2
            },
            1000: {
              slidesPerView: 2.5
            },
            1500: {
              slidesPerView: 2.5
            },
            1700: {
              slidesPerView: 3.1
            }
          }}
          modules={[Navigation]}
          spaceBetween={50}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <Link to={"/projects/" + index} style={{ textDecoration: "none", color: "white" }}>
                <ProjectWrapper style={{ marginLeft: "2rem" }}>
                  <PortfolioImg src={project.imageSrc} alt="project" />
                  <TextWrapper>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectSubtitle>{project.text}</ProjectSubtitle>
                  </TextWrapper>
                </ProjectWrapper>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </PortfolioWrapper>
    </Container>
  );
};

export default Portfolio;
