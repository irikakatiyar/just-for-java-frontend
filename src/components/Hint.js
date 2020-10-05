import React from 'react';

class Hint extends React.Component{
	constructor(props){
		super(props)
		this.state={
			hintsShown: 0
		}
	}


	render(){
		return (
			<div className="hints">
				<ul>
				{this.props.hints.map((hint, index) => {
					if (index < 2) {
						return (
							<li>{index}. {hint}</li>
						)
					}
				})}
				</ul>
			</div>
		)
	}
}

export default Hint;