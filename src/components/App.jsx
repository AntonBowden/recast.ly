class App extends React.Component {
  constructor(props) {
    super(props);

    //this.onVideoClick = this.onVideoClick.bind(this);

    this.state = {
      currentVideo: window.exampleVideoData[0],
      videos: window.exampleVideoData
    };
  }

  componentDidMount () {
    this.getYoutubeVideos('metallica');
  }

  getYoutubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };

    this.props.searchYouTube(options, (videos) => {
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      });
    });
  }



  onVideoClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (

      <div className="container">
        <Nav handleSearch = {_.debounce(this.getYoutubeVideos.bind(this), 500)}/>

        <div className="row">


        <div className="col-md-7">
          <VideoPlayer video = {this.state.currentVideo}/>
        </div>

        <div className="col-md-5">
          <VideoList videos = {this.state.videos} onVideoClick = {this.onVideoClick.bind(this)}/>
        </div>

        </div>

      </div>
    );

  }
}



// var App = (props) => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <h2>Video Player!!!</h2>
//       <VideoPlayer video = {props.videos}/>
//     </div>
//     <div className="col-md-5">
//       <VideoList videos = {props.videos}/>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
