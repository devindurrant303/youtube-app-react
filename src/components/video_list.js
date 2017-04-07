import React, { Component } from 'react';
import VideoListItem from './video_list_item';

class VideoList extends Component {
	constructor(props) {
		super();
	}

render() {
	const video = this.props.video;
	const videoItems = this.props.videos.map((video) => {
		return (
			<VideoListItem
				onVideoSelect={this.props.onVideoSelect}
				key={video.etag}
				video={video} />
		);
	});

	return (
		<div className="wrap">
			<div className="frame">
				<ul className="list-group clearfix" id="centered">
					{videoItems}
				</ul>
			</div>
		</div>
	);
}

};

export default VideoList;
