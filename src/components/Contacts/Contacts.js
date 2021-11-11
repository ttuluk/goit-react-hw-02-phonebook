import React from "react";

const Contacts = ({ contactNames }) => {
  return (
    <section className="contacts">
      <h2>Contacts</h2>
      <ul className="contacts_list">
        {contactNames.map((elem) => {
          return (
            <li key={elem.id} className="contacts_item">
              <p>
                {elem.name}: {elem.phoneNumber}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Contacts;
