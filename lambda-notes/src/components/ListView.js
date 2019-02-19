import React from 'react'
import { Link } from 'react-router-dom'


const ListView = props => {
  return (
    <div className="containerListview">
      <div className="containerTitle">
        <h2 className="darkgreyTitle h2Title">Your Notes: </h2> 
      </div>
      <div className="listview">
        {props.notes.map(note => {
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

export default ListView