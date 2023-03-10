import React, { useState, useEffect } from 'react';

const MyButton=()=>{
  // const initColor = {
  //   redValue: 0,
  //   greenValue: 0,
  //   blueValue: 0,
  // }
  const initState = {
    count: 0,
    running: false,
    speed: 1
  }

  // const [redValue, setRedValue] = useState(initColor.redValue)
  // const [greenValue, setGreenValue] = useState(initColor.greenValue)
  // const [blueValue, setBlueValue] = useState(initColor.blueValue)

  const [count, setCount] = useState(initState.count)
  const [running, setRunning] = useState(initState.running)
  const [speed, setSpeed] = useState(initState.speed)

  const plusPercent = () => {
    // 手動+1
    if (count < 100) setCount(count + speed)
    // if (count < 100) setCount((prev) => prev++)
  }
  const minusPercent = () => {
    // 手動-20
    if (count > 0) setCount(count - speed)
  }
  const run  = () => {
    // 自動+1
    setRunning(true)
  }
  const stop  = () => {
    // 暫停
    setRunning(false)
  }
  const controlSpeed = () => {
    switch (speed) {
      case 1:
        setSpeed((prev) => prev = 2)
        break
      case 2:
        setSpeed((prev) => prev = 4)
        break
      case 4:
        setSpeed((prev) => prev = 1)
        break
      default:
        break
    }
  }
  const reset = () => {
    setCount(initState.count)
    setRunning(initState.running)
    setSpeed(initState.speed)
  }
  useEffect(() => {
    if (!running) return

    let go = setInterval(() => {
      if (count < 100) {
        setCount(count => count + 1)
      } else {
        clearInterval(go)  
      }
    }, 1000 / speed)
    return () => {
      clearInterval(go)
    };
  }, [running, count, speed]);

  return(
    <div className='counter'>
      <div>
        <button onClick={plusPercent}> + </button>
        <button onClick={minusPercent}> - </button>
      </div>
      <div>
        <button onClick={run}> Run </button>
        <button onClick={stop}> Stop </button>
      </div>
      <div>
        <button onClick={controlSpeed}>{`x${speed}`}</button>
        <button onClick={reset}>reset</button>
      </div>

      <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"20px",borderRadius:"10px"}}>
        <div className="progress-bar" style={{backgroundColor: `#f59`,width: `${count}%`,height:"100%",borderRadius:"10px"}}>
          {count}
        </div>
      </div>
      {/* <div>
        <div>
          red:
          <input type="number" onChange={(e) => {setRedValue(e.target.redValue)}} />
        </div>
      </div> */}
    </div>
  );
}

export default MyButton;
