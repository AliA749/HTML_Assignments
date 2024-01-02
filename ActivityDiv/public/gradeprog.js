window.addEventListener("load",Initcontrols);
window.addEventListener("load",Addlisteners);
let totalgrade=0.0;
let countnumgrade=0;


function Addlisteners()
{
	document.getElementById("btnsubmit").addEventListener("click",SwitchElements);
	document.getElementById("btngrdsub").addEventListener("click",CalcAverage);
}

function Initcontrols()
{
	document.getElementById("txtnumgrade").focus();
	document.getElementById("txtentgrade").style.display="none";
}

function SwitchElements()
{
	document.getElementById("howmany").style.display= "none";
	document.getElementById("txtentgrade").style.display= "block";
	document.getElementById("txtentgrade").focus();
}

function CalcAverage()
{
	hownumgrade=document.getElementById("txtnumgrade").value;
	enteredgrade=document.getElementById("txtentgrade").value;
	totalgrade=parseFloat(enteredgrade) + parseFloat(totalgrade);
	
	document.getElementById("txtentgrade").value = "";
	document.getElementById("txtentgrade").focus();
	countnumgrade=parseInt(countnumgrade)+parseInt(1);
	document.getElementById("lbldisplay").textContent = "Grade  " + countnumgrade + ": " + enteredgrade ;
	
	if (parseInt(countnumgrade)== parseInt(hownumgrade))
	{
		totalgrade = parseFloat(totalgrade) / parseInt(hownumgrade);
		document.getElementById("lbldisplay").textContent ="The Average is " + totalgrade.toFixed(2);
		document.getElementById("txtentgrade").style.display="none";
		document.getElementById("btngrdsub").disabled= true;
	}
}
