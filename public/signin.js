window.addEventListener("load", addlistners);
window.addEventListener("load",initelement1);
window.addEventListener("load",initelement2);

function initelement1(){
    document.getElementById("txtuser").focus();
    document.getElementById("txtpass").disabled=true;
    document.getElementById("btncontinue").disabled=true;
}

function initelement2()
{
    document.getElementById("txtpass").focus();
    document.getElementById("btncontinue").disabled=true;
}




function addlistners()
{
    document.getElementById("txtuser").addEventListener("keypress",element1);
    document.getElementById("txtpass").addEventListener("keypress",element2);
    document.getElementById("btncontinue").addEventListener("click",loginpage);
}

function element1()
{
    firstname= document.getElementById("txtuser").value;
    if(firstname != " ")
        document.getElementById("txtpass").disabled=false;
}

function element2()
{
    Pass= document.getElementById("txtpass").value;
    if(Pass != " ")
        document.getElementById("btncontinue").disabled=false;
}



function loginpage()
{
	var username = document.getElementById("txtuser").value;
    var password = document.getElementById("txtpass").value;

    
    saveToLocalStorage("signintxt_username", username);
    saveToLocalStorage("signintxt_password", password);
    
	document.getElementById("btncontinue").onclick=window.location.assign("file:///C:/Users/alial/eclipse-workspace/ProgressProj/public/loginindex.html");
}

