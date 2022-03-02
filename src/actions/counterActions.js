export const increaseCounter = (amount) => {
  return {
    type: "INCREASE_COUNTER",
    payload: amount,
    class: "orange"

  };
};


export const decreaseCounter = (amount) => {
  return {
    type: "DECREASE_COUNTER",
    payload: amount,
    class: "red"
  };
};
export const resetCounter = () => {
  return {
    type: "RESET_COUNTER",
  };
};