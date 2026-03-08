# 1. Introduction
**CSS** = Cascading Style Sheets
```text
HTML -> descript how to struct data
CSS  -> descript how to display data
```

***Declaration***
```html
- write in tag: <style></style>
- write in attribute of HTML tag: style="..."
- write in file *.css, then using tag <link/> in HTML
	<link type="text/css" rel="stylesheet" href="./style.css" />
```

***Sample Code***
```css
/* style.css */
p{
	font-weight : bold;
	font-size : 20px;
}
```

```html
<!--- index.html --->
<!DOCTYPE html>
<html>
	<head>
		<title>Title of website</title>
		<link tyle="text/css" rel="stylesheet" href="style.css" />
	</head>
	<body>
		<style>
			p{
				font-weight : bold;
				font-size : 20px;
			}
		</style>
		<p stype="font-weight:bold; font-size:20px">
			Content in tag "<p>"
		</p>
	</body>
</html>
```

**Selector**
```text
How to selector
- using name of HTML tag
- using value of attribute id="..."
- using value of attribute class="..."
- combine above methods
```
```html
<!--- index.html --->
<!DOCTYPE html>
<html>
	<head>
		<title>Title of website</title>
		<link tyle="text/css" rel="stylesheet" href="style.css" />
	</head>
	<body>
		<p id="paragraph_01">Content of P1</p>
		<p id="paragraph_02">Content of P2</p>
	</body>
</html>
```

```css
/* style.css */
#paragraph_1{
	font-weight : bold;
	font-size : 20px;
	color: #d3d3d3;
}
#paragraph_2{
	font-weight : normal;
	font-size : 50px;
	color: red;
	text-decoration: underline;
}
```

**Some Attribute of CSS**
```text
font-size			px
font-weight			bold/bolder/normal/lighter
font-style			italic/normal/oblique
font-family			"Arial"
text-align			left/right/center/justify
text-decoration		underline/overline/line-through/none
color				(HEX)#d3d3d3 (TEXT)blue/red/yellow
width				px
height				px
```


# 2. Selector
| Type | Sample | Maining |
|:---|:---|:---|
| .class | .animal | choose all tags with class="animal" |
| #id | #cat | choose all tags with id="cat" |
| * | * | choose all html tags |
| html | p | choose all tags \<p\> |
| html, html | div, p, span | choose all tags \<div\>, \<p\>, \<span\> (not limit number of selector) |
| html html | div p | choose all tags \<p\> inside tag \<div\> |
| html>html | div>p | choose only tags \<p\> that is child of tag \<div\> |
| html+html | div+p | choose only tags \<p\> that is <u>immediately</u> after of tag \<div\> (*same level*) |
| html~html | div~p | choose all tags \<p\> that is after of ~~1st~~ tag \<div\> (*same level*) |
| [attribute] | [src] | choose all tags using attribute "src" |
| [attribute=value] | [src="./image.jpg"] | choose all tags using attribute "src" and value "./image.jpg" |
| [attribute~=value] | [title~="cat"] | choose all tags using attribute "title" and value including keyword "cat"<br>(*keyword must be 1 word*) |
| [attribute\|=value] | [title\|="cat"] | choose all tags using attribute "title" and value beginning keyword "cat"<br>(*keyword must be 1 word*) |
| [attribute^=value] | [href^="https://"] | choose all tags using attribute "title" and value beginning keyword "black cat"<br>(*keyword must be several words (string)*) |
| [attribute$=value] | [href$=".pdf"] | choose all tags using attribute "title" and value ending keyword ".pdf"<br>(*keyword must be several words (string)*) |
| [attribute*=value] | [href*="black-cat"] | choose all tags using attribute "title" and value includeing keyword "black-cat"<br>(*keyword must be several words (string)*) |


# 3. Three-axis Space (hint: ViewBox, Layer, Flat)
```text
HTML document originally is a viewbox
each element (tag) in HTML document is just a viewbox
every viewbox has a FLAT in bottom
elements of viewbox are put above FLAT as same as layers, and based on LINE
```

