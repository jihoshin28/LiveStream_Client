import React from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamForm extends React.Component{

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

    onSubmit = (id, formValues) => {
        if(id){
            this.props.onSubmit(id, formValues)
        } else {
            this.props.onSubmit(formValues)
        }
    }

    render() {
        console.log(this.props)
        return (
            <div className = "ui container">
                <form onSubmit = {this.props.handleSubmit(this.onSubmit)} className = "ui form">
                    <Field name = "title" component = {this.renderInput} label = "Enter Title"/>
                    <Field name = "description" component = {this.renderInput} label = "Enter Description"/>
                    <button className = "ui button red">Submit</button>
                </form>
            </div>
            
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
    form: 'streamform',
    validate: validate 
})(StreamForm)