import React, { Component } from "react";

export class counter extends Component {
  state = {
    inc: 0,
    dec: this.props.Counter,
  };
  increment = () => {
    return this.setState({ inc: this.state.inc + 1 });
  };
  decrement = () => {
    return this.setState({ dec: this.state.dec - 1 });
  };
  render() {
    console.log("hi this is the value of Counter ", this.props.Counter);

    return (
      <div>
        <button onClick={() => this.increment()}>
          Increment {this.state.inc}
        </button>
        <label>{this.props.Counter}</label>
        <button onClick={() => this.decrement()}>
          DECREMENT {this.state.dec}
        </button>
      </div>
    );
  }
}

export default counter;
