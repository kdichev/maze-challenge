import { createActions, handleActions } from "redux-actions";

export default (actionName, initialState) => {
  const ACTION_NAME = actionName.toUpperCase();
  const actions = createActions({
    [`${ACTION_NAME}_REQUEST`]: () => null,
    [`${ACTION_NAME}_SUCCESS`]: data => ({ data }),
    [`${ACTION_NAME}_FAIL`]: error => ({ error })
  });

  const reducer = handleActions(
    {
      [`${ACTION_NAME}_REQUEST`]: (state, { payload: { data } }) => ({
        ...state,
        loading: true
      }),
      [`${ACTION_NAME}_SUCCESS`]: (state, { payload: { data } }) => ({
        ...state,
        data,
        loading: false
      }),
      [`${ACTION_NAME}_FAIL`]: state => ({
        ...state,
        error: true,
        loading: false
      })
    },
    {
      loading: false,
      data: initialState && initialState,
      error: false
    }
  );
  return { actions, reducer };
};
