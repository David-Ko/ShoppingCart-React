import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.counter.value,
      items: ["apple", "orange", "lemon"]
    };
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  getBadgetClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  renderItems() {
    if (this.state.items.length === 0) return <p>There are no items!</p>;
    return (
      <ul>
        {this.state.items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  handleIncrement(event) {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <span className={this.getBadgetClasses()}>{this.formatCount()}</span>
        <Button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Add Item
        </Button>
        <Button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </Button>
        {this.state.items.length === 0 && "please create a new item"}
        {this.renderItems()}
      </div>
    );
  }
}

export default Counter;
