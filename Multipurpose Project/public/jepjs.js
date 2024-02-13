window.addEventListener("load", addlistener);
window.addEventListener("load", start);

let point=0;
let point2=0;

function start() {
    document.getElementById("Question1lbl").style.display = "none";
    document.getElementById("Question2lbl").style.display = "none";
    document.getElementById("Question3lbl").style.display = "none";
    document.getElementById("Question4lbl").style.display = "none";
    document.getElementById("Question5lbl").style.display = "none";
    document.getElementById("Question6lbl").style.display = "none";
    document.getElementById("Question7lbl").style.display = "none";
    document.getElementById("Question8lbl").style.display = "none";
    document.getElementById("Question9lbl").style.display = "none";
    document.getElementById("Question10lbl").style.display = "none";
    document.getElementById("Question11lbl").style.display = "none";
    document.getElementById("Question12lbl").style.display = "none";
    document.getElementById("Question13lbl").style.display = "none";
    document.getElementById("Question14lbl").style.display = "none";
    document.getElementById("Question15lbl").style.display = "none";
    document.getElementById("Question16lbl").style.display = "none";
    document.getElementById("Points1cmb").style.display = "none";
    document.getElementById("Points2cmb").style.display = "none";
    document.getElementById("+").style.display = "none";
    document.getElementById("-").style.display = "none";
    document.getElementById("plus2").style.display = "none";
    document.getElementById("minus2").style.display = "none";
    document.getElementById("showcorrect").disabled=true;
    document.getElementById("GoBACKbtn").disabled=true;
}

function addlistener() {
    document.getElementById("Question1").addEventListener("click", Question1);
    document.getElementById("Question2").addEventListener("click", Question2);
    document.getElementById("Question3").addEventListener("click", Question3);
    document.getElementById("Question4").addEventListener("click", Question4);
    document.getElementById("Question5").addEventListener("click", Question5);
    document.getElementById("Question6").addEventListener("click", Question6);
    document.getElementById("Question7").addEventListener("click", Question7);
    document.getElementById("Question8").addEventListener("click", Question8);
    document.getElementById("Question9").addEventListener("click", Question9);
    document.getElementById("Question10").addEventListener("click", Question10);
    document.getElementById("Question11").addEventListener("click", Question11);
    document.getElementById("Question12").addEventListener("click", Question12);
    document.getElementById("Question13").addEventListener("click", Question13);
    document.getElementById("Question14").addEventListener("click", Question14);
    document.getElementById("Question15").addEventListener("click", Question15);
    document.getElementById("Question16").addEventListener("click", Question16);
    document.getElementById("GoBACKbtn").addEventListener("click", GOBACK);
    document.getElementById("showcorrect").addEventListener("click", Revealans);
    document.getElementById("+").addEventListener("click", addpoints);
    document.getElementById("plus2").addEventListener("click", addpoints2);
    document.getElementById("-").addEventListener("click", Subtractpoints);
    document.getElementById("minus2").addEventListener("click", Subtractpoints2);
    document.getElementById("Backtoindex").addEventListener("click",Backtoindex);
}

function Question1() {
    document.getElementById("tbscience").style.display = "none";
    document.getElementById("tbtech").style.display = "none";
    document.getElementById("tbEngineering").style.display = "none";
    document.getElementById("tbmath").style.display = "none";
    document.getElementById("Question1lbl").style.display = "block";
    document.getElementById("Points1cmb").style.display = "block";
    document.getElementById("Points2cmb").style.display = "block";
    document.getElementById("+").style.display = "block";
    document.getElementById("-").style.display = "block";
     document.getElementById("plus2").style.display = "block";
    document.getElementById("minus2").style.display = "block";
    document.getElementById("showcorrect").disabled=false;
    document.getElementById("GoBACKbtn").disabled=false;
}
function Question2() {
    document.getElementById("tbscience").style.display = "none";
    document.getElementById("tbtech").style.display = "none";
    document.getElementById("tbEngineering").style.display = "none";
    document.getElementById("tbmath").style.display = "none";
     document.getElementById("Question1lbl").style.display = "none";
    document.getElementById("Question2lbl").style.display = "block";
    document.getElementById("Points1cmb").style.display = "block";
    document.getElementById("Points2cmb").style.display = "block";
    document.getElementById("+").style.display = "block";
    document.getElementById("-").style.display = "block";
     document.getElementById("plus2").style.display = "block";
    document.getElementById("minus2").style.display = "block";
     document.getElementById("showcorrect").disabled=false;
     document.getElementById("GoBACKbtn").disabled=false;
}

