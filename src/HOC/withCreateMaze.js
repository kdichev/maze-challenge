import { connect } from "react-redux";

import { createMaze } from "./../resources/maze";
import { getMaze } from "./../resources/mazeState";

const withCreateMaze = connect(
  null,
  dispatch => ({
    onSubmit: async payload => {
      await dispatch(createMaze(payload));
      dispatch(getMaze());
    }
  })
);

export default withCreateMaze;
