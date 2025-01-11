import "./App.css";
import { createContext, Fragment, memo, useContext, useState } from "react";

const CounterContext = createContext();

const Component = (props) => {
  const { state } = useContext(CounterContext);

  return (
    <Fragment>
      <div>{state}</div>
    </Fragment>
  );
};

const Wrapper = memo(() => {
  console.log("Render Wrapper");
  return <Component />;
});

function App() {
  const [state, setState] = useState("");

  return (
    <CounterContext.Provider value={{ state }}>
      <Wrapper />

      <input value={state} onChange={(e) => setState(e.target.value)} />
    </CounterContext.Provider>
  );
}

export default App;
