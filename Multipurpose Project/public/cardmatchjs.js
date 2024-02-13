window.addEventListener("load", AddListeners);
window.addEventListener("load", Start);

function Start()
{
	document.getElementById("Easy").style.display="none";
	document.getElementById("Medium").style.display="none";
	document.getElementById("Hard").style.display="none";
	document.getElementById("SubmitbtnEZ").disabled=true;
	document.getElementById("SubmitbtnM").disabled=true;
	document.getElementById("SubmitbtnM").style.display="none";
	document.getElementById("SubmitbtnH").disabled=true;
	document.getElementById("SubmitbtnH").style.display="none";
}
function AddListeners() {
	document.getElementById("cmbdifficulty").addEventListener("change",choices);
	document.getElementById("SubmitbtnEZ").addEventListener("click",answersEZ);
	document.getElementById("SubmitbtnM").addEventListener("click",answerM);
	document.getElementById("SubmitbtnH").addEventListener("click",answerH);
	document.getElementById("GoBack").addEventListener("click", GoBack);
}

function choices()
{
	var questions=document.getElementById("cmbdifficulty").value;
	if(questions=="Easy")
	{
		document.getElementById("Displaylbl").style.display="block";
		document.getElementById("Answer1M").textContent="";
		document.getElementById("Answer2M").textContent="";
		 document.getElementById("Answer3M").textContent="";
		 document.getElementById("Answer1H").textContent="";
		document.getElementById("Answer2H").textContent="";
		 document.getElementById("Answer3H").textContent="";
		document.getElementById("Easy").style.display="block";
		document.getElementById("Medium").style.display="none";
		document.getElementById("Hard").style.display="none";
		document.getElementById("SubmitbtnEZ").disabled=false;
		document.getElementById("SubmitbtnH").style.display="none";
		document.getElementById("SubmitbtnM").style.display="none";
		document.getElementById("SubmitbtnEZ").style.display="block";
	}
	else if(questions=="Medium")
	{
		document.getElementById("Displaylbl2").style.display="block";
		document.getElementById("Answer1EZ").textContent="";
		document.getElementById("Answer2EZ").textContent="";
		 document.getElementById("Answer3EZ").textContent="";
		 document.getElementById("Answer1H").textContent="";
		document.getElementById("Answer2H").textContent="";
		 document.getElementById("Answer3H").textContent="";
		document.getElementById("Easy").style.display="none";
		document.getElementById("Medium").style.display="block";
		document.getElementById("Hard").style.display="none";
		document.getElementById("SubmitbtnM").disabled=false;
		document.getElementById("SubmitbtnEZ").style.display="none";
		document.getElementById("SubmitbtnH").style.display="none";
		document.getElementById("SubmitbtnM").style.display="block";
	}
	else if(questions=="Hard")
	{
		document.getElementById("Displaylbl3").style.display="block";
		document.getElementById("Answer1EZ").textContent="";
		document.getElementById("Answer2EZ").textContent="";
		 document.getElementById("Answer3EZ").textContent="";
		 document.getElementById("Answer1M").textContent="";
		document.getElementById("Answer2M").textContent="";
		 document.getElementById("Answer3M").textContent="";
		document.getElementById("Hard").style.display="block";
		document.getElementById("Medium").style.display="none";
		document.getElementById("Easy").style.display="none";
		document.getElementById("SubmitbtnH").disabled=false;
		document.getElementById("SubmitbtnEZ").style.display="none";
		document.getElementById("SubmitbtnM").style.display="none";
		document.getElementById("SubmitbtnH").style.display="block";
	}
	else{
		alert("Choose an difficulty");
		
	}
	
}

