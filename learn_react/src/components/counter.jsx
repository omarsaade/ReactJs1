// imrc
import React, { Component } from "react";

//cc
class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    /* this.state.count++;//malh techtegel abdan
    hala2 he btshil el poperty w bethet ma7al property jdide
    li hye count ,btjib el value el adimw btejmas3o ma3 1  
    w bta3melo return bi count */
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    ////Destructuring

    const { count } = this.state;
    return count === 0 ? "Zero" : count;
    // return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
