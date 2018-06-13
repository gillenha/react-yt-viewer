import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';


class App extends Component {
	constructor(props) {
		super(props);

		//add the concept of a selected video, pass in this.state.selectedVideo
		this.state = { 
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('surfboards')
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, videos => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		return (
			<div>
				<SearchBar onSearchTermChange={term => this.videoSearch(term)} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					//this function has one purpose: to update app state; we pass it as a 
					//property to VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
					videos={this.state.videos} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));