import React, { Component } from 'react';
import Counters from './components/counters';
import NavBar from './components/navbar';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };


  // The indexOf() method returns the first index at which
  // a given element can be found in the array, or -1 if it is not present.


  handleIncrement = (counter) => {
    // console.log(counter);
    //cloning array
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
    const counters = this.state.counters.filter(function (c) {
      return c.id !== counterId;
    });
    // console.log(counters);
    this.setState({ counters: counters });
    // fina nekteba hik , cz key and value are the same
    // this.setState({ counters });
  };




  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}



export default App;
