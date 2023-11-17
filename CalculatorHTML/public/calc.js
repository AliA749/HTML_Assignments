window.addEventListener("load", setupEventListener);
var p1;
p1=""
var p2;
p2=""
var process;

function setupEventListener() 
{
	Keys()
	document.getElementById("btn0").addEventListener("click", Zero);
    document.getElementById("btn1").addEventListener("click", One);
    document.getElementById("btn2").addEventListener("click", Two);
    document.getElementById("btn3").addEventListener("click", Three);
    document.getElementById("btn4").addEventListener("click", Four);
    document.getElementById("btn5").addEventListener("click", Five);
    document.getElementById("btn6").addEventListener("click", Six);
    document.getElementById("btn7").addEventListener("click", Seven);
    document.getElementById("btn8").addEventListener("click", Eight);
    document.getElementById("btn9").addEventListener("click", Nine);
    document.getElementById("btnC").addEventListener("click", Clear);
}


function Keys()
{
	if (event.key==0){Zero()}
	if (event.key==1){One()}
	if (event.key==2){Two()}
	if (event.key==3){Three()}
	if (event.key==4){Four()}
	if (event.key==5){Five()}
	if (event.key==6){Six()}
	if (event.key==7){Seven()}
	if (event.key==8){Eight()}
	if (event.key==9){Nine()}
}
function Zero() 
{
    p2=p2+"0";
    change()
}

function One() 
{
    p2=p2+"1";
    change()
}
function Two() 
{
    p2=p2+"2";
    change()
}

function Three() 
{
    p2=p2+"3";
    change()
}
function Four() 
{
    p2=p2+"4";
    change()
}
function Zero() 
{
    p2=p2+"0";
    change()
}
function Five() 
{
    p2=p2+"5";
    change()
}
function Six() 
{
    p2=p2+"6";
    change()
}

function Seven() 
{
    p2=p2+"7";
    change()
}

function Eight() 
{
    p2=p2+"8";
    change()
}

function Nine() 
{
    p2=p2+"9";
    change()
}
function Clear() 
{
    p1=""
    p2=""
    change()
}

function change()
{
	document.getElementById("screen").innerHTML=p1+""+""+p2;
}
