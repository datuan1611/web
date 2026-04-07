/* JSON in JS */

var json_str = '{ "name": "Programming Library", "age" : 2, "info" : [ 125, { "id" : "123", "message" : "Hello World!!!" }, "ABC" ] }';
var json_obj = JSON.parse(json_str);

alert(json_obj.name);

json_obj.name = "Book Library";
var json_str_new = JSON.stringify(json_obj);

alert(json_obj.name);
alert(json_obj.info[1].message);