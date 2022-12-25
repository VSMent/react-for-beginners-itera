import { FC } from "react";
import styles from "./stopwatchButton.module.css";

type StopwatchButtonProps = {
  text: string;
  callback: () => void;
};

const StopwatchButton: FC<StopwatchButtonProps> = ({ text, callback }) => {
  return (
    <button type="button" className={styles.button} onClick={callback}>
      {text}
    </button>
  );
};

export default StopwatchButton;
