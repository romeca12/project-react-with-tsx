import { useState } from "react";
import User from "./components/User";

function sum(a: number, b: number): number {
  return a + b;
}

type State = {
  name: string;
  num: number;
};

function App() {
  const [state, setState] = useState<string>("به نام خدا");

  return (
    <>
      {/* <h2>{state?.name}</h2> */}

      <User
        value={state}
        onChange={setState}
        name="mohamad"
        age={20}
        haschild={true}
        sum={sum}
        mother={false}
        name2="Ali"
      >
        عنوان مقاله
      </User>
    </>
  );
}

export default App;