function Question3() {
    document.getElementById("tbscience").style.display = "none";
    document.getElementById("tbtech").style.display = "none";
    document.getElementById("tbEngineering").style.display = "none";
    document.getElementById("tbmath").style.display = "none";
     document.getElementById("Question1lbl").style.display = "none";
     document.getElementById("Question2lbl").style.display = "none";
    document.getElementById("Question3lbl").style.display = "block";
    document.getElementById("Points1cmb").style.display = "block";
    document.getElementById("Points2cmb").style.display = "block";
    document.getElementById("+").style.display = "block";
    document.getElementById("-").style.display = "block";
    document.getElementById("plus2").style.display = "block";
    document.getElementById("minus2").style.display = "block";
     document.getElementById("showcorrect").disabled=false;
     document.getElementById("GoBACKbtn").disabled=false;
}
function Question4() {
    document.getElementById("tbscience").style.display = "none";
    document.getElementById("tbtech").style.display = "none";
    document.getElementById("tbEngineering").style.display = "none";
    document.getElementById("tbmath").style.display = "none";
     document.getElementById("Question1lbl").style.display = "none";
     document.getElementById("Question2lbl").style.display = "none";
    document.getElementById("Question3lbl").style.display = "none";
    document.getElementById("Question4lbl").style.display = "block";
    document.getElementById("Points1cmb").style.display = "block";
    document.getElementById("Points2cmb").style.display = "block";
    document.getElementById("+").style.display = "block";
    document.getElementById("-").style.display = "block";
    document.getElementById("plus2").style.display = "block";
    document.getElementById("minus2").style.display = "block";
     document.getElementById("showcorrect").disabled=false;
     document.getElementById("GoBACKbtn").disabled=false;
}

function Question5() {
    document.getElementById("tbscience").style.display = "none";
    document.getElementById("tbtech").style.display = "none";
    document.getElementById("tbEngineering").style.display = "none";
    document.getElementById("tbmath").style.display = "none";
     document.getElementById("Question1lbl").style.display = "none";
     document.getElementById("Question2lbl").style.display = "none";
    document.getElementById("Question3lbl").style.display = "none";
    document.getElementById("Question4lbl").style.display = "none";
    document.getElementById("Question5lbl").style.display = "block";
   document.getElementById("Points1cmb").style.display = "block";
    document.getElementById("Points2cmb").style.display = "block";
    document.getElementById("+").style.display = "block";
    document.getElementById("-").style.display = "block";
    document.getElementById("plus2").style.display = "block";
    document.getElementById("minus2").style.display = "block";
     document.getElementById("showcorrect").disabled=false;
     document.getElementById("GoBACKbtn").disabled=false;
}
function Question6() {
    document.getElementById("tbscience").style.display = "none";
    document.getElementById("tbtech").style.display = "none";
    document.getElementById("tbEngineering").style.display = "none";
    document.getElementById("tbmath").style.display = "none";
     document.getElementById("Question1lbl").style.display = "none";
     document.getElementById("Question2lbl").style.display = "none";
    document.getElementById("Question3lbl").style.display = "none";
    document.getElementById("Question4lbl").style.display = "none";
    document.getElementById("Question5lbl").style.display = "none";
    document.getElementById("Question6lbl").style.display = "block";
    document.getElementById("Points1cmb").style.display = "block";
    document.getElementById("Points2cmb").style.display = "block";
    document.getElementById("+").style.display = "block";
    document.getElementById("-").style.display = "block";
    document.getElementById("plus2").style.display = "block";
    document.getElementById("minus2").style.display = "block";
     document.getElementById("showcorrect").disabled=false;
     document.getElementById("GoBACKbtn").disabled=false;
}

