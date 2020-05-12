import styled from "styled-components";

const Tooltip = styled.div.attrs({
  className: "px-4 py-2 relative"
})`
  background: #333333;
  border-radius: 4px;
  color: #f2f2f2;
  margin-bottom: 14px;
  font-size: 14px;

  &:after {
    content: "";
    position: absolute;
    bottom: -8px;
    right: 16px;
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px 7px 0 7px;
    border-color: #333333 transparent transparent transparent;
  }
`;

export default Tooltip;
