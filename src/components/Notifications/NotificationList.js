import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetNotifications } from '../../store/actions';
import { NotificationSelector } from '../../store/selectors/AuthSelector';
import SingleNotification from './SingleNotification';

const NotificationList = ({ notificationMode }) => {

    const dispatch = useDispatch();
    const notifications = useSelector(NotificationSelector);

    const renderedNotifications = notifications.map(notification => {
        return <div key={notification.IdPoruke}>
            <SingleNotification notification={notification} />
        </div>
    })

    useEffect(() => {
        switch(notificationMode) {
            case 'All notifications' : dispatch(GetNotifications('all')); break;
            case 'Unread notifications' : dispatch(GetNotifications('unread')); break;
            case 'Error notifications' : dispatch(GetNotifications('Error')); break;
            case 'Information notifications': dispatch(GetNotifications('Information')); break;
            case 'Success notifications' : dispatch(GetNotifications('Success')); break;
            case "Warning notifications": dispatch(GetNotifications('Warning')); break;
            default : dispatch(GetNotifications('all'));
        } // eslint-disable-next-line
    },[notificationMode])

    return <div>
        <h3 style={{ fontSize: 22 }}> {notificationMode} </h3> 
        <div style={{ marginTop: 20, overflow: 'scroll', height: 400 }}>
            {renderedNotifications}
        </div>
    </div>
}

export default NotificationList;