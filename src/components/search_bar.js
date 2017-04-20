import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
			super(props);

			this.state = {
				term: ''
			};
	}

	render() {
		const slide = this.props.slide;
		const onListToggle = this.props.onListToggle;

		return (
			<div>
				<div className="search-bar">
					<input
						placeholder="Search Videos"
						value={this.state.term}
						onChange={event => this.onInputChange(event.target.value)} />
				</div>
			</div>
		);
	}

	onInputChange(term, slide) {

		this.setState({term});
		this.props.onSearchTermChange(term);

		this.props.onSlideSearch({slide});
	}

}

export default SearchBar;
