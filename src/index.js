import ReactDOM from 'react-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

/* 
  여기서 Hello라는 함수를 '리액트 컴포넌트' 라고 부른다.

  - 본격적으로 리액트를 개발할 때는 리액트 엘리먼트를 리액트 컴포넌트로 만들어서 활용한다.

  <리액트 컴포넌트가 되기위한 조건>
  1. 함수 이름의 첫 글자를 꼭 대문자로 써야한다.
  2. 반드시 JSX문법으로 만든 리액트 엘리먼트를 리턴해야 한다.
*/
ReactDOM.render(<App />, document.getElementById('root'));