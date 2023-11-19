import { Component } from "react";

class MyEvenCounter extends Component {
  render() {
    return (
      <div>
        <h1>
          Even Clicks Counter:
          {this.props.counter1 % 2 == 0 ? this.props.counter1 : this.props.counter1 - 1}
        </h1>
      </div>
    );
  }
}

export default MyEvenCounter;
