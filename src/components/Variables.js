import React from 'react';

class Variables extends React.Component{
	constructor(props){
		super(props)
	}


	render(){
		return (
			<div>
				<b>variables</b> are used to store information. 
				<h3>wait, so how do you create a variable?</h3>
				here is the blueprint when creating a variable: <br/>
				<b><i> &lt;type&gt; &lt;name&gt; = &lt;value&gt;;</i></b> <br/>
				(<b className="note">btw:</b> don't forget the semicolon!)
				<br/><br/>
				there are multiple <b>types</b> of information that variables can store:
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
				nope. in java, <b>strings</b> are used to store text. they're denoted using double quotation marks. if you set a string variable equal to <b>""</b>, that's an empty string, meaning it doesn't contain any text yet.
				to make a string variable, you need to type <b>String</b> as the type. strings are a lot cooler than the other variable types. if you want to learn why that is, check out the <b className="pageName">Strings page</b>!
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
				<h3>umm so what happens after you create a variable?</h3>
				great question! after you create a variable, you can either <b>change the value of it</b> or <b>use it in your program</b>!
				<br/><br/>
				<b>change the value of your variable</b>
				<br/>
				after you create a variable of a certain type, <b>you can change the value of the variable</b>, but <b>you cannot change its type</b>. here's an example to help you understand this concept:
				<br/>
				let's say you have the following code that creates a <b>double</b> variable called <i>price</i> that stores the value 9.99.
				<div className="code">
				double price = 9.99;
				</div>
				now let's say we wanted to lower the price by a dollar, making it 8.99 instead of 9.99. we can use the following code to change the value of <i>price</i>:
				<div className="code">
				price = 8.99;
				</div>
				but what we cannot do is change <i>price</i> to make it an <b>int</b> or a <b>char</b>, etc. once you create <i>price</i> as a <b>double</b>, it will always stay as a <b>double</b>.
				<br/><br/>
				here is the blueprint when changing a variable:
				<br/>
				<b><i> &lt;name&gt; = &lt;new_value&gt;;</i></b>
				<br/><br/>
				let's do one more example! this time create a <b>String</b> variable called <i>hello</i> and initialize it to "hello". then change the value of <i>hello</i> to "goodbye".
				<div className="code">
				String hello = "hello";
				<br/>
				hello = "goodbye";
				</div>
				<br/>
				<b>use your variable in your program</b>
				<br/>
				since all we have learned so far is variables, we don't quite have the knowledge yet to actually use our variables in our program... <b>but don't worry!</b> you will learn this <b>very soon</b>!! for now, simply make sure you are comfortable with <b>creating a variable</b> and <b>changing a variable</b>.
				<h3>boolean timeForRecap = true;</h3>
				<b>you did it!</b> you made it to recap!
				<br/><br/>
				a <b>variable</b> is used to store information. here is the blueprint when creating a variable: <br/>
				<b><i> &lt;type&gt; &lt;name&gt; = &lt;value&gt;;</i></b> <br/><br/>
				there are multiple <b>types</b> of information that variables can store:
				<ul>
					<li><b>integer</b></li>
					<ul>
						<li>integers store <b>whole numbers</b>, including negative numbers</li>
						<li>to make an integer, type <b>int</b> as the type</li>
					</ul>
					<li><b>double</b></li>
					<ul>
						<li>doubles store <b>decimals</b>, like 1.5 and 0.923</li>
						<li>to make a double, type <b>double</b> as the type</li>
					</ul>
					<li><b>string</b></li>
					<ul>
						<li>strings store <b>text</b>, enclosed in double quotes</li>
						<li>to make a string, type <b>String</b> as the type</li>
					</ul>
					<li><b>character</b></li>
					<ul>
						<li>characters store a <b>single letter/digit/symbol</b>, enclosed in single quotes</li>
						<li>to make a character, type <b>char</b> as the type</li>
					</ul>
					<li><b>boolean</b></li>
					<ul>
						<li>booleans store either <b>true</b> or <b>false</b></li>
						<li>to make a boolean, type <b>boolean</b> as the type</li>
					</ul>
				</ul>
				after you create a variable of a certain type, <b>you can change the value but not the type</b> of the variable. here is the blueprint when changing the value of a variable: <br/>
				<b><i> &lt;name&gt; = &lt;new_value&gt;;</i></b> <br/><br/>
				congrats! you finished learning about variables. keep up the good work!
				<br/><br/>
				...we know <b className="note">just for java</b> is as <b>addicting</b> as the newest Netflix binge, so what are you waiting for? <b className="pageName">keep coding!</b>
			</div>
		)
	}
}

export default Variables;