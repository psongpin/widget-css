import styled from "styled-components";

const Bar = styled.div`
  height: 8px;
  background-color: #f2f2f2;

  &:after {
    content: "";
    display: block;
    width: ${props => props.percent.toString().concat("%")};
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #eb5757;
  }
`;

export default Bar;
