import React from "react";
import styled from "styled-components";

const ContainerStyles = styled.div `
  height: 20px;
  width: 100%;
  background-color: #e0e0de;
  border-radius: 50px;

  @media screen and (max-width: 768px) {
    height: 15px;
    width: 85%;
`
const FillerStyles = styled.div `
  height: 100%;
  width: ${props => props.width ? props.width : 'auto'};
  background-color: #5aac98;
  border-radius: inherit;
  position: relative;
  text-align: right;
`
const LabelStyles = styled.span `
  padding: 5px;
  color: white;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    position: absolute;
    margin-left: -30px;
    font-size: 10px;
    padding: 0;
  }
`
const ProgressBar = (props) => {
    return (
      <ContainerStyles>
        <FillerStyles width={props.completed}>
          <LabelStyles >{props.completed}</LabelStyles>
        </FillerStyles>
      </ContainerStyles>
    );
  };
  
  export default ProgressBar;