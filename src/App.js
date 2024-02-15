// warning message disable
/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

/**
 * class --> className
 * 데이터 바인딩 : {}
 * useState : 자료 저장 
 */

function App() {
  
  // 자주 바뀌는 변수는 state를 사용하여 저장
  let [title, titleUpdate] = useState(['남자 코트 추천', '강남 우동맛집', '리액트 독학']);
  let [like, likeUpdate] = useState(0);

  // Destructuring 문법
  // let num = [1, 2];
  // let a = num[0];
  // let c= num[1];
  // let [a, c] = [1, 2];

  function likeUp() {
    likeUpdate(like++);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>
      
      <button onClick={ () => {
        // State가 Array/Object 면 독립적 카피본을 만들어서 수정해야 한다.
        
        // let copy = title;
        // title[0] = '여자 코트 추천';
        // titleUpdate(copy);
        
        let copy = [...title];
        copy[0] = '여자 코트 추천';
        titleUpdate(copy);
        
      } }> 글 수정 </button>
      
      <div className='list'>
        <h4> { title[0] } <span onClick={ likeUp }>👍</span> { like } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ title[1] } <span onClick={()=>{likeUpdate(like++)} }>👍</span> { like } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ title[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
