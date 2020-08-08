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
import Comments from './Comments';
import Functions from './Functions';
import RandomNumbers from './RandomNumbers';
import ASCII from './ASCII';
import Break from './Break';
import Strings from './Strings';
import math from './Math';
import ArrayList from './ArrayList';
import HashMap from './HashMap';
import array from './Array';
import DebuggingErrors from './DebuggingErrors';
import Arithmetic from './Arithmetic';

class Content extends React.Component{
	constructor(props){
		super(props)
	}

	getPage(){
		if(this.props.page === "home"){
			return (
				<Home greeting={this.props.greeting}/>
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
		else if(this.props.page === "comments"){
			return (
				<Comments/>
			);
		}
		else if(this.props.page === "functions"){
			return (
				<Functions/>
			);
		}
		else if(this.props.page === "random numbers"){
			return (
				<RandomNumbers/>
			);
		}
		else if(this.props.page === "ASCII"){
			return (
				<ASCII/>
			);
		}
		else if(this.props.page === "HashMap"){
			return (
				<HashMap/>
			);
		}
		else if(this.props.page === "array"){
			return (
				<array/>
			);
		}
		else if(this.props.page === "math"){
			return (
				<math/>
			);
		}
		else if(this.props.page === "strings"){
			return (
				<Strings/>
			);
		}
		else if(this.props.page === "ArrayList"){
			return (
				<ArrayList/>
			);
		}
		else if(this.props.page === "arithmetic"){
			return (
				<Arithmetic/>
			);
		}
		else if(this.props.page === "break"){
			return (
				<Break/>
			);
		}
	}

	render(){
		return (
			<div className = "page">
				<h2>{this.props.page}:</h2>
				{this.getPage()}
			</div>
		)
	}
}

export default Content;