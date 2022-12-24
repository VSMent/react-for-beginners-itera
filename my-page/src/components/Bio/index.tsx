import { FC } from "react";
import styles from "./bio.module.css";

const Bio: FC<BioProps> = ({ bio }) => {
  return <h2 className={styles.main}>{bio}</h2>;
};

export default Bio;

type BioProps = {
  bio: string;
};
