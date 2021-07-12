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

    return <div className="ui raised container segment" style={{width: 1000, top: 66, left: 70, height: 500}}>
        <ChangePasswordComponent/>
    </div>
}

export default Settings;