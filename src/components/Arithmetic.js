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
				<h3>recap++</h3>
				<b>gr8!</b> you made it to recap!
				<br/><br/>
				...we know <b className="note">just for java</b> is as <b>addicting</b> as the newest Netflix binge, so what are you waiting for? <b className="pageName">keep coding!</b>
			</div>
		)
	}
}

export default Arithmetic;