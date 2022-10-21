

let userNames = ['alpha','beta','charlie','fox'];
let passwords = ['1234567','abcde','iop','BTS']

function loginCalled(){
    var userName = document.querySelector(".userName").value;
    var password = document.querySelector(".passwordOfUser").value;
    for( i =0;i < userNames.length;i++){
        if(userName == "Admin" && password == "AdminIsLoggedIn@1234"){
            // alert("Admin Logged in.")
            window.location.replace("/Admin/admin.html");
            break;
        }
        if(userName == "UserCat2" && password == "UserCat2@1234"){
            // alert("Category 2 user logged in");
            window.location.replace('/User2/users2.html');
            break;
        }
    if(userName == userNames[i] && password == passwords[i]){
        // alert("Congratulations "+ userName +" are logged in.")
        window.location.replace("/User1/user1.html");
        break;
    }
    else if(userName == userNames[i] && password != passwords[i]){
        alert("Invalid Password");
        window.location.replace("/Login/login.html");
        break
    }
    else if(userName != userNames[i] && password == passwords[i]){
        alert("Invalid UserName");
        window.location.replace("/Login/login.html");
        break
    }
    else{
        alert("Invalid Username and password");
        window.location.replace("/Login/login.html");
        break;    
      }
    }
    
    
}

let TeamCodes = ['ABCDE','AXYZSE3','12GY6J4'];

function joinTeam(){
   let code = document.querySelector('#teamCode').value;
   for(let i=0;i<TeamCodes.length;i++){
    if(code == TeamCodes[i]){
        window.location.replace('/teams/teams.html')
        break
    }
    else{
        alert("Invalid Team Code")
        window.location.replace('/User1/user1.html');
        break
    }
   }
}


function createTeam(){
    window.location.replace('/teams/teams.html');
}

function joinTeam2(){
    let code = document.querySelector('#teamCode').value;
   for(let i=0;i<TeamCodes.length;i++){
    if(code == TeamCodes[i]){
        window.location.replace('/teams/teams.html')
        break
    }
    else{
        alert("Invalid Team Code")
        window.location.replace('/User2/user2.html');
        break
    }
   }
}

function joinTeam3(){
    let code = document.querySelector('#teamCode').value;
   for(let i=0;i<TeamCodes.length;i++){
    if(code == TeamCodes[i]){
        window.location.replace('/teams/teams.html')
        break
    }
    else{
        alert("Invalid Team Code")
        window.location.replace('/Admin/adminhtml');
        break
    }
   }
}
