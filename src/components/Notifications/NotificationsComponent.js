import React, { useState } from 'react';
import NotificationList from './NotificationList';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { loggedUserSelector } from '../../store/selectors/AuthSelector';

const NotificationsComponent = () => {

    const [currentForm,setCurrentForm] = useState(0);

    const { push } = useHistory();

    const user = useSelector(loggedUserSelector);
    
    if (user === undefined || user === null) {
        push('/Unauthorized')
    }

    const renderNotificationFilter = () => {
        switch(currentForm)
        {
            case 0 : return <NotificationList notificationMode="All notifications"/>
            case 1 : return <NotificationList notificationMode="Unread notifications"/>
            case 2 : return <NotificationList notificationMode="Error notifications"/>
            case 3: return <NotificationList notificationMode="Information notifications"/>
            case 4: return <NotificationList notificationMode="Success notifications"/>
            case 5: return <NotificationList notificationMode="Warning notifications"/>
            default: return <NotificationList notificationMode="All notifications"/>
        }
    }

    return (<div style={{ backgroundColor: 'grey', height: 720 }}> 
    <div style={{marginLeft: 150, height: 560, overflow: 'hidden'}}>

        <div className="ui container segment" style={{paddingLeft: 20,marginTop: 110, position: 'fixed', width: 1180, right: 1, left: 120, height: 530, float: 'left'}} >
            
            <div className="ui vertical pointing menu" style={{ width: 165, marginTop: 50, marginLeft: 15 }}>
                <button className={`ui green button item ${currentForm === 0 ? 'active' : ''}`} style={{width: '100%'}}  onClick={() => setCurrentForm(0)}>
                    All Notifications
                </button>

                <button className={`ui green button item ${currentForm === 1 ? 'active' : ''}`} style={{width: '100%'}} onClick={() => setCurrentForm(1)}>
                    Unread Notifications
                </button>

                <button className={`ui green button item ${currentForm === 2 ? 'active' : ''}`} style={{width: '100%'}} onClick={() => setCurrentForm(2)}>
                    Errors
                    <i className="x icon" style={{ color: 'red' }}></i>
                </button>

                <button className={`ui green button item ${currentForm === 3 ? 'active' : ''}`} style={{width: '100%'}}  onClick={() => setCurrentForm(3)}>
                    <i className="info circle icon" style={{ color: 'blue' }}></i>
                    Information
                </button>

                <button className={`ui green button item ${currentForm === 4 ? 'active' : ''}`} style={{width: '100%'}}  onClick={() => setCurrentForm(4)}>
                    Success
                    <i className="check icon" style={{ color: 'green' }}></i>
                </button>

                <button className={`ui green button item ${currentForm === 5 ? 'active' : ''}`} style={{width: '100%'}}  onClick={() => setCurrentForm(5)}>
                    <i className="exclamation icon" style={{ color: 'gold' }}></i>
                    Warning
                </button>
            </div>

            <div style={{ position: 'fixed', top: 95, left: 560 }}>
                {renderNotificationFilter()}
            </div>
        </div>
    </div>
    </div>)
}

export default NotificationsComponent;