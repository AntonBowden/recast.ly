// TODO: Render the `App` component to the DOM

ReactDOM.render(<App videos = {window.exampleVideoData} searchYouTube={() => {}}/>, document.getElementById('app'));

searchYouTube({query: 'metallica', key: 'AIzaSyC7x4PCnFu6bCTWjYDV52eK3EZ1KqMTlcA', max: 5});