import React, { Component } from 'react';

class VideoDetail extends Component {
	constructor(props) {
		super();
	}

render() {
	const video = this.props.video;
	const onVideoSave = this.props.onVideoSave;
	const savedVideos = this.props.savedVideos;
	const selectedVideo = this.props.selectedVideo;


	if (!video) {
		return <div>Loading...</div>;
	}

const videoId = video.id.videoId;
const url = `https://www.youtube.com/embed/${videoId}?showinfo=0`;

		return (
			<div className="video-detail">
				<div>
					<div className="details-title">{video.snippet.title}</div>
				</div>
				<div className="embed-responsive embed-responsive-16by9">
					<iframe className="embed-responsive-item" src={url}></iframe>
				</div>
				<div className="details">
					<div>{video.snippet.description}</div>
					<div className="bold">{video.snippet.channelTitle}</div>
					<div className={this.DeleteSetter(selectedVideo, savedVideos)}>
						<button
							type="button"
							onClick={() => this.props.onVideoSave(video) }>{this.DeleteSetter(selectedVideo, savedVideos)}
						</button>
					</div>
				</div>
			</div>
		);

	};

DeleteSetter(selectedVideo, savedVideos) {
	const savedId = selectedVideo.snippet.title;
	const savedIdArray = savedVideos.map((video) => {
		return video.snippet.title
	});

	// console.log('--------------------');
	// console.log(selectedVideo);
	// console.log('video title: ' + savedId);
	// console.log('index: ' + savedIdArray.indexOf(savedId));

	if(savedIdArray.indexOf(savedId) !== -1) {
		return "Saved";
	} else {
		return "Save";
	}
}

};

export default VideoDetail;