function Question7() {
    document.getElementById("tbscience").style.display = "none";
    document.getElementById("tbtech").style.display = "none";
    document.getElementById("tbEngineering").style.display = "none";
    document.getElementById("tbmath").style.display = "none";
     document.getElementById("Question1lbl").style.display = "none";
     document.getElementById("Question2lbl").style.display = "none";
    document.getElementById("Question3lbl").style.display = "none";
    document.getElementById("Question4lbl").style.display = "none";
    document.getElementById("Question5lbl").style.display = "none";
    document.getElementById("Question6lbl").style.display = "none";
    document.getElementById("Question7lbl").style.display = "block";
    document.getElementById("Points1cmb").style.display = "block";
    document.getElementById("Points2cmb").style.display = "block";
    document.getElementById("+").style.display = "block";
    document.getElementById("-").style.display = "block";
    document.getElementById("plus2").style.display = "block";
    document.getElementById("minus2").style.display = "block";
     document.getElementById("showcorrect").disabled=false;
     document.getElementById("GoBACKbtn").disabled=false;
}

function Question8() {
    document.getElementById("tbscience").style.display = "none";
    document.getElementById("tbtech").style.display = "none";
    document.getElementById("tbEngineering").style.display = "none";
    document.getElementById("tbmath").style.display = "none";
     document.getElementById("Question1lbl").style.display = "none";
     document.getElementById("Question2lbl").style.display = "none";
    document.getElementById("Question3lbl").style.display = "none";
    document.getElementById("Question4lbl").style.display = "none";
    document.getElementById("Question5lbl").style.display = "none";
    document.getElementById("Question6lbl").style.display = "none";
    document.getElementById("Question7lbl").style.display = "none";
    document.getElementById("Question8lbl").style.display = "block";
    document.getElementById("Points1cmb").style.display = "block";
    document.getElementById("Points2cmb").style.display = "block";
    document.getElementById("+").style.display = "block";
    document.getElementById("-").style.display = "block";
    document.getElementById("plus2").style.display = "block";
    document.getElementById("minus2").style.display = "block";
     document.getElementById("showcorrect").disabled=false;
     document.getElementById("GoBACKbtn").disabled=false;
}

function Question9() {
    document.getElementById("tbscience").style.display = "none";
    document.getElementById("tbtech").style.display = "none";
    document.getElementById("tbEngineering").style.display = "none";
    document.getElementById("tbmath").style.display = "none";
     document.getElementById("Question1lbl").style.display = "none";
     document.getElementById("Question2lbl").style.display = "none";
    document.getElementById("Question3lbl").style.display = "none";
    document.getElementById("Question4lbl").style.display = "none";
    document.getElementById("Question5lbl").style.display = "none";
    document.getElementById("Question6lbl").style.display = "none";
    document.getElementById("Question7lbl").style.display = "none";
    document.getElementById("Question8lbl").style.display = "none";
    document.getElementById("Question9lbl").style.display = "block";
   document.getElementById("Points1cmb").style.display = "block";
    document.getElementById("Points2cmb").style.display = "block";
    document.getElementById("+").style.display = "block";
    document.getElementById("-").style.display = "block";
    document.getElementById("plus2").style.display = "block";
    document.getElementById("minus2").style.display = "block";
     document.getElementById("showcorrect").disabled=false;
     document.getElementById("GoBACKbtn").disabled=false;
}

function Question10() {
    document.getElementById("tbscience").style.display = "none";
    document.getElementById("tbtech").style.display = "none";
    document.getElementById("tbEngineering").style.display = "none";
    document.getElementById("tbmath").style.display = "none";
     document.getElementById("Question1lbl").style.display = "none";
     document.getElementById("Question2lbl").style.display = "none";
    document.getElementById("Question3lbl").style.display = "none";
    document.getElementById("Question4lbl").style.display = "none";
    document.getElementById("Question5lbl").style.display = "none";
    document.getElementById("Question6lbl").style.display = "none";
    document.getElementById("Question7lbl").style.display = "none";
    document.getElementById("Question8lbl").style.display = "none";
    document.getElementById("Question9lbl").style.display = "none";
    document.getElementById("Question10lbl").style.display = "block";
    document.getElementById("Points1cmb").style.display = "block";
    document.getElementById("Points2cmb").style.display = "block";
    document.getElementById("+").style.display = "block";
    document.getElementById("-").style.display = "block";
    document.getElementById("plus2").style.display = "block";
    document.getElementById("minus2").style.display = "block";
     document.getElementById("showcorrect").disabled=false;
     document.getElementById("GoBACKbtn").disabled=false;
}

