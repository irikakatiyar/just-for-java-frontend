import React from 'react';

class Variables extends React.Component{
	constructor(props){
		super(props)
	}


	render(){
		return (
			<div>
				<h2> variables:</h2>
				variables are used to store information. 
				<br/><br/>
				to create a variable, you should write: <br/>
				<b><i> &lt;type&gt; &lt;name&gt; = &lt;value&gt;</i></b> <br/>
				<br/>
				there are multiple types of things that variables can store:
				<ul>
					<li>integer</li>
					<li>double</li>
					<li>string</li>
					<li>character</li>
					<li>boolean</li>
				</ul>
				<b>integers</b> stores any whole number, such as 1, 2, 3, etc. to make an integer variable, you need to write <b>int</b> as the type. 
				below is an example of an integer variable with the name "number" being used to store the value 5.<br/>
				<div className = "code">
					int number = 5;
				</div> 
				<b>doubles</b> store any number with decimal, such as 0.1 or 123.5. to make a double variable, you need to write <b> double</b> as they type.
				below is an example of a double variable with the name "number" being used to store the value 3.5.<br/>
				<div className = "code">
					double number = 3.5;
				</div>
				<b>strings</b> store text, and is denoted using double quotation marks. to make a string variable, you need to write <b>String</b> as the type.
				below is an example of a string variable with the name "word" being used to store the value"hello world".<br/>
				<div className = "code">
					String word = "hello world"; <div className = "comment">//note that the value is surrounded by double quotation marks</div>
				</div>
				<b>characters</b> store a single letter, digit, or symbol, and is denoted using single quotation marks. to make a character variable, you need to write <b>char</b> as the type.
				below is an example of a character variable with the name "letter" being used to store the value 'a'.<br/>
				<div className = "code">
					char letter = 'a'; <div className = "comment">//note that the value is surrounded by single quotation marks</div>
				</div>
				<b>booleans</b> store either a value of true or false. to make a boolean variable, you need to write <b> boolean</b> as the type.
				below is an example of a boolean variable with the name "isFun" being used to store the value true.<br/>
				<div className = "code">
					boolean isFun = true;
				</div>
				<br/>now that you know about variables, let's try some exercises!
			</div>
		)
	}
}

export default Variables;