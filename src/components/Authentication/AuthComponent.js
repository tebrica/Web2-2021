import React, { useEffect, useState } from 'react';
import LogInComponent from './LogInComponent';
import RegisterComponent from './RegisterComponent';
import SocialNetworks from './SocialNetworks';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom'

const AuthComponent = () => {

    const [authForm, setAuthForm] = useState('login');
    const { push } = useHistory();

    useEffect(() => {
        if (localStorage.getItem('token') && localStorage.getItem('token') !== '') {
            push('/dashboard/home')
        } // eslint-disable-next-line
    },[])

    return (
        <div className="ui raised container segment" style={{textAlign: 'center', top: 60}}>
            <h1 className="ui center small header" style={{margin: 'auto', fontSize: 20}}> Electricity for future! </h1>
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
                            <Link className="ui button green" to="/anonymous-calls"> <i className="phone icon"></i> Report a problem </Link>
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