importScripts('https://www.gstatic.com/firebasejs/7.14.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.1/firebase-messaging.js');
importScripts('/firebase-config.js')

firebase.initializeApp(firebase-config.js);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload){
    console.log('[Push] ', payload);
    return self.ServiceWorkerRegistration.showNotification({}, {});
})