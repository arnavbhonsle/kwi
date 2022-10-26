// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}

function send(){
    msg=document.getElementById("msg").value
    firebase.database().ref(room_name).push({
        name:user_name,
message:msg,
like:0
    })
    document.getElementById("msg").value=""
}