**z-index**
```text
z-index is attribute for z-axis of element in HTML
element with greater z-index is above and cover element with smaller z-index
```

**left, right, top, bottom**
```text
left - coordinate measured from left edge
right - coordinate measured from right edge
top - coordinate measured from top edge
bottom - coordinate measured from bottom edge

** only use left/right and top/bottom **
```

**position**
```text
position: is attribute to define how to display a HTML (viewbox or normal element)
- static: default value, call as "document flow", HTML tag is displayed normally like document and paper
- absolute: define as "viewbox", 2D coordination is measured from FLAT of parent viewbox
- fixed: define as "viewbox", 2D coordination is fixed in screen, as long as user scroll mouse
- relative: define as "viewbox", 2D coordination is related to its current position whenever moving
```

# 4. Background
```text
background-color		-> identify color for background of HTML tag
background-image		-> identify color for background of HTML tag
background-repeat		-> using with background-image to define how to repeat image in background
							no-repeat: not repeat
							repeat-x: repeat in x-axis
							repeat-y: repeat in y-axis
							repeat: repeat in both x-axis and y-axis (default value)
							inherit: inherit attribute from parent HTML tag
background-attachment	-> using with background-image to define how to diplay image in background
							scroll: image is scrolled following HTML tag (default value)
							fixed: image is fixed position, not scrolled following content
							local: image is scrolled following content
							inherit: inherit attribute from parent HTML tag
background-position		-> using with background-image to define how to locate image in background, with X / Y value
							px px: image is located in coordinate Xpx and Ypx
							key key: top/right/bottom/left/center
```

```css
#paragraph01 {
	width:200px;
	height:500px;
	/* background-color:#0C3; */
	background-image:url('./img/sun-system.jpg');
	background-repeat:no-repeat;
	background-attachment:fixed;
	background-position:50px 80px;
}
```

CSS3 add more attributes for background
```text
background-size			-> using with background-image to define size of image in background
							width height: define size of background image, unit is px
							contain: ensure image always display enough
							cover: ensure image always cover enough content
background-origin		-> similar to background-position, but not using particular coordination X/Y
							border-box: background image is located from border line
							padding-box: background image is located from edge line
							content-box: background image is located from beginning of content
background-clip			-> similar to background-origin, but include background color and background image
							border-box: background image is located from border line
							padding-box: background image is located from edge line
							content-box: background image is located from beginning of content
```
```css
#paragraph01 {
	width:200px;
	height:500px;
	background-color:#0C3;
	background-image:url('./img/sun-system.jpg');
	background-repeat:no-repeat;
	background-size:contain;
}
```

Write ShortHand in CSS for background
```css
background:#666 url('./bg.jpg') left top no-repeat;
```
multi background in one HTML tag
```css
background:url('./bg1.jpg') url('./bg2.jpg') url('./bg3.jpg');
background-position:left top, right top, center bottom;
```
```css
background:url('./bg1.jpg') left top, url('./bg2.jpg') right top;
```

# 5. Border
```text
border-color		-> identify color of border
						border-color:#blue;
						border-color:#666666;
border-width		-> identify width of border
						border-width:1px;
border-style		-> identify style line of border:
						dotted/dashed/solid/double/groove/ridge/inset/outset/none/hidden
						border-style:solid;
```

Write ShortHand in CSS for border
```css
border:solid #524521 2px;
```

Differ border in left/top/right/bottom edge
```text
border-left:solid blue 2px;
border-top:solid red 1px;
border-right:solid yellow 2px;
border-bottom:solid green 1px;
```

CSS3 add more attributes for border
```text
border-radius		-> round 4 corners of border
	formular:
		.4 value	-> left-top, right-top, right-bottom, left-bottom
		.3 value	-> left-top, right-top + right-bottom, left-bottom
		.2 value	-> left-top + right-top, right-bottom + left-bottom
		.1 value	-> apply for all 4 corners
	sample
		border-radius:5px 10px 3px 15px;
		border-radius:5px 10px;
```

