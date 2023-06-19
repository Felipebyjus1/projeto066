const firebaseConfig = {
    apiKey: "AIzaSyDvr1q66OS1qwnRfh1zpWoe_TgKqKHdz7E",
    authDomain: "kwitter-9a700.firebaseapp.com",
    databaseURL: "https://kwitter-9a700-default-rtdb.firebaseio.com",
    projectId: "kwitter-9a700",
    storageBucket: "kwitter-9a700.appspot.com",
    messagingSenderId: "511601161157",
    appId: "1:511601161157:web:56fb973b856988ed7451ac"
  };
  
  firebase.initializeApp(firebaseConfig)

function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebaseMessageId = childKey;
       messageData = childData;
//Início do código

//Fim do código
    } });  }); }
getData();


var userName = localStorage.getItem("usuário")
var roomName = localStorage.getItem("roomName")

function send(){
    var msg = document.getElementById("mensagem").value
    firebase.database().ref(`/projetoVamosConversar/${roomName}`).push({
          name:userName,
          mensagem:msg,
          like:0
    })
document.getElementById("mensagem").value = ""
}