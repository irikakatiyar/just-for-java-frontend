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
				in the initialize section, we create i and set it equal to the <b>start value</b>. <br/>
				for example, if you want your for loop to print the numbers 1-5, you would <b>set i equal to 1</b>, because that's the number you want to print first.
				(<b className="note">psst. need a reminder</b> on how to create a variable? check out the <b className="pageName">variables page</b>!)

				<h3>and what's condition?</h3>
				the condition is the <b>second component</b>. it works to <b>determine when the loop should stop</b>. you can denote this using <b>&lt;</b>, <b>&le;</b>, <b>&gt;</b>, or <b>&ge;</b> depending on what you want your loop to do.
				<br/>going back to our example of printing out the numbers 1-5, we can make our condition in two ways: <b>i &le; 5</b> or <b>i &lt; 6</b>. which one you choose is up to you.
				
				<h3>hey, wait! you still have to explain iterate!</h3>
				don't worry, we didn't forget :). the iterate portion is our <b>last component</b> and works to <b>increment your integer variable</b>. you can increment by however much you want, <b>either increasing or decreasing</b> depending on the direction you would like your loop to go in. 
				if you want your integer to be increased by a certain number, you would type <b>i += <i>&lt;number you want to increase by each time&gt;</i></b>. 
				if you want your integer to be decreased by a certain number, you would type <b>i -= <i>&lt;number you want to decrease by each time&gt;</i></b>.
				a shortcut for increasing i by 1 each time is typing <b>i++</b>, while a shortcut for decreasing i by 1 is... you guessed it: <b>i--</b>.
				you can also use multiplication (<b>i *=</b>)and division (<b>i /=</b>), but addition and subtraction are the most common.
				<br/>going back to our example of printing numbers 1-5, we would want to increase i by 1 each time. so, for our last component of the for loop, we would type <b>i++</b>.
				(<b className="note">btw:</b> don't forget the semicolons between each of the three components.)
				<h3>and for some examples...</h3>
				here is our example from above fully coded out: 
				<div className="code">
					for(int i = 1; i &le; 5; i++) &#123; <br/>
						<p>System.out.print(i + " ")</p> <div className = "comment">//the " " is to add a space between the numbers when printing</div><br/>
					&#125;<br/>
				</div>
				the code above prints out the following in the console:
				<div className="code">
					1 2 3 4 5
				</div>
				<h3>...and here's another example:</h3>
				in this example, we want to use a for loop to add up the powers of 2 between 1 and 100. sounds difficult, i know, but let's break down the problem.<br/>
				remember, the first thing we want to do is <b>make our integer i</b>. (<b className="note">hint:</b> think about what number we want to start at.) 
				next, we want our <b>condition</b>. (<b className="note">hint:</b> there are two ways to write this part.)
				and lastly, we will need to <b>increment our integer</b> in a way to get the <b>powers of 2</b>. i'll let you think of that one for a bit. (<b className="note">hint:</b> think back to your math class.)<br/> 
				now, inside the for loop we will need a way to add our number to a sum... hmm... might need to remember some things from the <b className="pageName">variables page</b> for this part.
				ok, got it? let's see it coded out!
				<div className="code">
					int sum = 0; <div className = "comment">//this variable will keep track of our sum in our for loop</div><br/>
					for(int i = 1; i &le; 100; i*=2)&#123;<br/>
						<p>sum += i; <div className="comment">//+= is a shortcut for saying sum = sum + i.</div></p><br/>
					&#125;
				</div>
				<b>i*=2</b> works by multiplying i by 2 each time it iterates through the for loop. so, with this in mind, i would start at 1, then 2, then 4, then 8, then 16, and so on.<br/>
				<h3>...and last example, we promise:</h3>
				in the first example, we printed out <b>i</b>, and in the second example, we added <b>i</b> to a <i>sum</i> variable. in this last example, i want to show you a different way that you can use the iterator variable, <b>int i</b>. 
				what if <b>i</b> represented an <b>index</b> in a <b>String</b>? (<b className="note">psst. need a reminder</b> on what an index is and how it relates to Strings? check out the <b className="pageName">Strings page</b>!) let's try to use a for loop to <b>iterate through each character in a String</b>. 
				<ul>
					<li>for the first component of our for loop, <b>initialize</b>, we want to set <b>int i</b> to the starting value. what should our starting value be? (<b className="note">hint:</b> think about what number indexing start at.) because <b>indexing starts at 0</b>, our first component should be <b>int i = 0</b>.</li>
					<li>for the second component of our for loop, <b>condition</b>, we want to answer the question: when should our for loop stop? (<b className="note">hint:</b> our for loop should stop after we've looped through each index in the given String.) we learned on the <b className="pageName">Strings page</b> that indexing goes from 0, inclusive, till the length of the String, exclusive (<b className="note">btw:</b> the length of a String is equal to the number of characters in the String). that means that we want our for loop to keep going as long as <b>i is less than the length of the String</b>. (<b className="note">btw:</b> to get the length of a String <i>str</i>, use the syntax <b>str.length()</b>.) therefore, our second component should be <b>i &lt; str.length()</b>.</li>
					<li>for the third component of our for loop, <b>iterate</b>, we want to think about what should happen to <b>i</b> each time we iterate. since <b>i</b> is the index, we want <b>i</b> to increase by 1 each time since <b>we are moving to the next index each iteration</b>, so our third component should be <b>i++</b>.</li>
				</ul>
				now that we have all three components of our for loop, <b>let's code it!</b> let's have our program print out each character in String <i>str</i> on its own line. (<b className="note">psst. need a reminder</b> of how to use <b>charAt()</b> to get the character at a given index in a String? check out the <b className="pageName">Strings page</b>!)
				<div className="code">
				String str = "happy birthday";
				<br/>
				<div className="comment">//loop through each character in str</div>
				<br/>
				for(int i = 0; i &le; str.length(); i++)&#123;<br/>
				<p>
					<div className="comment">//use charAt() to print out each character on its own line</div><br/>
					System.out.println(str.charAt(i));
				</p><br/>
				&#125;
				</div>
				the code above prints out the following in the console:
				<div className="code">
				h<br/>
				a<br/>
				p<br/>
				p<br/>
				y<br/>
				 <br/>
				b<br/>
				i<br/>
				r<br/>
				t<br/>
				h<br/>
				d<br/>
				a<br/>
				y<br/>
				</div>
				<h3>is it really time for reacap? get it. for. hehe.</h3>
				<b>ayyyyyy!</b> you made it to recap!<br/><br/>
				now, i know that was a lot, so here's a lil' summary:<br/>
				for loops help to loop through code a <b>specific number of times</b>.<br/>
				there are three parts to a for loop: 
				<ol>
					<li><b>initialize</b>, when you make your integer <b>i</b> and set it equal to the start number</li>
					<li><b>condition</b>, where you decide <b>how</b> and <b>when</b> your loop should stop using the different signs</li>
					<li><b>iterate</b>, where you <b>increment</b> your integer a specific amount each time it loops through your code</li>
				</ol>
				...we know <b className="note">just for java</b> is as <b>addicting</b> as the newest Netflix binge, so what are you waiting for? <b className="pageName">keep coding!</b>
			</div>
		)
	}
}

export default ForLoop;