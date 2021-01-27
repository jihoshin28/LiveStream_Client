import React from 'react'
import { connect } from 'react-redux'
import {getStream} from '../../actions'

//const NodeMediaServer = require('node-media-server');

class StreamShow extends React.Component {
    componentDidMount(){
        console.log(this.match)
        this.props.getStream(this.props.match.params.id)
    }
    // renderStream(){

    // }

    
    render(){
        const {title, description} = this.props.stream
        return(
            <div>
                <h1>{title}</h1>
                <h4>{description}</h4>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]

    }
}

export default connect(mapStateToProps, {getStream})(StreamShow)