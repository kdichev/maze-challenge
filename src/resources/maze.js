import createResource from "./createResource";
import { createGame } from "./api";

export const { actions, reducer } = createResource("maze", {
  maze_id: null
});

export const createMaze = payload => async dispatch => {
  dispatch(actions.mazeRequest());
  try {
    const { data } = await createGame(payload);
    dispatch(actions.mazeSuccess({ ...data }));
  } catch (error) {
    if (error.response) {
      dispatch(actions.mazeFail({ error: error.response.data }));
    }
  }
};
