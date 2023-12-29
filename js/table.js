// // let index=document.currentScript.getAttribute('paramOne');/

// import { variable } from "./login";

let variabl;

// import { variable } from './login.js';/
function Show(i){
  variabl=i;
  console.log(variabl);
}
// let index=Number(localStorage.getItem('vsr'));

// console.log(variable);

let table=JSON.parse(localStorage.getItem(`list-${variabl}`))||[];


function display(){
  let Html=``;
for(let i=0;i<table.length ;i++){
    let element=table[i];
  let html=`<div class="web-entry js-web-entry">${element.website}</div>
  <div class="user-entry js-user-entry">${element.user}</div>
  <div class="pass-entry js-pass-entry">${element.password}</div>
  <div class="add-delete-entry js-add-delete-entry">arpit</div>`;

  Html+=html;

}

document.querySelector('.js-table')
   .innerHTML=Html;

}




 function addPassword(){
   document.querySelector('.addNew').innerHTML=`<label for="website">Website:</label>
   <input class="js-input-web" type="text" id="website" name="website"  required>
   <br><br>


   <label for="username">Username:</label>
   <input class="js-input-name" type="text" id="username" name="username"  required>
   <br><br>

 
   <label for="password">Password:</label>
   <input class="js-input-pass" type="password" id="password" name="password" required>
   <br><br>
   <button class="js-submit" onclick="addnewpass();
   remove();">Submit</button>`
 }

 function remove(){
    document.querySelector('.addNew').innerHTML=``;
 }

 function addnewpass(){
  let newWeb=document.querySelector('.js-input-web').value;
  let newUser=document.querySelector('.js-input-name').value;
  let newPass=document.querySelector('.js-input-pass').value;
  
  table.push({website:newWeb,user:newUser,password:newPass});
  localStorage.setItem(`list-${variabl}`,JSON.stringify(table));

display();
}