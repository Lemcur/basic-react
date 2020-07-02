import React, { Component } from "react";
import axios from "axios";
import Edit from './Edit'

export default class Show extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: false,
    }
  }

  deleteCrud = (event) => {
    event.preventDefault()
    const id = this.props.id

    axios.delete(
      `http://localhost:3100/api/v1/cruds/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    ).then(() => {
      this.props.onDelete(id)
    }).catch(e => {
      console.log(e)
    })
  }

  startEditing = () => {
    this.setState({
      isEditing: true
    })
  }

  finishEditing = () => {
    this.setState({
      isEditing: false
    })
  }

  render() {
    if (!this.state.isEditing) {
      return (
        <div>
          <span>ID: {this.props.id} </span>
          <span>Some Text: {this.props.some_text} </span>
          <span>Foo: {this.props.foo} </span>
          <form onSubmit={this.deleteCrud}>
            <button>Delete</button>
          </form>
          <button onClick={this.startEditing}>Edit</button>
        </div>
      )
    } else {
      return (
        <Edit
          crud={this.props.crud}
          onUpdate={this.props.onUpdate}
          finishEditing={this.finishEditing}
        />
      )
    }
  }
}
