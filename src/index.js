// eslint-disable-next-line no-unused-vars
import { getValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import MyButton from './components/myButton'
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
// let showOne = true
// let buttonCount = 0
// let buttonValue = 'good'
// const styleArgument = {
//   fontSize: '100px',
//   color: 'red',
// }
// const multiButton=()=>{
//   let outPut=[]
//   for(let i = 0;i<4;i++) {
//     outPut.push(<button key={i} style={ styleArgument }>{i}button</button>)
//   }
//   return outPut
// }
// const getButtonValue = (event) => {
//   console.log('getButtonValue', event.target.value)
//   buttonCount++
//   console.log('buttonCount', buttonCount)
//   // buttonValue = event.target.value
//   // buttonValue = buttonValue + buttonCount
//   showOne = !showOne
// }
// const TestFunction = () => {
//   return (
//     <div>
//       <button value={buttonCount} onClick={getButtonValue}>
//         Are U OK?
//       </button>
//       {/* <div>
//         {multiButton()}
//       </div> */}
//       <h1 className='title' style={ styleArgument }>
//         {(showOne ? 'good' : 'not good')}
//       </h1>
//     </div>
//   )
// }
root.render(
  <div>
    <MyButton />
    {/* <App /> */}
    {/* <App>setting word in index.js</App> */}
    <div id='show-area'></div>
    {/* <TestFunction /> */}
  </div>
);
// ReactDOM.render(
//   <h1> Hello world!</h1>, 
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
