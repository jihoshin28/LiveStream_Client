import React from 'react'
import {getStream} from '../../actions'
import { connect } from 'react-redux'

class StreamEdit extends React.Component {

    componentDidMount(){
        this.props.getStream(this.props.match.params.id)
    }

    render() {
            return (
                <div>
                    <h1>
                        Edit Stream
                    </h1>
                    <div>
                        
                    </div>

                </div>
            )
            
    }
}

const mapStateToProps = (state, ownProps ) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { getStream })(StreamEdit)