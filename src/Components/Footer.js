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
						<p>Built with ReactJS | &copy; 2017 <br/>
            <a href={"https://www.medium.com/@"+ this.props.medium} target ="_blank"
            rel="nofollow noopener noreferrer">
            {this.state.name}</a>
            </p>
            <p><a className="view-code" href="https://github.com/iambonface/wikipedia-react-app.git" target ="_blank"
            rel="nofollow noopener noreferrer">[View Code Here]</a></p>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;
