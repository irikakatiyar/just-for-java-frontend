import React from 'react';

class Home extends React.Component{
	constructor(props){
		super(props)
	}


	render(){
		return (
			<div>
				{this.props.greeting}
			</div>
		)
	}
}

export default Home;