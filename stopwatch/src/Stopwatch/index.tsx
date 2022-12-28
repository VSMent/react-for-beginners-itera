import { createContext, FC, useEffect, useState } from "react";
import styles from "./stopwatch.module.css";
import StopwatchButton from "./StopwatchButton";
import TimeHeader from "./TimeHeader";

let defaultTitle = "";
type StopwatchState = {
  currentStatus: "stopped" | "started";
  timePassed: number;
};
const defaultStopwatchState: StopwatchState = {
  currentStatus: "stopped",
  timePassed: 0,
};

export const StopwatchCtx = createContext(defaultStopwatchState);

type StopwatchBtn = {
  text: string;
  callback: () => void;
};
const defaultStartButtonState: StopwatchBtn = {
  text: "Start",
  callback: () => {
    console.log("start");
  },
};
const defaultStopButtonState: StopwatchBtn = {
  text: "Stop",
  callback: () => {
    console.log("stop");
  },
};

export const StopwatchButtonCtx = createContext({
  text: "defaultText",
  callback: () => {
    console.log("default callback");
  },
});

const Stopwatch: FC = () => {
  const [state, setState] = useState<StopwatchState>(defaultStopwatchState);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.currentStatus]);

  const tick = () => {
    setState((prevState) => ({
      ...state,
      timePassed: prevState.timePassed + 1,
    }));
    // console.log("t");
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
      <StopwatchCtx.Provider value={state}>
        <TimeHeader />
      </StopwatchCtx.Provider>
      <div className={styles.buttonRow}>
        <StopwatchButtonCtx.Provider
          value={{ ...defaultStartButtonState, callback: startStopwatch }}
        >
          <StopwatchButton />
        </StopwatchButtonCtx.Provider>
        <StopwatchButtonCtx.Provider
          value={{ ...defaultStopButtonState, callback: stopStopwatch }}
        >
          <StopwatchButton />
        </StopwatchButtonCtx.Provider>
      </div>
    </div>
  );
};
export default Stopwatch;
