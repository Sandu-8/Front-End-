function fncValidate() {

    //Verificare email
    var em = document.form1.email.value;
    var atpos = em.indexOf("@");
    var dotpos = em.lastIndexOf(".");

    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= em.length) {
        document.getElementById("email").style.border = "solid red";
        return false;
    } else {
        document.getElementById("email").style.border = "solid green";
    }

    if (/^[a-zA-Z0-9]+@[a-zA-Z]+(?:\.[a-zA-Z]+)*$/.test(em)) {
        document.getElementById("email").style.border = "solid green";
    } else {
        document.getElementById("email").style.border = "solid red";
        return false;
    }

    //Introducerea parolei si verificarea ei
    var pass1 = document.form1.password.value;
    if (pass1 == "") {
        document.getElementById("password").style.border = "solid red";
        return false;
    } else {
        document.getElementById("password").style.border = "solid green";
    }


    if (pass1.length < 8) {
        document.getElementById("password").style.border = "solid red";
        return false;
    } else {
        document.getElementById("password").style.border = "solid green";
    }


    
   
    document.form1.submit();
    window.open('Main.html');
}