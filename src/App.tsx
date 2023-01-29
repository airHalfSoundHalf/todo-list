import { createGlobalStyle } from "styled-components";
import "./assets/scss/main.scss";
import Todo from "./page/Todo";

// props 전역 스타일
const CommonStyle = createGlobalStyle`
body {
background-color: ${(props) => props.theme.bgColor};
color: ${(props) => props.theme.textColor}
}
`;

function App() {
  return (
    <>
      <CommonStyle />
      <Todo />
    </>
  );
}

export default App;
