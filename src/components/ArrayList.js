import React from 'react';
import ProgressUpdater from './ProgressUpdater';
import Hint from './Hint';

class ArrayList extends React.Component{
	constructor(props){
		super(props)
		this.state={
			progress: "todo"
		}
	}

	updateProgressState(progress){
		this.setState({
			progress: progress
		});
	}

	render(){
		window.scrollTo(0, 0);
		return (
			<div>
				<b>coming soon!</b>
			</div>
		)
	}
}

export default ArrayList;