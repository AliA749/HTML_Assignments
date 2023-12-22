
window.addEventListener("load", addlistners);
window.addEventListener("load",initelement1);
window.addEventListener("load",initelement2);

function initelement1(){
    document.getElementById("UsernameTXT").focus();
    document.getElementById("PasswordTXT").disabled=true;
    document.getElementById("SubmitBTN").disabled=true;
}

function initelement2()
{
    document.getElementById("PasswordTXT").focus();
    document.getElementById("SubmitBTN").disabled=true;
}




function addlistners()
{
    document.getElementById("UsernameTXT").addEventListener("keypress",element1);
    document.getElementById("PasswordTXT").addEventListener("keypress",element2);
    document.getElementById("SubmitBTN").addEventListener("click",UserInformation);
    document.getElementById("SignUpBTN").addEventListener("click",SignUpForm);

}

function element1()
{
    firstname= document.getElementById("UsernameTXT").value;
    if(firstname != " ")
        document.getElementById("PasswordTXT").disabled=false;
}

function element2()
{
    Pass= document.getElementById("PasswordTXT").value;
    if(Pass != " ")
        document.getElementById("SubmitBTN").disabled=false;
}

function UserInformation()
{
	var loginuser = document.getElementById("UsernameTXT").value;
    var loginpass = document.getElementById("PasswordTXT").value;
    var signinuser = getFromLocalStorage("signintxt_username");
    var signinpass = getFromLocalStorage("signintxt_password");

    if (signinuser === loginuser && signinpass === loginpass) {
        document.getElementById("SignUpBTN").onclick=window.location.assign("file:///C:/Users/alial/eclipse-workspace/ProgressProj/public/index.html");
    } else {
        alert("Invalid login credentials");
    }
 }

function SignUpForm()
{
	document.getElementById("SignUpBTN").onclick=window.location.assign("file:///C:/Users/alial/eclipse-workspace/ProgressProj/public/Signup.html");
}


