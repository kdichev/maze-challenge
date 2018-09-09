import { withStateHandlers } from "recompose";

const withFormState = withStateHandlers(
  props => ({ values: { width: 15, height: 15, difficulty: 0 } }),
  {
    onChange: (state, props) => e => ({
      ...state,
      values: { ...state.values, [e.target.name]: e.target.value }
    })
  }
);

export default withFormState;
