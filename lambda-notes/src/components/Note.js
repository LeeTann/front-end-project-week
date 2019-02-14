import React from 'react'
import { Link } from 'react-router-dom'

const Note = props => {
    console.log(props.notes)
    console.log(props.match.params.id)

    const id = props.match.params.id
    const note = props.notes.find(note => `${note._id}` === id)

    return (
        <div>
            <div>
                <Link to="/">Edit</Link>
                <Link to="/">Delete</Link>
            </div>
            {note.title}
            {note.textBody}
        </div>
    )
}

export default Note