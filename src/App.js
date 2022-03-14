import { useState, useEffect } from "react";
import Button from "./Button";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("I run all the time");
  return (
    <div>
      <h1>Welcom Back!</h1>
      <Button onClick={onClick} text={"Continue"} />
    </div>
  );
}

export default App;
