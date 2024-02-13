window.addEventListener("load",Addlisteners);
window.addEventListener("load",start);

function start()
{
	document.getElementById("FnameTXT").focus();
	document.getElementById("BMI").style.display="none";
	document.getElementById("Appointments").style.display="none";
	document.getElementById("Appointments2").style.display="none";
	document.getElementById("waterCalc").style.display="none";
	document.getElementById("Fnamelbl2").style.display="none";
	document.getElementById("FnameTXT2").style.display="none";
	document.getElementById("Lnamelbl2").style.display="none";
	document.getElementById("LnameTXT2").style.display="none";
	document.getElementById("AGEtxt2").style.display="none";
	document.getElementById("AGE2LBL").style.display="none";
	document.getElementById("final").style.display="none";
}


function Addlisteners()
{
	document.getElementById("appointmentCMB").addEventListener("change",appointmentTYPES);
	document.getElementById("placecmb").addEventListener("click",Place);
	document.getElementById("placecmb2").addEventListener("click",Place2);
	document.getElementById("BMIbtn").addEventListener("click",bmicalc);
	document.getElementById("BasicInfobtn").addEventListener("click",Accinfo);
	document.getElementById("Chosenbtn").addEventListener("click",final);
	document.getElementById("Chosenbtn2").addEventListener("click",final2);
	document.getElementById("refresh").addEventListener("click",refresh);
	document.getElementById("waterresultbtn").addEventListener("click",waterresults);
	document.getElementById("mainpage").addEventListener("click",Mainpage);
}


function appointmentTYPES()
{
	choice=document.getElementById("appointmentCMB").value;
	if(choice=="First Time")
	{
		document.getElementById("Appointments").style.display="none";
		document.getElementById("Fnamelbl").style.display="block";
		document.getElementById("FnameTXT").style.display="block";
		document.getElementById("Lnamelbl").style.display="block";
		document.getElementById("LnameTXT").style.display="block";
		document.getElementById("AGEtxt").style.display="block";
		document.getElementById("AGELBL").style.display="block";
		document.getElementById("Fnamelbl2").style.display="none";
		document.getElementById("FnameTXT2").style.display="none";
		document.getElementById("Lnamelbl2").style.display="none";
		document.getElementById("LnameTXT2").style.display="none";
		document.getElementById("AGEtxt2").style.display="none";
		document.getElementById("AGE2LBL").style.display="none";
		document.getElementById("TimeLBL").style.display="none";
		document.getElementById("TimeTxt").style.display="none";
		document.getElementById("medicineLBL").style.display="none";
		document.getElementById("Medicinetxt").style.display="none";
		document.getElementById("EmergencyLBL").style.display="none";
		document.getElementById("Emergencytxt").style.display="none";
		document.getElementById("Appointments2").style.display="none";
	}
	else if(choice=="A pateint here")
	{
		document.getElementById("Appointments").style.display="none";
		document.getElementById("Fnamelbl").style.display="none";
		document.getElementById("FnameTXT").style.display="none";
		document.getElementById("Lnamelbl").style.display="none";
		document.getElementById("LnameTXT").style.display="none";
		document.getElementById("AGEtxt").style.display="none";
		document.getElementById("AGELBL").style.display="none";
		document.getElementById("TimeLBL").style.display="none";
		document.getElementById("TimeTxt").style.display="none";
		document.getElementById("medicineLBL").style.display="none";
		document.getElementById("Medicinetxt").style.display="none";
		document.getElementById("EmergencyLBL").style.display="none";
		document.getElementById("Emergencytxt").style.display="none";
		document.getElementById("Appointments").style.display="none";
		document.getElementById("TimeLBL2").style.display="none";
		document.getElementById("TimeTxt2").style.display="none";
		document.getElementById("medicineLBL2").style.display="none";
		document.getElementById("Medicinetxt2").style.display="none";
		document.getElementById("EmergencyLBL2").style.display="none";
		document.getElementById("Emergencytxt2").style.display="none";
		document.getElementById("BMI").style.display="none";
		document.getElementById("Fnamelbl2").style.display="block";
		document.getElementById("FnameTXT2").style.display="block";
		document.getElementById("Lnamelbl2").style.display="block";
		document.getElementById("LnameTXT2").style.display="block";
		document.getElementById("AGEtxt2").style.display="block";
		document.getElementById("AGE2LBL").style.display="block";
		document.getElementById("Appointments2").style.display="none";
	}
	else{
		alert("ERROR!");
	}
}

