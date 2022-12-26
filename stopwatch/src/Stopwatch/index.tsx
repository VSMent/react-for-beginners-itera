import { FC, useEffect, useState } from "react";
import styles from "./stopwatch.module.css";
import StopwatchButton from "./StopwatchButton";

const prependZero = (str: string) => (str.length > 1 ? str : "0" + str);
const convertSecondsToTimeString = (seconds: number) => {
  const h = prependZero(Math.floor(seconds / 3600).toString(10));
  const m = prependZero(Math.floor((seconds % 3600) / 60).toString(10));
  const s = prependZero(Math.floor((seconds % 3600) % 60).toString(10));
  return `${h}:${m}:${s}`;
};
let defaultTitle = "";
const DefaultStopwatchState = {
  stopwatchState: "stopped",
  startTime: 0,
  timePassed: 0,
};

const Stopwatch: FC = () => {
  const [state, setState] = useState(DefaultStopwatchState);
  useEffect(() => {
    defaultTitle = document.title;
  }, []);
  useEffect(() => {
    let interval: NodeJS.Timer;
    if (state.stopwatchState === "started") {
      interval = setInterval(tick, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [state.stopwatchState]);

  const tick = () => {
    setState({
      ...state,
      timePassed: Math.floor((Date.now() - state.startTime) / 1000),
    });
  };

  const startStopwatch = () => {
    setState({
      ...state,
      timePassed: 0,
      startTime: Date.now(),
      stopwatchState: "started",
    });
    document.title = "Timer is running";
  };

  const stopStopwatch = () => {
    setState({
      ...state,
      stopwatchState: "stopped",
    });
    document.title = defaultTitle;
  };

  return (
    <>
      <h2>{convertSecondsToTimeString(state.timePassed)}</h2>
      <div>
        <StopwatchButton text={"Start"} callback={startStopwatch} />
        <StopwatchButton text={"Stop"} callback={stopStopwatch} />
      </div>
    </>
  );
};
export default Stopwatch;
