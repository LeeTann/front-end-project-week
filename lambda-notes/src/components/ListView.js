import React from 'react'
import { Link } from 'react-router-dom'


class ListView extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          searchTerm: ""
      }
  }

  changeHandler = event => {
    this.setState({ searchTerm: event.target.value})
  }

  render() {
    let filteredNotes = this.props.notes.filter(note => {
      return note.title.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1
    })
    return (
      <div className="containerListview">
        <div className="containerTitle">
          <h2 className="darkgreyTitle h2Title">Your Notes: </h2> 
          <input className="inputBox" placeholder="Search by title" value={this.state.searchTerm} onChange={this.changeHandler} />
        </div>
        <div className="listview">
          {filteredNotes.map(note => {
              return (
                <Link to={`/notes/${note._id}`} className="card" key={note._id}>
                <p className="cardTitle">{note.title}</p>
                <p className="cardBody">{note.textBody}</p>
                </Link>
              )
          })}
        </div>
       
      </div>
    )
  }

}

export default ListView