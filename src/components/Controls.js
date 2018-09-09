import React from "react";
import styled from "styled-components";

const Button = styled.button`
  height: 20px;
  width: 20px;
  padding: 0;
`;

const Controls = props => (
  <div>
    <div>
      <Button onClick={props.onNorth}>↑</Button>
    </div>
    <Button onClick={props.onWest}>←</Button>
    <Button onClick={props.onSouth}>↓</Button>
    <Button onClick={props.onEast}>→</Button>
  </div>
);

export default Controls;
