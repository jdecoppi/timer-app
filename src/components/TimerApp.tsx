import TimerDisplay from "./TimerDisplay";
import TimerDurationInput from "./TimerDurationInput";
import Btn from "./Btn";
import { useState, useEffect } from "react";

function TimerApp() {
  const [isActive, setIsActive] = useState(false);
  const [duration, setDuration] = useState(100);
  const [tempDuration, setTempDuration] = useState(duration);

  useEffect(() => {
    let intervalId: number | undefined;

    if (isActive) {
      intervalId = setInterval(() => {
        setDuration((prevDuration) => {
          if (prevDuration <= 0) {
            clearInterval(intervalId);
            setIsActive(false);
            return 0;
          }
          return prevDuration - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isActive]);

  const updateDisplay = (duration: number) => {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration - hours * 3600) / 60);
    const seconds = (60 * (duration - (hours * 3600 + minutes * 60))) / 60;

    return duration > 0
      ? hours + " hours, " + minutes + " minutes, and " + seconds + " seconds remaining."
      : "Time up!";

    // return duration
  };

  const updateState = () => {
    setIsActive(!isActive);
  };

  const updateFromInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempDuration(Number(event.target.value));
  };


  const setTime = () => {
    setDuration(tempDuration);
  };



  return (
    <div>
      <TimerDurationInput onChange={updateFromInput} />
      <Btn btnType="update" onClick={setTime} />
      <br />
      <br />

      <TimerDisplay displayText={updateDisplay(duration)} />
      {
        /* conditional formatting to render start or stop button depending if timer is (in)active */
        isActive ? (
          <Btn btnType="stop" onClick={updateState} />
        ) : (
          <Btn btnType="start" onClick={updateState} />
        )
      }

      <Btn btnType="restart" onClick={setTime}></Btn>
    </div>
  );
}

export default TimerApp;
