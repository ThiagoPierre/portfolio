import styled from "styled-components"

export const colors = {
    primaryColor: '#5aac98',
    secondaryColor: '#9768A6',
    textColor: '#FAFEFE',
    darkColor: '#101010',
    infoColor: '#1C1C1C'
  }

const SectionSeparatorText = styled.h1`
  display: flex;
  align-items: center;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 38px;
  margin-top: 8.5vw;
  width: 100%;

  letter-spacing: 0.05em;

  &::after {
      content: "";
      display: block;
      width: ${props => props.width ? props.width : '35vw'};
      height: 1px;
      margin-left: 20px;
      background-color: ${colors.primaryColor}};
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  `;


  const Button = styled.button`
  background-image: linear-gradient(to right, #5aac98 0%, #00CDAC  51%, #02AAB0  100%);
  padding: 15px 35px;
  text-align: center;
  transition: 0.5s;

  color: white;            
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  border: 0;

 &:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}
`;

export {SectionSeparatorText, Button}