import createResource from "./createResource";
import { movePlayer } from "./api";

export const { actions, reducer } = createResource("nextMove", {
  state: null,
  "state-result": null
});

export const movePony = direction => async dispatch => {
  dispatch(actions.nextmoveRequest());
  try {
    const { data } = await movePlayer(getState().maze.data.maze_id, direction);
    dispatch(actions.nextmoveSuccess({ ...data }));
  } catch (error) {
    if (error.response) {
      dispatch(actions.nextmoveFail({ error: error.response.data }));
    }
  }
};
