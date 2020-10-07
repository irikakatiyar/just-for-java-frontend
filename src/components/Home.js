import React from 'react';
import HomePageTable from './HomePageTable'

class Home extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		var greeting = this.props.user ? <div>hi, <b>{this.props.user.displayName.toLowerCase()}</b>! welcome to <b>just for java</b>!</div> : <div>hi! welcome to <b>just for java</b>!</div>
		var tableTitle = this.props.user ? <div><b className="note">{this.props.user.displayName.toLowerCase()}'s progress:</b></div> : <div><b className="note">sign in to see your progress! it just takes 13 seconds :)</b></div>
		var table = this.props.user ? <div><HomePageTable/></div> : null
		return (
			<div>
				{greeting}<br/>
				{tableTitle}<br/>
				{table}
			</div>
		)
	}

}

export default Home;