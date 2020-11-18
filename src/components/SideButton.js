import React from 'react';
import './SideButton.css';
import {
  useLocation,
  NavLink
} from "react-router-dom";

class SideButton extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		return (
			<NavLink className="sideButton" to={"/"+this.props.myPathname} activeClassName="sideButtonSelected">
				{this.props.myDisplayName}
			</NavLink>
		)
	}
}

export default SideButton;