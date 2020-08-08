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
				there are multiple types of things that variables can store:<br/>
				<ul>
					<li>integer</li>
					<li>double</li>
					<li>string</li>
					<li>character</li>
					<li>boolean</li>
				</ul>
				<b>integers</b> stores any whole number, such as 1, 2, 3, etc. to make an integer variable, you need to write <b>int</b> as the type.<br/>
				<b>doubles</b> store any number with decimal, such as 0.1 or 123.5. to make a double variable, you need to write <b> double</b> as they type<br/>
				<b>strings</b> store text, and is denoted using double quotation marks. to make a string variable, you need to write <b>String</b> as the type.<br/>
				<b>characters</b> store a single letter, digit, or symbol, and is denoted using single quotation marks. to make a character variable, you need to write <b>char</b> as the type.<br/> 
				<b>booleans</b> store either a value of true or false. to make a boolean variable, you need to write <b> boolean</b> as the type.<br/>
				<br/>
				for example, let's say you want to make an integer variable with the name "number" to store the number 5. 
				<br/>you would need to write: <br/>
				<div className = "code">
					int number = 5
				</div> 


			</div>
		)
	}
}

export default Variables;