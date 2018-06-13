import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';


class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'surfboards'}, videos => {
			this.setState({ videos });
			// when we're using ES6, this will get resolved as this.setState({ videos: videos })
			// this is just a little syntatic sugar and only works when the key and the prop
			// are the same variable name. Try to get used to this as it will clean up your code in the long run.
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));