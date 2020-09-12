import React from 'react';

class Home extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		var greeting = this.props.user ? <div>hi, <b>{this.props.user.displayName.toLowerCase()}</b>!</div> : <div>hi!</div>
		return (
			<div>
				{greeting}
			</div>
		)
	}

}

export default Home;