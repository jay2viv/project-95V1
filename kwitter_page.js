const firebaseConfig = {
      apiKey: "AIzaSyBmCkhaLVpJD9zTZfQgoX37RhMznJL-Mf0",
      authDomain: "kondonasia.firebaseapp.com",
      databaseURL: "https://kondonasia-default-rtdb.firebaseio.com",
      projectId: "kondonasia",
      storageBucket: "kondonasia.appspot.com",
      messagingSenderId: "394537735292",
      appId: "1:394537735292:web:75b794229250516a2a65f9"
    };
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("username");
room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function send()
{
      msg = document.getElementById("text").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            likes:0
      });

      document.getElementById("text").value = "";
}

function logout()
{
      window.location = "index.html"
      localStorage.removeItem("username");
}