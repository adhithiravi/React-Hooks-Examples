import React from "react";

class TraditionalComponent extends React.Component {
  state = {
    buttonPressed: ""
  };

  componentDidMount() {
    console.log("Component did mount", this.state.buttonPressed);
  }

  componentDidUpdate() {
    console.log("Component did update", this.state.buttonPressed);
  }

  onYesPress() {
    this.setState({ buttonPressed: "Yes" });
    console.log("Yes was pressed");
  }

  onNoPress() {
    this.setState({ buttonPressed: "No" });
    console.log("No was pressed");
  }

  renderResult() {
    return <div>{this.state.buttonPressed} was pressed </div>;
  }

  render() {
    return (
      <div>
        <button onClick={() => this.onYesPress()}>Yes</button>
        <button onClick={() => this.onNoPress()}>No</button>
        {this.renderResult()}
      </div>
    );
  }
}

export default TraditionalComponent;
