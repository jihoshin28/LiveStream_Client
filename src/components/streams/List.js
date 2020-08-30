import React from 'react'
import {connect} from 'react-redux'
import {fetchStreams} from '../../actions'

class StreamList extends React.Component {
    
    componentDidMount() {
        this.props.fetchStreams()
    }

    renderStreams(){
        return this.props.streams.map(stream =>{
            console.log(stream)
            return (
                <div className = "field">
                    <h1> {stream.title} </h1>
                    <div >
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

export default connect(mapStateToProps, { fetchStreams })(StreamList)