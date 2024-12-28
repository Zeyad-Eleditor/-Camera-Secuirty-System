


function validateform(){
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value

    if(name===''||email===''||message===''){
        alert("please vallied form")
        return false
    }
     if(email.indexof('@')===''){
        alert("please vallied @")
        return false
     }
     return true
}




