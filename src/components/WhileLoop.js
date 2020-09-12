import React from 'react';

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
				<h3>makes sense, but what's with the condition</h3>
				good question! just like the condition that we use in our if statements, this condition should have a value of either <b>true</b> or <b>false</b>. 
				(<b className="note">psst.</b> need a reminder on the condition from if statements? check out our <b className="pageName">if statement page</b>!) 
				if the condition is <b>true</b>, the <b>code block will be run</b>. however, if the condition is <b>false</b>, the <b>code block won't be run</b>. unlike if statements, however, while loops will <b>continuously loop</b> through the code block <b>until the condition becomes false</b>.
				<h3>hmm.. ok but can i get an example?</h3>
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
				<b>lastly</b>, inside our while loop, we want to <b>print out the number we are currntly on</b>, and then <b>increase <i>count</i> by 1</b>. great! now time for some practice!<br/><br/>
				<div className="problem">
					<b className="note">divisibility:</b><br/><br/>
					your <b>goal</b> is to use <b>while loops</b> to <b>print out all numbers</b> from <b>1-50</b> that meet the requirement of being <b>divisible by 4 and 7</b>. in addition, you will need to <b>print out</b> the <b>total number of values</b> that meet the requirement. this will require six steps<br/>
					<ol>
						<li>first, you will need to create a varibale to store the number that you are currently on and the total number of values that meet the requirement</li>
						<li>next, you will need to create a while loop with a condition to make sure that you are looking through the specific range of numbers of 1-50</li>
						<li>after that, you will need to check if the number is divisible by 4 and 7</li>
						<li>if the above is true, then you will print out the number (with your choice of printing mechanism) and also update your total</li>
						<li>then, you will need to increment your number so that it can move onto the next</li>
						<li>lastly, you will want to print out the total number at the end, making sure to label it so it is clear that the user knows the total is being printed at the bottom</li>
					</ol>
					it sounds like a lot, but we know you have the knowledge to be able to do it!<br/><br/>
					<div className="hints">
						<b className="note">hint: </b>for <b>step 2</b>, what would our condition need to be if we wanted the numbers to be from 1-50? we are going to be starting at 1 with our variable, so we don't need to worry about the lower bound. but the upper bound...
						we want our values to be less than or equal to 50...so what should that condition be so that the code block will only run if it's less than or equal to 50? maybe something that checks if our current value vairable is less than or equal to 50!<br/><br/>
						<b className="note">hint: </b>for <b>step 3</b>, to check if our number is divisible by both 4 and 7, we will need to use an if statement, because we want some code (which we write in step 4) to only be run if this requirement is met. now, to actually check, what type of arithmetic can help us check if a value is divisible by a specific number? ohh... of course! % does that! (<b className="note">psst.</b> need a reminder of what we're talking about here? check out our <b className="pageName">arithmetic page</b>!)<br/><br/>
						<b className="note">hint: </b>for <b>step 5</b>, we will want to increment outside of our if statement, as we want to do that no matter if the value we are currently on is divisible by 4 and 7. to increment, remember a short cut is just doing <i>++</i>.<br/><br/>
						<b className="note">hint: </b>for <b>step 6</b>, if we want to do this at the end, once we have reached the total number, we would want to print out total outside of our for loop! also, if we want to label that this is the total, we will want to combine a string, maybe something like "total: ", and our total number variable. <br/><br/>
					</div>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/while-loops-divisibility?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
				<br/>
				<div className="solution">
				<b className="note">our solution:</b><br/><br/>
				below is <b>our solution</b> for the problem above. the <b>comments</b> help to explain how to code each step. hopefully your code looks somewhat similar <b>:)</b> <br/><br/>
					<div className="repl">
						<iframe height="400px" width="100%" src="https://repl.it/@justforjava/while-loops-divisibility-solution?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
					</div>
				</div>
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