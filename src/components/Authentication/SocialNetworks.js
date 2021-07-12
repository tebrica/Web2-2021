import React, { Component, useState } from 'react';
import {FacebookLogin, FacebookLogout } from 'react-facebook-login';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import axios from 'axios'
import { object } from 'yup';
import { writeFile } from 'fs';
 
const clientId = "647369311564-muhu77078797c8sn2pd4n5m591na28ks.apps.googleusercontent.com";
 
function App() {
 
  const [loading, setLoading] = useState('Loading...');
  const [user, setUser] = useState(null);
  
  const handleLoginSuccess = (response) => {
    //throw response;
    const resp = axios.post("http://localhost:8000/api/Account/AddExternalLogin", response);
    console.log("Login Success ", response);
    setUser(response.profileObj);
    setLoading();
  }
 
  const handleLoginFailure = error => {
    console.log("Login Failure ", error);
    setLoading();
  }
 
  const handleLogoutSuccess = (response) => {
    console.log("Logout Success ", response);
    setUser(null);
  }
 
  const handleLogoutFailure = error => {
    console.log("Logout Failure ", error);
  }
 
  const handleRequest = () => {
    setLoading("Loading...");
  }
 
  const handleAutoLoadFinished = () => {
    setLoading();
  }
 
  return (
    <div>
      {user ? <div>
        <GoogleLogout
          clientId={clientId}
          onLogoutSuccess={handleLogoutSuccess}
          onFailure={handleLogoutFailure}
        />
        
      </div>
       :
        <GoogleLogin
          clientId={clientId}
          buttonText={loading}
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
          onRequest={handleRequest}
          onAutoLoadFinished={handleAutoLoadFinished}
          isSignedIn={true}
        /> }
        <div>
            
        </div>
    </div>
  );
}
 
export default App;
/*
class App extends Component {
    
    
    
    constructor() {
        super();
        this.state = { isAuthenticated: false, user: null, token: ''};
    }

    logout = () => {
        this.setState({isAuthenticated: false, token: '', user: null})
    };
    
    facebookResponse = (e) => {};

    googleResponse = (e) => {};    
    onFailure = (error) => {
        const responseGoogle = response => {
            console.log(response);
        };
    }    
    onSuccess = () =>{
        loading = useState('loading');
        setLoading = useState('loading');
        user = useState(null);
        setUser = useState(null);

        console.log("Login Success ", response);
        setUser(response.profileObj);
        setLoading();
    }
    render() {
        let content = !!this.state.isAuthenticated ?
            (
                <div>
                    <p>Authenticated</p>
                    <div>
                        {this.state.user.email}
                    </div>
                    <div>
                        <button onClick={this.logout} className="button">
                            Log out
                        </button>
                    </div>
                </div>
            ) :
            (
                <div>
                    <FacebookLogin
                        appId="502546801013232"
                        autoLoad={false}
                        fields="name,email"
                        callback={this.facebookResponse} />
                    <GoogleLogin
                        clientId="647369311564-muhu77078797c8sn2pd4n5m591na28ks.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={this.onFailure}
                        onFailure={this.onSuccess}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
            );
            
        return (
            <div className="App">
                {content}
            </div>
        );
    }
}

export default App;
*/
//#region SN
/*
const SocialNetworks = () => {
    return (
        <div style={{ float: 'left', marginLeft: 0}}>
        <table>
            <thead></thead>
            <tbody>
                <tr>
                    <td>
                        <button className="ui facebook button" style={{marginBottom: 5, width: '50%'}} type="button">
                        <i className="facebook icon"></i>
                            Continue with Facebook
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button className="ui twitter button" style={{marginBottom: 5, width: '50%'}} type="button">
                        <i className="twitter icon"></i>
                        Continue with Twitter
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button className="ui google plus button" style={{marginBottom: 5, width: '50%'}} type="button">
                            <i className="google plus icon"></i>
                            Continue with Google
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button className="ui linkedin button" style={{marginBottom: 5, width: '50%'}} type="button">
                            <i className="linkedin icon"></i>
                            Continue with LinkedIn
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button className="ui instagram button" style={{marginBottom: 5, width: '50%'}} type="button">
                            <i className="instagram icon"></i>
                            Continue with Instagram
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
            
    </div>
    );
}

export default SocialNetworks*/
//#endregion