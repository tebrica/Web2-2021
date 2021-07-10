import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';

// class App extends Component {

//     constructor() {
//         super();
//         this.state = { isAuthenticated: false, user: null, token: ''};
//     }

//     logout = () => {
//         this.setState({isAuthenticated: false, token: '', user: null})
//     };
    
//     facebookResponse = (e) => {};

//     googleResponse = (e) => {};    
//     onFailure = (error) => {
//       alert(error);
//     }    

//     render() {
//         let content = !!this.state.isAuthenticated ?
//             (
//                 <div>
//                     <p>Authenticated</p>
//                     <div>
//                         {this.state.user.email}
//                     </div>
//                     <div>
//                         <button onClick={this.logout} className="button">
//                             Log out
//                         </button>
//                     </div>
//                 </div>
//             ) :
//             (
//                 <div>
//                     <FacebookLogin
//                         appId="502546801013232"
//                         autoLoad={false}
//                         fields="name,email,picture"
//                         callback={this.facebookResponse} />
//                     <GoogleLogin
//                         clientId="647369311564-muhu77078797c8sn2pd4n5m591na28ks.apps.googleusercontent.com"
//                         buttonText="Login"
//                         onSuccess={this.googleResponse}//odi dedi sedi
//                         onFailure={this.googleResponse}
//                     />
//                 </div>
//             );

//         return (
//             <div className="App">
//                 {content}
//             </div>
//         );
//     }
// }

// export default App;


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

export default SocialNetworks
//#endregion