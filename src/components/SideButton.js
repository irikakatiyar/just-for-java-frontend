import React from 'react';
import './SideButton.css';
import {
  useLocation,
  Link
} from "react-router-dom";

class SideButton extends React.Component{
	constructor(props){
		super(props)
		/*
		this.state = {
			isSelected: this.props.currentPathname === "/"+this.props.myPathname
		}
		*/
	}

	selected() {
		this.props.click();
	}
	
	/*
	componentDidUpdate(prevProps, prevState) {
		if(prevProps && prevProps.currentPathname !== this.props.currentPathname) {
			this.setState({
				isSelected: this.props.currentPathname === "/"+this.props.myPathname
			})
		}
	}
	*/

	render(){
		return (
			<button
				onClick={()=>this.selected()}
				className={this.props.isSelected ? "sideButton sideButtonSelected" : "sideButton"}
			>
				{this.props.text}
			</button>
			/*
				<Link className="link" to={"/"+this.props.myPathname}>
					<div onClick={this.clicked} className={this.state.isSelected ? "sideButton sideButtonSelected" : "sideButton"} style={{"display": "block"}}>
						{this.props.myPathname}
					</div>
				</Link>
			*/
		)
	}
}

export default SideButton;