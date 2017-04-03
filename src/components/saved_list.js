import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

class SavedList extends Component {
	constructor(props) {
		super(props);
		this.state = {slide: (window.innerWidth > 500) ? "open":"closed"};
	}

	render() {
		const video = this.props.video;
		const onVideoSelect = this.props.onVideoSelect;
		//const slide = this.props.slide;

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
				<div className="col-xs-12">
					<div onClick={() => onVideoSelect(video)} className="col-xs-4 saved-image no-pad">
						<img className="" src={imageUrl} />
					</div>
					<div className="col-xs-8 left-pad">
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
			<StickyContainer>
				<Sticky>
					 <div onClick={this.handleClick.bind(this)} className="saved-trigger">
							 Saved Videos<span id="arrow" className={this.state.slide}></span>
					 </div>
				 </Sticky>
				<div className={this.state.slide}>
						<ul className="details">
							{savedItems}
						</ul>
				</div>
			</StickyContainer>
		</div>
	);
	}

	 handleClick(slide) {
		 if (this.state.slide === "closed" ){
			 this.setState({slide: "open"});
		 } else {
			 this.setState({slide: "closed"});
		 }
	 }

	onVideoDelete(index) {
		//console.log(index);
		this.props.savedVideos.splice(index, 1)
		this.setState({savedVideos: this.props.savedVideos });
		localStorage.clear();
		localStorage.setItem("localStore", JSON.stringify(this.props.savedVideos))
	}

	//savedScroll() {
		// var window = document.window;
		// var stickyEl = '#saved-trigger';
		// var elTop = stickyEl.offset().top;
		//
		// window.scroll() => {
		// 	 $stickyEl.toggleClass('sticky', $window.scrollTop() > elTop);
		//  }
	 //});

}

export default SavedList;
