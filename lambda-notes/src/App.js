import React, { Component } from 'react';
import { Route, NavLink, withRouter} from 'react-router-dom'

import ListView from './components/ListView'
import Note from './components/Note'
import CreateForm from './components/CreateForm'
import EditNote from './components/EditNote'
import DeleteModal from './components/DeleteModal'


import axios from 'axios'

import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state= {
      notes: [],
    }
  }

  getNotes = () => {
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
    .then(res => {
      console.log(res)
      this.setState(() => ({ notes: res.data})
    )})
    .catch(err => {
      console.log('server error', err)
    })
  }

  componentDidMount() {
    this.getNotes()
  }
  
  render() {
    const { notes } = this.state
    return (
      <div className="App">
        <div className="mainNavbar">
          <div>
            <h1 className="darkgreyTitle">Lambda Notes</h1>
          </div>   
          <div className="navButton1">
            <NavLink to="/"><button className="myButton">View Your Notes</button></NavLink>
          </div>
          <div className="navButton2">
            <NavLink to="/form"><button className="myButton">+ Create New Note</button></NavLink>
          </div> 
        </div>
        <div className="content">
          <Route exact path="/" render={props => {
            return <ListView {...props} notes={notes} />
          }} />
          <Route />
          <Route exact path="/notes/:id" render={props => (
            <Note {...props} notes={notes} getNotes={this.getNotes} />
          )} />
          <Route path="/form" render={props => {
            return <CreateForm {...props} getNotes={this.getNotes} />
          }} />
          <Route exact path="/edit/:id" render={props => (
            <EditNote {...props} notes={notes} getNotes={this.getNotes} />
          )} />
          <Route path="/delete/:id" render={props => (
            <DeleteModal {...props} notes={notes} getNotes={this.getNotes} />
          )} />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
