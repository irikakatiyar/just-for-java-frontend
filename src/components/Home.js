import React from 'react';
import axios from 'axios';

class Home extends React.Component{
	constructor(props){
		super(props)
	}

	printUid(){
		axios.post("http://localhost:5001/just-for-java/us-central1/app/api/create", { 
			id: this.props.user.uid,
			item: "variables"
		})
	      .then(res => {
	        console.log(res);
	        console.log(res.data);
	      })
	}

	render(){
		var greeting = this.props.user ? <div>hi, <b>{this.props.user.displayName.toLowerCase()}</b>!</div> : <div>hi!</div>
		return (
			<div>
				{greeting}
				{this.props.user ? <button onClick={() => this.printUid()}>test</button> : null}
			</div>
		)
	}

}

export default Home;