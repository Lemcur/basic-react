import React, { Component } from "react";
import axios from "axios";

const createCrudUrl = 'http://localhost:3100/api/v1/cruds'

export default class Create extends Component {
  constructor(props) {
    super(props)

    this.state = {
      some_text: "",
      foo: "",
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit(event) {
    const { some_text, foo } = this.state
    console.log(localStorage.getItem('token'))
    axios.post(
      createCrudUrl,
      {
        some_text: some_text,
        foo: foo,

      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    ).then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error)
    })
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="some_text"
            name="some_text"
            placeholder="some_text"
            value={this.state.some_text}
            onChange={this.handleChange}
            required
          />
          <input
            type="foo"
            name="foo"
            placeholder="foo"
            value={this.state.foo}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Create</button>
        </form>
      </div>
    )
  }
}
