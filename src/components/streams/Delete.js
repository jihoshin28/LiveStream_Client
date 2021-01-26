import React from 'react'
import { connect } from 'react-redux'
import { getStream } from '../../actions'
import Modal from '../Modal.js'
import history from '../../history'

class StreamDelete extends React.Component{

    componentDidMount(){
        this.props.getStream(this.props.match.params.id)
    }

    renderActions(){
        return (
            <React.Fragment>
                <button className = "ui primary button">Delete</button>
                <button className = "ui button">Cancel</button>
            </React.Fragment>
        )
    } 
      
    render(){
        return (
            <div>
                <div>StreamDelete</div>
                <Modal 
                    onDismiss = {() => history.push('/')}
                    header = "Delete Stream" 
                    content = "Are you sure you want to delete this stream?"
                    actions = {this.renderActions()}
                />
            </div>
        )
    }
}

let mapStateToProps = (state, ownProps) => {
    return { 
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {getStream})(StreamDelete)