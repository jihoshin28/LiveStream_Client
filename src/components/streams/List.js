import React from 'react'
import {connect} from 'react-redux'
import {getStreams} from '../../actions'
import { Link } from 'react-router-dom'

class StreamList extends React.Component {
    
    componentDidMount() {
        this.props.getStreams()
        console.log(this.props.streams)
    }

    renderStreams(){
        return this.props.streams.map(stream =>{
            console.log(stream)
            return (
                <div className = "ui segments">
                    <div className = "ui segment">
                        <Link to={`/streams/${stream.id}`} className="item">
                            <h1 className = "ui header"> {stream.title} </h1>   
                        </Link>
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
        streams: Object.values(state.streams)
    }
}

export default connect(mapStateToProps, { getStreams })(StreamList)