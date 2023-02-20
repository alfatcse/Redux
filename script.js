const decrementEl = document.getElementById("decrement");
const incrementEl = document.getElementById("increment");
const matchDiv = document.getElementById("match-div");
const newMatch = document.getElementById("newMatch");
const addMatch = document.getElementById("addMatch");
const scoreBoard = document.getElementById("scoreBoard");
addMatch.onclick = function AddMatch(event) {
  event.preventDefault();
  console.log("match added");
  let d = document.createElement("div");
  d.className = "all-matches container";
  d.id = "newMatch";
  d.innerHTML = newMatch.innerHTML;
  matchDiv.appendChild(d);
};
let decrementPayload = 0;
let incrementPayload = 0;
const initialState = {
  value: 0,
};
function counterReducer(state = initialState, action) {
  if (action.type === "increment") {
    return {
      ...state,
      value: state.value + parseInt(action.incrementPayload),
    };
  } else if (action.type === "decrement") {
    return {
      ...state,
      value: state.value - parseInt(action.decrementPayload),
    };
  } else {
    return state;
  }
}
const store = Redux.createStore(counterReducer);
const render = () => {
  const state = store.getState();
  console.log(state.value);
  if(state.value<0)
  {
    scoreBoard.innerText = 0;
  }
  else{
    scoreBoard.innerText = state.value;
  }
  
};
render();
store.subscribe(render);
decrementEl.onkeydown = function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    console.log(decrementEl.value);
    decrementPayload = decrementEl.value;
    decrementEl.value = "";
    store.dispatch({
      type: "decrement",
      decrementPayload: decrementPayload,
    });
  }
};
incrementEl.onkeydown = function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    console.log(incrementEl.value);
    incrementPayload = incrementEl.value;
    incrementEl.value = "";
    store.dispatch({
      type: "increment",
      incrementPayload: incrementPayload,
    });
  }
};
console.log(decrementPayload, incrementPayload);
