import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  // The indexOf() method returns the first index at which
  //  a given element can be found in the array, or -1 if it is not present.

  handleIncrement = (counter) => {
    // console.log(counter);
    const counters = [...this.state.counters];
    // console.log(counters);
    const index = counters.indexOf(counter);
    // counters[0] = {id:1,value:4}
    counters[index] = { ...counter };
    // console.log(counters[index]);
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      // console.log(c);
      return c;
    });
    console.log(counters);
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    // console.log("Event Handler Called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    // console.log(counters);
    this.setState({ counters: counters });
    // fina nekteba hik , cz key and value are the same
    // this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            // value={counter.value}
            // id={counter.id}
            //he badal ma kell marra nkarer id w value
            //mnektob he li tahet
            // counter = { id: 1, value: 4}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
