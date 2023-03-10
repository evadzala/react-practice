// import logo from './logo.svg';
import React, { Component } from 'react'; // 引入React定義好的React Component
class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
    this.state={
      percent: 0
    }
    this.plusPercent = this.plusPercent.bind(this)
    this.minusPercent = this.minusPercent.bind(this)
  }
  plusPercent () {
    this.setState((prevState) => {
      if (prevState.percent <= 100) return {percent: prevState.percent++}
    })
  }
  minusPercent () {
    this.setState((prevState) => {
      if (prevState.percent > 0) return {percent: prevState.percent--}
    })
  }
  render() {
    return (
      <div>
        {/* <button onClick={plusPercent}>增加</button> */}
        <button onClick={this.minusPercent}>減少</button>
        <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
          <div className="progress-bar" style={{backgroundColor:"#fe5196",width: `${this.state.percent}%`,height:"100%",borderRadius:"10px"}}></div>
        </div>
      </div>
    )
  }
}
// import './App.css';

// function App(props) {
//   // return (
//   //   <div className="App">
//   //     <header className="App-header">
//   //       <img src={logo} className="App-logo" alt="logo" />
//   //       <p>
//   //         Edit <code>src/App.js</code> and save to reload.
//   //       </p>
//   //       <a
//   //         className="App-link"
//   //         href="https://reactjs.org"
//   //         target="_blank"
//   //         rel="noopener noreferrer"
//   //       >
//   //         Learn React test
//   //       </a>
//   //     </header>
//   //   </div>
//   // );
//   return (
//     // <button onClick={props.handleClick}>{props.name}</button>
//     <button> {props.children} </button>
//   )
// }

export default App;
