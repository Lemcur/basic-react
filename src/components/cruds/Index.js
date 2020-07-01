import React, { Component } from "react";
import axios from "axios";
import Show from './Show'

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

  fetchCruds() {
    axios.get(
      indexCrudUrl,
    ).then(response => {
      console.log(response.data);
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
        help
        {
          this.state.cruds.map(crud => {
            return(
              <Show
                id={crud.id}
                some_text={crud.some_text}
                foo={crud.foo}
              />
            )
          })
        }
      </div>
    )
  }
}