function Question11() {
    document.getElementById("tbscience").style.display = "none";
    document.getElementById("tbtech").style.display = "none";
    document.getElementById("tbEngineering").style.display = "none";
    document.getElementById("tbmath").style.display = "none";
     document.getElementById("Question1lbl").style.display = "none";
     document.getElementById("Question2lbl").style.display = "none";
    document.getElementById("Question3lbl").style.display = "none";
    document.getElementById("Question4lbl").style.display = "none";
    document.getElementById("Question5lbl").style.display = "none";
    document.getElementById("Question6lbl").style.display = "none";
    document.getElementById("Question7lbl").style.display = "none";
    document.getElementById("Question8lbl").style.display = "none";
    document.getElementById("Question9lbl").style.display = "none";
    document.getElementById("Question10lbl").style.display = "none";
    document.getElementById("Question11lbl").style.display = "block";
  document.getElementById("Points1cmb").style.display = "block";
    document.getElementById("Points2cmb").style.display = "block";
    document.getElementById("+").style.display = "block";
    document.getElementById("-").style.display = "block";
    document.getElementById("plus2").style.display = "block";
    document.getElementById("minus2").style.display = "block";
     document.getElementById("showcorrect").disabled=false;
     document.getElementById("GoBACKbtn").disabled=false;
}

