import React from 'react';

class Constants extends React.Component{
	constructor(props){
		super(props)
	}


	render(){
		return (
			<div>
				let's go down memory lane to the <b className="pageName">variables page</b> where you learned how to initialize a variable and change its value. now, we are going to learn about a special type of variable called a <b>constant</b>. in java, a constant is <b>a variable whose value cannot be changed once it has been initialized</b>. a constant is an <b>immutable</b> variable, or unable to be changed. on the other hand, the variables you have been creating so far have all been <b>mutable</b>, or able to be changed. (<b className="note">btw:</b> from here on out, whenever we say "constant", we are referencing an immutable variable, and whenever we say "variable", you can assume that we are referencing a mutable variable, the ones that you've been creating so far.)
				<h3>wait, so how do you make this so-called "special variable"?</h3>
				in order to create a constant, we can use the <b>final</b> keyword. you can remember that the keyword is final because you are essentially initializing the constant variable to its <b>final value</b>, since it can't be changed. here is the blueprint for <b>creating a constant</b>:<br/>
				<b>final <i>&lt;type&gt; &lt;name&gt; = &lt;immutable_value&gt;;</i></b><br/><br/>
				here's some example code that creates a constant String variable to store "avocado", my favorite fruit (<b className="note">btw:</b> yes, an avocado is a fruit):
				<div className="code">
				final String FAVORITE_FRUIT = "avocado";
				</div>
				<h3>just some "super exciting" naming conventions that i have to talk about</h3>
				when naming variables and constants, there are some <b>naming conventions</b> that coders tend to use that you may find helpful:
				<ul>
					<li>for <b>variables</b>, use camelCase</li>
					<li>for <b>constants</b>, use UPPERCASE_WITH_UNDERSCORES</li> 
				</ul>
				compare the two lines of code below:
				<div className="code">
				double pricePerAvocado = 2.10; <div className="comment">//variable</div>
				</div>
				<div className="code">
				final double PRICE_PER_AVOCADO = 2.10; <div className="comment">//constant</div>
				</div>
				<h3>ok enough blabbering about naming conventions; let's get an example</h3>
				let's try to create a program that asks the user how many avocados they want to buy from our avocado store, and prints out the price that the user has to pay for the number of avocados they purchased!
				<br/><br/>
				the first we need to do is some <b>setup</b> so that we can get <b>user input</b> in our program. this involves <b>importing Scanner</b> and <b>creating a Scanner variable</b>. (<b className="note">psst. need a reminder</b> of the six steps you need to do in order to get user input? check out the <b className="pageName">user input page</b>!) 
				<br/>next, we need to create two <b>constants</b>: one to store the name of your avocado store, and one to store the price per avocado. print a welcome message for the user that incorporates your avocado store's name. (<b className="note">hint:</b> you can concatenate, or add, a variable to the end of a String using the <b>+</b> operator.)
				<br/>then, <b>print out a prompt</b> asking the user how many avocados they want to buy, and store the user input in an <b>int</b>.
				<br/>finally, calculate and print the <b>total price</b> the user has to pay for the avocados they purchased. (<b className="note">hint:</b> to calculate the total price, multiply the price per avocado by the number of avocados the user wants to buy.)
				<br/><br/>let's see it coded out!
				<br/><br/>at the very top of our program, we type the following line of code to import Scanner:
				<div className="code">
				import java.util.Scanner;
				</div>
				and here's the code inside our main method:
				<div className="code">
				<div className="comment">//create a Scanner variable to get user input</div>
				<br/>
				Scanner in = new Scanner(System.in);
				<br/>
				<div className="comment">//create two constants using the final keyword</div>
				<br/>
				final String AVOCADO_STORE = "Avo's Avocados";
				<br/>
				final double PRICE_PER_AVOCADO = 1.99;
				<br/>
				<div className="comment">//print out a welcome message</div>
				<br/>
				System.out.println("Welcome to " + AVOCADO_STORE + "!");
				<br/>
				<div className="comment">//use System.out.print() so that the user can answer on the same line as the prompt</div>
				<br/>
				System.out.print("How many avocados would you like to purchase? ");
				<br/>
				<div className="comment">//store the user input as an integer</div>
				<br/>
				int avocados = in.nextInt();
				<br/>
				<div className="comment">//calculate the total price the user has to pay and print it out</div>
				<br/>
				double totalPrice = PRICE_PER_AVOCADO * avocados;
				<br/>
				System.out.println("Total: $" + totalPrice);
				<br/>
				<div className="comment">//print out a final message</div>
				<br/>
				System.out.println("Thanks for shopping at " + AVOCADO_STORE + "!");
				</div>
				<h3>but what happens if i do try to change the value of a constant?</h3>
				for example, say you type the following code:
				<div className="code">
				final int MY_AVOCADOS = 13;
				<br/>
				<div className="comment">//gotta love my avocados</div>
				<br/>
				MY_AVOCADOS++;
				</div>
				as much as i love avocados, this code = <b>no no</b>. if you ever attempt changing the value of a constant in your program, you will get an <b>error</b>. and red text in the console = <b>no no</b>. so don't change the value of a constant. <b>just. don't. do. it.</b>
				<h3>final(ly), it's recap</h3>
				<b>awesome!</b> you made it to recap!
				<br/><br/>
				to kick off our recap, here's a nice little <b>vocab dump</b> for you:
				<ul>
					<li><b>constant</b> – a special type of variable whose value cannot be changed once it has been initialized</li>
					<li><b>immutable</b> – unable to be changed</li>
					<li><b>mutable</b> – able to be changed</li>
				</ul>
				and here is the blueprint for <b>creating a constant</b>:<br/>
				<b>final <i>&lt;type&gt; &lt;name&gt; = &lt;immutable_value&gt;;</i></b>
				<br/><br/>
				and last but not least, remember that if you ever attempt to change the value of a constant in your program, you will get an <b>error</b>. sweet!
				<br/><br/>
				...we know <b className="note">just for java</b> is as <b>addicting</b> as the newest Netflix binge, so what are you waiting for? <b className="pageName">keep coding!</b>
			</div>
		)
	}
}

export default Constants;