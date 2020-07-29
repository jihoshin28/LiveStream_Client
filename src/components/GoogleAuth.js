import React, {useState} from 'react'

class GoogleAuth extends React.Component {
    constructor() {
        super()
        this.state = {
            isSignedIn: null
        }
    }
   
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '891785934075-igm1g08q55j6cdm7bnl99lhs19thnma6.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.setState({
                    isSignedIn: this.auth.isSignedIn.get() 
                })
                this.auth.isSignedIn.listen(this.authChange)
                
            })
        })
          
    }

    authChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
    } 

    signOut = () => {
        this.auth.signOut()
    }

    signIn = () => {
        this.auth.signIn()
    }

    renderAuthButton=()=> {
        if(this.state.isSignedIn === null){
            return <div>I don't know</div>
        } else if(this.state.isSignedIn === true){
            return (
                <button onClick = {this.signOut} className = "ui red google button">
                    <i className = "google icon"></i>
                    Sign Out
                </button>
            )
        } else {
            return (
                <button onClick = {this.signIn} className="ui red google button">
                    <i className="google icon"></i>
                    Sign In
                </button>
            )
        }
    }

    render(){
        return (
            <div>{this.renderAuthButton()}</div> 
        )
    }
}
export default GoogleAuth