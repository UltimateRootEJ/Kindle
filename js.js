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






