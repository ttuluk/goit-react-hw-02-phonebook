import React from "react";
import shortid from "shortid";

class Form extends React.Component {
  state = {
    contacts: [],
    name: "",
  };
  nameInputId = shortid.generate();

  handleInputChange = (event) => {
    // console.log(event);
    // console.log(event.currentTarget.value);
    // console.log(event.currentTarget.name);
    // this.setState ({ inputValue: event.currentTarget.value });

    const { name, value } = event.currentTarget;
    this.setState(() => {
      return { [name]: value, contacts: [value] };
    });
  };

  handleSubmite = (e) => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ name: "" });
  };

  render() {
    //тест
    // return (<div>
    //     <input type="text" value={this.state.inputValue} onChange={this.handleInputChange}/>
    // </div>)

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
              onChange={this.handleInputChange}
              required
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
        <section className="contacts">
          <h2>Contacts</h2>
          <ul>
            {this.state.contacts.map((e) => {
              return <li></li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}

export { Form };
