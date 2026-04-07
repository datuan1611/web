function WelcomeWhenFinishLoad() {
	alert("Document is loaded done!!!");
}

//This function is called when HTML is loaded done
function SetupEventForDiv() {
	var obj = document.getElementById("div1");
	// obj.onclick = Div_1_Clecked;
	obj.onmouseover = Div_1_Mouse_Over;
	obj.onmouseout = Div_1_Mouse_Out;
}

//This function is call when DIV_1 is clicked
function Div_1_Clecked() {
	var obj = document.getElementById("div1");
	obj.innerHTML = (new Date()).getSeconds();
	obj.setAttribute("style","background-color:green");
}

//This function is call when DIV_1 is mouse over
function Div_1_Mouse_Over() {
	var obj = document.getElementById("div1");
	obj.innerHTML = (new Date()).getSeconds();
	obj.setAttribute("style","background-color:green");
}

//This function is call when DIV_1 is mouse out
function Div_1_Mouse_Out() {
	var obj = document.getElementById("div1");
	obj.innerHTML = "OUT";
	obj.setAttribute("style","background-color:blue");
}