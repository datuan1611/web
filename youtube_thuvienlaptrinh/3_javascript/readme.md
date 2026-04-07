# 1. Introduction
**Define**
```text
Javascript: is type of client script, added into HTML to handle information
- execution is implemented in device of user (client)
- handling information: add/modify/delete HTML element, calculate/handle event from mouse/keyboard...
```

**Add into HTML**
```text
(1) Add in HTML tag
	<script type="text/javascript">...</scrip>
(2) Add in Javascript file *.js, then insert into HTML
	<script type="text/javascript" src="./script.js"></script>
(3) Add in event distribute
```

**OUTPUT funcitons**
```text
console.log("message");		->	print message in console screen
alert("message");			->	pop-up a windows to display message
document.write("message");	->	add "message" a location where this function is called
```

```html
<!DOCTYPE html>
<html>
	<head>
		<title>This is my website</title>
		<link rel="stylesheet" type="text/css" href="./style.css" />
		<script type="text/javascript" src="./script.js"></script>
	</head>
	<script type="text/javascript">
		alert("Welcome to my website!!!");
		console.log("Hello! This is my first website!");
	</script>
	<body>
		<div id="banner">
			<!--- example for using document.write()
			<p>Hello world!!!</p>
			--->
			<script type="text/javascript">
				document.write('<p>Hello world!!!</p>');
			</script>
		</div>
	</body>
</html>
```

# 2. Statement, Variable, Comment amd Operator
**Statement**
```text
Javascript is script language
Statement is ended by ";"
Block of statement is bounded by "{}"
```

**Variable**
```text
Variable is used to store value

Formular of Declaration:
	var var_name;
	var var_name = "Hello World!"
	alert(var_name);

Rule of var_name:
	- unique in scope of using
	- differrent between uppercase and lowercase
	- is begined with character, "_" or "$"
```

**Comment**
```text
method 1: line of comment
	// <content of comment>
method 2: block of comment
	/*
	<content of comment>
	*/
```

**Type of Variable**
```text
3 basic type: boolean, number, string and object
identifying type of variable is automatic
```

**Operator**
```text
Basic operator:
	=
	+
	-
	*
	/
	%
	++
	--

Combination operator
	+=
	-=
	*=
	/=
	%=

String operator
	+
	+=

Operation between number and string
	number + string = string
	string + number = string
```

# 3. IF Statement (Condition)
```text
type of data: boolean
-> value
	true
	false

condition operator
	<		smaller
	>		greater
	<=		smaller or equal
	>=		greater or equal
	==		equal (same in value)
	!		reverse: true <-> false
	===		equal (same in value and data type)
	!=		different in value
	!===	different in value and data type

condition combination
	&&		AND
	||		OR
```
**IF Statement**
```text
IF (condition) {
	statement_OK;
} ELSE {
	statment_NG;
}
```

```javascript
var a=5;
var b=6;
var c=4;

var _max=a;

if (_max < b) {
	_max = b;
	if (_max < c) {
		_max = c;
	}
} else {
	if (_max < c) {
		_max = c;
	}
}
alert(_max);
```

# 4. FOR and WHILE Statement (Loop)
```text
LOOP	->	statement or block is repeated with particular times
			formular: FOR / WHILE / EACH
```

**For Statement**
```text
FOR (statement_1; condition; statement_2) {
	statement_is_loop;
}
---
statement_1	:	run once, in beginning
condition	:	loop is continue until this condition is true
statement_2	:	run whenever statement_is_loop is done
```
```javascript
/// Calculate sum of all number from 1 to 100
var i;
var sum = 0;

for (i=1; i<=100; i++) {
	sum += i;
}
alert(sum);
```

**While**
```text
WHILE (condition) {
	statement_is_loop;
}
---
DO {
	statement_is_loop
} WHILE (condition);
---
<i>Note:</i>
Do_While differ with While:
	(1) ending with ";"
	(2) always run least once
```

**Break**
```text
WHILE (condition) {
	statement_1;
	BREAK;	//end immediately
	statement_2;
}
WHILE (condition) {
	statement_1;
	CONTINUE;	//skip to next loop
	statement_2;
}
```

