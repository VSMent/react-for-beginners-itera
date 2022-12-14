import { Component, ReactNode } from "react";

class ContactItem extends Component<ContactItemProps> {
  render(): ReactNode {
    return (
      <li>
        <a href={this.props.link}>{this.props.name}</a>
      </li>
    );
  }
}

type ContactItemProps = {
  name: string;
  link: string;
};

export { ContactItem, type ContactItemProps };
