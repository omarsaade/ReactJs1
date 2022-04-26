import React, { Component } from "react";

class Counter extends Component {
  // componentDidUpdate(prevProps, prevState) {
  //   console.log("PrevProps ", prevProps);
  //   console.log("PrevProps ", prevState);
  //   if (prevProps.counter.value !== this.props.counter.value) {
  //     //Ajax call and get new data from the server
  //     //       PrevProps
  //     // {counter: {…}, onDelete: ƒ, onIncrement: ƒ}
  //     // counter: {id: 1, value: 5}
  //     // onDelete: counterId => {…}
  //     // onIncrement: counter => {…}
  //     // key: (...)
  //     // get key: ƒ ()
  //     // [[Prototype]]: Object
  //   }
  // }
  componentWillUnmount() {
    console.log("Counter - Unmout");
  }

  render() {
    // console.log("props", this.props);
    console.log("counter rendered");
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  // Color of span
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    // console.log(classes);
    return classes;
  }

  formatCount() {
    ////Destructuring
    const { value } = this.props.counter;
    // const value = this.props.counter.value;
    return value === 0 ? "Zero" : value;
    // return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
