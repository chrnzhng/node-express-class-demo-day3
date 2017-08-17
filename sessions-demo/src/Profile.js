import React, { Component } from 'react';
import axios from 'axios';

export default class Profile extends Component {
  constructor() {
    super()
    this.state = {
      user: '',
      secretData: ''
    }
    this.secretData = this.secretData.bind(this)
  }

  secretData() {
    axios.get('/api/secretData').then(res => {
      this.setState({
        secretData: res.data.secrets
      })
    })
  }

  componentDidMount() {
    axios.get('/api/user').then(res => {
      this.setState({
        user: res.data.user
      })
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.user ? `Welcome ${this.state.user}!` : `No one is signed in :(`}</h1>
        <button onClick={this.secretData}>Give me the secret data</button>

      </div>
    )
  }
}
