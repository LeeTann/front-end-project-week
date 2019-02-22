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
            <div className="formPage">
                <h2 className="darkgreyTitle h2Title">Create New Notes</h2>
                <form className="form" onSubmit={this.addNote}>
                    <textarea
                        className="titleInput"
                        name="title"
                        value={this.state.title}
                        type="text" 
                        placeholder="Title"
                        onChange={this.handleChange}
                    /><br/>
                     <textarea
                        className="bodyInput"
                        name="textBody"
                        value={this.state.textBody}
                        type="text" 
                        placeholder="Text Body"
                        onChange={this.handleChange}
                    /><br/>
                    <button className="myButton addButton" type="submit">Add</button>
                </form>
            </div>
        )
    }
  
}

export default CreateForm