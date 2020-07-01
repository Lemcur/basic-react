import React, { Component } from "react";
import axios from "axios";

const loginUrl = "http://localhost:3100/api/v1/users/login"

export default class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
      loginErrors: "",
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
    const { email, password } = this.state

    axios.post(
      loginUrl,
      {
        email: email,
        password: password,
      }
    ).then(response => {
      localStorage.setItem('token', response.data.token)
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
            type="email"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}
