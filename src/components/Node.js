import styled from "styled-components";

const Node = styled.div`
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  background-color: lightgray;
  background-color: ${props => props.node.includes("pony") && `pink`};
  background-color: ${props => props.node.includes("exit") && `green`};
  background-color: ${props => props.node.includes("domokun") && `red`};
  border-left: ${props => props.node.includes("west") && `1px solid black;`};
  border-top: ${props => props.node.includes("north") && `1px solid black;`};
`;

export default Node;
