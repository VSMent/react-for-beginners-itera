import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";
import { createContext, FC, useEffect } from "react";
import styles from "./stopwatch.module.css";
import StopwatchButton from "./StopwatchButton";
import TimeHeader from "./TimeHeader";

type StopwatchState = {
  currentStatus: "stopped" | "started";
  timePassed: number;
};
const defaultStopwatchState: StopwatchState = {
  currentStatus: "stopped",
  timePassed: 0,
};

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

class StopwatchStore {
  currentStatus: "stopped" | "started" = "stopped";
  timePassed: number = 0;
  defaultTitle: string = "";

  constructor() {
    makeAutoObservable(this);
  }
  setDefaultTitle = (val: string) => {
    this.defaultTitle = val;
  };
  start = () => {
    this.timePassed = 0;
    this.currentStatus = "started";
    document.title = "Timer is running";
  };
  stop = () => {
    this.currentStatus = "stopped";
    document.title = this.defaultTitle;
  };
  doTick = () => {
    this.timePassed += 1;
  };
}

const stopwatchStore = new StopwatchStore();
export const StopwatchCtx = createContext(stopwatchStore);
const Stopwatch: FC = observer(() => {
  const { currentStatus, doTick, start, stop, setDefaultTitle } =
    stopwatchStore;
  useEffect(() => {
    setDefaultTitle(document.title);
  }, []);
  useEffect(() => {
    let interval: NodeJS.Timer;
    if (currentStatus === "started") {
      interval = setInterval(doTick, 1000);
    }
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStatus]);

  return (
    <div
      className={
        currentStatus === "started" ? styles.stopwatchOn : styles.stopwatchOff
      }
    >
      <StopwatchCtx.Provider value={stopwatchStore}>
        <TimeHeader />
      </StopwatchCtx.Provider>
      <div className={styles.buttonRow}>
        <StopwatchButtonCtx.Provider
          value={{ ...defaultStartButtonState, callback: start }}
        >
          <StopwatchButton />
        </StopwatchButtonCtx.Provider>
        <StopwatchButtonCtx.Provider
          value={{ ...defaultStopButtonState, callback: stop }}
        >
          <StopwatchButton />
        </StopwatchButtonCtx.Provider>
      </div>
    </div>
  );
});
export default Stopwatch;
