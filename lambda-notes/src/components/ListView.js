import React from 'react'

const ListView = props => {
  return (
    <div>
      {props.notes.map(note => {
          return <div className="card" key={note._id}>
          <p onClick={() => routeToNote(props, note)}>{note.title}<br/> {note.textBody}</p>
          </div>
      })}
    </div>
  )
}

function routeToNote(props, note) {
    props.history.push(`/notes/${note.id}`)
}

export default ListView