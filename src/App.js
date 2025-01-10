import "./App.css";
import {
  createContext,
  forwardRef,
  Fragment,
  useContext,
  useEffect,
  useImperativeHandle,
  useReducer,
  useRef,
} from "react";

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

const Comp = forwardRef((props, ref) => {
  const { state, dispatch } = useContext(CounterContext);

  useImperativeHandle(ref, () => {
    return {
      print() {
        console.log(ref.current);
      },
    };
  });

  return (
    <Fragment>
      <div ref={ref}>
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
});

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const ref = useRef();

  useEffect(() => {
    ref.current.print();

    console.log(ref.current);
  }, []);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      <Comp ref={ref} />
    </CounterContext.Provider>
  );
}

export default App;
