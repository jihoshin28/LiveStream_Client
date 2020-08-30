import React from 'react'
import { connect } from 'react-redux'
import {getStream} from '../../actions'

class StreamShow extends React.Component {
    componentDidMount(){
        console.log(this.match)
        this.props.getStream()
    }
    // renderStream(){

    // }

    // render(){
    //     return(
    //         {this.renderStream()}
    //     )
    // }
}

const mapStateToProps = state => {
    return {
        // stream: state.streams.find(stream => stream.id === )
    }
}

export default connect(mapStateToProps, {getStream})(StreamShow)