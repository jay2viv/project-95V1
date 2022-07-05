const firebaseConfig = {
      apiKey: "AIzaSyDlOfLfjXPl6Gqf6y7Wyu4-wVdCrjQvx5E",
      authDomain: "kondonasia-7aa46.firebaseapp.com",
      databaseURL: "https://kondonasia-7aa46-default-rtdb.firebaseio.com",
      projectId: "kondonasia-7aa46",
      storageBucket: "kondonasia-7aa46.appspot.com",
      messagingSenderId: "334560070621",
      appId: "1:334560070621:web:d50d1f579b06827c524434",
      measurementId: "G-Q66Q51B3X5"
    };
firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("username");
document.getElementById("username").innerHTML = "welcome "+  username
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row = "<div class='room_name' id = "+Room_names+" onclick='reddirectToRoom_Name(this.id)' >#"+ Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function addroom()
{
      roomname = document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({
            purpose:"creating a folder"
      });
      window.location = "kwitter_page.html";
}

function reddirectToRoom_Name(name)
{
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      window.location = "index.html";
      localStorage.removeItem("username");
}