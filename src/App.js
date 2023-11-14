import {useState} from 'react';
import Button from './Button';
import Dice from './Dice';

/* 
  props 
  : 컴포넌트 태그에 지정해 준 속성
  - 컴포넌트 태그에 지정해 준 속성은 하나의 객체형태로
    컴포넌트 함수의 첫번째 파라미터로 전달된다.
*/

/* 
  1. num State를 Dice 컴포넌트의 num prop으로 전달해주기.
     -> num={2} 에서 num={num}으로 변경
  2. num State를 3으로 바꾸는 handleRollClick 이르는 함수 만들기
     -> const handleRollClick = () => {
          setNum(3);
        }
  3. 이 함수를 던지기 컴포넌트에 onClick prop으로 전달해준 다음에 코드를 저장하기
     -> <Button onClick={handleRollClick}>던지기</Button>
  4. Button 컴포넌트로 가서 onClick prop을 받은 다음에
     onClick 이벤트에 onClick prop을 등록하기
     -> function Button({children, onClick}) {
          return <button>{children}</button>
        }   
        
*/

function random(n) {
  return Math.ceil(Math.random()*n);
}

function App() {
  const [num, setNum] = useState(1);

  const handleRollClick = ()=>{
    const nextNum = random(6);
    setNum(nextNum);
  }

  const handleClearClick = ()=>{
    setNum(1);
  }

  return(
    <div>
      <Button onClick={handleRollClick}>던지기</Button>
      <Button onClick={handleClearClick}>처음부터</Button>
      <Dice color="blue" num={num}/>
    </div>
  )
}

export default App;