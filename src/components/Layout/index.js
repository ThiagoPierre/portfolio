import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
/*   margin: -${(props) => props.gutter}; */
`;

const ColContainer = styled.div`
  display: inline-block;
  box-sizing: border-box;
  padding: 0 10px;
  ${({ width }) => width && `width: calc((100% / 12) * ${width});`}
`;

const Col = ({ width, children }) => {
  return <ColContainer width={width}>{children}</ColContainer>;
};


export { Row, Col };