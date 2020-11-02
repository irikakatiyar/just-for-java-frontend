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
		var sideButtonClass = "sideButton";
		if(this.props.currentPathname === "/"+this.props.myPathname) {
			sideButtonClass = "sideButtonSelected";
		}
		return (
			
				<Link className="link" to={"/"+this.props.myPathname}>
					<span className={sideButtonClass} style={{"display": "block"}}>
						{this.props.myPathname}
					</span>
				</Link>
			
		)
	}
}

export default SideButton;