# 5. SWITCH-CASE structure
```text
SWITCH (var) {
	case value_1: {statement_1; break;}
	case value_2: {statement_2; break;}
	case value_3: {statement_3; break;}
	case value_4: {statement_4; break;}
	default: {statement_5; break;}
}
```
```javascript
var i = 15;
switch (i) {
	case 1: {
		i += 10;
		break;
	}
	case 10: {
		i += 20;
		break;
	}
	default: {
		i += 30;
		break;
	}
}
alert(i);
```
**OR in Switch-Case**
```text
SWITCH (var) {
	case value_1:
	case value_2: {statement_12; break;}
	case value_3: {statement_3; break;}
	case value_4: {statement_4; break;}
	default: {statement_5; break;}
}
```
```javascript
var i = 1;
switch (i) {
	case 1:
	case 10: {
		i += 20; 	// i = 21
		break;
	}
	default: {
		i += 30;
		break;
	}
}
alert(i);
```
**OR in Switch-Case**
```text
SWITCH (var) {
	case value_1: {statement_1;}
	case value_2: {statement_2; break;}
	case value_3: {statement_3; break;}
	case value_4: {statement_4; break;}
	default: {statement_5; break;}
}
```
```javascript
var i = 1;
switch (i) {
	case 1: {
		i++;		// i = 2
	}
	case 10: {
		i += 20;	// i = 22
		break;
	}
	default: {
		i += 30;
		break;
	}
}
alert(i);
```

# 6. FUNCTION
**No Param , No Return**
```text
function func_name() {
	//statements;
}
func_name();
```
```javascript
function hello() {
	alert("Hello World!");
}
hello();  
```
*func_name: beginning with character / symbol "_" / symbol "$"*

**Yes Param , No Return**
```text
function func_name(param1,param2) {
	//statements;
}
func_name(value1,value2);
```
```javascript
function sum2num(a,b) {
	var sum = a + b;
	alert(sum);
}
sum2num(5,10);
```

**Yes Param , Yes Return**
```text
function func_name(param1,param2) {
	//statements calc(param1,param2) ==> ret;
	return ret;
}
func_name(value1,value2);
```
```javascript
function sum2num(a,b) {
	var sum = a + b;
	return sum;
}
var _sum = sum2num(5,17);
alert(_sum);
```

# 7. Exception, Debug, Error Controller
**Try-Catch**
```text
Javascript is script language.
If a bug occurs, program is stop at line of error coding, nest source code will not implement
Javascrip Engine will stop, warning error in console screen

Error Controller is method to prohit Javascipt Engine auto behaves by itself
We control Engine how to behave to error, as long as program still continue running

Formular:
try {
	//source code can be occured error
} catch(e) {
	//source code will implement to behave error
	alert(e.message);	//notify message of error
} finally {
	//source code always run though error occurs or not
}
```
```javascript
function divide2num(num1,num2) {
	var ret = num1 / num2;
	return ret;
}
try {
	var ret = divide2num(15,0);
	alert(ret);
} catch(e) {
	alert(e.message)
}
```

**Throw**
```text
Create new error
	sometimes, we need to define new error by using THROW
	after that, program will stop if new error is not handled by TRY-CATCH

Formular
	//create new error with info is string
	throw "Input is wrong type!";
	//create new error with info is number
	throw 500;
```

# 8. Array
```text
Array is used to save a number of values
Fomular:
	#define array:
		var moto = ["Wave","Yamaha","Suzuki"];
		var arr = ["library",15,100,"website"];
			-> values in array can be different types.
	#access value of array:
		var x = moto[2];	//Suzuki
		var y = arr[0];		//library
			-> index of array is started from "0"
	#declare array, then define each its value
		var moto = new Array();
		moto[0] = "Yamaha";
		moto[1] = "Suzuki";
			-> can add new value into array, not fixed size of array
	##declare array with index is string (not number)
		var moto = new Array();
		moto["key_1"] = "Yamaha";
		moto["key_2"] = "Suzuki";
```

# 9. Global / Local Variables
```text
Local Variables:
	- is declared and used inside a function/method
	- only existing inside scope of function/method
	- 2 kind of local variables:
		. declared variable: is used to process logic inside function
		. parameter variable: is passed value when calling function

Global Variables:
	- is declared outside all of function/method, is using everywhere after declaration
	- is existing in all scope of programme
```

# 10. String Data
**String**
```text
string data is bounded by "" or ''
can use both "" and '' to display quote in string
	var my_str = "This is a new 'backdoor' in our system";

special symbol
	\'		->	'
	\"		->	"
	\\		->	\
	\t		->	Tab
	\r\n	->	break line
```