function Place()
{
	choices=document.getElementById("placecmb").value;
	if(choices=="Check up")
	{
		document.getElementById("TimeLBL").style.display="block";
		document.getElementById("TimeTxt").style.display="block";
		document.getElementById("BMI").style.display="block";
		document.getElementById("waterCalc").style.display="block";
		document.getElementById("medicineLBL").style.display="none";
		document.getElementById("Medicinetxt").style.display="none";
		document.getElementById("EmergencyLBL").style.display="none";
		document.getElementById("Emergencytxt").style.display="none";
	}
	else if(choices=="Medicine pick up")
	{
		document.getElementById("TimeLBL").style.display="none";
		document.getElementById("TimeTxt").style.display="none";
		document.getElementById("BMI").style.display="none";
		document.getElementById("waterCalc").style.display="none";
		document.getElementById("EmergencyLBL").style.display="none";
		document.getElementById("Emergencytxt").style.display="none";
		document.getElementById("medicineLBL").style.display="block";
		document.getElementById("Medicinetxt").style.display="block";
		
	}
	else if (choices=="Emergency")
	{
		document.getElementById("TimeLBL").style.display="none";
		document.getElementById("TimeTxt").style.display="none";
		document.getElementById("BMI").style.display="none";
		document.getElementById("waterCalc").style.display="none";
		document.getElementById("medicineLBL").style.display="none";
		document.getElementById("Medicinetxt").style.display="none";
		document.getElementById("EmergencyLBL").style.display="block";
		document.getElementById("Emergencytxt").style.display="block";
	}
}

function Place2()
{
	choices2=document.getElementById("placecmb2").value;
	if(choices2=="Check up")
	{
		document.getElementById("TimeLBL2").style.display="block";
		document.getElementById("TimeTxt2").style.display="block";
		document.getElementById("BMI").style.display="block";
		document.getElementById("waterCalc").style.display="block";
		document.getElementById("medicineLBL2").style.display="none";
		document.getElementById("Medicinetxt2").style.display="none";
		document.getElementById("EmergencyLBL2").style.display="none";
		document.getElementById("Emergencytxt2").style.display="none";
	}
	else if(choices2=="Medicine pick up")
	{
		document.getElementById("TimeLBL2").style.display="none";
		document.getElementById("TimeTxt2").style.display="none";
		document.getElementById("BMI").style.display="none";
		document.getElementById("waterCalc").style.display="none";
		document.getElementById("EmergencyLBL2").style.display="none";
		document.getElementById("Emergencytxt2").style.display="none";
		document.getElementById("medicineLBL2").style.display="block";
		document.getElementById("Medicinetxt2").style.display="block";
		
	}
	else if (choices2=="Emergency")
	{
		document.getElementById("TimeLBL2").style.display="none";
		document.getElementById("TimeTxt2").style.display="none";
		document.getElementById("BMI").style.display="none";
		document.getElementById("waterCalc").style.display="none";
		document.getElementById("medicineLBL2").style.display="none";
		document.getElementById("Medicinetxt2").style.display="none";
		document.getElementById("EmergencyLBL2").style.display="block";
		document.getElementById("Emergencytxt2").style.display="block";
	}
}

function Accinfo() {
    var Fname = document.getElementById("FnameTXT").value;
    var Lname = document.getElementById("LnameTXT").value;
    var Age = document.getElementById("AGEtxt").value;
    var savedfirst = document.getElementById("FnameTXT2").value;
    var savedlast = document.getElementById("LnameTXT2").value;
    var savedage = document.getElementById("AGEtxt2").value;
    var choices = document.getElementById("appointmentCMB").value;

    if (Fname != "" && Lname != "" && Age != "" && choices == "First Time") {
        document.getElementById("savedname").innerHTML = Fname + " " + Lname + " Your age is:  " + Age + " This is your: " + choices;
        document.getElementById("Basicinfo").style.display="none"
        document.getElementById("Appointments").style.display="block";
    } else if (savedfirst == Fname && savedlast == Lname && savedage == Age && choices == "A pateint here") {
		document.getElementById("Appointments2").style.display="block";
        document.getElementById("savedname").innerHTML = "Hello usual: " + savedfirst + " " + savedlast + " Your age " + savedage + " and  " + choices;
        document.getElementById("Basicinfo").style.display="none"
    } else {
        alert("Enter your saved info");
    }
}

function bmicalc() {
	var height = document.getElementById("HieghtTXT").value;
	var height2 = document.getElementById("HieghtTXT2").value;
	var weight = parseFloat(document.getElementById("WeightTXT").value);

	if (height !== "" && height2 !== "") {
    // Convert height(feet) to inches
    	 totalHeightInInches = parseInt(height) * 12 + parseInt(height2);

    // Calculate BMI in American Imperial system
    	var BMI = (weight / (totalHeightInInches * totalHeightInInches)) * 703;

    	document.getElementById("ResultBMI").innerHTML= "Your BMI is: " + BMI.toFixed(2);
} else {
    alert("Please enter valid height values.");
}
}

