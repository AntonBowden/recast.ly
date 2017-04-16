var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({

    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      key: options.key,
      part: 'snippet',
      q: options.query,
      maxResults: options.max,
      type: 'video',
      videoEmbeddable: 'true'
    },
    success: function (data) {
      callback(data.items);
      console.log('GET request successful.', data.items);
    },
    error: function(data) {
      console.error('GET request fail!!', data);
    },
    contentType: 'application/json'
  });
};

window.searchYouTube = searchYouTube;
