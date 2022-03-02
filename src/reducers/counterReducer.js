const initalState = {
  count: 0,
  className: ""
};

const counterReducer = (state = initalState, action) => {
  switch (action.type) {
    case "INCREASE_COUNTER":
      return {
        ...state,
        count: state.count + action.payload,
        className: action.class
      };
    case "DECREASE_COUNTER":
      return {
        ...state,
        count: state.count - action.payload,
        className: action.class
      };
    case "RESET_COUNTER":
      return {
        ...state,
        count: 0
      }
    default:
      return state;
  }
};

export default counterReducer;
