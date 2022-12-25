import { FC } from "react";
import styles from "./timer.module.css";
import TImerButton from "./TimerButton";

const Timer: FC = () => {
  return (
    <>
      <h2>00:00:00</h2>
      <div>
        <TImerButton text={"Start"} callback={() => {}} />
        <TImerButton text={"Stop"} callback={() => {}} />
      </div>
    </>
  );
};
export default Timer;