**Method for analyze String**
```text
pre-condition: "Str" is a string data
method:
	Str.length					->	(attribute) number of characters or Str
	Str.indexOf(Str2)			->	position of first Str2 that is found inside Str
	Str.lastIndexOf(Str2)		->	position of last Str2 that is found inside Str
	Str.search(Str2)			->	similar to indexOf(), but can be used with "regular expression"
	Str.slide(start,end)		->	generate child string from start to end of parent string Str
	Str.substring(start,end)	->	generate child string from start to end of parent string Str
	Str.substr(start,length)	->	generate child string from start of parent string Str, with length characters
```

**Method for handle String**
```text
pre-condition: "Str" is a string data
method:
	Str.replace(Str2,Str3)		->	replace first Str2 in Str to Str3
	Str.toUpperCase()			->	change to UPPER_CASE all of Str
	Str.toLowerCase()			->	change to lower_case all of Str
	Str.concat(Str2,Str3)		->	combine string Str+Str2+Str3
	Str.charAt(index)			->	get character at position index of Str
	Str.charCodeAt(index)		->	get unicode of character at position index of Str
	Str[index]					->	(assume Str as an array) get character at position index of Str (read_only)
	Str.split(Str2)				->	separate Str to various child strings by Str2, return an array of strings
```

# 11. Number Data
**Number**
```text
data is declared with number digit
	if don't using '.' => integer unmber
	if  using '.' => float number
example:
	var num_x = 1505;	//integer
	var num_y = 15.8;	//float
Note:
	maximum 17 digits after float symbol '.'
```

**Method change Number to String**
```text
pre-condition: "No" is a number data
method:
	No.toString()		->	change type from number to string
	No.toFixed(N)		->	round value of number, with N digits after float symbol '.'
								var x = 125.66;
								var y = x.toFixed(1);		//y := 125.7
	No.toPrecision(N)	->	round value of number, with N digits after float symbol '.' (if N==0, not round)
							then change type from number to string
								var x = 125.66;
								var y = x.toPrecision();	//y := "125.66"
								var z = x.toPrecision(1);	//z := "125.7"

```

**Method change String to Number**
```text
Number(data): is a global function, is used to change data to number
	Number(true);			-> return 1
	Number(false);			-> return 2
	Number("10");			-> return 10
	Number("10.5");			-> return 10.5
	Number("10 15");		-> return NaN (Not a Number)

parseInt(Str): is a global function, is used to change string to integer number
	parseInt("10");			-> return 10
	parseInt("10.66");		-> return 10
	parseInt("10 20 30");	-> return 10
	parseInt("5 years");	-> return 5
	parseInt("June 5");		-> return NaN (Not a Number)

parseInt(Str): is a global function, is used to change string to float number
	parseInt("10");			-> return 10
	parseInt("10.66");		-> return 10.66
	parseInt("10 20 30");	-> return 10
	parseInt("5.5 years");	-> return 5.5
	parseInt("From 5.5");	-> return NaN
```

# 12. Math Object with Function
**Properties of Math**
```
	Math.PI
	Math.E
	Math.SQRT2
	Math.SQRT1_2
	Math.LN2
	Math.LN10
	Math.LOG2E
	Math.LOG10E
```
**Math Function for Angles**
```
	Math.sin(x)
	Math.cos(x)
	Math.tan(x)
	Math.log(x)
	Math.abs(x)
	Math.asin(x)
	Math.acos(x)
	Math.atan(x)
	Math.atan2(x,y)
```
**Math Function for Numbers**
```
	Math.ceil(x)
	Math.floor(x)
	Math.exp(x)
	Math.pow(x,y)
	Math.random()
	Math.round(x)
	Math.sqrt(x)
```
**Math Function for List**
```
	Math.max(x1,x2...,xn)
	Math.min(x1,x2...,xn)
```

# 13. Time Data
**Date DataType**
```text
Date: is used for time data as: Day, Month, Year, Hour, Minute, Second, Mini Second

Formular:
	var date_1 = new Date();				//get current data
	var date_2 = new Date(miniseconds);		//get total miniseconds from 1/1/1970
	var date_3 = new Date(DateString);		//sample: October 13, 2014 11:13:20
	var date_4 = new Date(year,month,day,hour,minute,second,minisecond);

Format of Date:
	ISO standard (international)	->	"2027-12-25"
	ShortDate standard				->	"12/25/2017"
	LongDate standard				->	"Dec 25 2017" or "25 Dec 2017"
	FullDate standard				->	"Monday December 25 2017"
```

