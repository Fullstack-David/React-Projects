import { Children, useState } from "react";

import Button from "./components/Button";
import FunctionAsProps from "./components/FunctionAsProps";
import ObjectsAsStates from "./components/ObjectsAsStates";
import StatesAsProps from "./components/StatesAsProps";
import TypeEvent from "./components/TypeEvent";
import ChildrenAsProps from "./ChildrenAsProps";
import { User } from "./types/types";

// EXERCISES
import Exercise1 from "./components/Exercise1";
import Counter from "./components/Counter";
import EventTypeScript from "./components/EventTypeScript";
import Wrapper from "./components/Wrapper";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [user, setUser] = useState(null);

  const handleClick = (test: string) => {
    console.log(test);
    return 5;
  };

  // kontroll och space - viktig redskap

  return (
    <>
      <h1>TypeScript</h1>
      <Exercise1 name="David" age={30} />
      <Counter count={count} setCount={setCount} />
      <EventTypeScript />
      <Wrapper backgroundColor="#ffc107" color="#17a2b8">
        <h3>Hello Childreen</h3>
      </Wrapper>
      {/* <div className="cards">
        <Button
          backgroundColor="#28a745"
          fontSize="30px"
          fontFamily="Courier New"
          color="white"
          border="none"
          borderRadius="10px"
          isRounded={true}
          padding={[8, 12]}
        /> */}

      {/* <FunctionAsProps
          handleClick={handleClick}
          backgroundColor="#007bff"
          color="white"
        /> */}
      {/* <ObjectsAsStates/>
        <StatesAsProps count={count} setCount={setCount} />
        <TypeEvent /> */}
      {/* hello david är en prop här nedan*/}
      {/* <ChildrenAsProps backgroundColor="#ffc107" color="white">
          <h1>Hello David</h1>
        </ChildrenAsProps>
      </div> */}
    </>
  );
}

export default App;
