import React, { Component } from 'react';
import ListView from './components/ListView'

import axios from 'axios'

import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state= {
      tags: [],
      title: "",
      textBody: ""
    }
  }

  componentDidMount() {
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
    .then(res => {
      console.log(res)
      this.setState(() => ({ tags: res.data})
    )})
    .catch(err => {
      console.log('server error', err)
    })
  }

  render() {
    const { tags } = this.state
    return (
      <div className="App">
        <ListView tags={tags} />
      </div>
    );
  }
}

export default App;
