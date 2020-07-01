import React, { Component } from "react";

export default class Show extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <span>ID: {this.props.id} </span>
        <span>Some Text: {this.props.some_text} </span>
        <span>Foo: {this.props.foo} </span>
      </div>
    )
  }
}
