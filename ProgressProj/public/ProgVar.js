window.addEventListener("load",addlistners);
window.addEventListener("load",initelements1);
window.addEventListener("load",initelements2);
window.addEventListener("load",initelements3);
window.addEventListener("load",initelements4);
window.addEventListener("load",initelements5);
window.addEventListener("load",initelements6);

function initelements1()
{
	document.getElementById("FirstName").focus();
	document.getElementById("MiddleName").disabled=true;
	document.getElementById("LastName").disabled=true;
	document.getElementById("SlcTXT").disabled=true;
	document.getElementById("GradeLevel").disabled=true;
	document.getElementById("EmailTXT").disabled=true;
	document.getElementById("submit").disabled=true;
}
function initelements2()
{
	document.getElementById("MiddleName").focus();
	document.getElementById("LastName").disabled=true;
	document.getElementById("SlcTXT").disabled=true;
	document.getElementById("GradeLevel").disabled=true;
	document.getElementById("EmailTXT").disabled=true;
	document.getElementById("submit").disabled=true;
}

function initelements3()
{
	document.getElementById("LastName").focus();
	document.getElementById("SlcTXT").disabled=true;
	document.getElementById("GradeLevel").disabled=true;
	document.getElementById("EmailTXT").disabled=true;
	document.getElementById("submit").disabled=true;
}
function initelements4()
{
	document.getElementById("SlcTXT").focus();
	document.getElementById("GradeLevel").disabled=true;
	document.getElementById("EmailTXT").disabled=true;
	document.getElementById("submit").disabled=true;
}

function initelements5()
{
	document.getElementById("GradeLevel").focus();
	document.getElementById("EmailTXT").disabled=true;
	document.getElementById("submit").disabled=true;
	
}
function initelements6()
{
	document.getElementById("EmailTXT").focus();
	document.getElementById("submit").disabled=true;
}


function addlistners()
{
	document.getElementById("FirstName").addEventListener("keypress",elementable);
	document.getElementById("MiddleName").addEventListener("keypress",elementable2);
	document.getElementById("LastName").addEventListener("keypress",elementable3);
	document.getElementById("SlcTXT").addEventListener("keypress",elementable4);
	document.getElementById("GradeLevel").addEventListener("keypress",elementable5);
	document.getElementById("EmailTXT").addEventListener("keypress",elementable6);
	document.getElementById("submit").addEventListener("click",UserInfo);

}
function elementable()
{
	firstname= document.getElementById("FirstName").value;
	if (firstname !="")
		document.getElementById("MiddleName").disabled=false;
		document.getElementById("LastName").disabled=false;
}
function elementable2()
{
	MiddleName= document.getElementById("MiddleName").value;
	if (MiddleName !="")
		document.getElementById("LastName").disabled=false;
}

function elementable3()
{
	LastName= document.getElementById("LastName").value;
	if (LastName !="")
		document.getElementById("SlcTXT").disabled=false;
}

function elementable4()
{
	SlcTXT= document.getElementById("SlcTXT").value;
	if (SlcTXT !="")
		document.getElementById("GradeLevel").disabled=false;
}

function elementable5()
{
	GradeLevel= document.getElementById("GradeLevel").value;
	if (GradeLevel !="")
		document.getElementById("EmailTXT").disabled=false;
}

function elementable6()
{
	Email= document.getElementById("EmailTXT").value;
	if (Email !="")
		document.getElementById("submit").disabled=false;
}

function UserInfo()
{
	var firstname;
	var middlename;
	var lastname;
	var SLC;
	var Grade;
	var Email;

	firstname=document.getElementById("FirstName").value;
	middlename=document.getElementById("MiddleName").value;
	lastname=document.getElementById("LastName").value;
	SLC=document.getElementById("SlcTXT").value;
	Grade=document.getElementById("GradeLevel").value;
	Email=document.getElementById("EmailTXT").value;
	
	document.getElementById("Result").innerHTML= firstname + " " +middlename + ". " +lastname+ ", " + SLC+", " + Grade + "grade ,"+ "Email:  " + Email +".</span>";
}