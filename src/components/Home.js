import React from 'react';
import HomePageTable from './HomePageTable'

class Home extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		var greeting = this.props.user ? <div>hi, <b>{this.props.user.displayName.toLowerCase()}</b>! welcome to <b>just for java</b>!</div> : <div>hi! welcome to <b>just for java</b>!</div>
		return (
			<div>
				{greeting}<br/>
				my progress:<br/>
				<HomePageTable/>
			</div>
		)
	}

}

export default Home;