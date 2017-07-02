import React, { Component } from 'react';
import "../Header.css";

class Header extends Component{
	render(){
		return (
			<div>
				<div className="img-wiki-container">
					<img className="wikipedia"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Wikipedia_wordmark.svg/500px-Wikipedia_wordmark.svg.png"
					alt="wikipedia" />
					<h2>The Free Encyclopedia </h2>

					<img className="wiki-logo"
					src="https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/1122px-Wikipedia-logo-v2.svg.png"
					alt="wikipedia logo" />


				</div>
			</div>
		);
	}
}

export default Header;
