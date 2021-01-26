import React from 'react'
import { connect } from 'react-redux'
import { getStream, deleteStream } from '../../actions'
import { Link } from 'react-router-dom'
import Modal from '../Modal.js'
import history from '../../history'

class StreamDelete extends React.Component{

    componentDidMount(){
        this.props.getStream(this.props.match.params.id)
    }

    renderActions(){
        return (
            <React.Fragment>
                <button 
                    onClick = {() => this.props.deleteStream(this.props.match.params.id)}
                    className = "ui primary button">
                    Delete
                </button>
                <Link
                    to = {'/'}
                    className = "ui button">
                    Cancel
                </Link>
            </React.Fragment>
        )
    } 
      
    render(){
        return (
            <Modal 
                onDismiss = {() => history.push('/')}
                header = "Delete Stream" 
                content = "Are you sure you want to delete this stream?"
                actions = {this.renderActions()}
            />
        )
    }
}

let mapStateToProps = (state, ownProps) => {
    return { 
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { getStream, deleteStream })(StreamDelete)