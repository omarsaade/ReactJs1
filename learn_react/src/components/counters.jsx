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
    //
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      //   console.log(c);
      return c;
    });
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
            // value={counter.value}
            // id={counter.id}
            //he badal ma kell marra nkarer id w value
            //mnektob he li tahet
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
