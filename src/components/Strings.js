import React from 'react';

class Strings extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		return (
			<div>
				As we learned on the <b className="pageName">variables page</b>, <b>Strings</b> are used to store text and are denoted using double quotation marks. Strings are different from the other variable types that we have learned about so far – integers, doubles, characters, booleans. (<b className="note">btw:</b> the difference you may have noticed is that <b>String</b> has a capital first letter whereas <b>int</b>, <b>double</b>, <b>char</b>, and <b>boolean</b> are all lowercase.) Strings are special, and that's why we've dedicated a whole page to them!
				<h3>hello world</h3>
				primitive types
				<h3>h e l l o w o r l d</h3>
				let's redefine what a String is: <b>a String is just a bunch of characters</b>. this means that we can extract specific characters in a String.
				<br/>
				we can access characters in a String through their <b>indexes</b>. indexing is a <b>numbering system that starts at 0</b>. not at 1. at 0. we cannot emphasize that enough. each character in a String has an <b>index</b>, or a <b>number describing its position in the String</b>. 
				<br/>
				here are the indexes of each character in the classic String "hello world":
				<br/>
				<br/>
				<table>
				  <tr>
				    <td>'h'</td>
				    <td>'e'</td>
				    <td>'l'</td>
				    <td>'l'</td>
				    <td>'o'</td>
				    <td>' '</td>
				    <td>'w'</td>
				    <td>'o'</td>
				    <td>'r'</td>
				    <td>'l'</td>
				    <td>'d'</td>
				  </tr>
				  <tr>
				    <td>0</td>
				    <td>1</td>
				    <td>2</td>
				    <td>3</td>
				    <td>4</td>
				    <td>5</td>
				    <td>6</td>
				    <td>7</td>
				    <td>8</td>
				    <td>9</td>
				    <td>10</td>
				  </tr>
				</table>
				<br />
				the index of 'h' is 0, the index of 'e' is 1, the index of the first 'l' is 2, the index of the second 'l' is 3, and so on... (<b className="note">btw:</b> characters have single quotes around them while Strings have double quotes around them.)
				<h3>h</h3>
				now that you understand <b>indexing</b> – a fundamental concept that will become important again in later topics – let's take a look at the blueprint explaining how to access characters in a String using their indexes (<b className="note">btw:</b> let's assume that we have already created a String variable called <i>str</i> from which we will extract a character):
				<br/>
				<b>str.charAt(<i>&lt;index&gt;</i>)</b>
				<br/><br/>
				let's see <b>charAt()</b> in action!
				<div className="code"> 
				String bestWebsite = "just for java";
				<br/>
				char u = bestWebsite.charAt(1);
				<br/>
				char t = bestWebsite.charAt(3);
				<br/>
				char r = bestWebsite.charAt(7);
				<br/>
				char v = bestWebsite.charAt(11);
				</div>
				still confused? don't worry! let's take a look at the indexes of each character in "just for java":
				<br/><br/>
				<table>
				  <tr>
				    <td>'j'</td>
				    <td>'u'</td>
				    <td>'s'</td>
				    <td>'t'</td>
				    <td>' '</td>
				    <td>'f'</td>
				    <td>'o'</td>
				    <td>'r'</td>
				    <td>' '</td>
				    <td>'j'</td>
				    <td>'a'</td>
				    <td>'v'</td>
				    <td>'a'</td>
				  </tr>
				  <tr>
				    <td>0</td>
				    <td>1</td>
				    <td>2</td>
				    <td>3</td>
				    <td>4</td>
				    <td>5</td>
				    <td>6</td>
				    <td>7</td>
				    <td>8</td>
				    <td>9</td>
				    <td>10</td>
				    <td>11</td>
				    <td>12</td>
				  </tr>
				</table>
				<br/>
				the index of 'u' is 1, the index of 't' is 3, the index of 'r' is 7, and the index of 'v' is 11. by putting the proper index between the parentheses in <b>charAt()</b>, we can extract the character in "just for java" at that index. 
				<br/><br/>
				<b>pretty cool, eh?</b> but things get cooler when you can extract more than just a character from a String... <b>onward!</b>
				<h3>hello wo</h3>
				what if we want to not simply get a single character from a String, but a whole portion of the String? for example, let's say we wanted to get "hello" from the String "hello world". we can do this using <b>substring()</b>, which will retrieve a <b>substring</b>, or a smaller portion of a String, based on the start and end indexes of that substring. let's hop over to the blueprint (<b className="note">btw:</b> let's assume that we have already created a String variable called <i>str</i> from which we will extract a substring):
				<br/>
				<b>str.substring(<i>&lt;start_index&gt;</i>, <i>&lt;end_index&gt;</i>)</b>
				<br/><br/>
				the <i>start_index</i> is the index where the substring begins, and is <b>inclusive</b>, meaning that the character at the <i>start_index</i> is included in the substring. the <i>end_index</i> is the index where the substring ends, and is <b>exclusive</b>, meaning that the character at the <i>end_index</i> is excluded from the substring. it is crucial to remember that the <i>start_index</i> is <b>inclusive</b> whereas the <i>end_index</i> is <b>exclusive</b>.
				<br/><br/>
				there is also another way to get a substring, where you only provide the <i>start_index</i> and the substring from the <i>start_index</i> till the end of the String is retrieved. let's hop over to the blueprint (<b className="note">btw:</b> let's assume that we have already created a String variable called <i>str</i> from which we will extract a substring):
				<br/>
				<b>str.substring(<i>&lt;start_index&gt;</i>)</b>
				<br/><br/>
				once again, the <i>start_index</i> is <b>inclusive</b>. the substring includes the character at the <i>start_index</i> and includes the rest of the String, since no <i>end_index</i> is given here.
				<br/><br/>
				below, we have some in-depth examples illustrating both ways to get a substring:
				<ol>
					<li>using a <i>start_index</i> and an <i>end_index</i></li>
					<li>using just a <i>start_index</i></li>
				</ol>
				<b>example 1: using a <i>start_index</i> and an <i>end_index</i></b>
				<br/>
				our goal is to try to retrieve the String "hello" from "hello world".
				<br/>
				woah, hold your horses! before we start coding, let's first take a look at the indexes of each character in "hello world" (<b className="note">btw:</b> the substring we want to retrieve is highlighted):
				<br/>
				<br/>
				<table>
				  <tr>
				    <td><b>'h'</b></td>
				    <td><b>'e'</b></td>
				    <td><b>'l'</b></td>
				    <td><b>'l'</b></td>
				    <td><b>'o'</b></td>
				    <td>' '</td>
				    <td>'w'</td>
				    <td>'o'</td>
				    <td>'r'</td>
				    <td>'l'</td>
				    <td>'d'</td>
				  </tr>
				  <tr>
				    <td><b>0</b></td>
				    <td><b>1</b></td>
				    <td><b>2</b></td>
				    <td><b>3</b></td>
				    <td><b>4</b></td>
				    <td>5</td>
				    <td>6</td>
				    <td>7</td>
				    <td>8</td>
				    <td>9</td>
				    <td>10</td>
				  </tr>
				</table>
				<br/>
				in order to get the substring, we need a <i>start_index</i> and an <i>end_index</i>. (<b className="note">hint:</b> what index does our substring start at? what index does our substring end at? remember that the <i>start_index</i> is <b>included</b> in the substring whereas the <i>end_index</i> is <b>excluded</b>.)
				<br/>
				our <i>start_index</i> is <b>0</b> because our substring starts at 'h', which is at index 0. since the <i>start_index</i> is <b>inclusive</b>, that means that the 'h' will be included in the substring, which is exactly what we want. so our <i>start_index</i> is 0.
				<br/>
				our <i>end_index</i> is <b>5</b> because our substring ends at 'o', which is at index 4. since the <i>end_index</i> is <b>exclusive</b>, that means that the 'o' will be excluded from the substring, which is not what we want. we want 'o' to be included, not excluded, so our <i>end_index</i> has to be one greater than the index of the last character of our substring, so that the character after 'o' is excluded while 'o' is included. so our <i>end_index</i> is 4 + 1, or 5.
				<br/>
				<b>ready to code?</b> let's go!
				<div className="code">
				String str = "hello world";
				<br/>
				String hello = str.substring(0, 5);
				</div>
				<br/>
				<b>example 2: using just a <i>start_index</i></b>
				<br/>
				our goal is to try to retrieve the String "world" from "hello world". 
				<br/>
				woah, hold your horses! before we start coding, let's first take a look at the indexes of each character in "hello world" (<b className="note">btw:</b> the substring we want to retrieve is highlighted):
				<br/>
				<br/>
				<table>
				  <tr>
				    <td>'h'</td>
				    <td>'e'</td>
				    <td>'l'</td>
				    <td>'l'</td>
				    <td>'o'</td>
				    <td>' '</td>
				    <td><b>'w'</b></td>
				    <td><b>'o'</b></td>
				    <td><b>'r'</b></td>
				    <td><b>'l'</b></td>
				    <td><b>'d'</b></td>
				  </tr>
				  <tr>
				    <td>0</td>
				    <td>1</td>
				    <td>2</td>
				    <td>3</td>
				    <td>4</td>
				    <td>5</td>
				    <td><b>6</b></td>
				    <td><b>7</b></td>
				    <td><b>8</b></td>
				    <td><b>9</b></td>
				    <td><b>10</b></td>
				  </tr>
				</table>
				<br/>
				in order to get the substring, we need just a <i>start_index</i>. (<b className="note">hint:</b> what index does our substring start at? remember that the <i>start_index</i> is <b>included</b> in the substring and that our substring includes the rest of the String since there is no <i>end_index</i>.)
				<br/>
				our <i>start_index</i> is <b>6</b> because our substring starts at 'w', which is at index 6. since the <i>start_index</i> is <b>inclusive</b>, that means that the 'w' will be included in the substring, which is exactly what we want. so our <i>start_index</i> is 6.
				<br/>
				<b>ready to code?</b> let's go!
				<div className="code">
				String str = "hello world";
				<br/>
				String world = str.substring(6);
				</div>
				<br/>
				that was a huge info dump: you learned about indexing, accessing a character by index, and extracting a substring. but... erm... there may still be another load of information to be dumped... <b>oof. good luck.</b>
				<h3>11</h3>
				all Strings have <b>length</b>, which is an integer, and their length is equal to the <b>number of characters</b> in the String. for example, "hello world" has a length of 11 (<b className="note">btw:</b> spaces count as characters). an empty String – <b>""</b> – has a length of 0. but rather than counting how many characters are in a String, we can just use the following syntax to get the length of a String:
				<div className="code">
				String funFact = "did you know that squash is a sport?";
				<br/>
				<div className="comment">//get the length of the fun fact using length()</div>
				<br/>
				int funFactLen = funFact.length(); <div className="comment">//funFactLen is initialized to 36</div>
				</div>
				not too bad, right? now you know how to get the length of a String using <b>length()</b>!
				<h3>HELLO world</h3>
				next, let's learn how to make "heLlO woRlD" into "hello world" or "HELLO WORLD". in other words, let's learn how to make a String all <b>lowercase</b> or all <b>UPPERCASE</b>.
				<br/>
				You can use <b>toLowerCase()</b> and <b>toUpperCase()</b> to make a String all lowercase or all UPPERCASE, respectively:
				<div className="code">
				String myStr = "we LOVE Strings!";
				<br/>
				String myLowerCaseStr = myStr.toLowerCase(); <div className="comment">//make myStr all lowercase</div>
				<br/>
				String myUpperCaseStr = myStr.toUpperCase(); <div className="comment">//make myStr all uppercase</div>
				<br/>
				<div className="comment">//print out the lowercase and uppercase versions of myStr</div>
				<br/>
				System.out.println(myLowerCaseStr);
				<br/>
				System.out.println(myUpperCaseStr);
				</div>
				the code above prints out the following in the console (<b className="note">psst. need a reminder</b> on why <b>System.out.println()</b> outputs something to the console? check out the <b className="pageName">printing page</b>!):
				<div className="code">
				we love strings!
				<br/>
				WE LOVE STRINGS!
				</div>
				awesome! (<b className="note">btw:</b> numbers and symbols, like the exclamation mark above, do not get affected by <b>toLowerCase()</b> and <b>toUpperCase()</b>.)
				<h3>""</h3>
				you can also check if a String is <b>empty</b>, meaning that it doesn't contain any text (<b className="note">btw:</b> to make an empty string, set a String variable equal to <b>""</b>). another way you can think about an empty String is that it is a String with a <b>length of 0</b>. let's take a look at the following sample code to see how we can utilize <b>isEmpty()</b>:
				<div className="code">
				String feelingEmpty = ""; <div className="comment">//create an empty String</div>
				<br/>
				System.out.println(feelingEmpty.isEmpty());
				<br/>
				String wowzers = "WOW! :o"; <div className="comment">//create a String that isn't empty</div>
				<br/>
				System.out.println(wowzers.isEmpty());
				</div>
				now let's see what prints in the console:
				<div className="code">
				true
				<br/>
				false
				</div>
				if a String <i>str</i> is empty, then <b><i>str</i>.isEmpty()</b> will be <b>true</b>. if a String <i>str</i> is not empty, then <b><i>str</i>.isEmpty()</b> will be <b>false</b>.
				<h3>hello + world</h3>
				<h3>hello world... more like hello recap</h3>
				<b>YASSS!</b> you made it to recap!
				<br/>
				...we know <b className="note">just for java</b> is as <b>addicting</b> as the newest Netflix binge, so what are you waiting for? <b className="pageName">keep coding!</b>
			</div>
		)
	}
}

export default Strings;