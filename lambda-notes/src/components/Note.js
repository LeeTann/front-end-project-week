import React from 'react'
import { Link } from 'react-router-dom'

const Note = props => {

    const id = props.match.params.id
    const note = props.notes.find(note => `${note._id}` === id)

    return (
        <div>
            <div>
                <Link to={`/edit/${note._id}`}>Edit</Link>
                <Link to="/">Delete</Link>
            </div>
            {note.title}
            {note.textBody}
        </div>
    )
}

export default Note