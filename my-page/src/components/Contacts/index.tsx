import { FC } from "react";
import { ContactItem, ContactItemProps } from "./ContactItem";
import styles from "./contacts.module.css";

const Contacts: FC<ContactsProps> = ({ contacts }) => {
  return (
    <>
      <h3 className={styles.header}>Here are my contacts</h3>
      <ul className={styles.list}>
        {contacts.map((element: ContactItemProps) => {
          return <ContactItem {...element} />;
        })}
      </ul>
    </>
  );
};

type ContactsProps = {
  contacts: ContactItemProps[];
};

export default Contacts;
