import { FC, useContext } from "react";
import { observer } from "mobx-react-lite";
import { StopwatchCtx } from "..";
import { convertSecondsToTimeString } from "../../utils/time";
import styles from "./timeHeader.module.css";

type TimeHeaderProps = {
  text: string;
  active: boolean;
};

const TimeHeader: FC = observer(() => {
  const { currentStatus, timePassed } = useContext(StopwatchCtx);

  return (
    <h2 className={currentStatus === "started" ? styles.on : styles.off}>
      {convertSecondsToTimeString(timePassed)}
    </h2>
  );
});

export default TimeHeader;
