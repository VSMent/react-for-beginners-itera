import { FC } from "react";
import styles from "./timeHeader.module.css";

type TimeHeaderProps = {
  text: string;
  active: boolean;
};

const TimeHeader: FC<TimeHeaderProps> = ({ text, active }) => {
  return <h2 className={active ? styles.on : styles.off}>{text}</h2>;
};

export default TimeHeader;
