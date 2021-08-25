function fncValidate() {
    var fn = document.form1.fname.value;
    var ln = document.form1.lname.value;
    var pass1 = document.form1.Password.value;
    var pass2 = document.form1.ConPassword.value;
    var patt = / [^a-z] /i;
    var fname = patt.test(fn);
    var lname = patt.test(lname);

    if (fn == "") {
        alert("Introduceti numele");

        return false;
    }

    if (fn == null || fn == true) {

        alert("Introduceti doar litere!");

        return false;
    }

    if (ln == "") {
        alert("Introduceti prenumele!");

        return false;
    }

    if (ln == null || ln == true) {
        alert("Introduceti litere");
        return false;
    }

    var m = document.getElementById("male");
    var f = document.getElementById("female");
    var g = document.getElementById("gen");

    if ((m.checked == false) && (f.checked == false)) {

        alert("Alege genul!");

        document.getElementById("gen").style.border = "2px solid red";

        return false;

    } else {
        document.getElementById("gen").style.border = "";
    }

    var add = document.form1.adress.value;
    var patt2 = /[^a-z]/i;
    var adress = patt2.test(add);

    if (add == "") {
        alert("Introduceti adresa");
        return false;
    }

    if (add == null || add == true) {
        alert("Introduceti doar litere");
        return false;
    }

    var p = document.form1.phone.value;

    if (p == "") {
        alert("Introduceti numarul!");

        return false;
    }

    if (isNaN(p)) {
        alert("Introdu doar numere");
        return false;
    }

    if (p.length > 10) {
        alert("Introdu 10 numere");
        return false;
    }

    if (p.length < 10) {
        alert("Introdu 10 numere");
        return false;
    }

    var em = document.form1.email.value;
    var atpos = em.indexOf("@");
    var dotpos = em.lastIndexOf(".");

    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= em.length) {
        alert("Email incorect");
        return false;
    }

    if (pass1 == "") {
        alert("Introduceti Parola");
        return false;
    }

    if (pass1.length < 6) {
        alert("Parola este mai mica de 6 caractere");
        return false;
    }

    if (pass2 == "") {
        alert("Introduceti confirmarea parolei!");
        return false;
    }

    if (pass1 != pass2) {
        alert("Parola de cconfirmare nu se potriveste!");
        return false;

    }

    alert("Inregistrare cu succes");
    document.form1.submit();

}