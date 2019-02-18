import React from 'react'
import { Link } from 'react-router-dom'

class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }

    componentDidMount() {
        this.props.getNotes(this.props.id)
    }

    id = this.props.match.params.id
    note = this.props.notes.find(note => note._id === this.id)

    render() {
        return (
            <div>
                <Link to={`/edit/${this.note._id}`}>
                    <button>
                        Edit
                    </button>
                </Link>
                <Link to={`/delete/${this.note._id}`}>
                    <button>Delete</button>
                </Link>
                
                <div>
                    {this.note.title}
                    {this.note.textBody}
                </div> 
            </div>
        )
    }
    
}

export default Note