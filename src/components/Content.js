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
import Mathematics from './Mathematics';
import ArrayList from './ArrayList';
import HashMap from './HashMap';
import Arrays from './Array';
import Arithmetic from './Arithmetic';
import ForEachLoop from './ForEachLoop';
import NestedLoops from './NestedLoops';
import GettingStarted from './GettingStarted';
import TwoDimArrays from './TwoDimArrays';
import Casting from './Casting';
import Constants from './Constants';
import MoreFunctions from './MoreFunctions';

class Content extends React.Component{
	constructor(props){
		super(props)
	}

	getPage(){
		if(this.props.page === "home"){
			return (
				<Home user={this.props.user} page={this.props.page}/>
			);
		}
		else if(this.props.page === "constants") {
			return (
				<Constants user={this.props.user} page={this.props.page}/>
			);
		}
		else if(this.props.page === "about"){
			return (
				<About user={this.props.user} page={this.props.page}/>
			);
		}
		else if(this.props.page === "resources"){
			return (
				<Resources user={this.props.user} page={this.props.page}/>
			);
		}
		else if(this.props.page === "contact us"){
			return (
				<ContactUs user={this.props.user} page={this.props.page}/>
			);
		}
		else if(this.props.page === "more functions") {
			return (
				<MoreFunctions user={this.props.user} page={this.props.page}/>
			);
		}
		else if(this.props.page === "variables"){
			return (
				<Variables user={this.props.user} page={this.props.page}/>
			);
		}
		else if(this.props.page === "printing"){
			return (
				<Printing user={this.props.user} page={this.props.page}/>
			);
		}
		else if(this.props.page === "user input"){
			return (
				<UserInput user={this.props.user} page={this.props.page}/>
			);
		}
		else if(this.props.page === "if statement"){
			return (
				<IfStatement user={this.props.user} page={this.props.page}/>
			);
		}
		else if(this.props.page === "boolean logic"){
			return (
				<BooleanLogic user={this.props.user} page={this.props.page}/>
			);
		}
		else if(this.props.page === "for loop"){
			return (
				<ForLoop user={this.props.user} page={this.props.page}/>
			);
		}
		else if(this.props.page === "while loop"){
			return (
				<WhileLoop user={this.props.user} page={this.props.page}/>
			);
		}
		else if(this.props.page === "comments"){
			return (
				<Comments user={this.props.user} page={this.props.page}/>
			);
		}
		else if(this.props.page === "functions"){
			return (
				<Functions user={this.props.user} page={this.props.page}/>
			);
		}
		else if(this.props.page === "random numbers"){
			return (
				<RandomNumbers user={this.props.user} page={this.props.page}/>
			);
		}
		else if(this.props.page === "ASCII"){
			return (
				<ASCII user={this.props.user} page={this.props.page}/>
			);
		}
		else if(this.props.page === "HashMap"){
			return (
				<HashMap user={this.props.user} page={this.props.page}/>
			);
		}
		else if(this.props.page === "array"){
			return (
				<Arrays user={this.props.user} page={this.props.page}/>
			);
		}
		else if(this.props.page === "Math"){
			return (
				<Mathematics user={this.props.user} page={this.props.page}/>
			);
		}
		else if(this.props.page === "Strings"){
			return (
				<Strings user={this.props.user} page={this.props.page}/>
			);
		}
		else if(this.props.page === "ArrayList"){
			return (
				<ArrayList user={this.props.user} page={this.props.page}/>
			);
		}
		else if(this.props.page === "arithmetic"){
			return (
				<Arithmetic user={this.props.user} page={this.props.page}/>
			);
		}
		else if(this.props.page === "break"){
			return (
				<Break user={this.props.user} page={this.props.page}/>
			);
		}
		else if(this.props.page === "getting started"){
			return (
				<GettingStarted user={this.props.user} page={this.props.page}/>
			);
		}
		else if(this.props.page === "nested loops"){
			return (
				<NestedLoops user={this.props.user} page={this.props.page}/>
			);
		}
		else if(this.props.page === "for-each loop"){
			return (
				<ForEachLoop user={this.props.user} page={this.props.page}/>
			);
		}
		else if(this.props.page === "2D array"){
			return (
				<TwoDimArrays user={this.props.user} page={this.props.page}/>
			);
		}
		else if(this.props.page === "casting"){
			return (
				<Casting user={this.props.user} page={this.props.page}/>
			);
		}
	}

	render(){
		return (
			<div className = "page">
				<h2>{this.props.page}:</h2>
				<br/>
				{this.getPage()}
			</div>
		)
	}
}

export default Content;