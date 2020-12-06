import React from 'react';
import YoutubeVideo from './youtubeAPI'

class YoutubeAPI extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      videos: [],
    };
  }
  async componentDidMount() {
    const url = 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=4&playlistId=PLfK73kC0esqLP-K68AlvSQtS074GdcCpr&key=AIzaSyB67B_szVr6uSIUounQ8IR2xsErKFv1pBU';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ videos: data.items });
  }
  render() {
    const { videos } = this.state;
    const renderedVideos = videos.map((video, index) => {
      return <YoutubeVideo key={video.id} video={video} />;
    });
    return (
      <div className='YouTubeFullDiv'>
        <h3 style={{ textAlign: 'center', paddingTop: '3rem' }}>
          See more...
        </h3>
        <div className='YouAPI'>{renderedVideos}</div>

      </div>
    );
  }
}
export default YoutubeAPI;