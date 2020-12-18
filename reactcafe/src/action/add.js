const ADD_VALUE = "ADD_VALUE";

function addValue(value) {
  console.log("in action");
  return { type: ADD_VALUE, value: value };
}

export { ADD_VALUE, addValue };