```css
@charset "utf-8";

#my_border {
	/* draw a square */
	width:100;
	height:100px;
	background-color:#0F9;

	border:10px solid #F03;
	border-right-color:#30F;

	border-radius:10px 20px 30px 40px;
	border-radius:100px; /* draw a circle */
}
```


# 6. Margin and Padding
```text
			<other element>
 ---------------------------------------	limit line
|				MARGIN					|
|	 -------------------------------	|	outer edge
|	|			BORDER				|	|
|	|	 -----------------------	|	|	inner edge
|	|	|		PADDING			|	|	|
|	|	|	 ---------------	|	|	|
|	|	|	|				|	|	|	|
|	|	|	|	CONTENT		|	|	|	|
|	|	|	|				|	|	|	|
|	|	|	 ---------------	|	|	|
|	|	|						|	|	|
|	|	 -----------------------	|	|
|	|								|	|
|	 -------------------------------	|
|										|
 ---------------------------------------
```

**margin**
```text
definition:
	distance between outer edge of a HTML element and boundary (limit line) of neighboring element,
	in direction of top/right/bottom/left
sample:
	margin-top:10px;
	margin-left:5%;		/* 5% of width of HTML element */
formular:
	.4 value	-> top, right, bottom, left
	.2 value	-> top-bottom, left-right
	.1 value	-> apply for all 4 direction
sample:
	margin:10px;
	margin:10px 20px;
	margin:10px 20px 30px 40px;
attribute "auto"
	align center of element inside its parent element
	margin:auto;
```

**padding**
```text
definition:
	distance between inner edge of a HTML element and its content,
	in direction of top/right/bottom/left
sample:
	padding-left:10px;
	padding-top:5%;		/* 5% of height of HTML element */
formular:
	.4 value	-> top, right, bottom, left
	.2 value	-> top-bottom, left-right
	.1 value	-> apply for all 4 direction
sample:
	padding:10px;
	padding:10px 20px;
	padding:10px 20px 30px 40px;
```

```css
@charset "utf-8";

body {
	margin:0;
}

#div1 {
	width:200px;
	height:200px;
	background-color:#036;
	margin-bottom:50px;

	color:#fff;
	padding-top:50px;
	padding-left:50px;
}

#div2 {
	width:200px;
	height:200px;
	background-color:#F36;
	margin-top:50px;
}
```


# 7. Display and Opacity

**DISPLAY**
```text
definition:
	identify style to display a HTML element
value:
	inline			-> 	elements arranging side by side; when ending of line, goto new line
						default: <span> <label>
	block			->	elements be like as block, located in particular line
						default: <p> <div>
	inline-block	->	elements be like as block, but not located in all of line
	none			->	not display element
```

**OPACITY**
```text
definition:
	identify opacity of element, allow display other element bellow it
value:
	0 ... 1			->	from 0% to 100% value of display
						from 100% to 0% value of opacity
```

```css
@charset "utf-8";

body {
	margin:0;
}

#div1 {
	width:200px;
	height:200px;
	background-color:#036;
	position:absolute;
	z-index:1;
	top:50px;
	left:50px;
}

#div2 {
	width:200px;
	height:200px;
	background-color:#F36;
	position:absolute;
	z-index:2;
	top:80px;
	left:80px;

	opacity:0.8;
}

p span {
	font-weight:bold;
	background-color:#3F0;
	padding:10px;
	display:block;
}
```


# 8. Layout
```text
FLOAT
	definition: identify alignment is left or right
	value: left, right

CLEAR
	definition: clear alignment FLOAT is left or right or both
	value: left, right, both

Sample:
	#div1 {float:left;}		->	alignment of left
	#div2 {clear:bold;}		->	clear alignment and break line
```

