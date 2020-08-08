import React from 'react';

class Home extends React.Component{
	constructor(props){
		super(props)
	}


	render(){
		return (
			<div>
				{this.props.user}
				hi there! welcome to just for java! this is a website to help you learn cool java concepts to make you a master coder. :)
			</div>
		)
	}
}

export default Home;