**Date Method**
```text
	.getDate()				->	get date of month (1-31)
	.getDay()				->	get date of week (0-6), according to (Sunday - Saturday)
	.getMonth()				->	get month (0-11), according to (Jan - Dec)
	.getFullYear()			->	get year
	.getHours()				->	get hour (0-23)
	.getMinutes()			->	get minute (0-59)
	.getSeconds()			->	get second (0-59)
	.getMiniseconds()		->	get second (0-999)

	.getUTCDate()			->	get date of UTC timezone
	.getUTCDay()			->	get day of UTC timezone
	.getUTCMonth()			->	get month of UTC timezone
	.getUTCFullYear()		->	get year of UTC timezone
	.getUTCHours()			->	get hour of UTC timezone
	.getUTCMinutes()		->	get minute of UTC timezone
	.getUTCSeconds()		->	get second of UTC timezone
	.getUTCMiniseconds()	->	get minisecond of UTC timezone

	.setDate(n)				->	set date of month to "n"
	.setDay(n)				->	set date of week to "n"
	.setMonth(n)			->	set month to "n"
	.setFullYear(n)			->	set year to "n"
	.setHours(n)			->	set hour to "n"
	.setMinutes(n)			->	set minute to "n"
	.setSeconds(n)			->	set second to "n"
	.setMiniseconds(n)		->	set second to "n"

	.setUTCDate()			->	set date of UTC timezone
	.setUTCDay()			->	set day of UTC timezone
	.setUTCMonth()			->	set month of UTC timezone
	.setUTCFullYear()		->	set year of UTC timezone
	.setUTCHours()			->	set hour of UTC timezone
	.setUTCMinutes()		->	set minute of UTC timezone
	.setUTCSeconds()		->	set second of UTC timezone
	.setUTCMiniseconds()	->	set minisecond of UTC timezone


	.getTime()				->	similar to "new Date()"
	.getTimezoneOffset()	->	get minutes differ between UTC timezone and local timezone
	.Date.now()				->	similar to "new Date()"
	.Date.parse(DateString)	->	similar to "new Date(DateString)"
```

# 14. JS with DOM of HTML
**DOM of HTML**
```text
DOM (Document Object Model)
	is model using to manage tags of HTML

						 Document
							|
						Root element:
						  <html>
							|
	-------------------------------------------------
 	|												|
 Element:										Element:
  <head>										 <body>
  	|									------------|------------
	|									|						|
 Element:			Attribute ------ Element:				 Element:
  <title>			  "href"		   <a>					  <h1>
	|									|						|
  Text:								  Text:					  Text:
"My title"							"My link"				"My header"
```

**JS with DOM**
```text
Content:
	1. JS DOM SELECTOR			->	identify one/several object in DOM
	2. JS DOM CONTENT			->	handle with content of object in DOM
	3. JS DOM ATTRIBUTES		->	handle with attributes of object in DOM
	4. JS DOM CSS				->	handle with stype of object in DOM
	5. JS DOM FORM VALUE		->	handle with data of object in DOM for FORM
```

**No1. JS DOM SELECTOR**
```text
Some method to identify particular object of HTML tag
	var obj		= document.getElementById("id-of-html-tag");		// get only 1 obj
	var objS	= document.getElementByTagName("p");				// get array of objs for tag <p>
	var objS	= document.getElementByClassName("class-name");		// get array of objs for tag with "class-name"
	var obj		= document.querySelector("CSS-Selector");			// get only 1 obj (return only 1st element of CSS-Selector)
	var objS	= document.querySelectorAll("CSS-Selector");		// get array of objs (return all elements of CSS-Selector)
```

**No2. JS DOM CONTENT**
```text
READING
	var html_content_1 = obj.innerHTML;
		//innerHTML return content inside <tag> HTML
		//example: <b>This is content</b> => innerHTML return "This is content"
	var html_content_1 = obj.outerHTML;
		//outerHTML return both content and name-tag of <tag> HTML
		//example: <b>This is content</b> => outerHTML return "<b>This is content</b>"

WRITING
	obj.innerHTML = "This is NEW content";
		//content inside <tag> HTML be changed
	obj.outerHTML = "<p>This is NEW content</p>";
		//both content and name-tag of <tag> HTML be changed
```
```html
<!DOCTYPE html>
<html>
	<head>
		<title>This is my website</title>
		<link rel="stylesheet" type="text/css" href="./style.css" />
		<script type="text/javascript" src="./script.js"></script>
	</head>
	<body>
		<p id="p1">
			This is content of paragraph P1.
		</p>
		<p id="p2" class="paragraph">
			This is content of paragraph P2.
		</p>
	</body>
</html>
```
```javascript
var obj = document.querySelector("#p2.paragraph");
var content = obj.innerHTML;
alert(content);

obj.innerHTML = "THIS IS NEW CONTENT";
```

