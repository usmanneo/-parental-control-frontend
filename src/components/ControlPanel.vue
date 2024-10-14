<template>
  <div>
    <h1>Control Panel</h1>

    <h2>SMS Data</h2>
    <ul>
      <li v-for="sms in smsData" :key="sms._id">
        {{ sms.sender }}: {{ sms.message }} (Timestamp: {{ sms.timestamp }})
      </li>
    </ul>

    <h2>Notification Data</h2>
    <ul>
      <li v-for="notification in notificationData" :key="notification._id">
        {{ notification.app }}: {{ notification.title }} - {{ notification.message }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      smsData: [],
      notificationData: []
    };
  },
  mounted() {
    const backendUrl = process.env.VUE_APP_BACKEND_URL;
    
    // Fetch SMS data
    fetch(`${backendUrl}/api/sms`)
      .then((response) => response.json())
      .then((data) => {
        this.smsData = data;
      })
      .catch((error) => console.error('Error fetching SMS data:', error));

    // Fetch Notification data
    fetch(`${backendUrl}/api/notifications`)
      .then((response) => response.json())
      .then((data) => {
        this.notificationData = data;
      })
      .catch((error) => console.error('Error fetching Notification data:', error));
  }
}
</script>
