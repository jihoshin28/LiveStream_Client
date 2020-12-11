import React from 'react'
import {connect} from 'react-redux'
import {getStreams} from '../../actions'
import { Link } from 'react-router-dom'

class StreamList extends React.Component {
    
    componentDidMount() {
        this.props.getStreams()
        console.log(this.props.streams)
    }

    renderUserActions(stream){
        if(stream.userId === this.props.currentUserId){
            return(
                <div className = "right floated content">
                    <button className = "ui button primary">
                        Edit
                    </button>
                    <button className = "ui button negative">
                        Delete
                    </button>
                </div>
            ) 
        }
    }

    renderStreams(){
        return this.props.streams.map(stream =>{
            console.log(stream, this.props.currentUserId, stream.userId)
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
                    <div class= "ui segment">
                        {stream.description}
                    </div>
                </div>
            )
        })
    }
    render(){
        console.log(this.props.streams)
        return ( 
            <div className = "ui container">
                {this.renderStreams()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId
    }
}

export default connect(mapStateToProps, { getStreams })(StreamList)