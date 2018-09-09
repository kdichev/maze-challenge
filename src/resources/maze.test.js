import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import mockAxios from "axios";

import { createMaze, actions } from "./maze";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it("it should succeed", async () => {
  const expectedResponse = {
    maze_id: "1"
  };
  const expectedActions = [
    actions.mazeRequest(),
    actions.mazeSuccess(expectedResponse)
  ];
  const store = mockStore({});
  mockAxios.post.mockImplementationOnce(
    () => new Promise(resolve => resolve({ data: expectedResponse }))
  );
  await store.dispatch(createMaze({ width: 15, height: 15, name: "rarity" }));
  expect(store.getActions()).toEqual(expectedActions);
});
