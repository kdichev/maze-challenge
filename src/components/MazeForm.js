import React from "react";
import Form from "./Form";
import TextField from "./TextField";
import Button from "./Button";

const MazeForm = ({ onChange, values, onSubmit }) => (
  <Form
    onSubmit={e => {
      e.preventDefault();
      onSubmit(values);
    }}
  >
    <TextField
      name="name"
      placeholder="Pony name"
      type="text"
      required
      onChange={onChange}
    />
    <TextField
      name="width"
      type="number"
      min={15}
      max={25}
      defaultValue={15}
      required
      onChange={onChange}
    />
    <TextField
      name="height"
      type="number"
      min={15}
      max={25}
      defaultValue={15}
      required
      onChange={onChange}
    />
    <TextField
      name="difficulty"
      type="number"
      min={0}
      max={10}
      defaultValue={0}
      onChange={onChange}
    />
    <Button type="submit">CreateMaze</Button>
  </Form>
);

export default MazeForm;
