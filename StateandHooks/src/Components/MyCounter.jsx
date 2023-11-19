import { Component } from "react";
import CounterDisplayer from "./CounterDisplayer";
import "./Style.css";
import MyEvenCounter from "./MyEvenCounter";
class MyCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  allClicksCounter = () => {
    this.setState(() => {
      return { count: this.state.count + 1 };
    });
  };
  render() {

    return (
      <div>
        <button onClick={this.allClicksCounter}>Click here</button>
        <CounterDisplayer counter={this.state.count} />
        <MyEvenCounter counter1={this.state.count} />
      </div>
    );
  }
}
export default MyCounter;
