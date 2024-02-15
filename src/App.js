import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

/**
 * class --> className
 * 데이터 바인딩 : {}
 * useState : 자료 저장 
 */

function App() {
  
  let post = '강남 우동 맛집';
  let [title, b] = useState('남자 코트 추천');

  // Destructuring 문법
  let num = [1, 2];
  // let a = num[0];
  // let c= num[1];
  let [a, c] = [1, 2];

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Blog</h4>
      </div>
      <div className='list'>
        <h4>글 제목</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ title }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