function answersEZ() {
	document.getElementById("Answer1M").value="";
	document.getElementById("Answer2M").value="";
	document.getElementById("Answer3M").value="";
	document.getElementById("Answer1H").value="";
	document.getElementById("Answer2H").value="";
	document.getElementById("Answer3H").value="";
    var answer1ez = document.getElementById("Answer1EZ").value;
    var answer2ez = document.getElementById("Answer2EZ").value;
    var answer3ez = document.getElementById("Answer3EZ").value;
    var life1 = document.getElementById("Card1");
    var life2 = document.getElementById("Card2");
    var life3 = document.getElementById("Card3");

    switch (answer1ez) {
        case "Hypertext Markup Language":
            alert("correct!!");
            break;
        default:
            alert("WRONG, The answer:Hypertext Markup Language");
            document.getElementById("Card1").style.display = "none";
    }

    switch (answer2ez) {
        case "75":
            alert("correct2!!");
            break;
        default:
            alert("WRONG2, The answer:75");
            document.getElementById("Card2").style.display = "none";
    }

    switch (answer3ez) {
        case "Elon Musk":
            alert("correct3!!");
            break;
        default:
            alert("WRONG3, The answer:Elon Musk");
            document.getElementById("Card3").style.display = "none";
    }

	if (life1.style.display=="none" && life2.style.display=="none" && life3.style.display=="none")
	{
		alert("GAME OVER!!!");
		window.location.reload();
	}

}
function answerM(){
	document.getElementById("Answer1EZ").value="";
	document.getElementById("Answer2EZ").value="";
	document.getElementById("Answer3EZ").value="";
	document.getElementById("Answer1H").value="";
	document.getElementById("Answer2H").value="";
	document.getElementById("Answer3H").value="";
	var answer1M=document.getElementById("Answer1M").value;
	var answer2M=document.getElementById("Answer2M").value;
	var answer3M=document.getElementById("Answer3M").value;
	var life1=document.getElementById("Card1");
	var life2=document.getElementById("Card2");
	var life3=document.getElementById("Card3");
	  switch (answer1M) {
        case "Shows Element":
            alert("correct!!");
            break;
        default:
            alert("Incorrect Answer:Shows Element");
            document.getElementById("Card1").style.display = "none";
            document.getElementById("Card2").style.display = "none";
    }

    switch (answer2M) {
        case "5":
            alert("correct2!!");
            break;
        default:
            alert("WRONG#2 answer:5");
            document.getElementById("Card2").style.display = "none";
            document.getElementById("Card3").style.display = "none";
    }

    switch (answer3M) {
        case "Steve Jobs":
            alert("correct3!!");
            break;
        default:
            alert("WRONG#3 Answer:Steve Jobs");
            document.getElementById("Card3").style.display = "none";
            document.getElementById("Card1").style.display = "none";
    }
	if (life1.style.display=="none" && life2.style.display=="none" && life3.style.display=="none")
	{
		alert("GAME OVER!!!");
		window.location.reload();
	}
	else{
		alert("You Still have Lives nice!");
	}
}

function answerH()
{
	document.getElementById("Answer1M").value="";
	document.getElementById("Answer2M").value="";
	document.getElementById("Answer3M").value="";
	document.getElementById("Answer1EZ").value="";
	document.getElementById("Answer2EZ").value="";
	document.getElementById("Answer3EZ").value="";
	var answer1H=document.getElementById("Answer1H").value;
	var answer2H=document.getElementById("Answer2H").value;
	var answer3H=document.getElementById("Answer3H").value;
	var life1=document.getElementById("Card1");
	var life2=document.getElementById("Card2");
	var life3=document.getElementById("Card3");
	  switch (answer1H) {
        case "Initialize Elements":
            alert("correct answer!");
            break;
        default:
            alert("Incorrect Answer:Initilize Elements");
            document.getElementById("Card1").style.display = "none";
            document.getElementById("Card2").style.display = "none";
            document.getElementById("Card3").style.display = "none";
    }

    switch (answer2H) {
        case "25":
            alert("correct#2!");
            break;
        default:
            alert("WRONG#2 answer:25");
            document.getElementById("Card1").style.display = "none";
            document.getElementById("Card2").style.display = "none";
            document.getElementById("Card3").style.display = "none";
    }

    switch (answer3H) {
        case "Charles Babbage":
            alert("correct3!!");
            break;
        default:
            alert("WRONG#3 Answer:Charles Babbage");
            document.getElementById("Card1").style.display = "none";
            document.getElementById("Card2").style.display = "none";
            document.getElementById("Card3").style.display = "none";
    }
	if (life1.style.display=="none" && life2.style.display=="none" && life3.style.display=="none")
	{
		alert("GAME OVER!!!");
		window.location.reload();
	}
	else{
		alert("You Still have Lives nice!");
	}
}


function GoBack()
{
	document.getElementById("GoBack").onclick=window.location.assign("file:///C:/Users/alial/eclipse-workspace/Multipurpose%20Project/public/index.html");
}
