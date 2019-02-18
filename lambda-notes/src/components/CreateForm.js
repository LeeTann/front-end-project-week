import React from 'react'
import axios from 'axios'

class CreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
          title: "",
          textBody: ""
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name ]: e.target.value})
        }

    addNote = e => {
        e.preventDefault()
        axios.post('https://fe-notes.herokuapp.com/note/create', this.state)
        .then(res => {
          console.log(res)
          this.props.getNotes()
        })
        this.props.history.push('/')
    }

    render() {
        return(
            <div className="form-wrapper">
                <h2>Add New Notes</h2>
                <form onSubmit={this.addNote}>
                    <input
                        name="title"
                        value={this.state.title}
                        type="text" 
                        placeholder="Title"
                        onChange={this.handleChange}
                    />
                     <input
                        name="textBody"
                        value={this.state.textBody}
                        type="text" 
                        placeholder="Text Body"
                        onChange={this.handleChange}
                    />
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
  
}

export default CreateForm