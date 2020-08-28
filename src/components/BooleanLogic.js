import React from 'react';

class BooleanLogic extends React.Component{
	constructor(props){
		super(props)
	}


	render(){
		return (
			<div>
				welcome to <b>boolean logic</b>! our goal for this page is for you to understand what <b>2B||!2B</b> means! 
				<br/>
				we are going to learn how to make our <b>if statements</b> more complex so that we can check multiple things at once (<b className="note">psst. need a reminder</b> on what in the world if statements are? check out the <b className="pageName">if statements page</b>!). and of course, as the name suggests, we are going to work with <b>booleans</b>! (<b className="note">btw:</b> a <b>boolean</b> is a variable type that has only two possible values: <b>true</b> or <b>false</b>.)
				<br/>
				are you ready for a bunch of fun symbols like <b>!</b>, <b>&&</b>, <b>||</b>, and <b>()</b>? are you ready for tons of tables filled with <b>true</b> and <b>false</b>? cool. let's do this.
				<br/>
				<h3>! = not this</h3>
				whenever you see <b>!</b>, think <b>"the opposite of this"</b>.
				<br/><br/>
				<table>
					<tr>
						<td><b>!</b></td>
						<td>true</td>
						<td>=</td>
						<td>false</td>
					</tr>
					<tr>
						<td><b>!</b></td>
						<td>false</td>
						<td>=</td>
						<td>true</td>
					</tr>
				</table>
				<h3>! understanding this quite yet? maybe an example will help</h3>
				here's an example: let's make a program that checks if a password that the user enters is not empty. (<b className="note">psst. need a reminder</b> on how in the world you can get and store user input? check out the <b className="pageName">user input page</b>!) (<b className="note">psst. need a reminder</b> on how to check if a String is empty or not? check out the <b className="pageName">Strings page</b>!)
				<br/><br/>
				ready for the <b>big reveal</b>? the first thing you need to do is import the <b>Scanner</b> class to help you get user input. at the <b>top of your program</b>, you should have the following line of code:
				<div className="code">
				import java.util.Scanner;
				</div>
				and you should have something like the following in your main method:
				<div className="code">
				<div className="comment">//create a Scanner variable</div>
				<br/>
				Scanner in = new Scanner(System.in);
				<br/>
				<div className="comment">//ask the user for their password; make sure to use System.out.print so that the user can answer on the same line as the prompt; also make sure to add a space after the prompt</div>
				<br/>
				System.out.print("Password: ");
				<br/>
				<div className="comment">//store the user input in a String variable called password</div>
				<br/>
				String password = in.nextLine();
				<br/>
				<div className="comment">//use isEmpty() and ! to check if the password the user entered is not empty</div>
				<br/>
				if(!password.isEmpty()) &#123;
				<br/>
				<p>
					<div className="comment">//insert some code here</div>
				</p>
				<br/>
				&#125;
				<br/>
				<div className="comment">//since we are done getting user input, we can close the Scanner</div>
				<br/>
				in.close();
				</div>
				<h3>&& = this and this</h3>
				whenever you see <b>&&</b>, think <b>"only true if both this and this are true"</b>.
				<br/><br/>
				<table>
					<tr>
						<td>true</td>
						<td><b>&&</b></td>
						<td>true</td>
						<td>=</td>
						<td>true</td>
					</tr>
					<tr>
						<td>false</td>
						<td><b>&&</b></td>
						<td>true</td>
						<td>=</td>
						<td>false</td>
					</tr>
					<tr>
						<td>true</td>
						<td><b>&&</b></td>
						<td>false</td>
						<td>=</td>
						<td>false</td>
					</tr>
					<tr>
						<td>false</td>
						<td><b>&&</b></td>
						<td>false</td>
						<td>=</td>
						<td>false</td>
					</tr>
				</table>
				<h3>i'm confused && i might need an example</h3>
				of course! let's make a program that creates two boolean variables: <i>isSunny</i> and <i>beachOpen</i>. if it's sunny and the beach is open, then print out a message saying "it's a great day to go to the beach!" (<b className="note">psst. need a reminder</b> on how to print a message to the console? check out the <b className="pageName">printing page</b>!)
				<br/><br/>
				ready for the <b>big reveal</b>? you should have something like the following in your main method:
				<div className="code">
				<div className="comment">//create your two boolean variables and set them to whatever values you want</div>
				<br/>
				boolean isSunny = false;
				<br/>
				boolean beachOpen = true;
				<br/><br/>
				<div className="comment">//check if it is sunny and if the beach is open using &&</div>
				<br/>
				if(isSunny && beachOpen) &#123;
				<br/>
				<p>
					<div className="comment">//print a message for the user telling them to go to the beach</div>
					<br/>
					System.out.println("it's a great day to go to the beach!");
				</p>
				<br/>
				&#125;
				</div>
				you can set your variables to any values you like, but for our code above, <b>nothing</b> is printed out in the console.
				<h3>|| = this or this</h3>
				whenever you see <b>||</b>, think <b>"only true if either this or this are true"</b>.
				<br/><br/>
				<table>
					<tr>
						<td>true</td>
						<td><b>||</b></td>
						<td>true</td>
						<td>=</td>
						<td>true</td>
					</tr>
					<tr>
						<td>false</td>
						<td><b>||</b></td>
						<td>true</td>
						<td>=</td>
						<td>true</td>
					</tr>
					<tr>
						<td>true</td>
						<td><b>||</b></td>
						<td>false</td>
						<td>=</td>
						<td>true</td>
					</tr>
					<tr>
						<td>false</td>
						<td><b>||</b></td>
						<td>false</td>
						<td>=</td>
						<td>false</td>
					</tr>
				</table>
				<h3>can you elaborate? || can you give me an example?</h3>
				sure! let's make a program that checks if your favorite number is divisible by either 3 or 5 (<b className="note">psst. need a reminder</b> on how you can check divisiblity using the <b>%</b> operator? check out the <b className="pageName">arithmetics page</b>!)
				<br/><br/>
				ready for the <b>big reveal</b>? you should have something like the following in your main method: 
				<div className="code">
				<div className="comment">//create an integer variable that stores your favorite number</div>
				<br/>
				int favoriteNumber = 101;
				<br/>
				<div className="comment">//check if favoriteNumber is divisible by 3 or by 5 using % and ||</div>
				<br/>
				<div className="comment">//remember, int a is divisible by int b if the remainder when you divide a by b is equal to 0, so a % b == 0</div>
				<br/>
				if(favoriteNumber % 3 == 0 || favoriteNumber % 5 == 0) &#123;
				<br/>
				<p>
					<div className="comment">//insert some code here</div>
				</p>
				<br/>
				&#125;
				</div>
				<h3>() = do this first</h3>
				whenever you see <b>()</b>, think <b>"hey! do this first!"</b>.
				<br/>
				if we combine <b>!</b>, <b>&&</b>, <b>||</b>, and <b>()</b> in a giant if statement, then there is a precedence on what happens first, just like how <b>*</b>, <b>/</b>, and <b>%</b> happen before <b>+</b> and <b>-</b>. (<b className="note">psst. need a reminder</b> on the order of operations? check out the <b className="pageName">arithmetics page</b>!) let's take a look at <b>logical precedence</b>:
				<ol>
					<li>()</li>
					<li>!</li>
					<li>&&</li>
					<li>||</li>
				</ol>
				just like with arithmetic, <b>parentheses</b> are used to signify what needs to happen first. between <b>!</b>, <b>&&</b>, and <b>||</b>, you always do <b>!</b> first, then <b>&&</b>, and finally <b>||</b>. 
				<h3>i'm ! really getting logical precedence && (an example sounds good || i really need an example)</h3>
				that's okay! logical precedence isn't the easiest of topics. here's an example: let's say that you want to buy a <b>super cute t-shirt</b>. you're looking to buy it either <b>in the store</b> or <b>online</b>. you also have a <b>budget</b> – the maximum price that you are willing to pay for this super cute t-shirt. let's create a program that models this scenario and prints out a message saying whether or not you can buy this t-shirt!
				<br/>
				the very first thing we need to do is to think: <b>under what condition can we buy this t-shirt?</b>
				<ul>
					<li>first, the t-shirt needs to be available either in the store or online</li>
					<li>second, the price of the t-shirt needs to be less than or equal to our budget</li>
				</ul>
				it's important to note that <b>both of the conditions above need to be true</b> in order for you to be able to buy this t-shirt.
				<br/><br/>
				now, all we need to do is translate what we just stated into code! first up, what <b>variables</b> are we going to need?
				<ul>
					<li><i>budget</i>, which stores the maximum price that we are willing to pay for this t-shirt</li>
					<li><i>price</i>, which stores how much money this t-shirt costs</li>
					<li><i>availableInStore</i>, which stores whether or not this t-shirt is available in the store</li>
					<li><i>availableOnline</i>, which stores whether or not this t-shirt is available online</li>
				</ul>
				<i>budget</i> and <i>price</i> will be <b>doubles</b>, while <i>availableInStore</i> and <i>availableOnline</i> will be <b>booleans</b>. awesome!
				<br/><br/>
				secondly, let's translate each condition that we brainstormed earlier into some <b>boolean logic</b>.
				<br/>
				the first condition is that the t-shirt needs to be available either in the store or online. did you spot the <b>or</b> in there? in terms of boolean logic, the first condition is equivalent to <i>availableInStore</i> <b>||</b> <i>availableOnline</i>. onto the second condition!
				<br/>
				the second condition is that the price of the t-shirt needs to be less than or equal to our budget. did you spot the <b>less than or equal to</b> in there? the second condition is simply <i>price</i> <b>&lt;=</b> <i>budget</i>! (<b className="note">psst. need a reminder</b> on the comparison operators, such as <b>&lt;=</b>? check out the <b className="pageName">if statement page</b>!)
				<br/>
				the last thing we need to do is combine the two conditions together. remember that both the first condition and the second condition must be true in order for you to be able to buy this t-shirt. did you spot the <b>and</b> in there? in terms of boolean logic, this is equivalent to first condition <b>&&</b> second condition. by substituting "first condition" and "second condition" with what we wrote earlier, we get (<i>availableInStore</i> <b>||</b> <i>availableOnline</i>) <b>&&</b> <i>price</i> <b>&lt;=</b> <i>budget</i>. we put <b>()</b> around the first condition because we want the first condition to be individually evaluated first.
				<br/><br/>
				ready for the <b>big reveal</b>? you should have something like the following in your main method:
				<div className="code">
				double budget = 20.00;<br/>
				double price = 13.99;<br/>
				boolean availableInStore = false;<br/>
				boolean availableOnline = true;<br/>
				if((availableInStore || availableOnline) && price &lt;= budget)&#123;<br/>
				<p>
					System.out.println("yay! you can buy this super cute t-shirt!");
				</p>
				<br/>
				&#125;<br/>
				else&#123;<br/>
				<p>
					System.out.println("aww, you can't buy this super cute t-shirt...");
				</p>
				<br/>
				&#125;
				</div>
				you can set your variables to any values you like, but for our code above, here's what prints out in the console:
				<div className="code">
				yay! you can buy this super cute t-shirt!
				</div>
				<h3>pit stop</h3>
				you want to buy something from store a or store b. if available in one store, go to that store; if no store, then can't buy it. if both stores, then check to see which price is cheaper. two booleans, two prices. :).
				check if two people have the same initials given their names (find index of space and use substring to get first name and last name!!).
				<h3>!(!recap)</h3>
				<b>awesome!</b> you made it to recap!
				<br/><br/>
				we can use <b>!</b>, <b>&&</b>, <b>||</b>, and <b>()</b> to make our <b>if statements</b> more complex, allowing us to check multiple things in a single if statement. here is the <b>logical precedence</b>, meaning <b>which funky symbol you should perform first</b>:
				<br/>
				<ol>
					<li><b>()</b> = do this first</li>
					<li><b>!</b> = not this</li>
					<li><b>&&</b> = this and this</li>
					<li><b>||</b> = this or this</li>
				</ol>
				to end with, hamlet once said, <b>2B||!2B</b>, that is the question... i guess shakespeare did have a knack for coding...
				<br/><br/>
				...we know <b className="note">just for java</b> is as <b>addicting</b> as the newest Netflix binge, so what are you waiting for? <b className="pageName">keep coding!</b>
			</div>
		)
	}
}

export default BooleanLogic;