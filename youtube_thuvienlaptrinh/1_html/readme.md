# 1. Introduction
**HTML** = Hyper Text Markup Language
```text
using tag to descript/display data
- HTML 4.01 (1999)
- HTML5 (2016)
format file: *.html
```

***Sample Code***
```html
<!DOCTYPE html>
<html>
	<head>
		<title>Title of website</title>
		<meta charset="" , name="" , content="" />
		<link rel="stypesheet" , href="stype.css" />
		<script src="script.js" defer></script>
	</head>
	<body>
		<!-- Main Content --->
	</body>
</html>
```

***Tag***
```html
<tag_name param1="value1" param2="value2">Content of Tag</tag_name>
<tag_name param1="value1" param2="value2" />

<p>: paragraph
<b>: bold text
<i>: italic text
<u>: underlined text
<br>: break line in paragraph
<center>: align center for text
```

# 2. List, Path, Hyperlink, Image, Maps

**List**
```html
<ol type="I">
	<li>1st item of list</li>
	<li>2nd item of list</li>
	<li>3rd item of list</li>
	<li>4th item of list</li>
</ol>
```

**Path**
```html
<!---Absolute Path--->
C:\folder\document.html
http://domain.com/document.html

<!---Relative Path--->
C:\
|-- folder1
|      |-- index.html
|      |-- document1.html
|      |-- image.jpg
|-- folder2
       |-- document2.html	

./document1.html
../folder2/document2.html
```

**Hyperlink**
```html
used to link between some html files:

<!--- index.html --->
<a href="../folder2/document02.html">Go to file document2.html</a>
<!--- document2.html --->
<a href="../folder1/document02.html">Go back file index.html</a>
```

**Image**
```html
<img src="./image.jpg" />
```

**Map**
```html
used position of image to hyperlink
<img src=".image.jpg" usemap="#map_name">
<map name="map_name">
	<area shape="rect" coords="x1,y1,x2,y2" href="./document1.html" />
	<area shape="circle" coords="x,y,r" href="../foder2/document2.html" />
</map>
```

# 3. Table, Video, Audio

**Table**
```html
|------------------|-----------------|
| row 1 - column 1 | row 1 - column 2|
|------------------|-----------------|
| row 2 - column 1 | row 2 - column 2|
|------------------|-----------------|
<table>		<!--- table 2x2 --->
	<tr>
		<td>row 1 - column 1</td>
		<td>row 1 - column 2</td>
	</tr>
	<tr>
		<td>row 2 - column 1</td>
		<td>row 2 - column 2</td>
	</tr>
</table>

|------------------|-----------------|-----------------|
|          row 1 - column 1          | row 1 - column 2|
|------------------|-----------------|-----------------|
| row 2 - column 1 | row 2 - column 2| row 2 - column 3|
|------------------|-----------------|-----------------|
|                  | row 3 - column 2| row 3 - column 3|
| row 3 - column 1 |-----------------|-----------------|
|                  | row 4 - column 1| row 4 - column 2|
|------------------|-----------------|-----------------|
<table boder="1" cellpadding="10" cellspacing="5">		<!--- table 4x3 --->
	<tr>
		<td colspan="2">row 1 - column 1</td>
		<td>row 1 - column 2</td>
	</tr>
	<tr>
		<td>row 2 - column 1</td>
		<td>row 2 - column 2</td>
		<td>row 2 - column 3</td>
	</tr>
	<tr>
		<td rowspan="2">row 3 - column 1</td>
		<td>row 3 - column 2</td>
		<td>row 3 - column 3</td>
	</tr>
	<tr>
		<td>row 4 - column 1</td>
		<td>row 4 - column 2</td>
	</tr>
</table>
```

**Video / Audio**
```html
<video autoplay="1" controls="controls">
	<source src="./video.mp4" type="video/mp4" />
</video>

<audio autoplay="1" controls="controls">
	<source src="./audio.mp3" type="audio/mpeg" />
</audio>

mp4 -> video/mp4
ogg -> video/ogg
mp3 -> audio/mpeg
wav -> audio/wav
```

# 4. form, iframe, div, label, span, canvas

**form**
```html
TextBox, CheckBox, Radio, Dropdown List, TextBox Multiple

<form>
	<input type="text" /><br />
	<input type="checkbox" /><br />
	<input type="radio" name="Gender" checked="checked"/>Male<br />
	<input type="radio" name="Gender" checked="checked"/>Female<br />
	<input type="file" />
	<select>
		<optgroup label="Group_A">
			<option>A1</option>
			<option>A2</option>
			<option>A3</option>
		</optgroup>
		<optgroup label="Group_B">
			<option>B1</option>
			<option>B2</option>
			<option>B3</option>
		</optgroup>
	</select>
	<textarea cols="100" rows="15"></textarea>
</form>
```

**iframe**
```html
<!--- iframe: EMBED method used to embed content from other html file --->
<iframe src="./document1.html" width="500" height="100" frameborder="1"></iframe>
```

**div, label, span, canvas**
```text
div, label, span, canvas...
 - not used to format data
 - used to struct data
```

# 5. XML standard in HTML
```text
1. opening tag must be side-by-side closing tag, or ended with "/>"
2. if tags are nest, tag opening later will be closing sooner
3. all name of tag/attribute must not be written in lowercase
4. all value of attribute must be enclosed in double quotes "..."
5. attribute must not be used with shorthand syntax
6. Be able to create create freely name of addition attribute to store custom values
```

# 6. DOM
```text
DOM: Document Object Model
- used to access easily tag/attribute
- DOM operation: tag/attribute is object model that can be accessed/handled by a SCRIPT language in CLIENT side (JavaScript)

Identify DOM in HTML:
- by name of tag
- by attribute: id="..."		(unique with every tag)
- by attribute: class="..."		(group tags by class)
```

Modeling DOME is descripted as TREE struction
```html
<p>					NODE
	<b>				PARENT NODE
	<i>				CHILD NODE
	<p>
		<img>
		<b>
```