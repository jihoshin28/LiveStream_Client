import React from 'react'
import {connect} from 'react-redux'
import {getStreams, deleteStream} from '../../actions'
import { Link } from 'react-router-dom'

class StreamList extends React.Component {
    
    componentDidMount() {
        this.props.getStreams()
        console.log(this.props.streams)
        console.log(this.props.currentUserId)
    }

    renderUserActions(stream){
        if(stream.userId === this.props.currentUserId){
            return(
                <div className = "right floated content">
                    <Link to = {`streams/edit/${stream.id}`} className = "ui button primary">
                        Edit
                    </Link>
                    <button onClick = {() => this.props.deleteStream(stream.id)}className = "ui button negative">
                        Delete
                    </button>
                </div>
            ) 
        }
    }

    renderCreate(){
        if(this.props.isSignedIn){
            return (
                <div style = {{textAlign: 'right'}}>
                    <Link className = "ui button primary" to = "/streams/create">
                        Create Stream
                    </Link>
                </div>
            )
        }
    }

    renderStreams(){
        return this.props.streams.map(stream =>{
            return (
                <div className = "ui segments">
                    <div className = "ui segment stream-section">
                        <div className = "stream-title">
                            <i className = "large icon camera"></i>
                            <Link to={`/streams/${stream.id}`} className="item">
                                <h1 className = "ui header"> {stream.title} </h1>   
                            </Link>
                        </div>
                        <div>
                            {this.renderUserActions(stream)}
                        </div>
                    </div>
                    <div class= "ui segment" >
                        {stream.description}
                    </div> 
                </div>
            )
        })
    }
    render(){
        console.log(this.props.streams)
        return ( 
            <div>
                <div className = "ui container">
                    {this.renderStreams()}
                    {this.renderCreate()}
                </div>
          
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { getStreams, deleteStream })(StreamList)