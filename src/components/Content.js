import React from 'react';
import Home from './Home';
import About from './About';
import Resources from './Resources';
import ContactUs from './ContactUs';
import Variables from './Variables';
import Printing from './Printing';
import UserInput from './UserInput';
import IfStatement from './IfStatement';
import BooleanLogic from './BooleanLogic';
import ForLoop from './ForLoop';
import WhileLoop from './WhileLoop';

class Content extends React.Component{
	constructor(props){
		super(props)
	}

	getPage(){
		if(this.props.page === "home"){
			return (
				<Home user={this.props.user}/>
			);
		}
		else if(this.props.page === "about"){
			return (
				<About/>
			);
		}
		else if(this.props.page === "resources"){
			return (
				<Resources/>
			);
		}
		else if(this.props.page === "contact us"){
			return (
				<ContactUs/>
			);
		}
		else if(this.props.page === "variables"){
			return (
				<Variables/>
			);
		}
		else if(this.props.page === "printing"){
			return (
				<Printing/>
			);
		}
		else if(this.props.page === "user input"){
			return (
				<UserInput/>
			);
		}
		else if(this.props.page === "if statement"){
			return (
				<IfStatement/>
			);
		}
		else if(this.props.page === "boolean logic"){
			return (
				<BooleanLogic/>
			);
		}
		else if(this.props.page === "for loop"){
			return (
				<ForLoop/>
			);
		}
		else if(this.props.page === "while loop"){
			return (
				<WhileLoop/>
			);
		}
	}

	render(){
		return (
			<div className = "words">
				{this.getPage()}
			</div>
		)
	}
}

export default Content;