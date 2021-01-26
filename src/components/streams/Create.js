import React from 'react'
import StreamForm from '../StreamForm'
import { connect } from 'react-redux'
import { createStream } from '../../actions'


class StreamCreate extends React.Component{
    onSubmit = (formValues) => {
        this.props.createStream(formValues)
    }

    render() {
        return (
            // <div className = "ui container">
            //     <form onSubmit = {this.props.handleSubmit(this.onSubmit)} className = "ui form">
            //         <Field name = "title" component = {this.renderInput} label = "Enter Title"/>
            //         <Field name = "description" component = {this.renderInput} label = "Enter Description"/>
            //         <button className = "ui button red">Submit</button>
            //     </form>
            // </div>
            <StreamForm onSubmit = {this.onSubmit}/> 
        )
    }
}

// const mapStateToProps = (state) => {
//     return {

//     }
// }

export default connect(null, {createStream})(StreamCreate)