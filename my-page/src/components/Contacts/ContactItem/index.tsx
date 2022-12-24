import { Component, ReactNode } from "react";
import styles from "./contactItem.module.css";

class ContactItem extends Component<ContactItemProps> {
  render(): ReactNode {
    return (
      <li>
        <a className={styles.link} href={this.props.link}>
          {this.props.name}
        </a>
      </li>
    );
  }
}

type ContactItemProps = {
  name: string;
  link: string;
};

export { ContactItem, type ContactItemProps };
