import React from 'react';

class Variables extends React.Component{
	constructor(props){
		super(props)
	}


	render(){
		return (
			<div>
				variables are used to store information. 
				<h3>wait, so how do you create a variable?</h3>
				here is the blueprint when creating a variable: <br/>
				<b><i> &lt;type&gt; &lt;name&gt; = &lt;value&gt;;</i></b> <br/>
				(<b className="note">btw:</b> don't forget the semicolon!)
				<br/><br/>
				there are multiple types of information that variables can store:
				<ul>
					<li>integer</li>
					<li>double</li>
					<li>string</li>
					<li>character</li>
					<li>boolean</li>
				</ul>
				<h3>hey, i've heard of integers!</h3>
				you probably recognize integers from your math class. in java, <b>integers</b> are used to store any whole number, such as 0, 1, 2, 3, etc. (and even negative numbers!). 
				to make an integer variable, you need to type <b>int</b> as the type. 
				below is an example of an integer variable with the name <i>number</i> being used to store the value 5.<br/>
				<div className = "code">
					int number = 5;
				</div> 
				<h3>wait, what are doubles?</h3>
				<b>doubles</b> are used to store any number with a decimal, such as 0.1 or 123.45. to make a double variable, you need to type <b> double</b> as they type.
				below is an example of a double variable with the name <i>number</i> being used to store the value 3.5.<br/>
				<div className = "code">
					double number = 3.5;
				</div>
				<h3>strings? you mean what you use to make bracelets?</h3>
				nope. in java, <b>strings</b> are used to store text. they're denoted using double quotation marks. if you set make a string variable equal to <b>""</b>, that's an empty string, meaning it doesn't contain any text yet.
				to make a string variable, you need to type <b>String</b> as the type.
				below is an example of a string variable with the name <i>word</i> being used to store the value "hello world".<br/>
				<div className = "code">
					String word = "hello world"; <div className = "comment">//note that the value is surrounded by double quotation marks</div>
				</div>
				<h3>my favorite character is harry potter. wbu?</h3>
				well... that's not quite what a character is in java. <b>characters</b> are used to store a single letter, digit, or symbol, and is denoted using single quotation marks. 
				to make a character variable, you need to write <b>char</b> as the type.
				below is an example of a character variable with the name <i>letter</i> being used to store the value 'a'.<br/>
				<div className = "code">
					char letter = 'a'; <div className = "comment">//note that the value is surrounded by single quotation marks</div>
				</div>
				<h3>what's a boolean? never heard of that before</h3>
				<b>booleans</b> store either a value of <b>true</b> or <b>false</b>. to make a boolean variable, you need to type <b> boolean</b> as the type.
				below is an example of a boolean variable with the name <i>isFun</i> being used to store the value true.<br/>
				<div className = "code">
					boolean isFun = true;
				</div>
			</div>
		)
	}
}

export default Variables;