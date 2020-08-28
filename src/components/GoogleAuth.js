import React from 'react'
import {connect} from 'react-redux'
import {signIn, signOut} from '../actions'

class GoogleAuth extends React.Component {


    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '891785934075-igm1g08q55j6cdm7bnl99lhs19thnma6.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.authChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.authChange)

            })
        })

    }
    authChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId())
        } else {
            this.props.signOut()
        }
    } 

    signOutClick = () => {
        this.auth.signOut()
    }

    signInClick = () => {
        this.auth.signIn()
    }

    renderAuthButton=()=> {
        if(this.props.signedIn === null){
            return <div>I don't know</div>
        } else if(this.props.signedIn === true){
            return (
                <button onClick = {this.signOutClick} className = "ui red google button">
                    <i className = "google icon"></i>
                    Sign Out
                </button>
            )
        } else {
            return (
                <button onClick = {this.signInClick} className="ui red google button">
                    <i className="google icon"></i>
                    Sign In with Google
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

let mapStateToProps = (state) => {
    return ({
        signedIn: state.auth.isSignedIn
    })
}
export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth)