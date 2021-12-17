

import firebase from "firebase";
//require("@firebase/firestore");

const firebaseConfig = {
   apiKey: "AIzaSyCLUyYTijS051gX1mPUwbqku69A55HPAqU",
  authDomain: "taskmanagementapp-2c562.firebaseapp.com",
  databaseURL: "https://taskmanagementapp-2c562-default-rtdb.firebaseio.com",
  projectId: "taskmanagementapp-2c562",
  storageBucket: "taskmanagementapp-2c562.appspot.com",
  messagingSenderId: "715555169776",
  appId: "1:715555169776:web:82010f88a622e6b580a935"
};
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore();
