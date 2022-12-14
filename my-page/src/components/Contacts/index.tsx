import { FC } from "react";
import { ContactItem, ContactItemProps } from "./ContactItem";

const Contacts: FC<ContactsProps> = ({ contacts }) => {
  return (
    <>
      <h4>Here are my contacts</h4>
      <ul>
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
