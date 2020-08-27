import React from 'react';

class Printing extends React.Component{
	constructor(props){
		super(props)
	}


	render(){
		return (
			<div>
				<b>printing</b> is used to <b>display information in the console</b>. this is how we <b>output</b> anything to the user, and is a great way to <b>check if your code is working</b> properly.<br/>
				there are two types of printing statements:<br/>
				<ul>
					<li>same-line printing</li>
					<li>next-line printing</li>
				</ul>
				<h3>wait, so how do you print something?</h3>
				here is the blueprint for same-line printing:<br/>
				<b>System.out.print(<i>&lt;information&gt;</i>);</b>
				<br/><br/>
				and here is the blueprint for next-line printing:<br/>
				<b>System.out.println(<i>&lt;information&gt;</i>);</b>
				<br/>
				<h3>ok, but what's the difference between the two?</h3>
				<b>same-line printing</b> prints information without a line break. for example, if you were to type:
				<div className="code">
					System.out.print("I like pizza. ");<br/>
					System.out.print("What about you?");
				</div>
				it would look like this in the console:
				<div className="code">
					I like food. What about you?
				</div>
				<br/>
				meanwhile, <b>next-line printing</b> prints information with a line break. for example, if you were to type:
				<div className="code">
					System.out.println("I like pizza. ");<br/>
					System.out.println("What about you?");
				</div>
				it would look like this in the console:
				<div className="code">
					I like food. <br/>
					What about you?
				</div>
				<h3>so what else can you print?</h3>
				the sky's the limit with printing! the previous example showed you how to print <b>Strings</b>, but you can also print <b>characters</b>, <b>integers</b>, <b>doubles</b>, or <b>booleans</b>. take a look at the code below and <b>predict</b> what is outputed in the console! (<b className="note">hint:</b> notice whether the code uses same-line or next-line printing.)
				<div className="code">
				<div className="comment">//print out a character, an integer, a double, and a boolean</div>
				<br/>
				System.out.println('$');
				<br/>
				System.out.println(13);
				<br/>
				System.out.println(66.6666);
				<br/>
				System.out.println(false);
				</div>
				(<b className="note">psst. need a reminder</b> on what that first line of code is with the <b>//</b> symbol? check out the <b className="pageName">comments page</b>!)
				<br/><br/>
				have a prediction in mind? awesome. it would look like this in the console:
				<div className="code">
				$
				<br/>
				13
				<br/>
				66.6666
				<br/>
				false
				</div>
				<h3>cool! anything else?</h3>
				in fact, yes! just one more thing. you can also print out <b>variables</b> by putting the <b>variable name</b> in between the parentheses of the print statement. here is the blueprint for printing a variable using both same-line and next-line printing:<br/>
				<b>System.out.print(<i>&lt;name&gt;</i>);</b> or<br/>
				<b>System.out.println(<i>&lt;name&gt;</i>);</b><br/><br/>
				let's do a <b>coding exercise</b> to practice printing variables! create a variable of any type you want and print it out. then change the value of the variable and print it out again. (<b className="note">psst. need a reminder</b> on how to initialize a variable and change its value? check out the <b className="pageName">variables page</b>!)
				<br/>
				here is some example code similar to what you may have:
				<div className="code">
				<div className="comment">//create a boolean variable, initialize it to false, and print it out using next-line printing</div>
				<br/>
				boolean understandsPrinting = false;
				<br/>
				System.out.println(understandsPrinting);
				<div className="comment">//change the value of the boolean variable to true, and print it out using next-line printing</div>
				<br/>
				understandsPrinting = true;
				<br/>
				System.out.println(understandsPrinting);
				</div>
				and it would look like this in the console:
				<div className="code">
				false
				<br/>
				true
				</div>
				awesome! as the code above says, you now understand printing!
				<h3>System.out.print("is it time for recap?");</h3>
				<b>yup!</b> you made it to recap!<br/><br/>
				remember, there are two types of printing: <b>same-line printing</b>, which is you can do by typing <b>System.out.print();</b>, 
				and <b>next-line printing</b>, which you can do by typing <b>System.out.println();</b>. 
				both of these print statements print information into the <b>console</b>. <br/>
				you can print out <b>Strings</b>, <b>characters</b>, <b>integers</b>, <b>doubles</b>, and <b>booleans</b>. finally, you can also print out <b>variables</b> by putting the variable name in between the parentheses of the print statement.
				<h3>practice</h3>
				<div className="repl">
				
				</div>
				<br/>
				...we know <b className="note">just for java</b> is as <b>addicting</b> as the newest Netflix binge, so what are you waiting for? <b className="pageName">keep coding!</b>
			</div>
		)
	}
}

export default Printing;