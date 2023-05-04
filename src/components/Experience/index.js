import { useState } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SectionSeparatorText, colors} from '../../variables';


const Experience = () => {

  const ExperienceWrapper = styled.div`
  margin-left: calc((100vw - 12.5vw)/6);
  display: inline-block;
  height: 100%;
  width: 100%;
  padding-top: 0vw;
  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-top: 2rem;
    height: 100%;
    min-height: 50vh;
  }

  @media screen and (max-width: 1400px) {
    height: 100%;
  }
  `;

  const JobsTitle = styled.h1`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 30px;
  letter-spacing: 0.05em;
  color: #FFFFFF;
  @media screen and (max-width: 768px) {
    font-size: 24px;
    margin-top: 1rem;
    }
  `;

  const JobsSubtitle = styled.h1`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin-top: 0.3rem;
    margin-bottom: 1rem;
    }
  `

  const JobsDescription = styled.li`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
  &::before {
    content: "•";
    color: ${colors.primaryColor};
    font-weight: bold;
    display: inline-block; 
    width: 1em;
    margin-left: -1em;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin-top: 0.5rem;
    }
  `

  const ExperienceButton = styled.button`
  background-color: ${({ active }) => (active ? "#1C1C1C" : "#101010")};
  color: ${({ active }) => (active ? "#5aac98" : "#FFF")};
  border: ${({ active }) => (active ? "#5aac98" : "#1C1C1C")};
  display: inline-block;
  border-style: none none none solid;
  height: 50px;
  cursor: pointer;
  width: 80%;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ active }) => (active ? "#5aac98" : "#5aac98")};
    background-color: ${colors.infoColor};
  }

  @media screen and (max-width: 768px) {
    border: ${({ active }) => (active ? "#5aac98" : "#1C1C1C")};
    border-style: none none solid none;
    text-align: center;
    font-size: 14px;
    }
  `;

  const ExperienceButtonWrapper = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    }
  `;

  const Company = styled.span `
  color: ${colors.primaryColor}
  `
    const ExperienceRow = styled(Row)`
    margin-top: 5rem;
    @media screen and (max-width: 768px) {
      margin-top: 2rem;
    }
    `;


  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };


  return (
    <ExperienceWrapper id="experience">
        <SectionSeparatorText width={"33vw"}> <span style={{ color: '#5aac98', marginRight: '1rem' }}>03.</span>Places I've Worked</SectionSeparatorText>
        <ExperienceRow gutter="20px">
            <Col lg={4} md={4} sm={12}>
              <ExperienceButtonWrapper>
                <ExperienceButton active={activeTab === 1} onClick={() => handleTabClick(1)}>
                  Ticketshare
                </ExperienceButton>
                <ExperienceButton active={activeTab === 2} onClick={() => handleTabClick(2)}>
                  Examroom.AI
                </ExperienceButton>
                <ExperienceButton active={activeTab === 3} onClick={() => handleTabClick(3)}>
                  Pitang
                </ExperienceButton>
              </ExperienceButtonWrapper>
            </Col>
            <Col lg={6} md={8} sm={12}>
              <div>
                {activeTab === 1 && 
                <>
                  <JobsTitle>Tech Lead <Company>@Ticketshare</Company></JobsTitle>
                  <JobsSubtitle>July 2022 - Now</JobsSubtitle> 
                  <ul style={{listStyle: "none", padding: "0"}}>
                    <JobsDescription>
                    Led the development of a ticket-selling startup application for concerts and shows, utilizing .NET and Angular as the primary programming languages.
                    </JobsDescription>
                    <JobsDescription>
                    Acted as a full-stack developer and project manager, having frequent meetings with stakeholders to identify their needs and priorities
                    </JobsDescription>
                    <JobsDescription>
                    Managed the responsibilities of front-end, back-end development and DevOps, leveraging the Google Cloud platform
                    </JobsDescription>
                    <JobsDescription>
                    Successfully completed a test party with 500 people, demonstrating the app's ability to handle high traffic loads
                    </JobsDescription>
                    <JobsDescription>
                    Collaborated effectively with a diverse team to deliver a high-quality product that met the needs of the startup and its customers. 
                    </JobsDescription>
                  </ul>
                </>
                }
                {activeTab === 2 &&
                <>
                  <JobsTitle>Fullstack Developer <Company>@ExamRoom.AI</Company></JobsTitle>
                  <JobsSubtitle>April 2022 - July 2022</JobsSubtitle>
                  <ul style={{listStyle: "none", padding: "0"}}>
                    <JobsDescription>
                    Developed and maintained features for ExamRoom.AI, a platform for administering medical exams in the United States, utilizing AI to prevent cheating
                    </JobsDescription>
                    <JobsDescription>
                    Collaborated with a diverse team of developers and communicated daily in English to ensure successful feature delivery and issue resolution
                    </JobsDescription>
                    <JobsDescription>
                    Utilized Angular and .NET technologies to resolve bugs and develop new functionalities for both front-end and back-end development of the platform
                    </JobsDescription>
                    <JobsDescription>
                    Contributed to the creation of a product that helps people take medical exams remotely, providing a safe and convenient solution during a challenging time.
                    </JobsDescription>
                  </ul>
                </>
                
                }
                {activeTab === 3 && 
                <>
                <JobsTitle>Intern/Junior Developer <Company>@Pitang</Company></JobsTitle>
                <JobsSubtitle>May 2021 - April 2022</JobsSubtitle>
                <ul style={{listStyle: "none", padding: "0"}}>
                  <JobsDescription>
                  Completed a six-month internship as a Junior Frontend/Intern, working on a project developed using Angular and .NET, gaining experience in all areas of the project, and assisting the QA team by developing automated tests.
                  </JobsDescription>
                  <JobsDescription>
                  Promoted to Junior Front-end Developer upon completing the internship, and took on the responsibility of developing an electronic bidding system in Angular 10, utilizing the designs created by the team's designers, and integrating the front-end with the back-end.
                  </JobsDescription>
                  <JobsDescription>
                  Demonstrated proficiency in Angular development, as well as the ability to learn new technologies and integrate them into complex projects.                  </JobsDescription>
                  <JobsDescription>
                  Collaborated effectively with the team to drive successful project outcomes, delivering high-quality work that exceeded expectations.
                  </JobsDescription>
                </ul>
              </>}
              </div>
            </Col>
        </ExperienceRow>
    </ExperienceWrapper>
  );
};




export default Experience;
