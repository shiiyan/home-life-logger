// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);
importScripts("swenv.js");

const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: `${process.env.VUE_APP_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.VUE_APP_PROJECT_ID}.firebaseio.com`,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: `${process.env.VUE_APP_PROJECT_ID}.appspot.com`,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID,
};

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  //   console.log(
  //     '[firebase-messaging-sw.js] Received background message ',
  //     payload
  //   )
  //   // Customize notification here
  //   const notificationTitle = 'Background Message Title'
  //   const notificationOptions = {
  //     body: 'Background Message body.',
  //     icon: '/firebase-logo.png'
  //   }
  //   self.registration.showNotification(notificationTitle, notificationOptions)
});
