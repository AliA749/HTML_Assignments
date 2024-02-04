window.addEventListener("load",Addlistener);

function Addlistener()
{
	document.getElementById("jeopardyconnect").addEventListener("click",Jeopardygame);
	document.getElementById("Livesgame").addEventListener("click",cardlives);
	document.getElementById("Researchconnect").addEventListener("click",ResearchPage);
	document.getElementById("MedicalPage").addEventListener("click",MedicalPage);
	document.getElementById("Calculator").addEventListener("click",Calculator);
}


function Jeopardygame()
{
	document.getElementById("jeopardyconnect").onclick=window.location.assign("file:///C:/Users/alial/eclipse-workspace/Multipurpose%20Project/public/Jeperody.html");
}


function cardlives()
{
	document.getElementById("Livesgame").onclick=window.location.assign("file:///C:/Users/alial/eclipse-workspace/Multipurpose%20Project/public/Cardmatch.html");
}

function ResearchPage()
{
	document.getElementById("Researchconnect").onclick=window.location.assign("file:///C:/Users/alial/eclipse-workspace/Multipurpose%20Project/public/ResearchEngine.html");
}

function MedicalPage()
{
	document.getElementById("MedicalPage").onclick=window.location.assign("file:///C:/Users/alial/eclipse-workspace/Multipurpose%20Project/public/Medical.html");
}

function Calculator()
{
	document.getElementById("Calculator").onclick=window.location.assign("file:///C:/Users/alial/eclipse-workspace/Multipurpose%20Project/public/Newcalculator.html");
}
