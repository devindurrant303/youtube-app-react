import React, {Component} from 'react';

class VideoDetail extends Component {
	constructor(props) {
		super(props);
	}

render() {
	const video = this.props.video;
	const onVideoSave = this.props.onVideoSave;
	const savedVideos = this.props.savedVideos;
	const checkSaved = this.props.checkSaved;

	if (!video) {
		return <div>Loading...</div>;
	}

const videoId = video.id.videoId;
const url = `https://www.youtube.com/embed/${videoId}?showinfo=0`;

		return (
			<div className="video-detail">
				<div className="">
					<div className="details-title">{video.snippet.title}</div>
				</div>
				<div className="embed-responsive embed-responsive-16by9">
					<iframe className="embed-responsive-item" src={url}></iframe>
				</div>
				<div className="details">
					<div>{video.snippet.description}</div>
					<div className="bold">{video.snippet.channelTitle}</div>
					<div className="save-btn">
						<button
							type="button"
							onClick={() => this.props.onVideoSave(video) }>{this.props.checkSaved}</button>
					</div>
				</div>
			</div>
		);

	};
};

export default VideoDetail;
