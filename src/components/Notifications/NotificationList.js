import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetNotifications, markNotificationAsRead } from '../../store/actions';
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

    const markAllNotificationRead = () => {
        let ids = []
        notifications.forEach(notif => {
            ids.push(notif.IdPoruke)
        });
        dispatch(markNotificationAsRead(ids));
    }

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
        <div style={{ marginTop: 20, overflow: 'scroll', height: 350 }}>
            {renderedNotifications}
        </div>
        {notificationMode === "Unread notifications" ?
            <button className="ui primary button small" style={{ marginLeft: 500, marginTop: 15 }} onClick={() => markAllNotificationRead()}> Mark all read </button> 
            : <div></div>
        }
    </div>
}

export default NotificationList;