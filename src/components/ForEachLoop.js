import React from 'react';

class ForEachLoop extends React.Component{
	constructor(props){
		super(props)
	}


	render(){
		return (
			<div>
				<h3>it's that time of year! recap's here!</h3>
				<b>that's right it is!</b> you made it to recap!
				<br/><br/>
				...we know <b className="note">just for java</b> is as <b>addicting</b> as the newest Netflix binge, so what are you waiting for? <b className="pageName">keep coding!</b>
			</div>
		)
	}
}

export default ForEachLoop;