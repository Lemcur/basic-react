import React, { Component } from "react";
import axios from "axios";
import Show from './Show'
import Create from './Create.js'

const indexCrudUrl = 'http://localhost:3100/api/v1/cruds'

export default class Index extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cruds: []
    }
    this.fetchCruds = this.fetchCruds.bind(this)
    this.renderCruds = this.renderCruds.bind(this)
  }

  componentDidMount() {
    this.fetchCruds()
  }

  addCrud = (crud) => {
    this.setState({
      cruds: [...this.state.cruds, crud]
    })
  }

  deleteCrud = (id) => {
    const survivedCruds = this.state.cruds.filter(crud => crud.id !== id)

    this.setState({
      cruds: survivedCruds
    })
  }

  updateCrud = (crud) => {
    let statedCruds = this.state.cruds

    let newCruds = statedCruds.map(el => {
      if (el.id == crud.id) {
        return crud
      }

      return el
    })

    this.setState({
      cruds: newCruds
    })
  }

  fetchCruds() {
    axios.get(
      indexCrudUrl,
    ).then(response => {
      this.setState({cruds: response.data})
    }).catch(error => {
      console.log(error)
    })
  }

  renderCruds() {
  }

  render() {
    return (
      <div>
        Create new CRUD:
        <Create onSubmit={this.addCrud} />
        <br />
        {
          this.state.cruds.map(crud => {
            return(
              <Show
                key={crud.id}
                id={crud.id}
                some_text={crud.some_text}
                foo={crud.foo}
                crud={crud}
                onDelete={this.deleteCrud}
                onUpdate={this.updateCrud}
              />
            )
          })
        }
      </div>
    )
  }
}
