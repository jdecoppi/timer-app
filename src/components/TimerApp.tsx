import TimerDisplay from "./TimerDisplay";
import TimerDurationInput from "./TimerDurationInput";
import Btn from "./Btn";
import { useState, useEffect, useRef } from "react";


function TimerApp() {

    const [isActive, setIsActive] = useState(false);
    const [duration, setDuration] = useState(100);
    const [tempDuration, setTempDuration] = useState(duration);
    
    useEffect(() => {
        setTimeout(() => {
            
            if (isActive == true) {
            setDuration((duration) => duration - 1)
            console.log(duration);
            updateDisplay(duration);
            }
        
        }, 1000)
    })

    const updateDisplay = (duration: number) => {
        
        const hours = Math.floor(duration / 3600)
        const minutes = Math.floor((duration - (hours*3600)) / 60)
        const seconds = (60 *(duration - ((hours*3600) + (minutes*60) ))/ 60)

        return ((duration > 0) ? (hours + " hours, " + minutes + " minutes, and " + seconds + "seconds.") : "Time up!")

        // return duration
    }


    

    const updateState = () => {
        setIsActive(!isActive);
    }


    const updateFromInput = (event) => {
      setTempDuration(event.target.value);
    }


    const setTime = () => {
        setDuration(tempDuration);
    }

    const inputRef = useRef();
    
    /*
    value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)

        */


  return (
    <div>
      
      <TimerDurationInput onChange={updateFromInput} />
      <Btn btnType="update" onClick={setTime} />
      <br />
      <br />

      <TimerDisplay displayText={updateDisplay(duration)}/>
      {/* conditional formatting to render start or stop button depending if timer is (in)active */
        isActive ? <Btn btnType="stop" onClick={updateState} /> : <Btn btnType="start" onClick={updateState} />
      }

      <Btn btnType='restart' onClick={setTime}></Btn>
    </div>
  );
}

export default TimerApp;
