function register(){
    var userName = document.querySelector('#username').value;
    var password = document.querySelector("#password").value;
    var email = document.querySelector("#email").value;
    var profession = document.querySelector("#profession").value;
    if(userName == null || password == null || email == null || profession == null){
        alert("please fill all the fields.");
        window.location.replace("/Register/registration.html");
        
    }
    else{
        alert("Successfully registered.");
        window.location.replace("/Login/login.html");
       
    }
    console.log(userName);
}