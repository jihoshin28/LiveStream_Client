import React from 'react'
import StreamForm from '../StreamForm'
import { connect } from 'react-redux'
import _ from 'lodash'
import { editStream, getStream } from '../../actions'

class StreamEdit extends React.Component {

    componentDidMount(){
        this.props.getStream(this.props.match.params.id)
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.stream.id, formValues)
    }

    render() {
        console.log(this.props.stream)
            return (
                <StreamForm 
                    onSubmit = {this.onSubmit}
                    initialValues = {
                        _.pick(this.props.stream, 'title', 'description')
                    }
                />
            )
            
    }
}

const mapStateToProps = (state, ownProps ) => {
    return { 
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { editStream, getStream })(StreamEdit)