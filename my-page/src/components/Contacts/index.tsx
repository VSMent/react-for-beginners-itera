import { FC } from "react";

const Contacts: FC<ContactsProps> = ({ contacts }) => {
  return (
    <>
      <h4>Here are my contacts</h4>
      <ul>
        {contacts.map((element: Contact) => {
          return (
            <li>
              <a href={element.link}>{element.name}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Contacts;

type ContactsProps = {
  contacts: Contact[];
};

type Contact = {
  name: string;
  link: string;
};
