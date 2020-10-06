import React from 'react';
import ProgressUpdater from './ProgressUpdater';
import Hint from './Hint';

class GettingStarted extends React.Component{
	constructor(props){
		super(props)
	}


	render(){
		return (
			<div>
				welcome to <b>just for java</b>! if you want to learn how to code in java, you're in the right place. (<b className="note">btw:</b> if you want to learn about the super cool creators of just for java who made this website from scratch, check out the <b className="pageName">about page</b>!) on the following concept pages, we have an <b>introduction</b> of each concept, <b>blueprints</b> to help you with code syntax, thorough <b>explanations</b> with <b>examples</b> coded out, super <b>relatable language</b> and even some jokes, <b>recaps</b> to summarize each concept, and <b>pit stops</b> with practice problems. our pit stops use <b>repl.it</b>, which is an in-browser coding environment. so before you continue, make sure to <b>get a repl.it account</b>!
				<br/><br/>
				...we know <b className="note">just for java</b> is as <b>addicting</b> as the newest Netflix binge, so what are you waiting for? <b className="pageName">get started coding!</b>
			</div>
		)
	}
}

export default GettingStarted;