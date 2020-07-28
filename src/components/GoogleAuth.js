import React from 'react'

class GoogleAuth extends React.Component {
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '891785934075-igm1g08q55j6cdm7bnl99lhs19thnma6.apps.googleusercontent.com',
                scope: 'email'
            })
            let auth = window.gapi.auth2.getAuthInstance()
        })
        
    }
    render(){
        return (
            <div>Google Auth</div> 
        )
    }
}
export default GoogleAuth