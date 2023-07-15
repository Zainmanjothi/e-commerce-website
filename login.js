import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";


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
const auth = getAuth();

// let login = document.getElementById("loging");



loging.addEventListener("click" , () =>{
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("Enroll")
  })
  .catch((error) => {
    const errorMessage = error.message;
    alert("Email or Password are incorrect!")
  });
}  )




// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     alert("Enroll")
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     alert("Email or Password are incorrect!")
//   });

