const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const login = document.getElementById('sign-in-form');
const register = document.getElementById('sign-up-form');
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});







//user data references
const names = document.getElementById('name');
const email = document.getElementById('email');
const surname = document.getElementById('surname');
const passwrd = document.getElementById('password');
const passwrdCon = document.getElementById('passwordConfirm');
let user = [];



document.querySelector('#img').addEventListener("change", function(){
  const reader = new FileReader();

  reader.addEventListener("load", () => {
      sessionStorage.setItem('img', reader.result);
  });
  reader.readAsDataURL(this.files[0]);
});

function registerUser()
{
if(names.value!='' && email.value!='' && surname.value!='' && passwrd.value!='' &&
passwrdCon.value!=null && img.value!='')
{ if(passwrd.value==passwrdCon.value)
  {

    user.push(names.value,surname.value,email.value,passwrd.value)
  
    container.classList.remove("sign-up-mode");
  }
  else{
    passwrd.innerHTML='password do not match!. Please re-enter again.'
user.splice(0,user.length);
  }
}
else
  {

    user.splice(0,user.length);
  }


}


const username = document.getElementById('username');
const login_password = document.getElementById('logPassword');


function loginUser()
{
if(username.value!=''&&login_password.value!='')
{
if(username.value==user[2]&&login_password.value==user[4])
{
  sessionStorage.setItem('name', user[0]);
  window.location.href = 'main_page.html';

}else
{}


}
else
{}


}




//firebase

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkLQ33d3VHPAE9utP-6gqD6xtUX0Oq3RA",
  authDomain: "kindle-b1417.firebaseapp.com",
  projectId: "kindle-b1417",
  storageBucket: "kindle-b1417.appspot.com",
  messagingSenderId: "500050668363",
  appId: "1:500050668363:web:72be913f566e2c6f9456ce",
  measurementId: "G-TH806S5N7G"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
firebase.analytics();

// let's code 
const datab  = firebase.database().ref('data');
function UserRegister(){
  if(names.value!='' && email.value!='' && surname.value!='' && passwrd.value!='' &&
passwrdCon.value!=null && img.value!='')
{ if(passwrd.value==passwrdCon.value)
  {

  const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
firebase.auth().createUserWithEmailAndPassword(email,password).then(
  function(){
   
}).catch(function (error){
   const errorcode = error.code;
   const errormsg = error.message;
});
}}else
}
const auth = firebase.auth();
function SignIn(){
   const email = document.getElementById('username').value;
   const password = document.getElementById('logPassword').value;
   const logFirebase = auth.signInWithEmailAndPassword(email,password);
   logFirebase.catch( e => alert(e.msg));
   window.location.href = 'main_page.html';
}
document.getElementById('form').addEventListener('submit', (e) => {
   e.preventDefault();
   const userInfo = datab.push();
   userInfo.set({
       name: getId('fname'),
       email : getId('eemail'),
       password : getId('lpassword')
   });
   alert("Successfully Signed Up");
   console.log("sent");
   document.getElementById('form').reset();
});
function  getId(id){
   return document.getElementById(id).value;
}






