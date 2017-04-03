import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {

	const imageUrl = video.snippet.thumbnails.default.url;

	return (
		<li onClick={() => onVideoSelect(video)} className="list-group-video">
			<div className="video-list-media">
				<div className="media-thumb">
					<img className="media-object" src={imageUrl} />
				</div>
					<div className="media-title">{video.snippet.title}</div>
			</div>
		</li>
	);
};

export default VideoListItem;
