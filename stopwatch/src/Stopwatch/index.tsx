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
type StopwatchState = {
  currentStatus: "stopped" | "started";
  timePassed: number;
};

const Stopwatch: FC = () => {
  const [state, setState] = useState<StopwatchState>({
    currentStatus: "stopped",
    timePassed: 0,
  });
  useEffect(() => {
    defaultTitle = document.title;
  }, []);
  useEffect(() => {
    let interval: NodeJS.Timer;
    if (state.currentStatus === "started") {
      interval = setInterval(tick, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [state.currentStatus]);

  const tick = () => {
    setState((prevState) => ({
      ...state,
      timePassed: prevState.timePassed + 1,
    }));
    console.log("t");
  };

  const startStopwatch = () => {
    setState({
      ...state,
      timePassed: 0,
      currentStatus: "started",
    });
    document.title = "Timer is running";
  };

  const stopStopwatch = () => {
    setState({
      ...state,
      currentStatus: "stopped",
    });
    document.title = defaultTitle;
  };

  return (
    <div
      className={
        state.currentStatus === "started"
          ? styles.stopwatchOn
          : styles.stopwatchOff
      }
    >
      <h2>{convertSecondsToTimeString(state.timePassed)}</h2>
      <div className={styles.buttonRow}>
        <StopwatchButton text={"Start"} callback={startStopwatch} />
        <StopwatchButton text={"Stop"} callback={stopStopwatch} />
      </div>
    </div>
  );
};
export default Stopwatch;
