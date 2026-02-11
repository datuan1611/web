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
		<link tyle="text/css" rel="stypesheet" href="stype.css" />
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
		<link tyle="text/css" rel="stypesheet" href="stype.css" />
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
