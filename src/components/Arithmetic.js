import React from 'react';

class Arithmetic extends React.Component{
	constructor(props){
		super(props)
	}


	render(){
		return (
			<div>
				we learned on the <b className="pageName">variables page</b> how to create <b>integers</b> and <b>doubles</b>. on this page, we are going to use these two variable types in <b>arithmetic operations</b>. oooh, fancy right? not really. <b>arithmetic</b> is just a cool-sounding word for the study of numbers and operations on them, such as addition, subtraction, multiplication, and division. here are the <b>five operations</b> and their corresponding <b>operator symbols</b> that java provides:
				<ul>
					<li><b>addition</b>, denoted using <b>+</b></li>
					<li><b>subtraction</b>, denoted using <b>-</b></li>
					<li><b>multiplication</b>, denoted using <b>*</b></li>
					<li><b>division</b>, denoted using <b>/</b></li>
					<li><b>modulus</b>, denoted using <b>%</b></li>
				</ul>
				you can apply any of the arithmetic operations listed above between:
				<ul>
					<li><b>two integers</b></li>
					<ul>
						<li>if you perform an operation between two integers, then the resulting value is an <b>integer</b></li>
					</ul>
					<li><b>two doubles</b></li>  
					<ul>
						<li>if you perform an operation between two doubles, then the resulting value is an <b>double</b></li>
					</ul>
					<li><b>an integer and a double</b></li>
					<ul>
						<li>if you perform an operation between an integer and a double, no matter the order, then the resulting value is an <b>double</b></li>
					</ul>
				</ul>
				note how the <b>type of the result</b> after the operation changes depending on <b>what types the operation is in between</b>. now that you understand this nuance, let's talk about each operation.
				<h3>+ addition +</h3>
				<b>addition</b> is denoted using <b>+</b> in java. here are some examples of addition between two integers, two doubles, and an integer and a double:
				<ul>
					<li>1 + 1 = 2</li>
					<li>3.5 + 5.73 = 9.23</li>
					<li>7 + 1.0 = 8.0</li>
					<li>9.9 + 2 = 11.9</li>
				</ul>
				<b>the standard notation</b>
				<br/>
				the standard notation for addition is to <b>change the value of a variable</b> to be equal to the result of <b>adding another variable to that variable</b>. here is the blueprint of the standard notation of adding another variable <i>i</i> to a variable <i>sum</i> (<b className="note">btw:</b> we can assume that <i>sum</i> and <i>i</i> have already been initialized):
				<br/>
				<b><i>sum</i> = <i>sum</i> + <i>i</i>;</b>
				<br/><br/>
				now let's use the standard notation in code! take a look below:
				<div className="code">
				<div className="comment">//add the tip to the price variable</div>
				<br/>
				double price = 13.99;
				<br/>
				double tip = 2.50;
				<br/>
				price = price + tip;
				</div>
				<br/>
				<b>the shorthand notation</b>
				<br/>
				the shorthand notation for addition is to use <b>+=</b> to change the value of a variable to be equal to <b>adding another variable to itself</b>. the standard notation and the shorthand notation do <b>exactly the same thing</b>. here is the blueprint of the shorthand notation of adding another variable <i>i</i> to a variable <i>sum</i> (<b className="note">btw:</b> we can assume that <i>sum</i> and <i>i</i> have already been initialized):
				<br/>
				<b><i>sum</i> += <i>i</i>;</b>
				<br/><br/>
				now let's convert the code above from standard notation into shorthand notation! take a look below:
				<div className="code">
				<div className="comment">//add the tip to the price variable</div>
				<br/>
				double price = 13.99;
				<br/>
				double tip = 2.50;
				<br/>
				price += tip;
				</div>
				<br/>
				<b>the shorthand of the shorthand notation</b>
				<br/>
				if you want to <b>increment</b> a variable, there is actually a shorthand of the shorthand notation that we can use that <b>automatically adds 1</b> to a variable using <b>++</b>. here is the blueprint of the shorthand of the shorthand notation of incrementing, or adding 1 to, a variable <i>sum</i> (<b className="note">btw:</b> we can assume that <i>sum</i> and <i>i</i> have already been initialized):
				<br/>
				<b><i>sum</i>++;</b>
				<br/><br/>
				now let's compare the standard notation, shorthand notation, and shorthand of the shorthand notation in code! take a look below:
				<div className="code">
				<div className="comment">//increment the variable num using the standard notation</div>
				<br/>
				int num = 0;
				<br/>
				num = num + 1;
				</div>
				<div className="code">
				<div className="comment">//increment the variable num using the shorthand notation</div>
				<br/>
				int num = 0;
				<br/>
				num += 1;
				</div>
				<div className="code">
				<div className="comment">//increment the variable num using the shorthand of the shorthand notation</div>
				<br/>
				int num = 0;
				<br/>
				num++;
				</div>
				<h3>- subtraction -</h3>
				<b>subtraction</b> is denoted using <b>-</b> in java. (<b className="note">btw:</b> subtraction is super similar to addition, so feel free to skim through this section if you understand it pretty well.) here are some examples of subtraction between two integers, two doubles, and an integer and a double:
				<ul>
					<li>1 - 4 = -3</li>
					<li>8.4 - 3.1 = 5.3</li>
					<li>22 - 0.001 = 21.999</li>
					<li>7.7 - 7 = 0.7</li>
				</ul>
				<b>the standard notation</b>
				<br/>
				the standard notation for subtraction is to <b>change the value of a variable</b> to be equal to the result of <b>subtracting another variable to that variable</b>. here is the blueprint of the standard notation of subtracting another variable <i>i</i> from a variable <i>difference</i> (<b className="note">btw:</b> we can assume that <i>difference</i> and <i>i</i> have already been initialized):
				<br/>
				<b><i>difference</i> = <i>difference</i> - <i>i</i>;</b>
				<br/><br/>
				now let's use the standard notation in code! take a look below:
				<div className="code">
				<div className="comment">//subtract the discount from the price variable</div>
				<br/>
				double price = 22.84;
				<br/>
				double discount = 5.00;
				<br/>
				price = price - discount;
				</div>
				<br/>
				<b>the shorthand notation</b>
				<br/>
				the shorthand notation for subtraction is to use <b>-=</b> to change the value of a variable to be equal to <b>subtracting another variable from itself</b>. the standard notation and the shorthand notation do <b>exactly the same thing</b>. here is the blueprint of the shorthand notation of subtracting another variable <i>i</i> from a variable <i>difference</i> (<b className="note">btw:</b> we can assume that <i>difference</i> and <i>i</i> have already been initialized):
				<br/>
				<b><i>difference</i> -= <i>i</i>;</b>
				<br/><br/>
				now let's convert the code above from standard notation into shorthand notation! take a look below:
				<div className="code">
				<div className="comment">//subtract the discount from the price variable</div>
				<br/>
				double price = 22.84;
				<br/>
				double discount = 5.00;
				<br/>
				price -= discount;
				</div>
				<br/>
				<b>the shorthand of the shorthand notation</b>
				<br/>
				if you want to <b>decrement</b> a variable, there is actually a shorthand of the shorthand notation that we can use that <b>automatically subtracts 1</b> from a variable using <b>--</b>. here is the blueprint of the shorthand of the shorthand notation of decrementing, or subtracting 1 from, a variable <i>difference</i> (<b className="note">btw:</b> we can assume that <i>difference</i> and <i>i</i> have already been initialized):
				<br/>
				<b><i>difference</i>++;</b>
				<br/><br/>
				now let's compare the standard notation, shorthand notation, and shorthand of the shorthand notation in code! take a look below:
				<div className="code">
				<div className="comment">//decrement the variable num using the standard notation</div>
				<br/>
				int num = 0;
				<br/>
				num = num - 1;
				</div>
				<div className="code">
				<div className="comment">//decrement the variable num using the shorthand notation</div>
				<br/>
				int num = 0;
				<br/>
				num -= 1;
				</div>
				<div className="code">
				<div className="comment">//decrement the variable num using the shorthand of the shorthand notation</div>
				<br/>
				int num = 0;
				<br/>
				num--;
				</div>
				<h3>* multiplication *</h3>
				<b>multiplication</b> is denoted using <b>*</b> in java. here are some examples of multiplication between two integers, two doubles, and an integer and a double:
				<ul>
					<li>3 * 3 = 9</li>
					<li>1.5 * 0.7 = 1.05</li>
					<li>2 * 4.4 = 8.8</li>
					<li>9.1 * 6 = 54.6</li>
				</ul>
				<b>the standard notation</b>
				<br/>
				the standard notation for multiplication is to <b>change the value of a variable</b> to be equal to the result of <b>multiplying the variable by another variable</b>. here is the blueprint of the standard notation of multiplying a variable <i>product</i> by another variable <i>i</i> (<b className="note">btw:</b> we can assume that <i>difference</i> and <i>i</i> have already been initialized):
				<br/>
				<b><i>product</i> = <i>product</i> * <i>i</i>;</b>
				<br/><br/>
				now let's use the standard notation in code! take a look below:
				<div className="code">
				<div className="comment">//multiply the price per cookie by the number of cookies to get the total</div>
				<br/>
				double price = 4.99;
				<br/>
				int cookies = 5;
				<br/>
				price = price * cookies;
				</div>
				<br/>
				<b>the shorthand notation</b>
				<br/>
				the shorthand notation for multiplication is to use <b>*=</b> to change the value of a variable to be equal to <b>multiplying itself by another variable</b>. the standard notation and the shorthand notation do <b>exactly the same thing</b>. here is the blueprint of the shorthand notation of multiplying a variable <i>product</i> by another variable <i>i</i> (<b className="note">btw:</b> we can assume that <i>product</i> and <i>i</i> have already been initialized):
				<br/>
				<b><i>product</i> *= <i>i</i>;</b>
				<br/><br/>
				now let's convert the code above from standard notation into shorthand notation! take a look below:
				<div className="code">
				<div className="comment">//multiply the price per cookie by the number of cookies to get the total</div>
				<br/>
				double price = 4.99;
				<br/>
				int cookies = 5;
				<br/>
				price *= cookies;
				</div>
				<h3>/ division /</h3>
				<b>division</b> is denoted using <b>/</b> in java. division in java is <b>slightly different</b> from division in real life because, as we saw earlier, the result of an arithmetic operation between two integers is an integer itself. this means that <b>dividing two integers will result in an integer</b>. you most probably are thinking, "okay. what's so bad about that?" well, for example, what would <b>3 / 2</b> be equal to? in real life, we would say that <b>3 / 2 = 1.5</b>, but 1.5 is a <b>double</b>, and we need it to be an <b>int</b>. therefore, in java, <b>3 / 2 = 1</b> because 1.5 gets <b>rounded down</b> to 1. the quotient when you divide by two integers <b>always get rounded down to the nearest integer</b>. you can also think about it as <b>the decimal portion of the quotient gets truncated</b>. on the other hand, if you're performing division between two doubles or an integer and a double, as we said earlier the result should be a <b>double</b>, so the <b>decimal portion remains</b> in the quotient. here are some examples of division between two integers, two doubles, and an integer and a double:
				<ul>
					<li>9 / 4 = 2</li>
					<li>9.0 / 4.0 = 2.25</li>
					<li>9.0 / 4 = 2.25</li>
					<li>9 / 4.0 = 2.25</li>
				</ul>
				<b>the standard notation</b>
				<br/>
				the standard notation for division is to <b>change the value of a variable</b> to be equal to the result of <b>dividing the variable by another variable</b>. here is the blueprint of the standard notation of dividing a variable <i>quotient</i> by another variable <i>i</i> (<b className="note">btw:</b> we can assume that <i>quotient</i> and <i>i</i> have already been initialized):
				<br/>
				<b><i>quotient</i> = <i>quotient</i> / <i>i</i>;</b>
				<br/><br/>
				now let's use the standard notation in code! take a look below:
				<div className="code">
				<div className="comment">//divide the total price by the number of people to split the price</div>
				<br/>
				double price = 84.99;
				<br/>
				int people = 10;
				<br/>
				price = price / people;
				</div>
				<br/>
				<b>the shorthand notation</b>
				<br/>
				the shorthand notation for division is to use <b>/=</b> to change the value of a variable to be equal to <b>dividing itself by another variable</b>. the standard notation and the shorthand notation do <b>exactly the same thing</b>. here is the blueprint of the shorthand notation of dividing a variable <i>quotient</i> by another variable <i>i</i> (<b className="note">btw:</b> we can assume that <i>quotient</i> and <i>i</i> have already been initialized):
				<br/>
				<b><i>product</i> *= <i>i</i>;</b>
				<br/><br/>
				now let's convert the code above from standard notation into shorthand notation! take a look below:
				<div className="code">
				<div className="comment">//divide the total price by the number of people to split the price</div>
				<br/>
				double price = 84.99;
				<br/>
				int people = 10;
				<br/>
				price /= people;
				</div>
				<h3>% modulus %</h3>
				<b>modulus</b> is a funky word which means <b>the remainder after you divide two numbers</b> and is denoted using <b>%</b>. modulus is most commonly used <b>between integers</b>, since integer division as we just learned rounds down to the nearest integer, leaving a remainder behind. let's revisit the example we had when discussing integer division: <b>3 / 2</b>. we already know that <b>3 / 2 = 1</b>, but what about <b>3 % 2</b>? (<b className="note">btw:</b> 3 % 2 is pronounced <b>"three mod two"</b>.) if you guessed <b>1</b>, you're correct! <b>3 % 2 = 1</b> because 3 / 2 is 1 <b>with a remainder of 1</b>. here are some more examples using modulus between integers:
				<ul>
					<li>22 % 4 = 2 because 22 / 4 is 5 with a remainder of 2</li>
					<li>3 % 5 = 3 because 3 / 5 is 0 with a remainder of 3</li>
					<li>14 % 7 = 0 because 14 / 7 is 2 with a remainder of 0</li>
				</ul>
				<b>the standard notation</b>
				<br/>
				the standard notation for modulus is to <b>change the value of a variable</b> to be equal to the result of <b>getting the remainder after dividing the variable by another variable</b>. here is the blueprint of the standard notation of getting the remainder after dividing a variable <i>remainder</i> by another variable <i>i</i> (<b className="note">btw:</b> we can assume that <i>remainder</i> and <i>i</i> have already been initialized):
				<br/>
				<b><i>remainder</i> = <i>remainder</i> % <i>i</i>;</b>
				<br/><br/>
				now let's use the standard notation in code! take a look below:
				<div className="code">
				<div className="comment">//get the leftover apples after dividing apples between friends</div>
				<br/>
				int apples = 8;
				<br/>
				int friends = 5;
				<br/>
				apples = apples % friends;
				</div>
				<br/>
				<b>the shorthand notation</b>
				<br/>
				the shorthand notation for modulus is to use <b>%=</b> to change the value of a variable to be equal to <b>getting the remainder after dividing itself by another variable</b>. the standard notation and the shorthand notation do <b>exactly the same thing</b>. here is the blueprint of the shorthand notation of getting the remainder after dividing a variable <i>remainder</i> by another variable <i>i</i> (<b className="note">btw:</b> we can assume that <i>remainder</i> and <i>i</i> have already been initialized):
				<br/>
				<b><i>remainder</i> %= <i>i</i>;</b>
				<br/><br/>
				now let's convert the code above from standard notation into shorthand notation! take a look below:
				<div className="code">
				<div className="comment">//get the leftover apples after dividing apples between friends</div>
				<br/>
				int apples = 8;
				<br/>
				int friends = 5;
				<br/>
				apples %= friends;
				</div>
				<br/>
				<b>divisibility, a common application of modulus</b>
				<br/>
				modulus is often used to figure out if a certain integer is <b>divisible</b> by another integer. you might be wondering, <b>"how can modulus be used in divisibility?"</b> great question! this whole section is dedicated to answering this question. let's dive into it!
				<br/>
				as we stated earlier, modulus represents the <b>remainder after dividing two integers</b>; in other words, modulus is the <b>leftover</b>. now for divisibility: if a number <i>x</i> is <b>divisible</b> by a number <i>y</i>, that means that <i>x</i><b>/</b><i>y</i> is an <b>integer</b>. in other words, the <b>remainder</b> when you divide <i>x</i> by <i>y</i> should be equal to <b>0</b>. have you connected the dots? <b>a number <i>x</i> is divisible by another number <i>y</i> when x % y = 0.</b> now let's translate this into lines of code:
				<div className="code">
				<div className="comment">//if an integer % 2 = 0, then the integer is even; otherwise, the integer is odd</div>
				<br/>
				int x = 8;
				<br/>
				int y = 2;
				<br/>
				System.out.println(x % y);
				</div>
				because 8 is an even number, <b>0</b> should be printed to the console. let's take a look:
				<div className="code">
				0
				</div>
				awesome job!
				<h3>:) recap :)</h3>
				<b>gr8!</b> you made it to recap!
				<br/><br/>
				here are the five arithmetic operations we learned about on this page along with their operators:
				<ul>
					<li><b>addition</b>, denoted using <b>+</b></li>
					<li><b>subtraction</b>, denoted using <b>-</b></li>
					<li><b>multiplication</b>, denoted using <b>*</b></li>
					<li><b>division</b>, denoted using <b>/</b></li>
					<li><b>modulus</b>, denoted using <b>%</b></li>
				</ul>
				remember that <b>modulus</b> means the <b>remainder</b> after dividing and is commonly used in <b>divisibility</b>.
				<br/><br/>
				here is the blueprint for how the resulting variable type changes based on whether you are performing an operation between <b>two integers</b>, <b>two doubles</b>, or <b>an integer and a double</b>:
				<br/>
				<b>
				<i>&lt;integer&gt;</i> <i>&lt;operator&gt;</i> <i>&lt;integer&gt;</i> = <i>&lt;integer&gt;</i>
				<br/>
				<i>&lt;double&gt;</i> <i>&lt;operator&gt;</i> <i>&lt;double&gt;</i> = <i>&lt;double&gt;</i>
				<br/>
				<i>&lt;integer&gt;</i> <i>&lt;operator&gt;</i> <i>&lt;double&gt;</i> = <i>&lt;double&gt;</i>
				<br/>
				<i>&lt;double&gt;</i> <i>&lt;operator&gt;</i> <i>&lt;integer&gt;</i> = <i>&lt;double&gt;</i>
				</b>
				<br/><br/>
				here is the blueprint for both the <b>standard notation</b> and the <b>shorthand notation</b> for performing an arithmetic operation on between <i>variable_1</i> and <i>variable_2</i>, where <i>variable_1</i> stores the result of the operation and <i>operator</i> can be <b>+</b>, <b>-</b>, <b>*</b>, <b>/</b>, or <b>%</b>:
				<br/>
				<b><i>&lt;variable_1&gt;</i> = <i>&lt;variable_1&gt;</i> <i>&lt;operator&gt;</i> <i>&lt;variable_2&gt;</i>;</b>
				<br/>
				<b><i>&lt;variable_1&gt;</i> <i>&lt;operator&gt;</i>= <i>&lt;variable_2&gt;</i>;</b>
				<br/><br/>
				and finally, if you want to <b>increment</b>, which means add 1 to, or <b>decrement</b>, which means subtract 1 from, a variable, you can use <b>++</b> and <b>--</b>, respectively.
				<br/><br/>
				...we know <b className="note">just for java</b> is as <b>addicting</b> as the newest Netflix binge, so what are you waiting for? <b className="pageName">keep coding!</b>
			</div>
		)
	}
}

export default Arithmetic;