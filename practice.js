var firebaseConfig = {
    apiKey: "AIzaSyDdijYOD-uLPCkmTRCV2A5tm7XRoYrCM7s",
    authDomain: "kwitter-8fcc6.firebaseapp.com",
    databaseURL: "https://kwitter-8fcc6.firebaseio.com",
    projectId: "kwitter-8fcc6",
    storageBucket: "kwitter-8fcc6.appspot.com",
    messagingSenderId: "804306730325",
    appId: "1:804306730325:web:e36e1a590397b661f3c3dc",
    measurementId: "G-MY6DEJ9KWY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


 function adduser()//adding the value from the javascript webpage to the database, and storing it as the main-folder//
 {
    var user_name=document.getElementById("username_input").value;
    firebase.database().ref("/").child(user_name).update({
    purpose: "adding user name:"+user_name
    });
 }