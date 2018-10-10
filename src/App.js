import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      one: "",
      two: "",
      three: "",
      four: "",
      five: "",
      numOne: "",
      numTwo: "",
      numThree: "",
      numFour: "",
      numFive: "",
      dataset: "",
      count: 0
    };
  }

  onClick = (word, e) => {
    if (this.state[word] !== "matched" && this.state.count % 2 === 0) {
      const count = this.state.count + 1;
      this.setState({ [word]: "matched", dataset: e.target.dataset.id, count });
    }
  };

  onClickNumber = (number, e) => {
    if (this.state.dataset === e.target.dataset.id) {
      const count = this.state.count + 1;
      this.setState({
        [number]: "matched",
        count
      });
    }
  };

  render() {
    return (
      <div className="match-quiz text-center">
        <h1>Match the words to the numbers</h1>
        <h3>
          Click the word and then the number. Match all the pairs to continue.
        </h3>
        <ul className="wordslist1">
          <li
            data-id="2"
            onClick={e => this.onClick("two", e)}
            className={this.state.two}
          >
            Two
          </li>
          <li
            data-id="5"
            onClick={e => this.onClick("five", e)}
            className={this.state.five}
          >
            Five
          </li>
          <li
            data-id="4"
            onClick={e => this.onClick("four", e)}
            className={this.state.four}
          >
            Four
          </li>
          <li
            data-id="1"
            onClick={e => this.onClick("one", e)}
            className={this.state.one}
          >
            One
          </li>
          <li
            data-id="3"
            onClick={e => this.onClick("three", e)}
            className={this.state.three}
          >
            Three
          </li>
        </ul>

        <ul className="wordslist2">
          <li
            data-id="3"
            onClick={e => this.onClickNumber("numThree", e)}
            className={this.state.numThree}
          >
            3
          </li>
          <li
            data-id="4"
            onClick={e => this.onClickNumber("numFour", e)}
            className={this.state.numFour}
          >
            4
          </li>
          <li
            data-id="2"
            onClick={e => this.onClickNumber("numTwo", e)}
            className={this.state.numTwo}
          >
            2
          </li>
          <li
            data-id="5"
            onClick={e => this.onClickNumber("numFive", e)}
            className={this.state.numFive}
          >
            5
          </li>
          <li
            data-id="1"
            onClick={e => this.onClickNumber("numOne", e)}
            className={this.state.numOne}
          >
            1
          </li>
        </ul>
        {this.state.count === 10 ? <div className="response">Correct</div> : ""}
      </div>
    );
  }
}

export default App;
