let email = document.getElementById("txtEmail");


function validateInput(){
    
    if(email.value.trim()===""){
        onError(email, "Emailul nu poate fi necompletat");
        //focus.email();
    }else{
        if(!isValidEmail(email.value.trim())){
            onError(email, "Emailul nu este valid");
        }else{
            onSuccess(email);
        }
    }    
}


//Validarea mail-ul expresie regulata
function isValidEmail(email){
   return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault();
    validateInput();
});

//Functia pentru afisarea mesajului de succes
function onSuccess(input){
    let parent = input.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility = "hidden"; 
    parent.classList.remove("error");
    parent.classList.add("success");  
}
//Functia pentru afisarea mesajului de insucces
function onError(input, message){
    let parent = input.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility = "visible";
    messageEle.innerText = message;  
    parent.classList.add("error");
    parent.classList.remove("success");

}