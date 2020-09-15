import React from 'react';
import axios from 'axios';

class ProgressUpdater extends React.Component{
	constructor(props){
		super(props)
		this.state={
	      status: "todo",
	      message: ""
	    }
	}

	componentDidMount() {
		if(this.props.user) {
			this.getTopicStatus();
		}
	}

	componentDidUpdate(prevProps) {
		if(this.props.user && !prevProps.user) {
	    	this.getTopicStatus();
		}
	}


	getTopicStatus() {
    	axios.get("http://localhost:5001/just-for-java/us-central1/app/api/get-topic-status", { 
			params: {
      			id: this.props.user.uid,
				topic: this.props.page
    		}
		})
	      .then(res => {
	        console.log(res.data);
	        if(!res.data.status) {
	        	this.setState({
	        		status: "todo",
	        		message: ""
	        	})
	        } else {
	        	this.setState({
	        		status: res.data.status,
	        		message: ""
	        	})
	        }
	      })
	}

	updateTopicStatus(){
		var status = document.getElementById("myProgressUpdater").value;
		this.setState({
	      status: status,
	      message: ""
	    }, () => {
	    	axios.post("http://localhost:5001/just-for-java/us-central1/app/api/update-topic-status", { 
				id: this.props.user.uid,
				topic: this.props.page,
				status: this.state.status
			})
		      .then(res => {
		        console.log(res.data);
		        this.setState({
		        	message: "progress saved!"
		        })
		      })
	    })
	}

	render(){
		return (
			<div className="progress">
				{this.props.user ? 
					<div>
						<select id="myProgressUpdater" className="dropdown" onChange={() => this.updateTopicStatus()} value={this.state.status}>
						  <option className="dropdownOption" value="todo">todo</option>
						  <option className="dropdownOption" value="in progress">in progress</option>
						  <option className="dropdownOption" value="complete">complete</option>
						</select>
						{this.state.message}
					</div>
					: "sign in to save your progress!"
				}
			</div>
		)
	}

}

export default ProgressUpdater;