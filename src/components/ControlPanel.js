import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ControlPanel = () => {
    const [smsData, setSmsData] = useState([]);
    const [notificationData, setNotificationData] = useState([]);

    // Fetch SMS data from the backend
    useEffect(() => {
        axios.get('https://parental-control-backend-5a638660279f.herokuapp.com/api/sms')
            .then(response => setSmsData(response.data))
            .catch(error => console.error('Error fetching SMS data:', error));

        // Fetch Notification data from the backend
        axios.get('https://parental-control-backend-5a638660279f.herokuapp.com/api/notifications')
            .then(response => setNotificationData(response.data))
            .catch(error => console.error('Error fetching Notification data:', error));
    }, []);

    return (
        <div>
            <h1>Control Panel</h1>

            <h2>SMS Data</h2>
            <ul>
                {smsData.map((sms, index) => (
                    <li key={index}>
                        <strong>Sender:</strong> {sms.sender} <br />
                        <strong>Message:</strong> {sms.message} <br />
                        <strong>Timestamp:</strong> {sms.timestamp}
                    </li>
                ))}
            </ul>

            <h2>Notification Data</h2>
            <ul>
                {notificationData.map((notification, index) => (
                    <li key={index}>
                        <strong>App:</strong> {notification.app} <br />
                        <strong>Title:</strong> {notification.title} <br />
                        <strong>Message:</strong> {notification.message}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ControlPanel;
