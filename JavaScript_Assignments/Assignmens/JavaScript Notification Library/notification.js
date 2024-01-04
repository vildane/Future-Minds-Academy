let originalTitle = document.title;
    let originalFavicon = document.getElementById('favicon').href;
    let notificationInterval;

    function startNotification(text) {
      let isNotificationVisible = false;
      notificationInterval = setInterval(() => {
        document.title = isNotificationVisible ? originalTitle : `${text}`;
        document.getElementById('favicon').href = isNotificationVisible ? originalFavicon : 'notification-favicon.jpg';
        isNotificationVisible = !isNotificationVisible;
      }, 1000); 
    }

    function endNotification() {
      clearInterval(notificationInterval);
      document.title = originalTitle;
      document.getElementById('favicon').href = originalFavicon;
    }

    setTimeout(() => {
      startNotification("New Message!");
    }, 1000);