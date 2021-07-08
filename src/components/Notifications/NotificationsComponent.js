import React, { useState } from 'react';
import NotificationList from './NotificationList';

const NotificationsComponent = () => {

    const [currentForm,setCurrentForm] = useState(0);

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

    return (
    <div style={{marginLeft: 150, height: 550, overflow: 'hidden'}}>

        <div className="ui container segment" style={{paddingLeft: 20,marginTop: 80, position: 'fixed', width: 920, right: 1, left: 50, height: 490, float: 'left'}} >
            <div className="ui vertical pointing menu" style={{width: 165}}>
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

        <div style={{ position: 'fixed', top: 105, left: 450 }}>
            {renderNotificationFilter()}
        </div>
        </div>
    </div>)
}

export default NotificationsComponent;