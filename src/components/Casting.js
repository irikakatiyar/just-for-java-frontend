import React from 'react';
import ProgressUpdater from './ProgressUpdater';
import Hint from './Hint';

class Casting extends React.Component{
	constructor(props){
		super(props)
	}


	render(){
		window.scrollTo(0, 0);
		return (
			<div>
				<h2>{this.props.page}:</h2><br/>
				<b>coming soon!</b>
			</div>
		)
	}
}

export default Casting;