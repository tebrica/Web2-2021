import React, { useState } from 'react';
import LogInComponent from './LogInComponent';
import RegisterComponent from './RegisterComponent';
import SocialNetworks from './SocialNetworks';

const AuthComponent = () => {

    const [authForm, setAuthForm] = useState('login');

    return (
        <div className="ui raised container segment" style={{textAlign: 'center', top: 60}}>
            <h3 className="ui center small header" style={{margin: 'auto',marginTop: 8}}> Electricity for future! </h3>
            <hr/>

            <table>
                <thead></thead>
                <tbody>
                    <tr>
                    <td>
                        <div style={{float: 'left',marginTop: 10, marginLeft: 65}}>
                            <img src="https://www.glas-javnosti.rs/uploads/images/0/2020_06_11/Nikola-Tesla-WIKI.png" style={{width: 250, height: 200}} alt="NoPic"/>
                            <div className="ui blue segment tiny" style={{width: '250px',marginTop: '5px'}}>
                                <p> "Ako stavite viljušku u šteker, udariće vas struja" </p>
                                <p>  - Nikola Tesla, 19. vek </p>
                            </div>
                            <br/>
                            <button className="ui button green"> <i className="phone icon"></i> Report a problem </button>
                        </div>
                    </td>

                    <td>
                        <div style={{float: 'left', backgroundColor: 'springgreen', height:450, width: 380, marginLeft: 170, marginTop: 0}}>
                        <div style={{overflow: 'hidden'}}>
                            <button className="ui inverted green button" style={{width: '48%'}} onClick={() => setAuthForm('login')}> Log In </button>
                            <button className="ui inverted green button" style={{width: '48%'}} onClick={() => setAuthForm('register')}> Register </button>
                        </div>
                            {authForm === 'login' ? <LogInComponent/> : <RegisterComponent showLogin={setAuthForm}/>}
                        </div>
                    </td>

                    <td>
                        <SocialNetworks/>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default AuthComponent;