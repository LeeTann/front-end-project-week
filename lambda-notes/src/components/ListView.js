import React from 'react'
import { Link } from 'react-router-dom'


const ListView = props => {
  return (
    <div>
      {props.notes.map(note => {
          return (
            <Link to={`/notes/${note._id}`} className="card" key={note._id}>
            <p>{note.title}<br/> {note.textBody}</p>
            </Link>
          )
      })}
    </div>
  )
}

export default ListView