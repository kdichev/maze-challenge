import { connect } from "react-redux";

import { getMaze } from "./../resources/mazeState";

import { movePony } from "./../resources/move";

const withMoveDirections = connect(
  null,
  dispatch => ({
    onWest: async () => {
      await dispatch(movePony("west"));
      dispatch(getMaze());
    },
    onEast: async () => {
      await dispatch(movePony("east"));
      dispatch(getMaze());
    },
    onNorth: async () => {
      await dispatch(movePony("north"));
      dispatch(getMaze());
    },
    onSouth: async () => {
      await dispatch(movePony("south"));
      dispatch(getMaze());
    }
  })
);

export default withMoveDirections;
