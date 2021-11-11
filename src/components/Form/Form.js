import React from "react";
import shortid from "shortid";
import Contacts from "../Contacts/Contacts";

class Form extends React.Component {
  state = {
    contacts: [],
    name: "",
    phoneNumber: "",
  };
  nameInputId = shortid.generate();
  phoneInputId = shortid.generate();

  handleInputContactChange = (event) => {
    const { name, value } = event.currentTarget;

    this.setState(() => {
      return { [name]: value };
    });
  };

  handleInputPhoneChange = (event) => {
    const { value } = event.currentTarget;

    this.setState(() => {
      return { phoneNumber: value };
    });
  };

  handleSubmite = (e) => {
    e.preventDefault();
    const idContact = shortid.generate();
    this.state.contacts.push({
      name: this.state.name,
      phoneNumber: this.state.phoneNumber,
      id: idContact,
    });
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", phoneNumber: "" });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmite}>
          <label htmlFor={this.nameInputId}>
            Name
            <input
              id={this.nameInputId}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              value={this.state.name}
              onChange={this.handleInputContactChange}
              required
            />
          </label>
          <label htmlFor={this.phoneInputId}>
            <input
              id={this.phoneInputId}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              value={this.state.phoneNumber}
              onChange={this.handleInputPhoneChange}
              required
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
        <Contacts contactNames={this.state.contacts} />
      </>
    );
  }
}

export { Form };
