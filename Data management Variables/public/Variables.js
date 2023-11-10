window.addEventListener("load",addlistners);

function addlistners()
{
	document.getElementById("msgBTN").addEventListener("click",fullname);
	
}

function fullname()
{
	var firstname;
	var lastname;
	
	firstname=document.getElementById("TXTFname").value;
	lastname=document.getElementById("TXTlname").value;
	document.getElementById("SecondPart").innerHTML="I would like to meet" +" " +firstname + " "+lastname +".</span>";
}