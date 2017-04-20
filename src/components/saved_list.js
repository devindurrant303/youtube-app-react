import React, { Component } from 'react';

class SavedList extends Component {
	constructor(props) {
		super(props);
		this.state = {slider: (window.innerWidth > 767) ? "open":"closed"};
	}

	render() {
		const video = this.props.video;
		const onVideoSelect = this.props.onVideoSelect;

	if (this.props.savedVideos.length === 0) {
		return (
			<div className="video-detail">
				<div className="details">
					<p>-- No Videos Saved --</p>
				</div>
			</div>
		);
	}

	const savedItems = this.props.savedVideos.map((video, index) => {

		const imageUrl = video.snippet.thumbnails.default.url;

		return (
			<li key={index} className="saved-item">
			<div className="row">
				<div className="col-xs-12 pad-fix">
					<div onClick={() => onVideoSelect(video)} className="col-xs-4 saved-image no-pad">
						<img src={imageUrl} />
					</div>
					<div className="col-xs-8">
						<div onClick={() => onVideoSelect(video)} className="saved-text">
							{video.snippet.title}
						</div>
						<div className="delete-button">
							<button
								type="button"
								onClick={() => this.onVideoDelete(index) }
								>Remove</button>
						</div>
					</div>
				</div>
			</div>
		</li>
		);
	});

	return (
		<div className="video-save">
			<div onClick={this.handleClick.bind(this)} className="saved-trigger">
				Saved Videos<span id="arrow" className={this.state.slider}></span>
			</div>
			<div id="slider-div" className={this.state.slider}>
				<ul className="details">
					{savedItems}
				</ul>
			</div>
		</div>
		);
	}

	 handleClick(slider) {
		 if (this.state.slider === "closed" ){
			 this.setState({slider: "open"});
		 } else {
			 this.setState({slider: "closed"});
		 }
	 }

	onVideoDelete(index) {
		//console.log(index);
		this.props.savedVideos.splice(index, 1)
		this.setState({savedVideos: this.props.savedVideos });
		localStorage.clear();
		localStorage.setItem("localStore", JSON.stringify(this.props.savedVideos))
	}

}

export default SavedList;
