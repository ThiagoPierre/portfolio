import React from 'react'
import Navbar from '../../components/Navbar';
import Home from '../../components/Home';
import About from '../../components/About'
import MySkills from '../../components/MySkills';
import Experience from '../../components/Experience';
import Portfolio from '../../components/Portfolio/portfolio';
import Contact from '../../components/Contact/contact';

import styled from 'styled-components';



const Background = styled.div`

`;

const Wrapper = styled.div`
  margin: 0px 12.5vw;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 1700px) {
    margin: 0px 6vw;
  }
`;

const HomePage = () => {
  return (
    <Wrapper>
        <Navbar />
        <Home />
        <About />
        <MySkills />  
        <Experience />                
        <Portfolio />
        <Contact />  
    </Wrapper>
  )
}

export default HomePage