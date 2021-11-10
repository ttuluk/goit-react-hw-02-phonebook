import React from "react";
import { Form } from "./components/Form";

class App extends React.Component {
  state = {
    toDoos: "",
  };

  formHandleSumit = (data) => {
    console.log(data);
  };

  render() {
    return (
      <div className="App">
        <Form onSubmit={this.formHandleSumit} />
      </div>
    );
  }
}

export { App };
