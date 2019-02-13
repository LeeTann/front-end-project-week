import React, { Component } from 'react';
import { Route, NavLink} from 'react-router-dom'

import ListView from './components/ListView'
import Note from './components/Note'
import CreateForm from './components/CreateForm'

import axios from 'axios'

import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state= {
      notes: [],
    }
  }

  componentDidMount() {
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
    .then(res => {
      console.log(res)
      this.setState(() => ({ notes: res.data})
    )})
    .catch(err => {
      console.log('server error', err)
    })
  }

  render() {
    const { notes } = this.state
    return (
      <div className="App">
        <ul className="navbar">
          <h1>Lambda Notes</h1>
          <li>
            <NavLink to="/notes"><button>View Your Notes</button></NavLink>
          </li>
          <li>
            <NavLink to="/form"><button>+ Create New Note</button></NavLink>
          </li>
        </ul>
        <Route path="/notes" render={props => {
          return <ListView {...props} notes={notes} />
        }} />
        <Route />
        <Route path="/notes/:id" render={props => (
          <Note {...props} />
        )} />
        <Route path="/form" render={props => {
          return <CreateForm {...props} />
        }} />
        
      </div>
    );
  }
}

export default App;
