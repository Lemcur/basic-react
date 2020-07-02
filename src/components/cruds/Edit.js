import React, { Component } from "react";
import axios from "axios";

export default class Show extends Component {
  constructor(props) {
    super(props)

    this.state = {
      some_text: this.props.crud.some_text,
      foo: this.props.crud.foo,
    }
  }

  handleChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  editCrud = (event) => {
    event.preventDefault()
    const id = this.props.crud.id

    axios.put(
      `http://localhost:3100/api/v1/cruds/${id}`,
      {
        some_text: this.state.some_text,
        foo: this.state.foo
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    ).then(() => {
      this.props.onUpdate({
        ...this.props.crud,
        ...this.state
      })
      this.props.finishEditing()
    }).catch(e => {
      console.log(e)
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.editCrud}>
        <input
            type="some_text"
            name="some_text"
            placeholder="some_text"
            value={this.state.some_text}
            onChange={this.handleChange}
          />
          <input
            type="foo"
            name="foo"
            placeholder="foo"
            value={this.state.foo}
            onChange={this.handleChange}
          />
          <button type="submit">Edit</button>
        </form>
      </div>
    )
  }
}
