import React from "react";
import { Form } from "./components/Form/Form";

class App extends React.Component {
  formHandleSumit = (data) => {
    console.log(data);
  };

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <Form onSubmit={this.formHandleSumit} />
      </div>
    );
  }
}

export { App };
