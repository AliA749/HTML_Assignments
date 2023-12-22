window.addEventListener("load",addListner);

function addListner()
{
	document.getElementById("completedbtn").addEventListener("click",answers);
}



function answers()
{
	var question1=document.getElementById("Question1cmb").value;
	var question2=document.getElementById("Question2cmb").value;
	var question3=document.getElementById("Question3cmb").value;
	
if(question1=="B1:(4,1)" && question2=="C2:(4,3)" && question3=="B3:(1/3,-2/5)"){
	alert("Correct options");
}
else{
	alert("One or all the choices are incorrect");
}
	
}
