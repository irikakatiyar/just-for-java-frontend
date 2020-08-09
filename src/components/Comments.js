import React from 'react';

class Comments extends React.Component{
	constructor(props){
		super(props)
	}


	render(){
		return (
			<div>
				<b>comments</b> are used to <b>write notes</b> next to your code <b>that aren't executed when you run your code</b>. 
				if, on the <b className="pageName">variables page</b>, you saw notes denoted with two forward slashes, those were comments!
				<br/><br/>
				there are two types of comments you can make:
				<ul>
					<li>single-line comments</li>
					<li>multi-line comments</li>
				</ul>
				<h3>wait, so how do you make a comment?</h3>
				here's the blueprint on how to make a single-line comment:<br/>
				<b>//<i>&lt;your note here&gt;</i></b><br/><br/>
				and here's the blueprint on how to make a multi-line comment:<br/>
				<b>/*<br/>
				<p><i>&lt;your note here&gt;</i></p><br/>
				*/</b><br/>
				<h3>ok, but what's the point of that?</h3>
				commenting your code is a <b>really good habit</b> that you should start right now. like seriously. go. i'm waiting... still here. waiting. or shall i say, //waiting. <br/>
				in all seriousness, it's really helpful for you and others who might be reading your code to <b>understand what certain lines of code do</b>, improving your code's <b>readability</b>.
				<h3>here's an example</h3>
				<div className="code">
					boolean understandComments = false; <div className="comment">//starts out not understanding comments</div>
					<div className="comment">
						/*<br/>
						<p>because you've read the information above, you now understand comments and how important they are. so, we can set understandComments to true!</p><br/>
						*/
					</div><br/>
					understandComments = true;
				</div>
				in the code above, you can see both single-line and multi-line comments being used.
				<h3>//is it already time for recap?</h3>
				<b>yayyyy!</b> you made it to reacap!<br/><br/>
				so, just to sum up, the two types of comments are <b>single-line comments</b>, denoted by <b>//</b>, and <b>multi-line comments</b>, denoted by <b>/* ... */</b>. <br/><br/>
				comments are <b>really important</b> because they help increase your code's <b>readability</b>. now, going forward, be sure to comment on your code! :)
				<br/><br/>
				...we know <b className="note">just for java</b> is as <b>addicting</b> as the newest Netflix binge, so what are you waiting for? <b className="pageName">keep coding!</b>
			</div>
		)
	}
}

export default Comments;