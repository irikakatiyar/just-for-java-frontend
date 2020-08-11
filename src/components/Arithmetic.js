import React from 'react';

class Arithmetic extends React.Component{
	constructor(props){
		super(props)
	}


	render(){
		return (
			<div>
				talk about +=, -=, *=, /=, amd %=
				<br/>
				notation: number = number + 1; shorthand notation: number += 1; shorthand shorthand notation: number++;
				<br/>
				notation: number = number - 1; shorthand notation: number -= 1; shorthand shorthand notation: number--;
			</div>
		)
	}
}

export default Arithmetic;