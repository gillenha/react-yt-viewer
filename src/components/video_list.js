import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return (
			<VideoListItem 
				//VideoList takes this property from our top level component, index.js,
				//and it passes it into VideoListItem
				onVideoSelect={props.onVideoSelect}
				key={video.etag} 
				video={video} />
		);
	});

	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	)
}

export default VideoList;