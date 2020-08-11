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
					System.out.print("I like food. ");<br/>
					System.out.print("What aout you?");
				</div>
				it would look like this in the console:
				<div className="code">
					I like food. What about you?
				</div>
				<br/>
				meanwhile, <b>next-line printing</b> prints information with a line break. for example, if you were to type:
				<div className="code">
					System.out.println("I like food. ");<br/>
					System.out.println("What about you?");
				</div>
				it would look like this in the console:
				<div className="code">
					I like food. <br/>
					What about you?
				</div>
				<h3>System.out.print("is it time for recap?");</h3>
				<b>yup!</b> you made it to recap!<br/><br/>
				remember, there are two types of printing: <b>same-line printing</b>, which is you can do by typing <b>System.out.print();</b>, 
				and <b>next-line printing</b>, which you can do by typing <b>System.out.println();</b>. 
				both of these print statements print information into the <b>console</b>.
				<h3>practice</h3>
				<div className="repl">
				<iframe height="400px" width="100%" src="https://repl.it/@justforjava/CanineFreshExpertise?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
				</div>
				<br/><br/>
				...we know <b className="note">just for java</b> is as <b>addicting</b> as the newest Netflix binge, so what are you waiting for? <b className="pageName">keep coding!</b>

			</div>
		)
	}
}

export default Printing;