import { FC } from "react";

const Bio: FC<BioProps> = ({ bio }) => {
  return <h3>{bio}</h3>;
};

export default Bio;

type BioProps = {
  bio: string;
};
