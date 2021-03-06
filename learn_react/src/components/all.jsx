Multi-word (and multi-line) cursors/selection in VS Code
Multi-word:
Windows 

Ctrl+Shift+L  selects all instances of the current highlighted word
Ctrl+D        selects the next instance... and the one after that... etc.


Multi-line:
For multi-line selection
Ctrl+Alt+Down will extend your selection or cursor position to the next line. Ctrl+Right / ⌘+Right will move to the end of each line, no matter how long. To escape the multi-line selection, hit Esc.

See the VS Code keybindings (OS sensitive)

====================================


https://babeljs.io/repl

To compile jsx to javascript
we copy the code and we paste it in the modern
compiler babeljs

//hayda jsx
const element = <h1>Hello world</h1>

//iza mnheto 3a babeljs byet7awal la javascript

const element = React.createElement(
    "h1",
     null,
    "hello"
);

=====
awal shi bte5la2 folder esmo components bel src

bte5la2 fi file esmo counter.jsx
el afdal ta3ti .jsx ta ya3mul afdal complition

Simple React Snippets
fia extension fa5ameeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeet el fa5ame


Destructring

Object destructuring
Basic assignment
const user = {
    id: 42,
    isVerified: true
};

const {id, isVerified} = user;

=====================================

// imrc
import React, { Component } from "react";

//cc
class Counter extends Component {
  //state hye object
  state = {
    count: 0,
  };

  render() {
    //hayda jsx
    return (
      <div>
        {/* this yaane Counter */}
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </div>
    );
  }

  formatCount() {

    //Destructuring
    const { count } = this.state;
  //fina nektob jsx expression 3ade jeddan li2an hye object w huwe bya3mul compile  
    return count === 0 ? <h1>Zero</h1> : count;

  }
}

export default Counter;


===================== 
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
fut t3alam kif bta3mul refactorrrr

bt3allem el sattren li badak w bta3mul right 3a refactorrrr
w btna2es esem el function w hye ya kbir
bte5la2 la hala
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
====================================================

// imrc
import React, { Component } from "react";

//cc
class Counter extends Component {
  //state hye object
  state = {
    count: 0,
    // imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
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
        <ul>
          {this.state.tags.map((tag) => (
            //daruru nhet el attribute key bi kell map
            <li key={tag}>{tag}</li>
          ))}
        </ul>
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
===============================================
so bel jsx mafi for loop
............... if and else

====================
true&& true > btred tene wahde
  {this.state.tags.length === 0 && "Please create a new tag!"}

true&& true &&true > btred telet wahde wahde

true && "hi" =>"hi"    cz mena empty , yaane hye true
true && "" => " "      bas hon hye false ,li2an empty string

===================================
// imrc
import React, { Component } from "react";

//cc
class Counter extends Component {
  //state hye object
  state = {
    count: 0,
    tags: [],
  };

  renderTags() {
    //so here we can return null // return "there are no tags"// or <p>
    if (this.state.tags.length === 0) return <p>There are no Tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    //hayda jsx
    return (
      <div>
        {/* boolean && string //*/}
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()}
      </div>
    );
  }
}

export default Counter;
=============================================================

hala2 saglet el bind function bel constructor
ne7na fina badele na3mul shagle btaye7na mena..shu hye el shagle?'
another way to solve this problem:
 
 Badal ma nzid constructor , fina n7awel el function li 3ana
 to a array function!

 li2an el arrow function btouwras el this wirase

 before and with constructor::::::::::::::::::::::::::::::::
   constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    console.log("Increment Clicked", this);
  }

after and without adding constructor::::::::
handleIncrement = () => {
  console.log("Increment CLicked ",this);
}

==============================================
// imrc
import React, { Component } from "react";

//cc
class Counter extends Component {
  state = {
    count: 0,
  };

  //lezem yenhat el bind fia lal method aw fi nesta3mal if:; w bala el bind
  constructor() {
    super();
    //this lal counter class li huwe object
    // console.log("constructor", this);
    //function in javscripts are objects
    //hayde el bind la7 te5la2 instance men el handleIncrement()
    //ma3 el this , bas hal marra saret el this refer lal current object
    // this.handleIncrement.bind(this);//yaane he btraje3le new function
    this.handleIncrement = this.handleIncrement.bind(this);
    // this.handleIncrement = function handle... hik bta3mul yaane
  }

