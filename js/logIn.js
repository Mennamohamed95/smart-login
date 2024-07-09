var logInEmail = document.querySelector('.loginemail');
var logInPassword = document.querySelector('.loginpassword')
var logInBtn = document.querySelector('#loginbtn')
var incorrect = document.querySelector('.incorrect')

/////////////////////// login
var userInfo = [];
if(localStorage.getItem('user')!= null){
    userInfo =JSON.parse(localStorage.getItem('user'))

}



logInBtn.addEventListener('click' , function(){
    logIn()
})

function logIn(){
    var userData ={
        email: logInEmail.value,
        password:logInPassword.value
    }
    if(isUserExists(userData) == true){
        incorrect.classList.replace('d-block' , 'd-none')
        window.location.href = '../js login/home.html'
        

    }
    else{
        incorrect.classList.replace('d-none' , 'd-block')
        
    }

}

function isUserExists(userData){
    for(var i = 0 ;i< userInfo.length ; i++ ){
        if(userInfo[i].email.toLowerCase() == userData.email.toLowerCase() && userInfo[i].password == userData.password){
            localStorage.setItem('userName' , userInfo[i].name)

            return true

        }

    }

}