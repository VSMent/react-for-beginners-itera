import { FC, useState } from "react";
import styles from "./stopwatch.module.css";
import StopwatchButton from "./StopwatchButton";

const convertSecondsToTime = (seconds: number) => {
  return seconds;
};

// tick method
// stop method

const Stopwatch: FC = () => {
  const [state, setState] = useState({
    stopwatchState: "stopped",
    startTime: 0,
    timePassed: 0,
  });

  const startStopwatch = () => {
    setState({
      ...state,
      startTime: Date.now(),
      stopwatchState: "started",
    });
  };

  return (
    <>
      <h2>00:00:00</h2>
      <div>
        <StopwatchButton text={"Start"} callback={startStopwatch} />
        <StopwatchButton text={"Stop"} callback={() => {}} />
      </div>
    </>
  );
};
export default Stopwatch;
