import createResource from "./createResource";
import { getGame } from "./api";

export const { actions, reducer } = createResource("mazeState", {
  pony: [70],
  domokun: [218],
  endPoint: [186],
  size: [15, 15],
  difficulty: 0,
  data: []
});

export const getMaze = payload => async (dispatch, getState) => {
  dispatch(actions.masestateRequest());
  try {
    const { data } = await getGame(getState().maze.data.maze_id);
    dispatch(actions.masestateSuccess({ ...data }));
  } catch (error) {
    if (error.response) {
      dispatch(
        actions.masestate({
          error: error.response.data
        })
      );
    }
  }
};
