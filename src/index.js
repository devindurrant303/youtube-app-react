import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import SavedList from './components/saved_list';
import Footer from './components/footer';
import { StickyContainer, Sticky } from 'react-sticky';
//import { Provider } from 'react-redux';
//import store from './store';
//import { createStore, applyMiddleware } from 'redux';
//import App from './components/app';
//import reducers from './reducers';

const API_KEY = 'AIzaSyBC_PzcKiQODNSU8n64PzvyYiEtvyTbGjE';
//const fullDescription = https://www.googleapis.com/youtube/v3/videos?part=snippet&id={video}&key={API_KEY}&part=

function checkLocal() {
	let localData = localStorage.getItem('localStore');

	if (localData == null) {
		return [];
	}	else {
		return JSON.parse(localStorage.getItem('localStore'));
	}
}

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null,
			savedVideos: checkLocal()
		};

		this.videoSearch('jimmy fallon');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term, maxResults: 35}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0],
			});
		});
	}

	saveCheck(saved) {
		//console.log('running saveCheck');
		//console.log('-----------------');
		const savedId = saved.snippet.title;
		const savedIdArray = this.state.savedVideos.map((video) => {
			return video.snippet.title
		});

		if(savedIdArray.indexOf(savedId) !== -1) {
			return this.setState({buttonSet: "Already Added"});
		} else {
			return this.setState({savedVideos: this.state.savedVideos.concat(saved) });
		}
	}

	render() {
		const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);

		return (
			<div>
				<div className="col-md-7">
					<VideoDetail
						video={this.state.selectedVideo}
						savedVideos={this.state.savedVideos}
						onVideoSave={saved => this.saveCheck(saved)}
						localStore={localStorage.setItem("localStore", JSON.stringify(this.state.savedVideos))}
						selectedVideo={this.state.selectedVideo}
						 />
				</div>
				<div className="col-md-5">
					<SavedList
						video={this.state.selectedVideo}
						savedVideos={this.state.savedVideos}
						onVideoSelect={selectedVideo => this.setState({selectedVideo: selectedVideo}) }
						/>
				</div>
				<div className="col-sm-12">
					<SearchBar onSearchTermChange={videoSearch} />
				</div>
				<div className="col-sm-12">
					<VideoList
						onVideoSelect={selectedVideo => this.setState({selectedVideo: selectedVideo}) }
						videos={this.state.videos} />
				</div>
				<div className="col-sm-12">
					<Footer />
				</div>
			</div>
		);
	}

}
//onVideoSave={savedVideos => this.setState({savedVideos: this.state.savedVideos.concat([savedVideos]) })}

ReactDOM.render(
	//<Provider store={store}>{router}</Provider>,
	<App />, document.querySelector('.container')
);
