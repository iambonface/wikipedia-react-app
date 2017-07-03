import React, { Component }     from 'react' ;

import '../Search.css';

class Search extends Component{
  constructor(props){
    super(props);
    this.updateQuery = this.updateQuery.bind(this)
    this.state = {
      query: ""
    }
  }
  updateQuery = (e) => {
    console.log("this event: ",  e.target.value)
    this.props.onUpdate(e.target.value)
    this.setState({query: e.target.value})
  }

	render(){
		return (
			<div>
				<div className="input-container">
					<div className="search">
						<div className="row">
							<input id="Input"
										 type="text"
				             name="search"
                     onChange = { this.updateQuery }
                     value = {this.state.query}
										placeholder=" Search results from wikipedia.org..."
                     />
              <button className="btn-search btn btn-primary"><i className="fa fa-search"></i></button>

						</div>

					</div>

				</div>

			</div>

		);
	}
}

export default Search;
