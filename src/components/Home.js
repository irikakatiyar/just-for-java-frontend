import React from 'react';
import HomePageTable from './HomePageTable'

class Home extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		var greeting = this.props.user ? <div><b>hi, {this.props.user.displayName.toLowerCase()}</b>! welcome to <b className="note">just for java</b>!</div> : <div><b>hi!</b> welcome to <b className="note">just for java</b>!</div>
		var tableTitle = this.props.user ? <div>{this.props.user.displayName.toLowerCase()}'s progress</div> : null
		var table = this.props.user ? <div><HomePageTable title={tableTitle} user={this.props.user}/></div> : <div><b className="pageName">sign in to see your progress! it just takes 13 seconds :)</b></div>
		return (
			<div>
				{greeting}<br/>
				{table}
			</div>
		)
	}

}

export default Home;