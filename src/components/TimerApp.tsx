import TimerDisplay from "./TimerDisplay";
import TimerDurationInput from "./TimerDurationInput";
import Btn from "./Btn";
import { useState, useEffect } from "react";


function TimerApp() {

    const [isActive, setIsActive] = useState(false);
    const [duration, setDuration] = useState(1000);
    const [secondsRemaining, setSecondsRemaining] = useState(0);
    
    useEffect(() => {
        setTimeout(() => {
            
            if (isActive) {
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

        return (hours + " hours, " + minutes + " minutes, and " + seconds + "seconds.")

        // return duration
    }


    

    const updateState = () => {
        setIsActive(!isActive);
    }

    const timerDecrement = (value: number) => {
        setSecondsRemaining(value - 1);
    }


    


  return (
    <div>
      
      <TimerDurationInput updateTimer={() => setDuration(6)}/>
      <Btn btnType="update" activeState={''} />
      <br />
      <br />

      <TimerDisplay displayText={updateDisplay(duration)}/>
      {/* conditional formatting to render start or stop button depending if timer is (in)active */
        isActive ? <Btn btnType="stop" activeState={updateState} /> : <Btn btnType="start" activeState={updateState} />
      }

      <Btn btnType='restart' activeState={isActive}></Btn>
    </div>
  );
}

export default TimerApp;
