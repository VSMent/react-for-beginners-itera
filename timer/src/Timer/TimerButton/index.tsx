import { FC } from "react";
import styles from "./timerButton.module.css";

type TimerButtonProps = {
  text: string;
  callback: () => void;
};

const TImerButton: FC<TimerButtonProps> = ({ text, callback }) => {
  return (
    <button type="button" className={styles.button} onClick={callback}>
      {text}
    </button>
  );
};

export default TImerButton;
