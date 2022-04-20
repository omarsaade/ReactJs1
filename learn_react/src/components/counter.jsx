// imrc
import React, { Component } from "react";

//cc
class Counter extends Component {
  //state hye object
  state = {
    count: 0,
    // imageUrl: "https://picsum.photos/200",
  };

  //   this is how can put a css style
  //   styles = {
  //     fontSize: 10,
  //     fontWeight: "bold",
  //   };

  render() {
    // let classes = this.getBadgeClasses();

    //hayda jsx
    return (
      <div>
        {/* this yaane Counter */}
        {/* <img src={this.state.imageUrl} alt="" /> */}
        {/* <span style={this.styles} className="badge badge-primary m-2"> */}
        {/* <span style={{ fontSize: 30 }} className="badge badge-primary m-2"> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
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