**No3. JS DOM ATTRIBUTES**
```text
READING
	var html_attribute_1 = obj.getAttribute("name-attribute");
		//getAttribute return value of attribute of obj
		//example: <p class="paragraph">This is content</p> => obj.getAttribute("class") return "paragraph"

WRITING
	obj.setAttribute("name-attribute","new-value");
		//value of attribute of obj be changed to new value
		//example: <p class="old-para">This is content</p> => obj.setAttribute("class","new-para") change "old-para" to "new-para"
		//result: <p class="old-para">This is content</p>
```

**No4. JS DOM CSS**
```text
UNDERSTANDING
	CSS is standard as attribute of style, that makes accessing CSS easier, but must remember many name of attributes
	Maybe search name of JS_DOM_CSS like that:
		"javascript style css background image"	-> result: "backgroundImage"
	example:
		background-color		->	obj.style.backgroundColor
								->	handle only background-color of obj

READING
	var css_value = obj.style.NAME_JS_DOM_CSS;
		//style: attribute that include all of JS DOM CSS
		//NAME_JS_DOM_CSS: must be written exactly
		//return: string format

WRITING
	obj.style.NAME_JS_DOM_CSS = "New_Value";
```

**No5. JS DOM FORM VALUE**
```text
this method is used to read/write value of tags inside FORM

READING
	var my_value = obj.value;
		//obj is tag of input/select/any tag with attribute "value"
		//if obj is tag select, value is option selected
		//return: string format

WRITING
	obj.value = "New_Value";
		//this should be only applied for tag input type text
```

# 15. OPP in JS
```text
Definition of Object
	->	is description about object, property and method of object
Object
	->	instance that is generated from definition of object

Formular:
1.Define object
	function Name_Of_Definition( para_1, para_2 ) {
		this.Property_1 = para_1;
		this.Property_2 = para_2;
		this.Method_1 = function() {
			//source code of Method_1
		}
		this.Method_2 = function() {
			return 100;
		}
	}
2.Generate object
	var obj_1 = new Name_Of_Definition( "value 1", 15 );
	var pro_1 = obj_1.Property_1;	//"value 1"
	var pro_2 = obj_1.Property_2;	//15
	obj_1.Method_1();
	var abc = obj_1.Method_2();		//100
```
```javascript
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
```

# 16. EVENT in JS
```text
HTML Event
	->	is events happening with HTML document: load website, click mouse, type keyboard, close website...
	->	JS is integrated in HTML document, can catch and handle Event, make HTML document like as "Application Interface"

Operation
	1. Event Listener	->	observe, watch and catch event if event happens
	2. Event Fire		->	when event happens
	3. Event Handler	->	run function if event happens

		EVENT			EVENT FIRE		EVENT
		LISTENER	---------------->	HANDLER

Implement
	1. Declare Event Handler to run function when Event Fire
	2. Declare Event Listener to observe, listen event; then link to Event Handler

3 following method to declare event listener and event handler:
	<element EventName="HandlerFunction()"/>		->	in "..." is calling normal function
	obj.EventName = HandlerFunction;				->	after "=" is name of function, without "()"
	obj.EventName = function() {}					->	write directly new function at position assigning to event listener (not be recommended)

Some popular event:
	onClick
	ondblclick
	onmousedown
	onmouseup
	onmouseover
	onmouseout
	onkeypress
	onkeydown
	onkeyup
	onchange
	onload
```

