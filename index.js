const redux = require("redux");
const BUY_CAKE = "BUY_CAKE";
const BUY_ICE_CREAM = "BUY_ICE_CREAM";
const createStore = redux.createStore;
const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
};

const buyIceCream = () => {
  return {
    type: BUY_ICE_CREAM,
    info: "Second redux action",
  };
};

const initialState = {
  numOfCakes: 10,
  numOfIceCream: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case BUY_ICE_CREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
  }
  return state;
};
const store = createStore(reducer);
const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState());
});
console.log(store.getState());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
