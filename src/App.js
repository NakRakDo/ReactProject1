import { useState, useEffect } from "react";
import Button from "./Button";

function ToHideComponet() {
  useEffect(() => {
    console.log("crated");
    return () => console.log("destroyed");
  }, []);
  return <h1>I am a Component to be Hide :(</h1>;
}

/*
Hook -> Closure 개념을 사용. 상위 스코프의 함수 지역변수를 하위 스코프 함수에서 사용할경우, 상위 스코프의 함수의 실행이 끝나더라도, 하위 스코프의 함수는
상위 스코프의 지역변수를 사용할수 있음. 다만, 상위 스코프 함수가 호출된 이력이 특정 변수에 존재해야함. 즉 상위스코프함수를 변수 없이 익명함수로 실행하면 의미없다.
*/
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  const onClick2 = () => setShowing((prev) => !prev);

  console.log("I run all the time");

  useEffect(() => {
    console.log("I run only once : Call the Api");
  }, []); // run only onec : no object for looking up

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("Search For", keyword);
    }
  }, [keyword]); // Run when 'keyword' changed

  return (
    <div>
      <h1>Welcom Back!</h1>
      <input
        onChange={onChange}
        type="text"
        placeholder="Search here..."
        value={keyword}
      />
      <Button onClick={onClick} text={"Continue " + counter} />
      {showing ? <ToHideComponet /> : null}
      <button onClick={onClick2}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
