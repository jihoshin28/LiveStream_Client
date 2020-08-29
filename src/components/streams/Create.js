import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import {createStream } from '../../actions'

class StreamCreate extends React.Component{

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
        console.log(formValues)
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
    
export default reduxForm({
    form: 'streamCreate',
    validate: validate
})(StreamCreate)