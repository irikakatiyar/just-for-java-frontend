import React from 'react';
import ProgressUpdater from './ProgressUpdater';
import Hint from './Hint';
import {
  Link
} from "react-router-dom";


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
				<h2>{this.props.page}:</h2><br/>
				<b>coming soon!</b>
			</div>
		)
	}
}

export default ArrayList;