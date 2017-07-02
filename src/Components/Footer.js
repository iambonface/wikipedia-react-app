import React,  { Component } from 'react';
import "../Footer.css";

class Footer extends Component {
	constructor(){
		super();
		this.state = {name: "Bonface Mudiri"};
	}
	render(){
		return (
			<div className="Footer">
				<div className="container">
					<div className="footer-container">
						<p>Built with ReactJS | <a href={"https://www.twitter.com/"+ this.props.linkedin} target ="_blank"
            rel="nofollow noopener noreferrer">
						{this.state.name}</a> &copy;2017</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;
