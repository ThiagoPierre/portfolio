import React from 'react'
import styled from 'styled-components'
import { colors , Button} from '../../variables'
import { FiGithub } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";



const ContactWrapper = styled.div`
    height: 100vh;
    width: 100%;
    padding-top: 0vw;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    
`

const ContactSection = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    color: ${colors.primaryColor};
    font-size: 20px;
    line-height: 38px;
    margin-bottom: 1rem;

    width: 100%;
    letter-spacing: 0.05em;

`;

const ContactTitle = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 38px;

    width: 100%;
    letter-spacing: 0.05em;
    @media screen and (max-width: 768px) {
        margin-bottom: 1rem;
    }
    `;

const Subtitle = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;


    margin-bottom: 2rem;
    width: 50%;
    opacity: 0.7;
    margin-top: 2rem;
    letter-spacing: 0.05em;

    @media screen and (max-width: 768px) {
        font-size: 16px;
        font-weight: 400;
        width: 100%;
    }
`;

const ContactDiv = styled.div`
    display:flex;
    flex-direction:row;
    margin-top: 4rem;
    margin-bottom: 1rem;

    @media screen and (min-width: 768px) {
        margin-top: 8rem;
    }
`



const Contact = () => {
  return (
    <ContactWrapper id="contact">
        <ContactSection>05. What's Next?</ContactSection>
        <ContactTitle>Get in Touch</ContactTitle>
        <Subtitle>
        Thank you for visiting my portfolio webpage! 
        While I am currently working on some personal 
        projects, I am also actively seeking new opportunities. 
        I would love to connect with others in my industry and 
        welcome any inquiries or questions you may have. Please 
        feel free to contact me at any time, and I will do my best
        to respond promptly. Looking forward to hearing from you!
        </Subtitle>
        <a style={{textDecoration: "none"}} href={`mailto:thiago.barboza.p@gmail.com`}>
            <Button>Say Hello!</Button>
        </a>

        <ContactDiv>
            <h3 style={{marginRight: '1rem', }}>
                <a style={{textDecoration:'none', color:'#59a98b'}} target='_blank' href="https://github.com/ThiagoPierre">
                    <FiGithub />
                </a>
            </h3>
            <h3>
            <a style={{textDecoration:'none', color:'#59a98b'}} target='_blank' href="https://www.linkedin.com/in/thiago-barboza-pierre-b713211a4/">
                    <BsLinkedin />
                </a>
            </h3>
        </ContactDiv>
            <h5>thiago.barboza.p@gmail.com</h5>


    </ContactWrapper>
  )
}

export default Contact