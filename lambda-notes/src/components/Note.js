import React from 'react'

const Note = props => {
    const id = props.match.params.id;
    const note = props.notes.find(note => `${note.id}` === id)

    return (
        <div>
            <p>{note}</p>
        </div>
    )
}

export default Note