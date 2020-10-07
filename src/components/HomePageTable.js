import React from 'react';
import axios from 'axios';

class HomePageTable extends React.Component{
	constructor(props){
		super(props)
		this.state={
			pages: ["variables", "comments", "printing", "arithmetic", "strings", "user input", "math", "if statement", "boolean logic", "constants", "for loop", "while loop", "nesting", "break", "functions", "more functions", "casting", "random numbers", "ascii", "array", "for-each loop", "2d array", "arraylist", "hashmap"],
			data: {}
		}
	}

	componentDidMount() {
		if(this.props.user) {
			this.getAllTopicStatuses();
		}
	}

	componentDidUpdate(prevProps) {
		if(this.props.user && !prevProps.user) {
	    	this.getAllTopicStatuses();
		}
	}

	getAllTopicStatuses() {
    	axios.get("http://localhost:5001/just-for-java/us-central1/app/api/get-all-topic-statuses", { 
			params: {
      			id: this.props.user.uid
    		}
		})
	      .then(res => {
	        console.log(res.data);
	        if(res.data) {
	        	this.setState({
	        		data: res.data
	        	})
	        }
	      })
	}

	render(){
		return (
			<div>
				<table>
					{this.state.pages.map((page, index) => {
						var status = "todo";
						if(this.state.data[page]){
							status = this.state.data[page];
						}
						return (
							<tr>
								<td>{page}</td>
								<td>{status}</td>
							</tr>
						)
					})}
				</table>
			</div>
		)
	}
}

export default HomePageTable;