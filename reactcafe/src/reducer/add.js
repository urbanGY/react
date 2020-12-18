import addAction from "../action/index.js";
const { ADD_VALUE } = addAction.add; // {elements} = modulename.property  action에서 반환하는 객체 안에는 여러개의 모듈이 들어있고 여기에 add라는 이름의 모듈을 쓸 때, {} 이걸로 받으면 add라는 모듈 안에서 export하는 요소들 중 같은 이름에 대해서 받아준다. 이건 변수를 선언을 한다기보다는 반환하는 개념에 가까운거 같다.

const rootState = {
  value: 0,
};

const addValue = (state = rootState, action) => {
  console.log("state : " + state.value);
  switch (action.type) {
    case ADD_VALUE:
      console.log("in reducer add value");
      return {
        value: state.value + action.value,
      };
    default:
      console.log("in reducer default");
      return state;
  }
};

export default addValue;
