var userName = localStorage.getItem('userName')
var welcome = document.querySelector('#Name')
var logout = document.querySelector('.logout')
 
welcome.innerHTML = userName

logout.addEventListener('click' , function(){
    window.location.href= "../js login/index.html"
    localStorage.removeItem(userName)
})