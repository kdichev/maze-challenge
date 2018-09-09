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

export const getMaze = () => async (dispatch, getState) => {
  dispatch(actions.mazestateRequest());
  try {
    const { data } = await getGame(getState().maze.data.maze_id);
    dispatch(
      actions.mazestateSuccess({ ...data, endPoint: data["end-point"] })
    );
  } catch (error) {
    if (error.response) {
      dispatch(
        actions.mazestateFail({
          error: error.response.data
        })
      );
    }
  }
};