function Question12() {
    document.getElementById("tbscience").style.display = "none";
    document.getElementById("tbtech").style.display = "none";
    document.getElementById("tbEngineering").style.display = "none";
    document.getElementById("tbmath").style.display = "none";
     document.getElementById("Question1lbl").style.display = "none";
     document.getElementById("Question2lbl").style.display = "none";
    document.getElementById("Question3lbl").style.display = "none";
    document.getElementById("Question4lbl").style.display = "none";
    document.getElementById("Question5lbl").style.display = "none";
    document.getElementById("Question6lbl").style.display = "none";
    document.getElementById("Question7lbl").style.display = "none";
    document.getElementById("Question8lbl").style.display = "none";
    document.getElementById("Question9lbl").style.display = "none";
    document.getElementById("Question10lbl").style.display = "none";
    document.getElementById("Question11lbl").style.display = "none";
    document.getElementById("Question12lbl").style.display = "block";
    document.getElementById("Points1cmb").style.display = "block";
    document.getElementById("Points2cmb").style.display = "block";
    document.getElementById("+").style.display = "block";
    document.getElementById("-").style.display = "block";
    document.getElementById("plus2").style.display = "block";
    document.getElementById("minus2").style.display = "block"; 
     document.getElementById("showcorrect").disabled=false;
     document.getElementById("GoBACKbtn").disabled=false;
}
function Question13() {
    document.getElementById("tbscience").style.display = "none";
    document.getElementById("tbtech").style.display = "none";
    document.getElementById("tbEngineering").style.display = "none";
    document.getElementById("tbmath").style.display = "none";
     document.getElementById("Question1lbl").style.display = "none";
     document.getElementById("Question2lbl").style.display = "none";
    document.getElementById("Question3lbl").style.display = "none";
    document.getElementById("Question4lbl").style.display = "none";
    document.getElementById("Question5lbl").style.display = "none";
    document.getElementById("Question6lbl").style.display = "none";
    document.getElementById("Question7lbl").style.display = "none";
    document.getElementById("Question8lbl").style.display = "none";
    document.getElementById("Question9lbl").style.display = "none";
    document.getElementById("Question10lbl").style.display = "none";
    document.getElementById("Question11lbl").style.display = "none";
    document.getElementById("Question12lbl").style.display = "none";
    document.getElementById("Question13lbl").style.display = "block";
   document.getElementById("Points1cmb").style.display = "block";
    document.getElementById("Points2cmb").style.display = "block";
    document.getElementById("+").style.display = "block";
    document.getElementById("-").style.display = "block";
    document.getElementById("plus2").style.display = "block";
    document.getElementById("minus2").style.display = "block";
     document.getElementById("showcorrect").disabled=false;
     document.getElementById("GoBACKbtn").disabled=false;
}
function Question14() {
    document.getElementById("tbscience").style.display = "none";
    document.getElementById("tbtech").style.display = "none";
    document.getElementById("tbEngineering").style.display = "none";
    document.getElementById("tbmath").style.display = "none";
     document.getElementById("Question1lbl").style.display = "none";
     document.getElementById("Question2lbl").style.display = "none";
    document.getElementById("Question3lbl").style.display = "none";
    document.getElementById("Question4lbl").style.display = "none";
    document.getElementById("Question5lbl").style.display = "none";
    document.getElementById("Question6lbl").style.display = "none";
    document.getElementById("Question7lbl").style.display = "none";
    document.getElementById("Question8lbl").style.display = "none";
    document.getElementById("Question9lbl").style.display = "none";
    document.getElementById("Question10lbl").style.display = "none";
    document.getElementById("Question11lbl").style.display = "none";
    document.getElementById("Question12lbl").style.display = "none";
    document.getElementById("Question13lbl").style.display = "none";
    document.getElementById("Question14lbl").style.display = "block";
    document.getElementById("Points1cmb").style.display = "block";
    document.getElementById("Points2cmb").style.display = "block";
    document.getElementById("+").style.display = "block";
    document.getElementById("-").style.display = "block";
    document.getElementById("plus2").style.display = "block";
    document.getElementById("minus2").style.display = "block";
     document.getElementById("showcorrect").disabled=false;
     document.getElementById("GoBACKbtn").disabled=false;
}
function Question15() {
    document.getElementById("tbscience").style.display = "none";
    document.getElementById("tbtech").style.display = "none";
    document.getElementById("tbEngineering").style.display = "none";
    document.getElementById("tbmath").style.display = "none";
     document.getElementById("Question1lbl").style.display = "none";
     document.getElementById("Question2lbl").style.display = "none";
    document.getElementById("Question3lbl").style.display = "none";
    document.getElementById("Question4lbl").style.display = "none";
    document.getElementById("Question5lbl").style.display = "none";
    document.getElementById("Question6lbl").style.display = "none";
    document.getElementById("Question7lbl").style.display = "none";
    document.getElementById("Question8lbl").style.display = "none";
    document.getElementById("Question9lbl").style.display = "none";
    document.getElementById("Question10lbl").style.display = "none";
    document.getElementById("Question11lbl").style.display = "none";
    document.getElementById("Question12lbl").style.display = "none";
    document.getElementById("Question13lbl").style.display = "none";
    document.getElementById("Question14lbl").style.display = "none";
    document.getElementById("Question15lbl").style.display = "block";
   document.getElementById("Points1cmb").style.display = "block";
    document.getElementById("Points2cmb").style.display = "block";
    document.getElementById("+").style.display = "block";
    document.getElementById("-").style.display = "block";
    document.getElementById("plus2").style.display = "block";
    document.getElementById("minus2").style.display = "block";
     document.getElementById("showcorrect").disabled=false;
     document.getElementById("GoBACKbtn").disabled=false;
}
function Question16() {
    document.getElementById("tbscience").style.display = "none";
    document.getElementById("tbtech").style.display = "none";
    document.getElementById("tbEngineering").style.display = "none";
    document.getElementById("tbmath").style.display = "none";
     document.getElementById("Question1lbl").style.display = "none";
     document.getElementById("Question2lbl").style.display = "none";
    document.getElementById("Question3lbl").style.display = "none";
    document.getElementById("Question4lbl").style.display = "none";
    document.getElementById("Question5lbl").style.display = "none";
    document.getElementById("Question6lbl").style.display = "none";
    document.getElementById("Question7lbl").style.display = "none";
    document.getElementById("Question8lbl").style.display = "none";
    document.getElementById("Question9lbl").style.display = "none";
    document.getElementById("Question10lbl").style.display = "none";
    document.getElementById("Question11lbl").style.display = "none";
    document.getElementById("Question12lbl").style.display = "none";
    document.getElementById("Question13lbl").style.display = "none";
    document.getElementById("Question14lbl").style.display = "none";
    document.getElementById("Question15lbl").style.display = "none";
    document.getElementById("Question16lbl").style.display = "block";
    document.getElementById("Points1cmb").style.display = "block";
    document.getElementById("Points2cmb").style.display = "block";
    document.getElementById("+").style.display = "block";
    document.getElementById("-").style.display = "block";
    document.getElementById("plus2").style.display = "block";
    document.getElementById("minus2").style.display = "block";
     document.getElementById("showcorrect").disabled=false;
     document.getElementById("GoBACKbtn").disabled=false;
}



