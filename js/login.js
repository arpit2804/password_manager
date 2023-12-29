 function register(){

  document.querySelector('.js-login-box')
    .innerHTML=`<div class="login">PassX</div>
    <div style="margin-bottom:8px;">
     <p>Email Address</p>
     <input class="input-box js-reg-email" placeholder="you@example.com" >
    </div>
    <div style="margin-bottom:8px;">
      <p>Password</p>
     <input type="password" class="input-box js-reg-pass1" placeholder="Enter 6 characters or more" >
    </div>

    <div style="margin-bottom:8px;">
      <p>Confirm Password</p>
     <input type="password" class="input-box  js-reg-pass2" placeholder="Enter password entered" >
    </div>
    <div class="js-prompt"></div>
    <button class="signup-button" onclick="addEntry();
    signin();">Sign up</button>
    <div>Already have an account? <span class="log-in" onclick="signin();">Log in</span></div>`
  
}

function signin(){
  document.querySelector('.js-login-box')
    .innerHTML=`
    <div class="login">PassX</div>
    <div style="margin-bottom:8px;">
     <p>Email Address</p>
     <input class="input-box js-input-box" placeholder="you@example.com" >
    </div>
    <div style="margin-bottom:8px;">
      <p>Password</p>
     <input type="password" class="input-box js-pass-box" placeholder="Enter 6 characters or more" >
    </div>

    <div class="js-prompt prompt"></div>
    <button class="login-button" onclick="enter();">Log in</button>
    <div>Don't have an account? <span class="sign-up" onclick="register();">Sign up</span></div>
  `
}

let variable=-1;

function enter(){
   let email=document.querySelector('.js-input-box').value;
   let password=document.querySelector('.js-pass-box').value;
   let flag=0;
   let i=0;
   for(i=0;i<data.length;i++){
      if(email==data[i].email){
        if(password==data[i].password) flag=1;
        else flag=-1;
        break;
      }
   }

   if(flag==0){
    document.querySelector('.js-prompt').innerHTML=`Incorrect Email`;
   }
   else if(flag==1){
    variable=i;
   work(i);
   }
  
   else if(flag==-1){
    document.querySelector('.js-prompt').innerHTML=`Incorrect Password`;
   }
}

function addEntry(){

  let regEmail=document.querySelector('.js-reg-email').value;
  let regPass1=document.querySelector('.js-reg-pass1').value;
  let regPass2=document.querySelector('.js-reg-pass2').value;

  if(regPass1!=regPass2) {
     document.querySelector('.js-prompt').innerHTML=`Passwords do not match`;
  }
  else{
    data.push({email:regEmail,password:regPass1});
    localStorage.setItem('data1',JSON.stringify(data));
    

}


}

function work(i){
  
  document.body.innerHTML=`<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="css/header2.css">
        <link rel="stylesheet" href="css/main2.css">
    </head>
    <body>
        <div class="header">
            <div class="left-section">
              <div class="logo-img">
                <img class="site-logo" src="images/logo.jpg">
              </div>
              <div class="site-name">PassX</div>
            </div>
            <div class="middle-section"></div>
            <div class="right-section">
              <div class="contact-us">Contact us</div>
              <div class="about-us">About us</div>
            </div>
          </div>

          <div class="main">
            <button onclick="addPassword();">+Add New</button>
            <div class="addNew"></div>

            <div class="display">
                <div class="heading">
                    <div class="web">Web</div>
                    <div class="user">user</div>
                    <div class="pass">password</div>
                    <div class="add-delete">add-delete</div>
                </div>
                <div class="table js-table">
                    <div class="web-entry js-web-entry"></div>
                    <div class="user-entry js-user-entry"></div>
                    <div class="pass-entry js-pass-entry"></div>
                    <div class="add-delete-entry js-add-delete-entry"></div>
                </div>
            </div>


          </div>
    <script src="login.js"></script>
    <script src="js/table.js"> let vsr=${i}; localStorage.setItem('vsr',String(vsr)) </script>
    <script>
    Show(${variable});</script>
    </body>
</html>`;
// window.myParameter=variable;

}

// export {variable} ;
