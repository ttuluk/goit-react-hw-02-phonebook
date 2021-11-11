import React from "react";

const Contacts = ({ contactNames, onDeleteContact }) => {
  return (
    <section className="contacts">
      <h2>Contacts</h2>
      <ul className="contacts_list">
        {contactNames.map((elem) => {
          return (
            <li key={elem.id} className="contacts_item">
              {elem.name}: {elem.phoneNumber}
              <button type="button" onClick={onDeleteContact}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Contacts;
