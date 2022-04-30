let headertemplate = ` <div>
<img id="logo" src="assests/images/logo.png" alt="logo" height="100px" width="150px">
<button type="button" onclick="login(); logout(); hide();"  value="reset" class="btn btn-light btn-sm" id="login" href="login.html" data-toggle="modal" data-target="#login-modal">LOGIN</button>

<div class="modal fade" onclick="login()" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="login-modal-label">
<div class="modal-dialog" role="document">
 <div class="modal-content">
     <div class="modal-header">
         <h5 class="modal-title" id="login-modal-label">Please Login</h5>
         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
             <span aria-hidden="true">&times;</span>
         </button>
     </div>
     <div class="modal-body d-flex justify-content-center" >
         <form id="login-form">
             <div class="login-field">
                 <label for="username">Username:</label>
                 <input type="text" id="username" name="username" placeholder="Enter Username" required  />
             </div>
             <br>
             <div class="login-field">
                 <label for="password">Password:</label>
                 <input type="password" id="password" name="password" placeholder="Enter Password" required />
             </div>
         </form>
     </div>
     <div class="modal-footer">
         <button id="login-button" type="button" class="btn btn-primary" data-dismiss="modal" onclick="login(event)">Login</button>     </div>
 </div>
</div>
</div>

</div>`;
document.getElementById('header').innerHTML=headertemplate;

// footer template
let footertemplate= `<div>
<button type="button" class="btn btn-primary btn-sm" id="contact" href="contact.html" data-toggle="modal" data-target="#contact-modal">Contact Us</button>
<div class="modal fade" id="contact-modal"tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Get in touch</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <p>Thank you for reaching out!!!<br>
          Please enter your email and we will get back to you.</p>
          <form id="contact-form">
            <div class="cntact-field">
                <label for="Email">Email:    </label>
                <input type="email" id="Email" name="Enter" placeholder="Enter your email id" required />
            </div>
       </form>
        </div>
        <div class="modal-footer">
    
          <button type="button" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </div>
<div id="fit_img">
 <a href="https://www.facebook.com" target="_blank">
     <img class= "social_img" src="assests/images/facebook.png" alt="" height="20px" width="22px">
 </a>
 <a href="https://www.instagram.com" target="_blank">
     <img class= "social_img" src="assests/images/instagram.png" alt="" height="20px" width="22px">
 </a>
 <a href="https://twitter.com" target="_blank">
     <img class= "social_img" src="assests/images/twitter.png" alt="" height="20px" width="22px">
 </a>
 </div>
 <br>
<div id="copy_right">&copy; 2020 ROOM SEARCH PVT.LTD</div>`;
document.getElementById('footer').innerHTML=footertemplate;

// local storage

function login(){

  let btn = document.getElementById("login");

  localStorage.setItem("username", "admin");
  localStorage.setItem("password", "admin");

  localStorage.setItem("isLogin", "false");

  // e.preventDefault();

  let uname = document.getElementById("username");
  let pswrd = document.getElementById("password");

  if(
      uname.value === localStorage.getItem("username") && pswrd.value === localStorage.getItem("password")
  ) {
      localStorage.setItem("isLogin", "true");

      alert("Successfully logged in!");
      btn.dataset.target = '';
  btn.innerText = "LOGOUT";
  window.localStorage.removeItem('username');
  window.localStorage.removeItem('password');

  }
 
  };
function logout(){
 
  let btn =document.getElementById('login').innerText = 'LOGIN';
  
}
