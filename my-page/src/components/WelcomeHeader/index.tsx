import { Component, ReactNode } from "react";

class WellcomeHeader extends Component<WellcomeHeaderProps> {
  render(): ReactNode {
    return <h1>Hello, I am {this.props.name}</h1>;
  }
}

export default WellcomeHeader;

type WellcomeHeaderProps = {
  name: string;
};