```text
OVERFLOW
	overflow-x, overflow-y: identify how to behave when content is overflow to out of size of HTML element
	value:
		visible		->	still display content overflow (default value)
		hidden		->	not display content overflow
		scroll		->	create scroll bar to view content overflow
		auto		->	if HTML element was defined size, create scroll bar to view content overflow
						if not, increase size of HTML element

MIN-WIDTH, MAX-WIDTH
	identify minimum/maximum of width of HTML element
	using with "width" attribute to avoid breaking frame

MIN-HEIGHT, MAX-HEIGHT
	identify minimum/maximum of height of HTML element
	using with "height" attribute to avoid breaking frame

OUTLINE
	using with "border" attribute if want to have 2 parallel borders
	(outline is outside of border)
```

**Sample**
```html
<!DOCTYPE html>
<html>
	<head>
		<title>Title of website</title>
		<meta charset="utf-8" />
		<link rel="stylesheet" type="text/css" href="style.css" />
	</head>
	<body>
		<!-- FLOAT and CLEAR --->
		<div id="panel">
			123
			<div id="left"></div>
			456
			<div id="clear"></div>
			ABC
		</div>
	</body>
</html>
```
```css
@charset "utf-8";

body {
	margin:0;
}

#panel {
	margin: 50px 0px 0px 50px;
	width: 400px;
	outline: 1px solid #0F0;
	border: 1px solid #000;
	max-height: 50px;
	/* overflow: hidden; */
	overflow: scroll;
}

#left {
	width: 50px;
	height: 80px;
	background-color: #3c0;
	float: right;
}

#clear {
	clear: both;
}
```

# 9. Format Content

```text
color

text-align
	left
	right
	center
	justify

text-decoration
	overline
	line-through
	underline
	none

text-transform
	uppercase		->	ANH TUAN DO
	lowercase		->	anh tuan do
	capitalize		->	Anh Tuan Do

text-indent
	indent with 1st line of paragraph, unit: px, em, % ...

letter-spacingistance bet
	distance between 2 letters, unit: px, em, % ...
	before		->		a  f  t  e  r

line-height
	height of line in paragraph, unit: px, em, % ...

word-spacing
	distance between 2 letters, unit: px, em, % ...
	before apply attribute		->		after    apply    attribute

text-shadow
	a set of 4 value:
		X	->	shadow in right direction (px, em, % ...)
		Y	->	shadow in bottom direction (px, em, % ...)
		Z	->	blur shadow (px)
		C	->	color of shadow
	sample:
		text-shadow: 2px 2px 5px #666;

direction
	identify direction for content
		ltr	->	from left to right
		rtl	->	from right to left

unicode-bidi
	using with direction to identify how to write invert text, value:{normal,bidi-override}
	(support for language of some West Asia country)
		before	->		erofeb

vertical-align
	align text for vertical direction
		text-top
		middle
		text-bottom

text-overflow
	identify how to behave when text is overflow of HTML element
		ellipsis	-> 	add "..." before part of text is hidden

white-space
	nowrap		->	if text is overflow, not wrap text
					using with overflow, text-overflow
```

```css
img {
	width: 70px;
	vertical-align: middle;
}

p {
	color: #30F;
	text-align: justify;
	text-decoration: underline;
	text-transform: uppercase;
	text-indent: 50px;
	letter-spacing: 5px;
	line-height: 30px;
	word-spacing: 10px;
	text-shadow: 2px 2px 5px #666;
	direction: rtl; unicode-bidi: bidi-override;

	width: 300px;
	height: 50px;
	border: 1px solid #ccc;

	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
```


# 10. Selector in Advance

**Selector based on its status**
```text
a:link{}		->	all tag <a> not been clicked yet
a:active{}		->	all tag <a> already been clicked, and prepared to switch page
a:visited{}		->	all tag <a> already been clicked, and switch page

div:hover{}		->	behave when moving mouse over tag <div>
					#div01:hover {opacity:0.5;}
input:focus{}	->	often using for tag input that is being focused
					#txtName:focus {border-color:red}
```

