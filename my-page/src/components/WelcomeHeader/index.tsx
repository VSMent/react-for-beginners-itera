import { Component, ReactNode } from "react";
import style from "./header.module.css";
class WellcomeHeader extends Component<WellcomeHeaderProps> {
  render(): ReactNode {
    return (
      <h1 className={style.main}>
        Hello, I am <span>{this.props.name}</span>
      </h1>
    );
  }
}

export default WellcomeHeader;

type WellcomeHeaderProps = {
  name: string;
};
