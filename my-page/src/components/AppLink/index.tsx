import { FC } from "react";
import styles from "./appLink.module.css";

type AppLinkProps = {
  customText: string;
  customUrl: string;
  callback: () => void;
};

const AppLink: FC<AppLinkProps> = ({ customText, customUrl, callback }) => {
  const clickFunction = (e: any) => {
    e.preventDefault();
    console.log(`redirecting user to the next ${customUrl}`);
    callback();
  };
  return (
    <a className={styles.link} href={customUrl ?? "/"} onClick={clickFunction}>
      {customText ?? "AppLink"}
    </a>
  );
};

export default AppLink;
