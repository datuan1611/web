/* If - Else
alert("WARNING!!!");

var a=5;
var b=6;
var c=7;

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
*/

/* Loop For/While
// var i;
// var sum = 0;
// for (i=1; i<=100; i++) {
// 	sum += i;
// }

var i = 1;
var sum = 0;
// while (i <= 100) {
// 	sum += i;
// 	i++;
// }
do {
	sum += i;
	i++;
} while (i <= 100);

alert(sum);

var i = 1;
var k = 1;
while (i <= 100) {
	i++;
	if (i == 50) {
		// break;
		continue;
	}
	k++;
}
alert(k);
*/

/* Switch - Case
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
*/

/* Try - Catch - Throw

function divide2num(num1,num2) {
	if ( num1 > 10 ) {
		throw "Input is over of range value!";
	}
	var ret = num1 / num2;
	return ret;
}

// var result = divide2num(15,0);

try {
	var ret = divide2num(15,0);
	alert( "Result: " + ret );
} catch(e) {
	alert( "Error: " + e );
	// alert(e.message)
}

alert("End!!!");
*/

/* Array
// var my_arr = ["A1","A2","A3"];
// my_arr[1] = "B2";
// alert(my_arr[1]);

// var my_arr = new Array();
// my_arr[100] = "JS";
// alert(my_arr[100]);

var my_arr = new Array();
my_arr[5] = "JS";
my_arr["key_1"] = "Java";
// alert(my_arr[5]);
alert(my_arr["key_1"]);
*/

/* Global/Local Variables
var shift = 5;

function sum2num( param_1, param_2 ) {
	var ret = param_1 + param_2 + shift;
	return ret;
}

var result = sum2num(5,6);
alert(result);
*/

/* String
var Str = "Website Homepage: 'thuvienlaptrinh.edu.vn'.";

var found_index = Str.indexOf(".");
var sub_str = Str.substring(10,15);

alert(found_index);
alert(sub_str);

// var handle = Str.toUpperCase();
var handle = Str.charAt(10);
alert(handle);

var Str_Arr = Str.split(' ');
alert(Str_Arr[2]);
*/

/* Number
// var No = 125.66;

// var A = No.toString();
// var B = A + 8
// alert(B);

// var C = No.toFixed(1);
// alert(C);

var No = "55";

var A = Number(No) + 1;
alert(A);
*/

/* Date */
var now = new Date();

var month = now.getMonth();
var hour = now.getHours();

alert(month);
alert(hour);