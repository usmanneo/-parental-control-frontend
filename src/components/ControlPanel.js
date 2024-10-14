import React, { useEffect, useState } from 'react';

const ControlPanel = () => {
  const [smsData, setSmsData] = useState([]);
  const [notificationData, setNotificationData] = useState([]);
  const backendUrl = process.env.REACT_APP_BACKEND_URL || 'https://parental-control-backend-5a638660279f.herokuapp.com';

  // Fetch SMS data
  useEffect(() => {
    fetch(`${backendUrl}/api/sms`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch SMS data');
        }
        return response.json();
      })
      .then((data) => setSmsData(data))
      .catch((error) => console.error('Error fetching SMS data:', error));
  }, [backendUrl]);

  // Fetch Notification data
  useEffect(() => {
    fetch(`${backendUrl}/api/notifications`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch notification data');
        }
        return response.json();
      })
      .then((data) => setNotificationData(data))
      .catch((error) => console.error('Error fetching Notification data:', error));
  }, [backendUrl]);

  return (
    <div>
      <h1>Control Panel</h1>

      <h2>SMS Data</h2>
      <ul>
        {smsData.map((sms) => (
          <li key={sms._id}>
            {sms.sender}: {sms.message} (Timestamp: {sms.timestamp})
          </li>
        ))}
      </ul>

      <h2>Notification Data</h2>
      <ul>
        {notificationData.map((notification) => (
          <li key={notification._id}>
            {notification.app}: {notification.title} - {notification.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ControlPanel;
