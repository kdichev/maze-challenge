import styled from "styled-components";

const Node = styled.div`
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  background-color: lightgray;
  background-color: ${props => props.isPony && `pink`};
  background-color: ${props => props.isEndPoint && `green`};
  background-color: ${props => props.isDomokun && `red`};
  border-left: ${props => props.walls.includes("west") && `1px solid black;`};
  border-top: ${props => props.walls.includes("north") && `1px solid black;`};
`;

export default Node;