# 17. JSON in JS
```text
Background
	data syntax is used to transfer between different technology environment
	XML become to be to large and make data size too big
	need new data syntax

JSON (Javascript Object Notation)
	syntax to define how to description data in a huge string
	{ "Name_Property_01":Value }

Sample
	{
		"Name":"Tom Smith",
		"Age":30
	}
	OR:
	{ "Name":"Tom Smith", "Age":30 }

Value in JSON
	string			->	"Name":"Tom Smith",
	number			->	"Age":30,
	array			->	"info":[ "Tom Smith", 30 ],
	json			->	"data":{ "Name":"Tom Smith","Age":30 },

Handle with JSON
	JSON String		->	data based on JSON syntax
	JSON Object		->	object generated from JSON string

	var JSON_str = '{ "Name":"Tom Smith","Age":30 }';		//Define a JSON String
	var JSON_obj = JSON.parse(JSON_str);					//Generate JSON Object from JSON String
	alert(JSON_obj.Name);
	JSON_obj.Name = "Tom Hank";
	var JSON_str_new = JSON.stringify(JSON_obj);			//Generate new JSON String from JSON Object
```

# 18. AJAX in JS
**AJAX**
```text
AJAX (Asynchronous Javascript And XML)
	is technology used to combine 2 bellow element
	1 - system "XMLHttpRequest": is integrated in browser to send request and receive response silently
	2 - Javascript and HTML DOM: is used to display/handle data that is received from server by AJAX

Example:
	in Facebook, website only loads a part, doesn't load all of data
	it makes feeling that website load fastly

Explaination
	with normal request:
		enter URL in browser
		>> send request to server
		>> server handle and reply response to browser (client)
		>> browser handle data from response, and display in UI
	with AJAX request:
		enter URL in browser
		>> send request to server silently, not impact data displaying
		>> server handle and reply response (TEXT format) to browser (client)
		>> AJAX allow using JS to handle dats from response, impact to HTML DOM, change displaying in UI

								(2)
				-------------------------------------
				|									v
		XMLHttpRequest <------------------------ SERVER
		(1)	|	|(4)			(3)
			v	v
		Declare EventListener
		to wait Response
				|(5)
				v
		Handler Response
```
```javascript
//declare object
var xhr = new XMLHttpRequest();

//config info of Request
xhr.open("GET","http://hostname.com",true);
	//GET			-> type of request
	//hostname.com	-> URL of website
	//true			-> sync data

//config EventListener
xhr.onreadystatechange = function() {	//onreadystatechange change many times when connecting to server
	//check TRUE states
	if( xhr.readyState == 4 && xhr.status == 200 ) {	//readyState and status used to identy request
		//receive data from server and handle
		var data = xhr.responseText;					//responseText
	}
}

//start send request
xhr.send();
```

**#1. Syntax of AJAX Request**
```javascript
//declaration object of XMLHttpRequest
var xhr = new XMLHttpRequest();

//create form data (if neccessary)
var form_data = new FormData();

//using method ".append(key,value)" to add name+value of property
form_data.append("username","Tom Hank");
form_data.append("password","123456");
```

**#2. Handle timeout waiting Response**
```javascript
//identify maximum of duration to waiting Response (unit: minisecond)
xhr.timeout = 30000;

//config EventListener to handle when timeout
xhr.ontimeout = function() {
	//source code running if timeout
}
```

**#3. Handle Request Header**
```javascript
//using following API to modify data of Request Header
xhr.setRequestHeader("Key","Value");

//example
xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
xhr.setRequestHeader("My-Key","My-Value");
```

**#4. Identify URL to send Request**
```text
xhr.open("TYPE","URL",Asyn);
	where:
	- TYPE			GET or POST
	- URL			url address that will send request
	- Asyn			true (Asynchronous) or false (Synchronous)

Synchronous		->	JS will wait Response to continue running
Asynchronous	->	after send Request, JS continue running without wait Response
```

**#5. Handle Response**
```text
When AJAX receive Response from server, new event is "onreadystatechange"
We can create new Event Handle to handle this event

example:
	xhr.onreadytextchange = function() {
		if (xhr.readyState == 4 && xhr.status == 6) {
			var ret = xhr.responseText;
		}
	}

value of "xhr.readyState" (HTTP Status Message) is divide in 5 group
	1 - Information: 100,101,103
	2 - Success: 200 -> 206
	3 - Redirection: 300 -> 308
	4 - Client Error: 400 -> 403, 404 -> 417
	5 - Server Error: 500 -> 505, 511
```

**#6. Start sending Request**
```javascript
//after configing all of element (data and handlers), using "send()" to start sending Request

//sending Request without data
xhr.send();

//sending Request with form data
var form_data = new FormData();
form_data.append("username","Tom Hank");
form_data.append("password","123456");
xhr.send(form_data);

//sending Request with data based on syntax "key=value", and continue by "&"
xhr.send("key_1=value_1&key_1=value_2&key_3=value_3);
```