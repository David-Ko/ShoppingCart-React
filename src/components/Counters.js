import React, { Component } from "react";
import Counter from "./Counter";
import { Button } from "react-bootstrap";

class Counters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        { id: 1, value: 4 },
        { id: 2, value: 50 },
        { id: 3, value: 0 },
        { id: 4, value: 0 }
      ]
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(counterID) {
    const counters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({ counters: counters });
  }

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
