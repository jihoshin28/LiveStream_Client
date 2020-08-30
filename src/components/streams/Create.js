import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import {createStream, fetchStreams } from '../../actions'


class StreamCreate extends React.Component{

    componentDidMount(){
        this.props.fetchStreams()
        console.log(this.props.streams)
    }

    renderInput({input, label, meta}) {
        console.log(meta)
        return (
            <div className = "field"> 
                <label>{label}</label>
                <input {...input} />
                <div>{meta.error}</div>
            </div>
        )     
    }

    onSubmit = (formValues) => {
        this.props.createStream(formValues)
    }

    render() {
        console.log(this.props)
        return (
            <form onSubmit = {this.props.handleSubmit(this.onSubmit)} className = "ui form">
                <Field name = "title" component = {this.renderInput} label = "Enter Title"/>
                <Field name = "description" component = {this.renderInput} label = "Enter Description"/>
                <button className = "ui button red">Submit</button>
            </form>
            
        )
    }
}

const validate = (formValues) => {
    const error = {}
    if(!formValues.title){
        error.title = 'You must have a title'
    }

    if(!formValues.description){
        error.description = 'You must have a description'
    }

    return error
}
    
const formWrapped = reduxForm({
    form: 'streamCreate',
    validate: validate
})(StreamCreate)

const mapStateToProps = (state) => {
    return {
        streams: state.streams
    }
}

export default connect(mapStateToProps, {createStream, fetchStreams})(formWrapped)