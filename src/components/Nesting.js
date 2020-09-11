import React from 'react';

class Nesting extends React.Component{
	constructor(props){
		super(props)
	}


	render(){
		return (
			<div>
				talk about nested if statements and nested loops!
				<h3>&#123; &#123; &#123; recap &#125; &#125; &#125;</h3>
				<b>yo!</b> you made it to recap!
				<br/><br/>
				...we know <b className="note">just for java</b> is as <b>addicting</b> as the newest Netflix binge, so what are you waiting for? <b className="pageName">keep coding!</b>
			</div>
		)
	}
}

export default Nesting;