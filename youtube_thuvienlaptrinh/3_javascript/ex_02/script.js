/* JS DOM CONTENT

// var obj = document.getElementById("p1");
// var content = obj.innerHTML;

// var objS = document.getElementsByTagName("p");
// var content = objS[1].innerHTML;

var obj = document.querySelector("#p2.paragraph");
var content = obj.innerHTML;
alert(content);

obj.innerHTML = "THIS IS NEW CONTENT";
*/

/* JS DOM ATTRIBUTES
var obj = document.getElementById("p1");
obj.setAttribute("class","NewCss");
obj.setAttribute("data-x","25.65");
*/

/* JS DOM CSS
var obj = document.getElementById("p1");
// obj.setAttribute("style","background-color:red");
obj.style.backgroundColor = "yellow";
*/

/* JS DOM FORM VALUE
function StartCalculate() {
	var objA = document.getElementById("txtA");
	var aStr = objA.value;
	// var a = pareInt(aStr);

	var a = parseInt(document.getElementById("txtA").value)
	var b = parseInt(document.getElementById("txtB").value)
	var a = parseInt(document.getElementById("txtC").value)

	alert(a);
	alert(b);
	alert(c);
}
*/

/* OOP in JS
function PhepTinh( No1, No2 ) {
	this.A = No1;
	this.B = No2;
	this.CongAB = function() {return this.A + this.B;}
	this.TruAB = function() {return this.A - this.B;}
	this.TruBA = function() {return this.B - this.A;}
	this.NhanAB = function() {return this.A * this.B;}
	this.ChiaAB = function() {return this.A / this.B;}
	this.ChiaBA = function() {return this.B / this.A;}
}

var obj = new PhepTinh( 15,10 );
var KetQuaCong = obj.CongAB();
alert(KetQuaCong);

//=====================

function Student( _name, _age, _class ) {
	this.NAME = _name;
	this.AGE = _age;
	this.CLASS = _class;
	this.FULL_INFO = function() {
		return this.NAME + ', ' + this.AGE + ' years old, in' + this.CLASS;
	}
}

var tomson = new Student("Tom Son", 17, "12A7");
var karrykate = new Student("Karry Kate", 16, "11A2");

alert(tomson.FULL_INFO());
alert(karrykate.FULL_INFO());

//=====================

function TruongPhong( name, age ) {
	this.NAME = name;
	this.AGE = age;
	this.HELLO = function() {
		alert("Chao Sep!!!");
	}
}

function GiamDoc( name, age ) {
	this.NAME = name;
	this.AGE = age;
	this.TRUONG_PHONG_KY_THUAT = new TruongPhong( "Nguyen Van Le", 30 );
}

var GD = new GiamDoc("Nguyen Van Sep", 42);
GD.TRUONG_PHONG_KY_THUAT.HELLO();
*/