```html
<body>
	<a href="#">This is tag a</a>
	<br>
	Name: <input type="text" class="example" id="name" />
	<br>
	Age : <input type="text" class="example" id="age" />
</body>
```

```css
a:link, a:active, a:visited {
	color: #900;
	font-size: 20px;
	text-decoration: none;
}

a:hover {
	color: #090;
}

.example {
	width: 250px;
	padding: 5px;
	border: 1px solid #009;
}

.example:hover {
	border: 1px solid #F00;
}

.example:focus {
	border: 1px solid #00F;
}
```

**Selector based on its relationship parent-child**
```text
p:first-child			->	all tag <p> that is first child of its parent
p:last-child			->	all tag <p> that is last child of its parent
p:first-of-type			->	all tag <p> that is first type <p> of its parent
p:last-of-type			->	all tag <p> that is last type <p> of its parent

p:nth-child(3)			->	all tag <p> that is 3rd child of its parent
p:nth-last-child(2)		->	all tag <p> that is 2nd child of its parent (ending to beginning)
p:nth-of-type(4)		->	all tag <p> that is 4th type <p> of its parent
p:nth-last-of-type(3)	->	all tag <p> that is 3rd type <p> of its parent  (ending to beginning)
```

**Selector based on its status of using**
```text
input:checked			->	all tag <input> that is checked (radio or checkbox)
input:enabled			->	all tag <input> that is enabled
input:disabled			->	all tag <input> that is disabled
input:valid				->	all tag <input> that has valid value
input:invalid			->	all tag <input> that has invalid value
input:in-range			->	all tag <input> that has in-range value
input:out-of-range		->	all tag <input> that has out-of-range value

input:read-only			->	all tag <input> that is NOT allowed to change value
input:read-write		->	all tag <input> that is allowed to change value
input:required			->	all tag <input> that is NOT allowed to be empty
input:optional			->	all tag <input> that is allowed to be empty
```

```html
Email: <input type="email" />
<br />
Not Using: <input type="text" disabled="disable" />
```

```css
input:valid {border: 1px solid #00C;}
input:invalid {border: 1px solid #F00;}
input:disabled {background-color: #0C0;}
```

**Selector special**
```text
div:empty					->	all tag <div> that does NOT have child tag
div:lang(x)					->	all tag <div> that has attribute lang="x"
selector1:not(selector2)	->	all tag <div> that is disabled
selector:first-letter		->	choose first letter of all selector
selector:first-line			->	choose first line of all selector
selector:selection			->	choose part of selection from user (paint black in background of text)
```

**Selector out of flow**
```text
p::before{content:"abcxyz"[,css]}		-> add content "abcxyz" before all tag <p>, with format css
p::ater{content:"abcxyz"[,css]}			-> add content "abcxyz" after all tag <p>, with format css
```

```html
<div>This is content of div1</div>
<div>This is content of div2</div>
<div>This is content of div3</div>
<div>This is content of div4</div>
```

```css
div::before {
	/* content: "[+]";
	color: #F00; */
	content: "";
	display: inline-block;
	width: 20px;
	height: 20px;
	background-color: #090;
}
div::after {
	content: "...!";
}
```


# 11. Border image, Gradient, Shadow

**border-image**
```text
using image to generate border for HTML element, always be used after attribute "border"
border-image: source slide width outset repeat
	border-image-source		->	path to image
	border-image-slide		->	unit:px
	border-image-width		->	unit:px
	border-image-outset		->	unit:px
	border-image-repeat		->	stretch / repeat / round / space
```

```html
<div>This is content of div1</div>
```

```css
div {
	width: 400px;
	height: 200px;
	border: 10px solid transparent;
	border-image: url('border.jpg') 30 round;
}
```

**background-blend-mode**
```text
using to impact background image, for blend color of image
value:
	multiply
	screen
	overlay
	darken / lighten / color-dodge / saturation / color / luminosity
```

