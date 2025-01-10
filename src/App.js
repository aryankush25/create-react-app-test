import "./App.css";
import { createContext, Fragment, useContext, useReducer } from "react";

const CounterContext = createContext();

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

const Comp = () => {
  const { state, dispatch } = useContext(CounterContext);

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
    </Fragment>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      <Comp />
    </CounterContext.Provider>
  );
}

export default App;
