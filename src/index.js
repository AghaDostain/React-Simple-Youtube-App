import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_List';
import VideoDetail from './components/video_detail';

const API_Key = "AIzaSyCDbz1ccroxfNJ7Df9ZmTfzj3m0VdAerjE";

//Create new component
class App extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            videos : [],
            selectedVideo : null
         };
         this.videoSearch('surfboard');
    }

    videoSearch(term){
        YTSearch({key: API_Key,term : term}, (videos) => {
            this.setState({
                videos:videos,
                selectedVideo:videos[0] });
        });
    }

    render()
    {
        const videoSearch = _.debounce((term)=>{this.videoSearch(term)},300);
        return (
            <div>
                <SearchBar
                    onSearchTermChange = {term => this.videoSearch(term)} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect = { selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
            );
        }
}
//register compnent
//put it on dom
ReactDOM.render(<App />,document.querySelector(".container"));