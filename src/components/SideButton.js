import React from 'react';
import './SideButton.css';

class SideButton extends React.Component{
	constructor(props){
		super(props)
	}

	selected(){
		this.props.click();
	}

	render(){
		return (
			<button 
				onClick={() => this.selected()}
				className={ this.props.isSelected ? "sideButtonSelected" : "sideButton" }
			>
				{this.props.text}
			</button>
		)
	}
}

export default SideButton;