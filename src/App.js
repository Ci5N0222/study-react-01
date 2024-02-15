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
  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동맛집', '리액트 독학']);
  let [like, likeUpdate] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [titleState, setTitleState] = useState(0);
  let [inputValue, setInputValue] = useState('');

  // 1. Array 자료 갯수만큼 함수안의 코드 실행
  [1, 2, 3].map(function(a){
    // 2. 함수의 파라미터는 Array안에 있던 자료
    // console.log(a);
     // 3. return에 뭐 적으면 array로 담아줌
    // return '12321'
  })

  // Destructuring 문법
  // let num = [1, 2];
  // let a = num[0];
  // let c= num[1];
  // let [a, c] = [1, 2];

    /**
   * State가 Array/Object 면 독립적 카피본을 만들어서 수정해야 한다.
   * 중요 : 기존state == 신규state 가 true 일 경우 state가 변경되지 않는다.
   * Array/Object 특징
   * ** Array/Object에 담은 변수엔 화살표만 저장된다.
   * ** (메모리에 할당된 Array 데이터를 가리키는 화살표)
   * 
   * 동작하지 않는 예
   * let copy = title;
   * title[0] = '여자 코트 추천';
   * setTitle(copy);
   */
  
  // Shallow copy를 만들어서 수정해야한다.
  // let copy = [...title];
  // copy[0] = '여자 코트 추천';
  // setTitle(copy);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>

      {
        title.map(function(index, i){
          return (
            <div>
              <div className='list' key={i}>
                <h4>
                  <span onClick={() => {
                    modal==true ? setModal(false) : setModal(true)
                    setTitleState(i)}}>{ index }</span> 
                  <span onClick={(e)=>{
                    e.stopPropagation();
                    let copy = [...like];
                    copy[i]++ 
                    likeUpdate(copy)}}>👍</span> { like[i] } 
                </h4>
                <p>2월 15일 발행</p>
                <button onClick={() => {
                  let copy = [...title];
                  // Array 항목 삭제
                  copy.splice(i, 1);
                  setTitle(copy);

                  // setTitle(title.filter(title => title !== index));
                }}>삭제</button>
              </div>
            </div>
          )
        })
      }

      <input onChange={(e) => {
        setInputValue(e.target.value);}}>
      </input>
      <button onClick={() => {
        let copy = [...title];
        // Array 항목 추가
        copy.unshift(inputValue);
        setTitle(copy);
        // const newList = title.concat(inputValue);
        // setTitle(newList);
        // setInputValue('');
      }}>등록</button>
      
      {
        modal == true ? <Modal titleState={titleState} setTitle={setTitle} title={title}/> : null
      }

    </div>
  );
}

// Function component
function Modal(props) {
  return(
    <div className='modal'>
        <h4> { props.title[props.titleState] } </h4>
        <p>날짜</p>
        <p>상세 내용</p>
        <button onClick={() => {
          let copy = [...props.title]
          copy[0] = '여자코트 추천';
          props.setTitle(copy);
        }}>글수정</button>
      </div>
  )
}

// Class component
class Detail extends React.Component {
 constructor(props){
  super(props);
  this.state = {
    name : 'Noh',
    age : 20
  }
 }
 render(){
  return(
    <div>
      Hello {this.props.name}
      Hello {this.state.name}
      <button onClick={() => {
        this.setState({name : Sion})
      }}></button>
    </div>
  )
 }
}

export default App;
