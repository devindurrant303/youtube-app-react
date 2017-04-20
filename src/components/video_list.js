import React, { Component } from 'react';
import VideoListItem from './video_list_item';

class VideoList extends Component {
	constructor(props) {
		super();
	}

render() {
	const slide = this.props.slide;
	const video = this.props.video;
	const onListToggle = this.props.onListToggle;
	const videoItems = this.props.videos.map((video) => {
		return (
			<VideoListItem
				onVideoSelect={this.props.onVideoSelect}
				key={video.etag}
				video={video} />
		);
	});

	return (
		<div id="wrap">
			<div id="frame" className={this.props.slide}>
				<ul className="list-group clearfix">
					{videoItems}
				</ul>
			</div>
			<div onClick={() => onListToggle()} className="list-toggle">
				<span className={this.props.slide}></span>
			</div>
		</div>
	);
}

};

export default VideoList;
