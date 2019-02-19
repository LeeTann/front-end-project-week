import React from 'react'
import axios from 'axios' 
import { Modal, ModalBody, ModalFooter } from 'reactstrap';

class DeleteModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: "",
      modal: true
    }
    this.toggle= this.toggle.bind(this)
  }

  toggle() {
    this.setState(prevState => ({
        modal: !prevState.modal
    }))
  }
  id = this.props.match.params.id
  note = this.props.notes.find(note => note._id === this.id)

  fetchNote = (id) => {
    axios.get(`https://fe-notes.herokuapp.com/note/get/${id}`)
    .then(res => {
        console.log(res)
        this.setState({ title: res.data.title, textBody: res.data.textBody })
    })
    .catch(err => console.log(err))
  }

  deleteNote = id => {
    axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
    .then(res => {
      console.log(res)
      this.props.getNotes()
    })
    this.props.history.push('/')
  }

  deleteHandler = () => {
    this.deleteNote(this.id)
  }

  backToNote = () => {
    this.props.history.push(`/notes/${this.note._id}`)
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalBody className="mx-auto">
              Are you Sure you want to Delete this?
          </ModalBody>
          <ModalFooter className="mx-auto" >
              <button onClick={this.deleteHandler} className="deleteButton">Delete</button>{' '}
              <button onClick={this.backToNote} className="myButton">No</button>
          </ModalFooter>
        </Modal>     
      </div>
    )
  }
 
}

export default DeleteModal
