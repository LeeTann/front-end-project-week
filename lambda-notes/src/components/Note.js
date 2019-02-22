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
            <div className="notePage">
                <div className="noteHeader">
                    <Link to={`/delete/${this.note._id}`} className="noteLink">delete</Link>
                    <Link to={`/edit/${this.note._id}`} className="noteLink">edit</Link>             
                </div>                        
                <div className="noteTitle">
                    {this.note.title}                  
                </div> 
                <div className="noteBody">
                    {this.note.textBody}
                </div>
            </div>
        )
    }
    
}

export default Note