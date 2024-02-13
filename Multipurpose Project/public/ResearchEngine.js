window.addEventListener("load",Addlistener);
window.addEventListener("load",Start);

function Start()
{
	document.getElementById("ScieceStems").style.display="none";
	document.getElementById("TechStems").style.display="none";
	document.getElementById("EngineeringStems").style.display="none";
	document.getElementById("MathStems").style.display="none";
}



function Addlistener()
{
	document.getElementById("Steamsearchcmb").addEventListener("click",Searchengine);
	document.getElementById("imgbtn").addEventListener("click",ImagesPG);
	document.getElementById("GoBack").addEventListener("click",GoBack);
}

function Searchengine()
{
	var searchchoice=document.getElementById("Steamsearchcmb").value;
	if(searchchoice=="Science")
	{
		document.getElementById("ScieceStems").style.display="block";
		document.getElementById("TechStems").style.display="none";
		document.getElementById("EngineeringStems").style.display="none";
		document.getElementById("MathStems").style.display="none";
	}
	else if(searchchoice=="Technology")
	{
		document.getElementById("TechStems").style.display="block";
		document.getElementById("ScieceStems").style.display="none";
		document.getElementById("EngineeringStems").style.display="none";
		document.getElementById("MathStems").style.display="none";
	}
	else if(searchchoice=="Engineering")
	{
		document.getElementById("TechStems").style.display="none";
		document.getElementById("ScieceStems").style.display="none";
		document.getElementById("EngineeringStems").style.display="block";
		document.getElementById("MathStems").style.display="none";
	}
	else if(searchchoice=="Math")
	{
		document.getElementById("TechStems").style.display="none";
		document.getElementById("ScieceStems").style.display="none";
		document.getElementById("EngineeringStems").style.display="none";
		document.getElementById("MathStems").style.display="block";
	}
}

function ImagesPG()
{
	document.getElementById("imgbtn").onclick=window.location.assign("file:///C:/Users/alial/eclipse-workspace/Multipurpose%20Project/public/IMG.html");
}
function GoBack()
{
	document.getElementById("GoBack").onclick=window.location.assign("file:///C:/Users/alial/eclipse-workspace/Multipurpose%20Project/public/index.html");
}