```css
div {
	width: 100%;
	height: 100vh;

	background:
		url('sun.jpg') left top no-repeat,
		url('moon.jpg') left top no-repeat;

	background-blend-mode: overlay;
}
```

**Gradient**
```text
using with shorthand of attribute "background"
formular:
	background: linear-gradient(direction, color1 [%], color2 [%])
	background: repeating-linear-gradient(direction, color1 [%], color2 [%])

	background: radial-gradient(shape, color1 [%], color2 [%])
	background: repeating-radial-gradient(shape, color1 [%], color2 [%])
```

```css
background: linear-gradient(to right, red, green, #CCC);
background: linear-gradient(to bottom right, red, green);
background: repeating-linear-gradient(45deg, red, green);

background: radial-gradient(ellipse, red 15%, green 10%);
background: radial-gradient(circle, red 15%, green 10%;
background: repeating-radial-gradient(red 5%, green 10%, yellow 20%);
```

**text-shadow and box-shadow**
```text
similar to text-shadow
box-shadow: X Y Z C
	X	->	shadow in right direction (px, em, % ...)
	Y	->	shadow in bottom direction (px, em, % ...)
	Z	->	blur shadow (px)
	C	->	color of shadow
```


# 12. Font in Advance

**Vietnames font**
```text
using font supporting Vietnames: Arial, Verdana, Time New Roman...
declare in tag <head> of HTML file
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
```

**Some issue with font**
```text
Note in using font:
- if name of font has multi word, using "..."
- should using main font in tag <body>, and only using different font with different tag
- should NOT use many special fonts
```
*If using new font, need to embed font file into HTML*
```css
@font-face {
	font-family: MyFont;
	src: url("./font/font-gi-do.woff");
}
@font-face {
	font-family: MyFont;
	src: url("./font/font-gi-do-bold.woff");
	font-weight: bold;
}
body {
	font-family: MyFont;
}
```

*Using font from library of Google Font*
```text
(1)using directly
	<link href="url-font" rel="stylesheet" />
(1)using @import in CSS
	@import url("url-font");
```
```css
@import url("https://fonts.googleapis.com/css?family=Kumar+One");

body {
	font-family: "Kumar One";
}
```


# 13. Animation in 2D, 3D
**transition**
```text
using to change smoothly value of an attribute of a HTML element
```
*method 1: identify common time to change multy attributes*
```css
div {
	width: 100px; height: 100px;
	background: red;
	transition: 1s;
}
div:hover {
	width: 200px; height: 150px;
}
```
*method 2: identify particular time to change each different attributes*
```css
div {
	width: 100px; height: 100px;
	background: red;
	transition: width 1s, height 2s;
}
div:hover {
	width: 200px; height: 150px;
}
```

```text
Other attribute for transition:
	transition-delay			->	identify delay for transition (unit:second)
	transition-duration			->	identify time for transition (unit:second)
	transition-property			->	identify attribute depended on transition
	transition-timing-function	->	identify how to transition:
									ease / linear / ease-in / ease-out / ease-in-out / cubic-bezier(n,n,n,n)
```

**transform**
```text
using some particular function to move / rotate / scale / tilt...
functions of transform are not animation function >> need to use with "transition" to generate animation
```

*Transform 2D > Translate*
```
translateX(x)	->	move element "x" unit in X-Axis
translateY(y)	->	move element "y" unit in Y-Axis
translate(x,y)	->	move element "x" unit in X-Axis, move element "y" unit in Y-Axis
```
```css
#div1 {
	transform: translateX(50px) translateY(100px);
}
#div2 {
	transform: translate(50px,100px);
}
```

*Transform 2D > Rotate*
```css
#div3 {
	transform: rotate(45deg);
}
```

*Transform 2D > scaleX(x) scaleY(y)*
```css
#div3 {
	transform: scaleX(2) scaleY(0.5);
	transform: scale(2,0,5)
}
```

*Transform 2D > skew(x) scaleY(y)*
```css
#div3 {
	transform: skewX(20deg) scaleY(0deg);
}
```