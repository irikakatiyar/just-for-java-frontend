import React from 'react';

class NestedLoops extends React.Component{
	constructor(props){
		super(props)
	}


	render(){
		return (
			<div>
				<h3>&#123; &#123; &#123; recap &#125; &#125; &#125;</h3>
				<b>yo!</b> you made it to recap!
				<br/><br/>
				...we know <b className="note">just for java</b> is as <b>addicting</b> as the newest Netflix binge, so what are you waiting for? <b className="pageName">keep coding!</b>
			</div>
		)
	}
}

export default NestedLoops;