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
				<br/><br/>
				(<b className="note">btw:</b> we have organized this page so that you learn about each wack symbol and then combine all the wack symbols in the end. after learning about each symbol, there will be a <b>it do be time to code</b> section where you can use the concept you just learned in an <b>if statement</b>... and we will synthesize many other concepts that we have learned in previous pages as well! but don't worry, we will give you helpful reminders along the way!)
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
				<br/>
				<b>it do be time to code</b>
				<br/>
				make a program that checks if a password that the user enters is not empty. (<b className="note">psst. need a reminder</b> on how in the world you can get and store user input? check out the <b className="pageName">user input page</b>!) (<b className="note">psst. need a reminder</b> on how to check if a String is empty or not? check out the <b className="pageName">Strings page</b>!)
				<br/><br/>
				ready for the <b>big reveal</b>? the first thing you need to do is import the <b>Scanner</b> class to help you get user input. at the <b>top of your program</b>, you should have the following line of code:
				<div className="code">
				import java.util.Scanner;
				</div>
				and you should have something like the following in your <b>main method</b>:
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
				<br/>
				<b>it do be time to code</b>
				<br/>
				make a program that creates two boolean variables: <i>isSunny</i> and <i>beachOpen</i>. if it's sunny and the beach is open, then print out a message saying "it's a great day to go to the beach!" (<b className="note">psst. need a reminder</b> on how to print a message to the console? check out the <b className="pageName">printing page</b>!)
				<br/><br/>
				ready for the <b>big reveal</b>? you should have something like the following in your <b>main method</b>:
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
				you can set your variables to any values you like, but for my code above, <b>nothing</b> is printed out in the <b>console</b>.
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
				<br/>
				<b>it do be time to code</b>
				<br/>
				make a program that checks if your favorite number is divisible by either 3 or 5 (<b className="note">psst. need a reminder</b> on how you can check divisiblity using the <b>%</b> operator? check out the <b className="pageName">arithmetics page</b> and the <b className="pageName">if statement page</b>!)
				<br/><br/>
				ready for the <b>big reveal</b>? you should have something like the following in your <b>main method</b>: 
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
					<li><b>()</b></li>
					<li><b>!</b></li>
					<li><b>&&</b></li>
					<li><b>||</b></li>
				</ol>
				just like with arithmetic, <b>parentheses</b> are used to signify what needs to happen first. between <b>!</b>, <b>&&</b>, and <b>||</b>, you always do <b>!</b> first, then <b>&&</b>, and finally <b>||</b>. here is a blueprint on <b>how you should solve boolean logic problems using logical precedence</b>:
				<ol>
					<li>do we have <b>()</b>? if so, then repeat each of these steps with the expression inside the <b>()</b>.</li>
					<li>do we have <b>!</b>? if so, then simplify each <b>!</b> expression going from left to right.</li>
					<li>do we have <b>&&</b>? if so, then simplify each <b>&&</b> expression going from left to right.</li>
					<li>do we have <b>||</b>? if so, then simplify each <b>||</b> expression going from left to right.</li>
				</ol>
				after completing this blueprint, you should have a single boolean: <b>true</b> or <b>false</b>. to better understand this blueprint, let's take a look at some <b>examples</b>:
				<br/><br/>
				<b>true || !false && false</b>
				<ol>
					<li>do we have <b>()</b>? <b>no.</b></li>
					<li>do we have <b>!</b>? <b>yes.</b></li>
					<ul>
						<li>!false = true, so now we have <b>true || true && false</b></li>
					</ul>
					<li>do we have <b>&&</b>? <b>yes.</b></li>
					<ul>
						<li>true && false = false, so now we have <b>true || false</b></li>
					</ul>
					<li>do we have <b>||</b>? <b>yes.</b></li>
					<ul>
						<li>true || false = true, so now we have <b>true</b></li>
					</ul>
				</ol>
				thus, true || !false && false = <b>true</b>.
				<br/><br/>
				<b>!(true && false || false)</b>
				<ol>
					<li>do we have <b>()</b>? <b>yes.</b></li>
					<ul>
						<li>true && false || false should be done first</li>
						<ol>
							<li>do we have <b>()</b>? <b>no.</b></li>
							<li>do we have <b>!</b>? <b>no.</b></li>
							<li>do we have <b>&&</b>? <b>yes.</b></li>
							<ul>
								<li>true && false = false, so now we have <b>false || false</b></li>
							</ul>
							<li>do we have <b>||</b>? <b>yes.</b></li>
							<ul>
								<li>false || false = false, so now we have <b>false</b></li>
							</ul>
						</ol>
						<li>so now we have <b>!false</b></li>
					</ul>
					<li>do we have <b>!</b>? <b>yes.</b></li>
					<ul>
						<li>!false = true, so now we have <b>true</b></li>
					</ul>
					<li>do we have <b>&&</b>? <b>no.</b></li>
					<li>do we have <b>||</b>? <b>no.</b></li>
				</ol>
				thus, !(true && false || false) = <b>true</b>.
				<br/><br/>
				<b>false && (true || true) && true</b>
				<ol>
					<li>do we have <b>()</b>? <b>yes.</b></li>
					<ul>
						<li>true || true should be done first</li>
						<ol>
							<li>do we have <b>()</b>? <b>no.</b></li>
							<li>do we have <b>!</b>? <b>no.</b></li>
							<li>do we have <b>&&</b>? <b>no.</b></li>
							<li>do we have <b>||</b>? <b>yes.</b></li>
							<ul>
								<li>true || true = true, so now we have <b>true</b></li>
							</ul>
						</ol>
						<li>so now we have <b>false && true</b></li>
					</ul>
					<li>do we have <b>!</b>? <b>no.</b></li>
					<li>do we have <b>&&</b>? <b>yes.</b></li>
					<ul>
						<li>false && true && false = false && false = false, so now we have <b>false</b></li>
					</ul>
					<li>do we have <b>||</b>? <b>no.</b></li>
				</ol>
				thus, false && (true || true) && true = <b>false</b>.
				<br/><br/>
				hopefully after some examples the blueprint for solving boolean logic problems using logical precedence made sense. let's now combine everything we learned on this page for one final <b>it do be time to code</b>...
				<br/><br/>
				<b>it do be time to code</b>
				<br/>
				make a program that checks if you can purchase the new outfit that you want. here is a list of steps you need to do to complete this program:
				<ol>
					<li>create two variables that store the prices of the top and bottom of your outfit</li>
					<li>create a variable to store the total price of the outfit</li>
					<li>create two variables that represent your minimum and maximum budget</li>
					<li>create a boolean variable that represent if the top you want is in stock</li>
					<li>repeat the previous step for your bottom</li>
					<li>create a boolean variable that represents if the top you want is available for online delivery</li>
					<li>repeat the previous step for your bottom</li>
					<li>if both the top and bottom are in stock, or if both the top and bottom are available for online delivery, and if the total price for your outfit is in your budget range, then print out a message telling the user that they can purchase their new outfit</li>
					<li>otherwise, print out a message telling the user that they can't purchase their new outfit</li>
				</ol>
				i know that was a lot of steps, but <b>you can do it!</b> good luck!
				<br/><br/>
				ready for the <b>big reveal</b>? you should have something like the following in your <b>main method</b>: 
				<div className="code">
				<div className="comment">//step 1</div>
				<br/>
				double topPrice = 9.99;
				<br/>
				double bottomPrice = 13.23;
				<br/>
				<div className="comment">//step 2</div>
				<br/>
				double outfitPrice = topPrice + bottomPrice;
				<br/>
				<div className="comment">//step 3</div>
				<br/>
				double minBudget = 10.00;
				<br/>
				double maxBudget = 24.99;
				<br/>
				<div className="comment">//steps 4 and 5</div>
				<br/>
				boolean topInStock = true;
				<br/>
				boolean bottomInStock = false;
				<br/>
				<div className="comment">//steps 6 and 7</div>
				<br/>
				boolean topAvailableForDelivery = true;
				<br/>
				boolean bottomAvailableForDelivery = true;
				<br/>
				<div className="comment">//steps 8 and 9</div>
				<br/>
				if((topInStock && bottomInStock || topAvailableForDelivery && bottomAvailableForDelivery) && (outfitPrice &gt;= minBudget && outfitPrice &lt;= maxBudget)) &#123;
				<br/>
				<p>
					System.out.println("You can purchase your new outfit! :)");
				</p>
				<br/>
				&#125; else &#123;
				<br/>
				<p>
					System.out.println("You can't purchase your new outfit! :(")
				</p>
				<br/>
				&#125;
				</div>
				you can set your variables to any values you like, but for my code above, the following is printed out in the <b>console</b>:
				<div className="code">
				You can purchase your new outfit! :)
				</div>
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