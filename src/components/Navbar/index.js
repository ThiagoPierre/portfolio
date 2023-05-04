import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {colors} from '../../variables.js';
import { slide as Menu } from 'react-burger-menu'

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

const NavbarLogo = styled.img`
  height: 60px;
  padding: 10px;
`;

const NavbarLinks = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavbarLink = styled.li`
list-style-type: none;
  margin: 0 10px;
  padding: 5px 10px;
  border-bottom: 2px solid transparent;
  color: ${({ active }) => (active ? '${colors.primaryColor}}' : '${text.primaryColor}}')};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${colors.primaryColor}};
  }

  &:active,
  &:focus {
    color: ${colors.primaryColor}};
    outline: none;
  }

  ${({ active }) =>
    active &&
    `
    border-bottom-color: ${colors.primaryColor}};
  `}
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

const Navbar = () => {

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

  const showSettings = (event) => {
    event.preventDefault();
  }

  return (
    <>
    <NavbarContainer>
      <a style={{textDecoration: 'none', cursor: 'pointer'}} onClick={() => handleLinkClick('home')}>
        <NavbarName>Thiago Pierre.</NavbarName>
      </a>


      <NavbarLinks>
        <NavbarLink active={activeSection === 'about'} onClick={() => handleLinkClick('about')}>
          <span style={{color: '#5aac98'}}> 01. </span>
          About
        </NavbarLink>
        <NavbarLink active={activeSection === 'skills'} onClick={() => handleLinkClick('skills')}>
        <span style={{color: '#5aac98'}}> 02. </span>
          Skills
        </NavbarLink>
        <NavbarLink active={activeSection === 'experience'} onClick={() => handleLinkClick('experience')}>
        <span style={{color: '#5aac98'}}> 03. </span>
          Experience
        </NavbarLink>
        <NavbarLink active={activeSection === 'portfolio'} onClick={() => handleLinkClick('portfolio')}>
        <span style={{color: '#5aac98'}}> 04. </span>
          Portfolio
        </NavbarLink>
        <NavbarLink active={activeSection === 'contact'} onClick={() => handleLinkClick('contact')}>
        <span style={{color: '#5aac98'}}> 05. </span>
          Contact
        </NavbarLink>
      </NavbarLinks>

    </NavbarContainer>
    <div className="teste">
      <Menu width={ 200 }  right>
        <a className="menu-item" onClick={() => handleLinkClick('about')}>About</a>
        <a className="menu-item" onClick={() => handleLinkClick('skills')}>Skills</a>
        <a className="menu-item" onClick={() => handleLinkClick('experience')}>Experience</a>
        <a className="menu-item" onClick={() => handleLinkClick('portfolio')}>Portfolio</a>
        <a className="menu-item" onClick={() => handleLinkClick('contact')}>Contact</a>
      </Menu>
    </div>
    
    </>
  );
};
export default Navbar;