function GOBACK() {
    document.getElementById("tbscience").style.display = "block";
    document.getElementById("tbtech").style.display = "block";
    document.getElementById("tbEngineering").style.display = "block";
    document.getElementById("tbmath").style.display = "block";
    document.getElementById("Question1lbl").style.display = "none";
    document.getElementById("Question2lbl").style.display = "none";
    document.getElementById("Question3lbl").style.display = "none";
    document.getElementById("Question4lbl").style.display = "none";
    document.getElementById("Question5lbl").style.display = "none";
    document.getElementById("Question6lbl").style.display = "none";
    document.getElementById("Question7lbl").style.display = "none";
    document.getElementById("Question8lbl").style.display = "none";
    document.getElementById("Question9lbl").style.display = "none";
    document.getElementById("Question10lbl").style.display = "none";
    document.getElementById("Question11lbl").style.display = "none";
    document.getElementById("Question12lbl").style.display = "none";
    document.getElementById("Question13lbl").style.display = "none";
    document.getElementById("Question14lbl").style.display = "none";
    document.getElementById("Question15lbl").style.display = "none";
    document.getElementById("Question16lbl").style.display = "none";
   document.getElementById("Points1cmb").style.display = "none";
    document.getElementById("Points2cmb").style.display = "none";
    document.getElementById("+").style.display = "none";
    document.getElementById("-").style.display = "none";
    document.getElementById("plus2").style.display = "none";
    document.getElementById("minus2").style.display = "none";
     document.getElementById("showcorrect").disabled=true;
     document.getElementById("GoBACKbtn").disabled=true;
    document.getElementById("Question1lbl").innerHTML = "What type of sciences could be in this field (1-3 fields)";
    document.getElementById("Question2lbl").innerHTML = "Which science is heavily based on elements and the Periodic Table?";
    document.getElementById("Question3lbl").innerHTML = "Which science is heavily based on Stars and the SPACE?";
    document.getElementById("Question4lbl").innerHTML = "Which scientist studys life?";
    document.getElementById("Question5lbl").innerHTML = "Did the Apple iPhone become first available in 2005, 2006, or 2007?";
    document.getElementById("Question6lbl").innerHTML = "Who was the co-founder of Microsoft?";
    document.getElementById("Question7lbl").innerHTML = "What is the difference between hardware and software?";
    document.getElementById("Question8lbl").innerHTML = "When was the first computer created? (approx.)";
    document.getElementById("Question9lbl").innerHTML = "Which material is harder? Aluminum or Steel?";
    document.getElementById("Question10lbl").innerHTML = "If one wanted to design airplanes and rockets, which branch of engineering would they go into?";
    document.getElementById("Question11lbl").innerHTML = "What is a superconductor?";
    document.getElementById("Question12lbl").innerHTML = "Before you can solve a problem the first you have to do is?";
    document.getElementById("Question13lbl").innerHTML = "What is a triangle with two equal sides?";
    document.getElementById("Question14lbl").innerHTML = "What is 12^2?";
    document.getElementById("Question15lbl").innerHTML = "What is an angle that is greater than 90 degrees?";
    document.getElementById("Question16lbl").innerHTML = "Solve this equation: 7 - 24 ÷ 8 X 4 + 6";
}

function Revealans() {
     answer1 = document.getElementById("Question1lbl").innerHTML = "Correct Answers: Chemistry, Environmental science, physical science, Astronomy, Biologist ";
     answer2 = document.getElementById("Question2lbl").innerHTML = "Correct Answer: Chemistry.";
     answer3 = document.getElementById("Question3lbl").innerHTML = "Correct Answer: Astronomy.";
     answer4 = document.getElementById("Question4lbl").innerHTML = "Correct Answer: biologists (bio)Life, Logy(study).";
     answer5 = document.getElementById("Question5lbl").innerHTML = "Correct Answer: 2007";
     answer6 = document.getElementById("Question6lbl").innerHTML = "Correct Answer: Bill Gates.";
     answer7 = document.getElementById("Question7lbl").innerHTML = "Correct Answer: Hardware is the physical aspects and software is the programs, apps, and operating systems that run on the hardware.";
     answer8 = document.getElementById("Question8lbl").innerHTML = "Correct Answer: The first computer was invented by Charles Babbage (1822) but was not built until 1991!";
     answer9 = document.getElementById("Question9lbl").innerHTML = "Correct Answer: steel is still harder than aluminum";
     answer10 = document.getElementById("Question10lbl").innerHTML = "Correct Answer: Aeronautical engineering.";
     answer11 = document.getElementById("Question11lbl").innerHTML = "Correct Answer: the property of certain materials to conduct direct current (DC) electricity";
     answer12 = document.getElementById("Question12lbl").innerHTML = "Correct Answer: the first step is to define the problem";
     answer13 = document.getElementById("Question13lbl").innerHTML = "Correct Answer: isosceles triangle";
     answer14 = document.getElementById("Question14lbl").innerHTML = "Correct Answer: 144";
     answer15 = document.getElementById("Question15lbl").innerHTML = "Correct Answer: obtuse angles.";
     answer16 = document.getElementById("Question16lbl").innerHTML = "Correct Answer: 1(yes number one).";
  
}

