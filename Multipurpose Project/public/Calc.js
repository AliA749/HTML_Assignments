window.addEventListener("load",AddListeners);

var Equation;
Equation = 0
var IP1;
IP1 = ""
var IP2;
IP2 = ""
var Sign;
Sign = ""
var Process;

	
function AddListeners()
{
	Keys();
	document.getElementById("btn1").addEventListener("click", One);
	document.getElementById("btn2").addEventListener("click", Two);
	document.getElementById("btn3").addEventListener("click", Three);
	document.getElementById("btn4").addEventListener("click", Four);
	document.getElementById("btn5").addEventListener("click", Five);
	document.getElementById("btn6").addEventListener("click", Six);
	document.getElementById("btn7").addEventListener("click", Seven);
	document.getElementById("btn8").addEventListener("click", Eight);
	document.getElementById("btn9").addEventListener("click", Nine);
	document.getElementById("btn0").addEventListener("click", Zero);
	document.getElementById("btnMult").addEventListener("click", Multiply);
	document.getElementById("btnDiv").addEventListener("click", Divide);
	document.getElementById("btnSub").addEventListener("click", Minus);
	document.getElementById("btnAdd").addEventListener("click", Add);
	document.getElementById("btnDec").addEventListener("click", Decimal);
	document.getElementById("btnNeg").addEventListener("click", Negative);
	document.getElementById("btnP").addEventListener("click", Percent);	
	document.getElementById("btnexpo").addEventListener("click", Exponent);
	document.getElementById("btnSqroot").addEventListener("click", Squareroot);		
	document.getElementById("btnC").addEventListener("click", Clear);
	document.getElementById("btnEqu").addEventListener("click", Result);
	document.getElementById("mainpage").addEventListener("click",mainpage);															
}

function Keys()
{
	if (event.key == 1){One()}
	if (event.key == 2){Two()}
	if (event.key == 3){Three()}
	if (event.key == 4){Four()}
	if (event.key == 5){Five()}
	if (event.key == 6){Six()}
	if (event.key == 7){Seven()}
	if (event.key == 8){Eight()}
	if (event.key == 9){Nine()}
	if (event.key == 0){Zero()}
	
}

function Clear()
{
	Process = ""
	IP1 = ""
	IP2 = ""
	Sign = ""
	InBr = ""
	Change()
}

function One()
{
	IP2 = IP2 + "1";
	Change()
}

function Two()
{
	IP2 = IP2 + "2";
	Change()
}

function Three()
{
	IP2 = IP2 + "3";
	Change()
}

function Four()
{
	IP2 = IP2 + "4";
	Change()
}

function Five()
{
	IP2 = IP2 + "5";
	Change()
}

function Six()
{
	IP2 = IP2 + "6";
	Change()
}

function Seven()
{
	IP2 = IP2 + "7";
	Change()
}

function Eight()
{
	IP2 = IP2 + "8";
	Change()
}

function Nine()
{
	IP2 = IP2 + "9";
	Change()
}
function Zero()
{
	IP2 = IP2 + "0";
	Change()
}

function Add()
{
	if (Sign > "" && IP1 > "" || Process > "")
		Result()
	else
	IP1 = IP2
	IP2 = ""
	Sign = "+"
	Change()
}

function Minus()
{
	if (Sign > "" && IP2 > "" || Process > "")
		Result()
	else
	IP1 = IP2
	IP2 = ""
	Sign = "-"
	Change()
}

function Multiply()
{
	if (Sign > "" && IP1 > "" || Process > "")
		Result()
	else
	IP1 = IP2
	IP2 = ""
	Sign = "x"
	Change()	
}

function Divide()
{
	if (Sign > "" && IP1 > "" || Process > "")
		Result()
	else
		IP1 = IP2
		IP2 = ""
		Sign = "/"
		Change()
}

function Negative()
{
	if (IP2.includes("-") == true)
		IP2 = IP2.replace("-","")
	else
		IP2 =  "-" + IP2
		Change()
}

function Decimal()
{
	IP2 = IP2 + "."
	Change()
}

function Percent()
{
	IP2 = (parseInt(IP2) / 100).toString()
	Change()
}

function Exponent()
{
	IP2= (parseInt(IP2)**2);
	Change()
}

function Squareroot() {
    IP2 = IP2 ** 0.5;
    Change();
}


function Result()
{	
	Calc()
	IP1 = Process.toString()
	Sign = ""
	IP2 = ""
	Change()
}

function Change()
{
	document.getElementById("screen").innerHTML = IP1 +""+ Sign +""+ IP2 + InBr;
}

function Calc()
{
		if (Sign == "+")
			Process = parseFloat(IP1) + parseFloat(IP2)
		else if (Sign == "-")
			Process = parseFloat(IP1) - parseFloat(IP2)
		else if (Sign == "x")
			Process = parseFloat(IP1) * parseFloat(IP2)
		else if (Sign == "/")
			Process = parseFloat(IP1) / parseFloat(IP2)	
}

function mainpage()
{
	document.getElementById("mainpage").onclick=window.location.assign("file:///C:/Users/alial/eclipse-workspace/Multipurpose%20Project/public/index.html");
}