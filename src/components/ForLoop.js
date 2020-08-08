import React from 'react';

class ForLoop extends React.Component{
	constructor(props){
		super(props)
	}


	render(){
		return (
			<div>
				<h2>for loops:</h2>
				<br/>
				for loops are used to loop through some code a specific number of times. 
				they are most helpful when you know how many times you want to go through your code.
				<br/><br/>
				let's say, for example, you want to write some code that will print the numbers 0-5. you can use a for loop to do so: 
				<div className="code">
					for(int i = 0; i &le; 5; i++) &#123; <br/>
						<p>System.out.print(i + " ")</p> <div className = "comment">//the " " is to add a space between the numbers when printing</div><br/>
					&#125;<br/>
				</div>
				The code above prints:
				<div className="code">
					0 1 2 3 4 5
				</div>
				now that you know about for loops, let's try some exercises!
			</div>
		)
	}
}

export default ForLoop;