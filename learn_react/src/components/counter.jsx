import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  //fina nmare2 product iza badna
  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  //solution for passing 1 paramter
  //he iza habayna nmarae2 2 argument bel events
  // doHandleIncrement = () => {
  ////  this.handleIncrement({ id: 1 });
  // };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          // iza fi object
          //hayde function reference,mafina na3mul call la fucntion
          //3adye w na3mul pass la argument .we cant
          onClick={() => this.handleIncrement({ id: 1 })}
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
