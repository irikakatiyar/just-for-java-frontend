import React from 'react';

class IfStatement extends React.Component{
	constructor(props){
		super(props)
	}


	render(){
		return (
			<div>
				an <b>if statement</b> is used to determine if a specific block of code <b>should or should not be run</b>. 
				<br/>
				<h3>wait, how do you make an if statement?</h3>
				here is the blueprint on how to make an if statement:<br/>
				<b>if(<i>&lt;condition&gt;</i>)&#123;<br/>
					<p>*code block*</p><br/>
				&#125;</b>
				<h3>wdym condition?</h3>
				the <b>condition</b> is anything that can <b>equate to a value</b> of either <b>true</b> or <b>false</b>. 
				if the <b>condition is true</b>, the code block <b>will be run</b>. 
				meanwhile, if the <b>condition is false</b>, the code block <b>won't be run</b>, and will go to whatever is after the end curly bracket.
				<h3>alright, but can I get an example?</h3>
				yessir! in this example, let's say we wanted to make a program to see if you are over speed limit.
				in this case, we are going to need one variable that keeps track of our speed. 
				(<b className="note">psst. need a reminder</b> of what a variable is? check out the <b className="pageName">variables page</b>!) 
				if we are going over the speed limit, we are going to print "slow down!" into the console. 
				(<b className="note">psst. need a reminder</b> on how to print? check out the <b className="pageName">printing page</b>!)
				<div className="code">
					int yourSpeed = 32;<br/>
					<div className="comment">//in this example, the speed limit on the road is 35</div><br/>
					if(yourSpeed &gt; 35)&#123;<br/>
						<p>System.out.print("slow down!");</p><br/>
					&#125;
				</div>
				the code above wouldn't print anything into the console since your speed of 32 is not greater than 35. 
				but, what if we were over the speed limit. let's take a look at the following code...
				<div className="code">
					int yourSpeed = 37;<br/>
					<div className="comment">//in this example, the speed limit on the road is 35</div><br/>
					if(yourSpeed &gt; 35)&#123;<br/>
						<p>System.out.print("slow down!");</p><br/>
					&#125;
				</div>
				because we are going faster than the speed limit, the code would print the following into the console.
				<div className="code">
					slow down!
				</div>
				that's great! but, let's say we wanted to make our program more like the electronic signs you sometimes 
				see on the road that tell you your speed and tell you to slow down if you are speeding.<br/> in this case, we would want to add an <b>else statement</b>, a statement that is used to <b>run a block of code</b> if the original <b>condition is false</b>.
				<h3>wait, so how do you make an else statement?</h3>
				here is the blueprint on how to make an else statement:<br/>
				<b>if(<i>&lt;condition&gt;</i>)&#123;<br/>
					<p>*code block*</p><br/>
				&#125;<br/>
				else&#123;<br/>
					<p>*code block*</p><br/>
				&#125;</b><br/>
				<h3>can i see it with the example</h3>
				yea!! so going back to our example of the electronic road sign, we would want to have an else statement that prints out our 
				speed limit if we are not speeding. so our entire program would look something like this:
				<div className="code">
					int yourSpeed = 32;<br/>
					<div className="comment">//in this example, the speed limit on the road is 35</div><br/>
					if(yourSpeed &gt; 35)&#123;<br/>
						<p>System.out.print("slow down!");</p><br/>
					&#125;<br/>
					else&#123;<br/>
						<p>System.out.print(yourSpeed)</p><br/>
					&#125;
				</div>
				in this case, since we are going below the speed limit, our program would print the following into the console.
				<div className="code">
					32
				</div>
				yay! but, to make this even more interesting, what if we wanted to have our program let us know if we were going at speed limit. 
				if our speed was equal to the speed limit, we would want to print out "you're at speed limit!"
			</div>
		)
	}
}

export default IfStatement;