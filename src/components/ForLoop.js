import React from 'react';

class ForLoop extends React.Component{
	constructor(props){
		super(props)
	}


	render(){
		return (
			<div>
				a <b>loop</b> is <b>a repeating block of code</b>. here, we will focus on <b>for loops</b>, a type of loop that iterates through your block of code a <b>specific number of times</b>.
				<h3>wait, so how do you create a for loop?</h3>
				here is the blueprint for creating a for loop:<br/>
				<b>for(<i>initialize</i> ; <i>condition</i> ; <i>iterate</i>)&#123; <br/>
				<p>*code*</p> <br/>
				&#125;</b><br/><br/>
				as you can see from the blueprint above, there are three main components to creating a for loop: 
				<ul>
					<li>initialize</li>
					<li>condition</li>
					<li>iterate</li>
				</ul>
				let's walk through each of these components...
				<br/>
				<h3>what in the world is initialize?</h3>
				good question! initializing is the <b>first component</b> of your for loop. it works to <b>create the variable</b> that you will use to go through your for loop.
				for initalizing, we always use an <b>int variable</b>, often denoted by the letter <b>i</b>.  
				in the initialize section, we create i and set it equal to the <b>start value</b>. for example, if you want your for loop to print the numbers 1-5, you would <b>set i equal to 1</b>, because that's the number you want to print first.
				(<b className="note">psst. need a reminder</b> on how to create a variable? check out the <b className="pageName">variables page</b>!)

				<h3>and what's condition?</h3>
				the condition is the <b>second component</b>. it works to <b>determine when the loop should stop</b>. you can denote this using <b>&lt;</b>, <b>&le;</b>, <b>&gt;</b>, or <b>&ge;</b> depending on what you want your loop to do.
				going back to our example of printing out the numbers 1-5, we can make our condition in two ways: <b>i &lt; 6</b> or <b>i &le; 5</b>. which one you choose is up to you.
				
				<h3>hey, wait! you still have to explain iterate!</h3>
				don't worry, we didn't forget :). the iterate portion is our <b>last component</b> and works to <b>increment your integer variable</b>, <b>either adding one or subtracting one</b> depending on the direction you would like your loop to go in. 
				if you want your integer to be incremented by +1 each time it loops, you type <b>i++</b>. if you want your integer to be incremented by -1 each time it loops, you type <b>i--</b>.
				going back to our example of printing numbers 1-5, we would want to increase i by 1 each time. so, for our last component of the for loop, we would type <b>i++</b>.<br/>
				(<b className="note">btw:</b> don't forget the semicolons between each of the three components)
				<br/><br/>here is our example fully coded out: 
				<div className="code">
					for(int i = 1; i &le; 5; i++) &#123; <br/>
						<p>System.out.print(i + " ")</p> <div className = "comment">//the " " is to add a space between the numbers when printing</div><br/>
					&#125;<br/>
				</div>
				the code above prints out the following in the console:
				<div className="code">
					1 2 3 4 5
				</div>
				yay! now you know all about for loops!
			</div>
		)
	}
}

export default ForLoop;