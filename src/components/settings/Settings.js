import React from 'react';
import ChangePasswordComponent from './ChangePasswordComponent';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { loggedUserSelector } from '../../store/selectors/AuthSelector';

const Settings = () => {

    const { push } = useHistory();

    const user = useSelector(loggedUserSelector);
    
    if (user === undefined || user === null) {
        push('/Unauthorized')
    }

    return (<div style={{ backgroundColor: 'grey', height: 720 }}> 
        <div className="ui raised container segment" style={{width: 1200, top: 100, left: 70, height: 580}}>
            <ChangePasswordComponent/>
        </div>
    </div>)
}

export default Settings;