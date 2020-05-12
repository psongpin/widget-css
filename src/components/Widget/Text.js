import styled from "styled-components";

const Text = styled.p`
  color: ${(props) => {
    const type = props.colorType || "default";
    const colors = {
      primary: "#eb5757",
      light: "#828282",
      default: "#4F4F4F",
    };

    return colors[type];
  }};
`;

export default Text;
