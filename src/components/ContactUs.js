import React from 'react';

class ContactUs extends React.Component{
	constructor(props){
		super(props)
	}


	render(){
		window.scrollTo(0, 0);
		return (
			<div>
				i guess we should put some contact info here...
				<br/><br/> have any comments or questions? have any feedback or suggestions? don't hesitate to <b>email us</b> at <a className="email" href="mailto:justforjavaco@gmail.com">justforjavaco@gmail.com</a>!
			</div>
		)
	}
}

export default ContactUs;