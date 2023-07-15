import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyD-yKAbO0NrB-M9JWWAgNyqIg5ITN2PZKo",
  authDomain: "e-commerce-web-633de.firebaseapp.com",
  projectId: "e-commerce-web-633de",
  storageBucket: "e-commerce-web-633de.appspot.com",
  messagingSenderId: "923577074657",
  appId: "1:923577074657:web:2993a8dec8e289b954c8a0",
  measurementId: "G-X7DF5C32YY"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const db = getFirestore(app);
//   const database = getDatabase(app);


const auth = getAuth();
let registerBtn = document.querySelectorAll('#submitData')[0];


let regiter = (e) =>{
    e.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var userName = document.getElementById("username").value;
  
  createUserWithEmailAndPassword(auth, email, password)
.then((res) => {
  // Signed in 
  const user = res.user;
  user.uid
  alert("User is enroll successfully")
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  alert("errorMessage")
});
  
};

registerBtn.addEventListener('click',regiter);