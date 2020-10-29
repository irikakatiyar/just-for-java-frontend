import React from 'react';
import './SideButton.css';
import {
  useLocation,
  Link
} from "react-router-dom";

class SideButton extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		const currentPath = this.props.location.pathname;
		var buttonClass = "sideButton";
		var linkClass = "sideLink";
		if(currentPath === this.props.pathName) {
			buttonClass = "sideButtonSelected";
			linkClass = "sideLinkSelected";
		}
		return (
			<div className={buttonClass}>
				<Link className={linkClass} to={"/"+this.props.pathName}>{this.props.pathName}</Link>
			</div>
		)
	}
}

export default SideButton;