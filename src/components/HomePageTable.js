import React from 'react';

class HomePageTable extends React.Component{
	constructor(props){
		super(props)
		this.state={
			pages: ["variables", "comments", "printing", "arithmetic", "strings", "user input", "math", "if statement", "boolean logic", "constants", "for loop", "while loop", "nesting", "break", "functions", "more functions", "casting", "random numbers", "ascii", "array", "for-each loop", "2d array", "arraylist", "hashmap"],
			data: {"variables":"in progress", "comments":"complete"}
		}
	}


	render(){
		return (
			<div>
				<table>
					{this.state.pages.map((page, index) => {
						var status = "todo";
						if (this.state.data[page]){
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