function final()
{
	var appointmentchoices=document.getElementById("placecmb").value;
	var time=document.getElementById("TimeTxt").value;
	var Medicine=document.getElementById("Medicinetxt").value;
	var Emergency=document.getElementById("Emergencytxt").value;
	var BMI=document.getElementById("ResultBMI").innerHTML;
	var waterResult = document.getElementById("WaterResultlbl").innerHTML;
	if(appointmentchoices=="Check up")
	{
		document.getElementById("Basicinfo").style.display="none";
		document.getElementById("BMI").style.display="none";
		document.getElementById("Appointments").style.display="none";
		document.getElementById("Appointments2").style.display="none";
		document.getElementById("waterCalc").style.display="none";
		document.getElementById("final").style.display="block";
		document.getElementById("Finallbl").innerHTML="Your final choices; Check up time: " + time + " and  " + BMI + " and "+ waterResult;
	}
	else if(appointmentchoices=="Medicine pick up")
	{
		document.getElementById("Basicinfo").style.display="none";
		document.getElementById("BMI").style.display="none";
		document.getElementById("Appointments").style.display="none";
		document.getElementById("Appointments2").style.display="none";
		document.getElementById("waterCalc").style.display="none";
		document.getElementById("final").style.display="block";
		document.getElementById("Finallbl").innerHTML="Your final choices; medicine pick up : " + Medicine;
	}
	else if(appointmentchoices=="Emergency")
	{
		document.getElementById("Basicinfo").style.display="none";
		document.getElementById("BMI").style.display="none";
		document.getElementById("Appointments").style.display="none";
		document.getElementById("Appointments2").style.display="none";
		document.getElementById("waterCalc").style.display="none";
		document.getElementById("final").style.display="block";
		document.getElementById("Finallbl").innerHTML="Your final choices; Emergency: " + Emergency;
	}
}

function final2()
{
	var appointmentchoices=document.getElementById("placecmb2").value;
	var time=document.getElementById("TimeTxt2").value;
	var Medicine=document.getElementById("Medicinetxt2").value;
	var Emergency=document.getElementById("Emergencytxt2").value;
	var BMI=document.getElementById("ResultBMI").innerHTML;
	var waterResult = document.getElementById("WaterResultlbl").innerHTML;
	if(appointmentchoices=="Check up")
	{
		document.getElementById("Basicinfo").style.display="none";
		document.getElementById("BMI").style.display="none";
		document.getElementById("Appointments").style.display="none";
		document.getElementById("Appointments2").style.display="none";
		document.getElementById("waterCalc").style.display="none";
		document.getElementById("final").style.display="block";
		document.getElementById("Finallbl").innerHTML="Your final choices; Check up time: " + time + " and  " + BMI + " and " + waterResult;
	}
	else if(appointmentchoices=="Medicine pick up")
	{
		document.getElementById("Basicinfo").style.display="none";
		document.getElementById("BMI").style.display="none";
		document.getElementById("Appointments").style.display="none";
		document.getElementById("Appointments2").style.display="none";
		document.getElementById("waterCalc").style.display="none";
		document.getElementById("final").style.display="block";
		document.getElementById("Finallbl").innerHTML="Your final choices; medicine pick up : " + Medicine;
	}
	else if(appointmentchoices=="Emergency")
	{
		document.getElementById("Basicinfo").style.display="none";
		document.getElementById("BMI").style.display="none";
		document.getElementById("Appointments").style.display="none";
		document.getElementById("Appointments2").style.display="none";
		document.getElementById("waterCalc").style.display="none";
		document.getElementById("final").style.display="block";
		document.getElementById("Finallbl").innerHTML="Your final choices; Emergency: " + Emergency;
	}
}

function refresh()
{
		document.getElementById("Basicinfo").style.display="block";
		document.getElementById("BMI").style.display="none";
		document.getElementById("Appointments").style.display="none";
		document.getElementById("Appointments2").style.display="none";
		document.getElementById("waterCalc").style.display="none";
		document.getElementById("final").style.display="none";
}

function waterresults()
{
	var waterinfo = parseInt(document.getElementById("WaterWeightTXT").value);
	var waterResult = document.getElementById("WaterResultlbl");

	switch (true) {
    	case (waterinfo <= 135):
        waterResult.innerHTML = "You should drink at least: 64-96 ounces (8-12 cups) of water per day.";
        break;
    	case (waterinfo <= 147):
        waterResult.innerHTML = "You should drink at least: 72-104 ounces (9-13 cups) of water per day.";
        break;
    	case (waterinfo <= 160):
        waterResult.innerHTML = "You should drink at least: 80-112 ounces (10-14 cups) of water per day.";
        break;
    	case (waterinfo <= 175):
        waterResult.innerHTML = "You should drink at least: 88-120 ounces (11-15 cups) of water per day.";
        break;
    default:
        waterResult.innerHTML = "You should drink at least: 96-128 ounces (12-16 cups) of water per day.";
        break;
}

}

function Mainpage()
{
	document.getElementById("mainpage").onclick=window.location.assign("file:///C:/Users/alial/eclipse-workspace/Multipurpose%20Project/public/index.html");
}