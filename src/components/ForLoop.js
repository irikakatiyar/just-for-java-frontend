import React from 'react';

class ForLoop extends React.Component{
	constructor(props){
		super(props)
	}


	render(){
		return (
			<div>
				This is the ForLoop content.
				<div className="code">
					for(int i = 0; i &lt; 10; i++) &#123; <br/>
						* code * <br/>
					&#125;<br/>
				</div>
				<br/>
					The code above is a for loop that will iterate through the code inside the curly brackets 10 times,
					where i will be equal to an integer between 0 and 9.

			</div>
		)
	}
}

export default ForLoop;