function addpoints() {
    var pointscmb = document.getElementById("Points1cmb").selectedIndex;
    if (pointscmb === 1) {
        point += 100;
        document.getElementById("TeamPoint1lbl").innerHTML = "Team1: " + point + " Points.";
    }
    else if (pointscmb===2){
		point += 200;
		document.getElementById("TeamPoint1lbl").innerHTML = "Team1: " + point + " Points.";
	}
	else if (pointscmb===3){
		point += 300;
		document.getElementById("TeamPoint1lbl").innerHTML = "Team1: " + point + " Points.";
	}
	else if (pointscmb===4){
		point += 400;
		document.getElementById("TeamPoint1lbl").innerHTML = "Team1: " + point + " Points.";
	}
	else{
		alert("error msg");
	}
}

function Subtractpoints() {
    var pointscmb = document.getElementById("Points1cmb").selectedIndex;
    if (pointscmb === 1) {
        point -= 100;
        document.getElementById("TeamPoint1lbl").innerHTML = "Team1: " + point + " Points.";
    }
    else if (pointscmb===2){
		point -= 200;
		document.getElementById("TeamPoint1lbl").innerHTML = "Team1: " + point + " Points.";
	}
	else if (pointscmb===3){
		point -= 300;
		document.getElementById("TeamPoint1lbl").innerHTML = "Team1: " + point + " Points.";
	}
	else if (pointscmb===4){
		point -= 400;
		document.getElementById("TeamPoint1lbl").innerHTML = "Team1: " + point + " Points.";
	}
	else{
		alert("error msg");
	}
}
function addpoints2() {
    var pointscmb2 = document.getElementById("Points2cmb").selectedIndex;
    if (pointscmb2 === 1) {
        point2 += 100;
        document.getElementById("TeamPoint2lbl").innerHTML = "Team2: " + point2 + " Points.";
    }
    else if (pointscmb2===2){
		point2 += 200;
		document.getElementById("TeamPoint2lbl").innerHTML = "Team2: " + point2 + " Points.";
	}
	else if (pointscmb2===3){
		point2 += 300;
		document.getElementById("TeamPoint2lbl").innerHTML = "Team2: " + point2 + " Points.";
	}
	else if (pointscmb2===4){
		point2 += 400;
		document.getElementById("TeamPoint2lbl").innerHTML = "Team2: " + point2 + " Points.";
	}
	else{
		alert("error msg");
	}
}
function Subtractpoints2() {
    var pointscmb2 = document.getElementById("Points2cmb").selectedIndex;
    if (pointscmb2 === 1) {
        point2 -= 100;
        document.getElementById("TeamPoint2lbl").innerHTML = "Team2: " + point2 + " Points.";
    }
    else if (pointscmb2===2){
		point2 -= 200;
		document.getElementById("TeamPoint2lbl").innerHTML = "Team2: " + point2 + " Points.";
	}
	else if (pointscmb2===3){
		point2 -= 300;
		document.getElementById("TeamPoint2lbl").innerHTML = "Team2: " + point2 + " Points.";
	}
	else if (pointscmb2===4){
		point2 -= 400;
		document.getElementById("TeamPoint2lbl").innerHTML = "Team2: " + point2 + " Points.";
	}
	else{
		alert("Error msg");
	}
}


function Backtoindex()
{
	document.getElementById("Backtoindex").onclick=window.location.assign("file:///C:/Users/alial/eclipse-workspace/Multipurpose%20Project/public/index.html");
}
