var userName = document.querySelector('.Name');
var userEmail = document.querySelector('.email');
var userPassword = document.querySelector('.password'); 
var signUp = document.querySelector('#signUp');
var Success = document.querySelector('.accepted');
var tryAgain = document.querySelector('.notAccepted');
var emailExsist = document.querySelector('.exsist');


var userInfo = [];
if(localStorage.getItem('user')!= null){
    userInfo =JSON.parse(localStorage.getItem('user'))

}
else{
    userInfo =[]
}


signUp.addEventListener('click' , function(eventInfo){
    // eventInfo.preventDefault()
    if(allInputValidation() == true){
        
        addUser()

    }
    else{
        
    }
    
    
    
})


function validatUserInput(regex , element ){
    var patern = regex;
   
    if( patern.test(element.value) && element.value != null ){
       

        Success.classList.replace('d-none','d-block')
        tryAgain.classList.replace('d-block','d-none')

        
        return true
        
    }
    else{
        Success.classList.replace('d-block','d-none')
        tryAgain.classList.replace('d-none','d-block')
        
       
        return false
    }
}

function allInputValidation(){
    if(validatUserInput(/^[a-zA-Z0-9$_]{2,}$/ , userName) == true && validatUserInput(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ , userEmail) == true && 
    validatUserInput(/^(?=.*[A-Z])(?=.*[\W_])(?=.*\d).*$/ , userPassword) == true
    )
        {
            console.log('true')
            return true;
            
        
       
    }
    else{
        console.log('false')
        return false;

      
    }

}

function addUser(){
    var user ={
        name:userName.value,
        email:userEmail.value,
        password:userPassword.value
    }
    if(isExists(user) == true){
        emailExsist.classList.replace('d-none' , 'd-block')
        Success.classList.replace('d-block','d-none')
        

    }
    else{
        emailExsist.classList.replace('d-block' , 'd-none')
        userInfo.push(user);
        localStorage.setItem('user',JSON.stringify(userInfo));
        window.location.href= "../js login/index.html"
    
    }
    
    


}

function isExists(user){
    for(var i = 0 ;i< userInfo.length ; i++ ){
        if(userInfo[i].email.toLowerCase() == user.email.toLowerCase()){
            return true

        }

    }

}






