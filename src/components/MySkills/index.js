import React from 'react'
import styled from 'styled-components'
import Row  from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SectionSeparatorText, Button } from '../../variables'
import { colors } from '../../variables';
import ProgressBar from '../Progress';

const MySkillsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding-top: 0vw;
    margin-left: calc((100vw - 12.5vw)/12);
    background-color: transparent;
    color: ${colors.textColor};
    @media screen and (max-width: 768px) {
        height: 100%;
        margin-left: 0;
        margin-top: 4rem;
    }
`;

const MySkillsTitle = styled.h1`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 38px;

letter-spacing: 0.05em;

@media screen and (max-width: 768px) {
    font-size: 20px;
    &:nth-child(1) {
        margin-top:2rem;
    }
    
}
`;

const MySkillsSubtitle = styled.h1`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 30px;
margin-top: 0.3rem;
margin-bottom: 2rem;
letter-spacing: 0.05em;

color: rgba(255, 255, 255, 0.5);

@media screen and (max-width: 768px) {
    font-size: 16px;
    margin-top: 0.1rem;
    margin-bottom: 1rem;
}
`;

const MySkillsDesc = styled.h1  `
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 30px;
margin-top: 1rem;
margin-bottom: 1rem;
letter-spacing: 0.05em;

@media screen and (max-width: 768px) {
    font-size: 15px;

}
`;

const SkillsRow = styled(Row)`
margin-left: calc((100vw - 12.5vw)/12);
margin-top: 5rem;
@media screen and (max-width: 768px) {
    height: 100%;
    margin-left: 0;
    margin-top: 0;
}
`;

const MySkills = () => {
  return (
    <MySkillsWrapper id="skills">
        <SectionSeparatorText width={"49vw"}> <span style={{ color: '#5aac98', marginRight: '1rem' }}>02.</span>My Skills</SectionSeparatorText>
        <SkillsRow>
            <Col sm={4}>
                <MySkillsTitle>Frontend Developer</MySkillsTitle>
                <MySkillsSubtitle>2+ years</MySkillsSubtitle>
                <MySkillsDesc>Angular</MySkillsDesc>
                <ProgressBar completed={'90%'} />
                <MySkillsDesc>Html, CSS and Javascript</MySkillsDesc>
                <ProgressBar completed={'90%'} />
                <MySkillsDesc>React</MySkillsDesc>
                <ProgressBar completed={'80%'} />
                <MySkillsDesc>NEXT.js</MySkillsDesc>
                <ProgressBar completed={'33%'} />
            </Col>
            <Col sm={2}>
            </Col>
            <Col sm={4}>
                <MySkillsTitle>Backend Developer</MySkillsTitle>
                <MySkillsSubtitle>1+ years</MySkillsSubtitle>
                <MySkillsDesc>.NET Framework</MySkillsDesc>
                <ProgressBar completed={'75%'} />
                <MySkillsDesc>NodeJS</MySkillsDesc>
                <ProgressBar completed={'60%'} />
                <MySkillsDesc>Google Cloud Platform</MySkillsDesc>
                <ProgressBar completed={'60%'} />
            </Col>
        </SkillsRow>
    </MySkillsWrapper>
  )
}

export default MySkills