  handleIncrement() {
    console.log("Increment Clicked", this);
    //obj.method
    //function()
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          // iza btla7ez hayde this.handleInrement hye mara2et shi bas
          //yaane passing reference...ma 3melma call metel el function el 3ade
          //yaane hon el handling events ger 3an el vanilla javscript
          //wel onClick ka syntax hye case sensitive
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
================================================================

so using an arrow function is cleaner and simpler than adding a 
custom constructor and rebind every event handler manually

// imrc
import React, { Component } from "react";

//cc
class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    console.log("Increment Clicked", this);
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

-=============================================================

Updating the state:
import React, { Component } from "react";

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
=================================
iza badna na3mul pass la argument wahde 

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
  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          // iza fi object
          //hayde function reference,mafina na3mul call la fucntion
          //3adye w na3mul pass la argument .we cant
          onClick={this.doHandleIncrement}
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
=========================================
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
  

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          // iza fi object
          //hayde function reference,mafina na3mul call la fucntion
          //3adye w na3mul pass la argument .we cant
          onClick={()= > this.handleIncrement({ id: 1 })}
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






=================================
iza badna na3mul pass la product kbir

import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          // iza fi object
          onClick={() => this.handleIncrement(product)}
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
============================================
counter.jsx
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    //  console.log("props", this.props);
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
===============================
counters.jsx

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
  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter key={counter.id} value={counter.value}>
            <h4>Title</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
==========================================
counters.jsx
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
  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter key={counter.id} value={counter.value}>
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
======================================================

counter.jsx

import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log("props", this.props);
    return (
      <div>
        {this.props.children}
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
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    ////Destructuring

    const { value } = this.state;
    return value === 0 ? "Zero" : value;
    // return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
=======================================================
Difference between props and state
                &&&&&&&&&&&&&&&
Props includes data that we give to a component 
whereas
State includes data that is local or private
to that component.
so other components cannot access that state it's
completly internal to that component.

===============================================
props is read only property
mafina na3tia value faj2a barra aw shi
mamnu3...fina bas namre2la el value men el state
lal ossas li fia li hene properties(value,id)

we cannot change the input to this component inside
of this component.

=================================
counters.jsx
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

  handleDelete = (counterId) => {
    // console.log("Event Handler Called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    console.log(counters);
    this.setState({ counters: counters });
    // fina nekteba hik , cz key and value are the same
    // this.setState({ counters });
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
            id={counter.id}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

==================================================
counter.jsx
import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log("props", this.props);
    return (
      <div>
        <h4>{this.props.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    ////Destructuring

    const { value } = this.state;
    return value === 0 ? "Zero" : value;
    // return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
==================================================
counters.jsx
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
==================================================
counter.jsx

import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log("props", this.props);
    return (
      <div>
        <h4>{this.props.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
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

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    ////Destructuring

    const { value } = this.state;
    return value === 0 ? "Zero" : value;
    // return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
==============================================
counters.jsx

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
===============================================
counter.jsx

import React, { Component } from "react";

class Counter extends Component {
  render() {
    // console.log("props", this.props);
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
==================================
fina nekteba hik
$$$$$$$$$$$$$$$$$$$

import React from "react";

//Stateless Functional Component
const NavBar = ({totalCounters}) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;


aw hik ::::::::::::::::::::::::::::::

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;

===========================
App.js

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
  //  a given element can be found in the array, or -1 if it is not present.

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
    const counters = this.state.counters.filter((c) => c.id !== counterId);
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
===============================
navbar.jsx

import React from "react";

//Stateless Functional Component
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;

// function component
function NavBar(props) {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
}

export default NavBar;


======================
counters.jsx

import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

====================================
counter.jsx

import React, { Component } from "react";

class Counter extends Component {
  render() {
    // console.log("props", this.props);
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

========================
lifecycle hooks : hayat el component
MOUNT : constructor , render , componentDidMount
UPDATE: render , componentDidUpdate
UNMOUNT: componentWillUnmout
======================================
componentDidMount : this is call when our component id rendered
into the dom
and its the perfet place to make ajax call to get data from the server

for example:

componentDidMount() {
  //AJax Call
  this.setState({movies})
}

================
Mafina nesta3mel lifecycle hooks bel
 Functional Component

 =======================
 App constructor
App.js:68 App rendered
navbar.jsx:5 NavBar - Rendered
counters.jsx:6 COunters rendered
4counter.jsx:6 counter rendered
App.js:20 App mounted

=======================
Mounting phase : baad el render.

updating phase : lama state aw props 
of a component changes.

unmounting phase: ex fa2set el increment
==========================
bas nef2os 3a inrement byerja3nlna:
App rendered
navbar.jsx:5 NavBar - Rendered
counters.jsx:6 COunters rendered
4 counter.jsx:6 counter rendered
==============================

Unmounting phase : this method is call just before the component 
is removed from the dom : ex el Delete

