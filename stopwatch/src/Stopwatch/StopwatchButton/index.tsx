import { FC, useContext } from "react";
import { StopwatchButtonCtx } from "..";
import styles from "./stopwatchButton.module.css";

type StopwatchButtonProps = {
  text: string;
  callback: () => void;
};

const StopwatchButton: FC = () => {
  const { text, callback } = useContext(StopwatchButtonCtx);
  return (
    <button type="button" className={styles.button} onClick={callback}>
      {text}
    </button>
  );
};

export default StopwatchButton;
