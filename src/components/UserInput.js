import React from 'react';

class UserInput extends React.Component{
	constructor(props){
		super(props)
	}


	render(){
		return (
			<div>
				sometimes in our program we want to get information from the user, such as their name. you will learn how to get <b>user input from the console</b>, which will allow you to create super cool programs that can actually interact with the user!
				<h3>just some setting up we have to do</h3>
				there are two steps we need to do before we can actually start getting input from the user:
				<ol>
					<li>we need to import the <b>Scanner</b> class to help us</li>
					<li>we need to create a <b>Scanner</b> variable in our main method, which we will use to get user input</li>
				</ol>
				let's walk through each of these steps...
				<br/>
				<br/>
				<b>step 1: import the Scanner class</b>
				<br/>
				we need to import the Scanner class to help us get user input. to do this, type the following line of code at the very top of your program:
				<br/>
				<div className="code">import java.util.Scanner;</div>
				once we import the Scanner class, then we can create a Scanner variable (<b className="note">btw:</b> make sure to capitalize the S in Scanner).
				<br/>
				<br/>
				<b>step 2: create a Scanner variable</b>
				<br/>
				creating a Scanner variable is slightly different than the other variables we have created so far, since it uses a different construction. type the following line of code in your main method to create a Scanner variable:
				<br/>
				<div className="code">Scanner in = new Scanner(System.in);</div>
				this means that we can now get user input from the console (<b className="note">btw:</b> the console is where you see anything printed out, and that is also where the user will enter their input).
				<h3>finally! let's get the user's name</h3>
				now let's learn how to get user input. we are going to create a program that asks the user to type their name and says hello to them.
				there are three steps we need to do in order to create our program:
				<ol start="3">
					<li><b>print</b> out a prompt for the user to answer to</li>
					<li>get the <b>user input</b> and store it in a <b>variable</b></li>
					<li>do something with the user input in your program</li>
				</ol>
				let's walk through each of these steps...
				<br/>
				<br/>
				<b>step 3: print out a prompt</b>
				<br/>
				whenever we print out a prompt for the user to answer to, we usually want the user to answer on the same line as the prompt. this means that we will have to use <b>System.out.print()</b> when we are printing a prompt for the user to answer to (<b className="note">btw:</b> remember that <b>System.out.print()</b> prints whatever is in between the parentheses without creating a new line, or entering, after).
				<br/>
				since we are printing the prompt on the same line as where the user will answer, we want a space between the prompt and the user input, so make sure to add a space at the end of the prompt.
				<br/>
				<div className="code">System.out.print("What is your name? ");</div>
				<br/>
				<b>step 4: get and store the user input</b>
				<br/>
				in order to get and store user input, we use our Scanner variable <i>in</i> that we created in step 2. we can use <b>in.nextLine()</b> to retrieve what the user enters. finally, we can store the user input in a String variable.
				<br/>
				below is code that gets user input and stores it in a variable called <i>name</i>:
				<br/>
				<div className="code">String name = in.nextLine();</div>
				<br/>
				<b>step 5: do something with their input</b>
				<br/>
				this step will vary depending on what your program is supposed to do. 
				<br/>
				for our program, we want to say hello to the user. now that we have the user's name stored in the variable <i>name</i>, we can print out a greeting to the user saying "hello <i>name</i>". to do this, we can use <b>String concatenation</b>. (<b className="note">psst. need a reminder</b> of what in the world String concatenation is? check out the <b className="pageName">Strings page</b>!) to add our variable <i>name</i> to "hello " (<b className="note">btw:</b> remember that you can use <b>+</b> to add a variable to a <b>String</b>). make sure you add a space after hello so that there is a space between hello and the user's name.
				<div className="code">System.out.println("hello " + name);</div>
				awesome! we now have a fully functional program that asks the user for their name and prints out "hello <i>name</i>". just one final step left...
				<h3>aw it's time to close</h3>
				once you finish getting user input in the program, it is always good practice to:
				<ol start="6">
					<li>close your Scanner</li>
				</ol>
				<b>step 6: close your Scanner</b>
				<br/>
				to close your Scanner, type the following line of code:
				<div className="code">in.close();</div>
				<br/>
				<b>sweet!</b> now you know all 6 steps to get user input!
				<h3>how about getting the user's age?</h3>
				sometimes we want to get user input not as a <b>String</b>, but as another variable type. for example, what if we wanted to ask the user for their age instead of their name? age is an integer whereas name is text, so we will need to get the user input as an <b>int</b> instead of as a <b>String</b>. it's actually a very simple fix! all we need to do is change <b>nextLine()</b> to <b>nextInt()</b> and make our variable an <b>int</b> instead of a <b>String</b>.
				<br/>
				now let's combine everything we learned to type code that asks the user for their age and prints it out! (<b className="note">hint:</b> follow the 6 steps we did to ask the user for their name, and don't forget to use <b>in.nextInt()</b> since we are storing the user input as an integer.) your code may look something like this:
				<div className="code">
				<div className="comment">//we will assume that we have imported java.util.Scanner already</div>
				<br/>
				Scanner in = new Scanner(System.in);
				<br/>
				<div className="comment">//make sure to use print instead of println so that the user answers on the same line as the prompt</div>
				<br/>
				System.out.print("Enter your age: ");
				<br/>
				<div className="comment">//note that we changed nextLine() to nextInt() and made our variable an int instead of a String</div>
				<br/>
				int age = in.nextInt();
				<br/>
				<div className="comment">//print out the age of the user using String concatenation</div>
				<br/>
				System.out.println("You're " + age + " years old!");
				<br/>
				<div className="comment">//it's always good practice to close your Scanner after you finish using it</div>
				<br/>
				in.close();
				</div>
				sweet! (<b className="note">psst. need a reminder</b> on why you see a bunch of <b>//</b> in the sample code above? check out the <b className="pageName">comments page</b>!)
				<h3>incoming! user input code dump</h3>
				we can get a <b>String</b>, <b>int</b>, <b>double</b> or <b>boolean</b> (<b className="note">psst. need a reminder</b> of what all of these variable types are? check out the <b className="pageName">variables page</b>!) as user input:
				<br/>
				<br/>
				<table>
				  <tr>
				    <td>String</td>
				    <td>in.nextLine()</td>
				  </tr>
				  <tr>
				    <td>int</td>
				    <td>in.nextInt()</td>
				  </tr>
				  <tr>
				    <td>double</td>
				    <td>in.nextDouble()</td>
				  </tr>
				  <tr>
				    <td>boolean</td>
				    <td>in.nextBoolean()</td>
				  </tr>
				</table>
				<h3>it do be time for a recap</h3>
				<b>congratulations!</b> you made it to recap!
				<br/>
				<br/>
				there are 6 steps that you need to do to get <b>user input</b>:
				<ol>
					<li>import the Scanner class</li>
					<li>create a Scanner variable</li>
					<li>print out a prompt</li>
					<li>get and store the user input</li>
					<li>do something with their input</li>
					<li>close your Scanner</li>
				</ol>
				depending on what <b>variable type</b> you are trying to get, the code you write will look slightly different:
				<br/>
				<br/>
				<table>
				  <tr>
				    <td>String</td>
				    <td>in.nextLine()</td>
				  </tr>
				  <tr>
				    <td>int</td>
				    <td>in.nextInt()</td>
				  </tr>
				  <tr>
				    <td>double</td>
				    <td>in.nextDouble()</td>
				  </tr>
				  <tr>
				    <td>boolean</td>
				    <td>in.nextBoolean()</td>
				  </tr>
				</table>
				<br/>
				...we know <b className="note">just for java</b> is as <b>addicting</b> as the newest Netflix binge, so what are you waiting for? <b className="pageName">keep coding!</b>
			</div>
		)
	}
}

export default UserInput;