import React from 'react'
import axios from 'axios'

class EditNote extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            title: "",
            textBody: "",
        }
    }

    fetchNote = (id) => {
        axios.get(`https://fe-notes.herokuapp.com/note/get/${id}`)
        .then(res => {
            console.log(res)
            this.setState({ title: res.data.title, textBody: res.data.textBody })
        })
        .catch(err => console.log(err))
    }

    componentDidMount() {
        const id = this.props.match.params.id
        this.fetchNote(id)
     }

    submitEdit = e => {
        const id = this.props.match.params.id
        e.preventDefault()
        console.log(id)
        axios.put(`https://fe-notes.herokuapp.com/note/edit/${id}`, this.state)
        .then(res => {
            console.log(res)
            this.props.getNotes()
        })
        this.props.history.push('/')
    }
    
    handleChange = (e) => {
        this.setState({ [e.target.name ]: e.target.value})
    }

    render() {
        return(
            <div className="form-wrapper">
                <h2>Edit Notes</h2>
                
                <form onSubmit={this.submitEdit}>
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
                    <button>Edit</button>                   
                </form>
                         
            </div>
        )
    }
  
}

export default EditNote