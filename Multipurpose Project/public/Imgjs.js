window.addEventListener("load",Addlisteners);
window.addEventListener("load",start);

function start()
{
	document.getElementById("scienceIMGS").style.display="none";
	document.getElementById("techIMGS").style.display="none";
	document.getElementById("EngineeringIMGS").style.display="none";
	document.getElementById("MathIMGS").style.display="none";
}


function Addlisteners()
{
	document.getElementById("imgweb").addEventListener("click", websites);
	document.getElementById("Stemsearchcmb").addEventListener("click",Imagetype);
}

function websites()
{
	document.getElementById("imgweb").onclick=window.location.assign("file:///C:/Users/alial/eclipse-workspace/Multipurpose%20Project/public/ResearchEngine.html");
}

function Imagetype()
{
	choice=document.getElementById("Stemsearchcmb").value;
	
	if(choice=="Science")
	{
		document.getElementById("scienceIMGS").style.display="block";
		document.getElementById("techIMGS").style.display="none";
		document.getElementById("EngineeringIMGS").style.display="none";
	}
	else if(choice=="Technology")
	{
		document.getElementById("scienceIMGS").style.display="none";
		document.getElementById("EngineeringIMGS").style.display="none";
		document.getElementById("techIMGS").style.display="block";
	}
	else if(choice=="Engineering")
	{
		document.getElementById("scienceIMGS").style.display="none";
		document.getElementById("techIMGS").style.display="none";
		document.getElementById("EngineeringIMGS").style.display="block";
	}
	else if(choice=="Math")
	{
		document.getElementById("scienceIMGS").style.display="none";
		document.getElementById("techIMGS").style.display="none";
		document.getElementById("EngineeringIMGS").style.display="none";
		document.getElementById("MathIMGS").style.display="block";
	}
	
	
}