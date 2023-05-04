import React from 'react'
import { colors , Button} from '../../variables';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import ticketshare from '../../assets/ticketshare/pixticket.png'
import ticketsharebuy from '../../assets/ticketshare/TicketShareBuy.png'
import ticketsharehome from '../../assets/ticketshare/TicketshareHome.png'
import ticketsharehome2 from '../../assets/ticketshare/TicketshareHome2.png'

import VaCoxaHome from '../../assets/VaCoxa/VaCoxaHome.png'
import VaCoxaAdmin from '../../assets/VaCoxa/ProfissionalSaúde.png'	

import dtMoneyHome from '../../assets/dtmoney/dtMoneyHome.png'
import dtMoneyModal from '../../assets/dtmoney/dtMoneyModal.png'
import dtMoneySaída from '../../assets/dtmoney/dtMoneySaída.png'


const NavbarContainer = styled.nav`
  display: flex;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  padding: 4vw 12.5vw 2vw;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  height: 80px;
  background-color: ${colors.darkColor};
  color: ${colors.textColor};

  @media screen and (max-width: 1700px) {
    padding: 4vw 6vw 2vw;
  }
`;

const NavbarName = styled.h1`
  font-size: 40px;
  font-weight: 400;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
  color: ${colors.textColor}};

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

const ProjectTitle = styled.h1`
  font-size: 40px;
  font-weight: 400;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
  color: ${colors.primaryColor}};
  margin-top: 2rem;
  `;

const ProjectDescription = styled.h1`
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
  color: ${colors.textColor}};
  margin-top: 2rem;
  `

  const ProjectWrapper = styled.div`
  margin: 0px 20vw;
  margin-top: 14vh;
  height: 100%;
  @media screen and (max-width: 1700px) {
    margin: 0px 6vw;
  }
  @media screen and (max-width: 768px) {
    margin-top: 20vh;
  }
  `;

  const ProjectImg = styled.img`
  height: 32rem;
  object-fit: fit;
  @media screen and (max-width: 768px) {
    height: 15rem;
  }
  `;


const projects = [
  { id: 0, name: "Ticketshare", description: `The ability to intuitively convey ideas is inherent in Ticketshare's name. Our mission was to translate their ideas and proposals in the same way and create a striking and contemporary brand. The entire visual identity was built on the pillars of innovation, simplicity, and receptivity.  \nWith vibrant and modern colors, a friendly and simple font, and smooth and striking shapes, the identity embraces the concept of Ticketshare and strengthens it across different media platforms. \nMade with Angular and .NET 6.0, this app is a ticket-selling startup designed to provide an easy-to-use platform for buying and selling tickets. With this app, users can quickly search for available tickets for a wide range of events and securely purchase them through the platform. Additionally, Ticketshare offers a unique feature that allows users to safely trade tickets with each other, offering a level of flexibility and convenience that is not typically available through traditional ticket-selling platforms. Overall, Ticketshare is a user-friendly app that simplifies the ticket-buying process and provides a safe and secure way for users to exchange tickets. `,
   images: [{url: ticketsharehome}, {url: ticketsharehome2}, {url: ticketsharebuy}, {url: ticketshare}] },
  { id: 1, name: "DT Money", description: "DtMoney is a financial management application with a similar idea to Dev.Finance, but with more advanced technologies and resources, including open-source libraries developed by the community. This application was developed during Chapter II of the ReactJS track in the Rocketseat Ignite Bootcamp. With DtMoney, users can easily register and delete transactions, and check their incoming and outgoing balance.  ", images: [{url: dtMoneyHome},{ url: dtMoneyModal}, {url: dtMoneySaída}] },
  { id: 2, name: "SwiftVax", description: "During the global pandemic, a team developed a new app with a clear objective: to help people schedule their COVID-19 vaccine appointments. This application offers two main interfaces: one for the client to schedule their appointment, and another 'admin' panel, for nurses and healthcare providers to manage the appointments and make necessary changes or notes. With this app, users can easily and quickly schedule their vaccine appointments, and healthcare professionals can manage their schedules and work more efficiently. Overall, this innovative project aims to facilitate the vaccine appointment process and contribute to the fight against the COVID-19 pandemic.", images: [{url: VaCoxaHome},{ url: VaCoxaAdmin}] },
  { id: 3, name: "Ticketshare", description: "Colxa colxa colxa toooots", images: [{},{}] },
  { id: 4, name: "Ticketshare", description: "Colxa colxa colxa toooots", images: [{},{}] },
]

const Projects = () => {
  const { id } = useParams();
  return (
    <div>
      <NavbarContainer>
        <Link to="/" style={{ textDecoration: "none" }}>
          <NavbarName>Thiago Pierre.</NavbarName>
        </Link>
      </NavbarContainer>

      <ProjectWrapper>
        <Carousel>
          {projects[id].images.map((image) => (
            <Carousel.Item>
              <ProjectImg
                className="w-100"
                src={image.url}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <ProjectTitle>{projects[id].name}</ProjectTitle>
          <ProjectDescription>{projects[id].description}</ProjectDescription>

        <Link to="/" style={{textDecoration: 'none'}}>
          <Button style={{marginLeft: 'auto', marginRight: 'auto',marginBottom: '2rem', marginTop: '2rem'}}>Go Back</Button>
        </Link>
      </ProjectWrapper>
    </div>
  )
}

export default Projects