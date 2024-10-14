import React, { useEffect, useState } from 'react';

const ControlPanel = () => {
  const [smsData, setSmsData] = useState([]);
  const [notificationData, setNotificationData] = useState([]);

  // Fetch SMS data
  useEffect(() => {
    fetch('https://parental-control-backend-5a638660279f.herokuapp.com/api/sms')
      .then((response) => response.json())
      .then((data) => {
        setSmsData(data);  // Save SMS data to state
      })
      .catch((error) => console.error('Error fetching SMS data:', error));
  }, []);

  // Fetch Notification data
  useEffect(() => {
    fetch('https://parental-control-backend-5a638660279f.herokuapp.com/api/notifications')
      .then((response) => response.json())
      .then((data) => {
        setNotificationData(data);  // Save Notification data to state
      })
      .catch((error) => console.error('Error fetching Notification data:', error));
  }, []);

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
