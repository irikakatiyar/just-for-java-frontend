import React from 'react';
import ProgressUpdater from './ProgressUpdater';

class WhileLoop extends React.Component{
	constructor(props){
		super(props)
	}


	render(){
		return (
			<div>
				a <b>while loop</b> is a <b>type of loop</b> that is used to <b>perform a block of code <i>while</i> a specific condition is met</b>. once it is not met, or is false, then the code block will stop being run and the code will move onto the next block of code outside of the while loop.
				<h3>wait, so how do you make a while loop?</h3>
				here is the blue print for a while loop:<br/>
				<b>while(&lt;<i>condition</i>&gt;)&#123;<br/>
				<p>*code*</p><br/>
				&#125;</b>
				<h3>makes sense, but what's with the condition?</h3>
				good question! just like the condition that we use in our if statements, this condition should have a value of either <b>true</b> or <b>false</b>. 
				(<b className="note">psst.</b> need a reminder on the condition from if statements? check out our <b className="pageName">if statement page</b>!) 
				if the condition is <b>true</b>, the <b>code block will be run</b>. however, if the condition is <b>false</b>, the <b>code block won't be run</b>. unlike if statements, however, while loops will <b>continuously loop</b> through the code block <b>until the condition becomes false</b>.
				<h3>hmm... ok but can i get an example?</h3>
				yea, definitely! let's say you want to print out the numbers 1-5. here's how we can do that using a while loop:
				<div className="code">
					int count = 1; <div className="comment">//this is the variable we will use to keep track of our #</div><br/>
					while(count &le; 5)&#123;<br/>
					<p>System.out.println(count);<br/>
					count ++;</p><br/>
					&#125;
				</div>
				our program above will print the following into the console:
				<div className="code">
					1<br/>
					2<br/>
					3<br/>
					4<br/>
					5
				</div>
				ok, that might seem confusing now, but let's <b>break down our code</b>.<br/><br/>
				<b>first</b>, we start out by making an integer <i>count</i>, which stores the number we are currently printing. pretty straightforward...<br/><br/>
				<b>next</b>, we create a <b>while loop</b> with the condition of <b>count &le; 5</b>. this means that, as long as our variable <i>count</i> is <b>less than or equal to 5</b>, the code within the curly braces <b>will run</b>.
				this is exactly what we want, as we wanted to print out every number starting from 1 that is less than 5! great!<br/><br/>
				<b>lastly</b>, inside our while loop, we want to <b>print out the number we are currntly on</b>, and then <b>increase <i>count</i> by 1</b>. great!<br/><br/>
				<h3>while(recap == true)&#123;</h3>
				<b>!!</b> yess recap time.<br/>
				so, to review, a <b>while loop</b> loops through a block of code as long as a specific condition is true, and is written:<br/>
				<b>while(&lt;<i>condition</i>&gt;)&#123;<br/>
				<p>*code*</p><br/>
				&#125;</b><br/><br/>
				and that's pretty much it!<br/><br/>
				...we know <b className="note">just for java</b> is as <b>addicting</b> as the newest Netflix binge, so what are you waiting for? <b className="pageName">keep coding!</b>
			</div>
		)
	}
}

export default WhileLoop;