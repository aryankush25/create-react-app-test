import "./App.css";
import { Fragment, useReducer } from "react";

const initialState = { count: 1 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      return { count: state.count + 1 };
    }
    case "decrement": {
      return { count: state.count - 1 };
    }

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [state1, dispatch1] = useReducer(reducer, initialState);

  return (
    <Fragment>
      <div>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
      </div>
      <div>
        <p>Count1: {state1.count}</p>
        <button onClick={() => dispatch1({ type: "increment" })}>
          Increment
        </button>
        <button onClick={() => dispatch1({ type: "decrement" })}>
          Decrement
        </button>
      </div>
    </Fragment>
  );
}

export default App;
