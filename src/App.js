import './App.css';
import { Component } from 'react';
import { Box, Grid, Paper } from '@material-ui/core';
import ReactHlsPlayer from 'react-hls-player'
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';


class App extends Component {

  addYoutubeGridItem(name, youtubeId) {
    return (
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Paper elevation={3}>
          <Box p={1}>
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%" /* 16:9 */,
                paddingTop: 25,
                height: 0
              }}>
              <iframe
                className="youtubeVideo"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%"
                }}
                title={name} frameborder="0"
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&enablejsapi=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="0" />
            </div>
            <Box m={1}><a target="_blank" rel="noopener noreferrer" href={`https://www.google.fr/maps/search/${name}`}><b>{name}</b></a></Box>
          </Box>
        </Paper>
      </Grid>
    );
  }

  addHlsPlayerGridItem(name, src) {
    return (
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Paper elevation={3}>
          <Box p={1}>
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%" /* 16:9 */,
                paddingTop: 25,
                height: 0
              }}>
              <ReactHlsPlayer
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%"
                }}
                hlsConfig={{
                  maxLoadingDelay: 4,
                  minAutoBitrate: 0,
                  lowLatencyMode: true,
                }}
                autoPlay={true}
                controls={true}
                src={src} />
            </div>
            <Box m={1}><a target="_blank" rel="noopener noreferrer" href={`https://www.google.fr/maps/search/${name}`}><b>{name}</b></a></Box>
          </Box>
        </Paper>
      </Grid>
    );
  }

  addMdpPlayerGridItem(name, src) {
    return (
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Paper elevation={3}>
          <Box p={1}>
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%" /* 16:9 */,
                paddingTop: 25,
                height: 0
              }}>
              <ShakaPlayer
                autoPlay
                src={src} />
            </div>
            <Box m={1}><a target="_blank" rel="noopener noreferrer" href={`https://www.google.fr/maps/search/${name}`}><b>{name}</b></a></Box>
          </Box>
        </Paper>
      </Grid>
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>North breizh spots live</h2>
        </header>
        <div className="App-content">
          <Grid container spacing={3}>
            {/* Perros-Guirec */}
            {this.addYoutubeGridItem("Perros-Guirec", "ui_9qAoosls")}

            {/* Trestraou */}
            {this.addYoutubeGridItem("Trestraou", "rmVJ1Uls9AM")}

            {/* Saint-Quay-Portieux */}
            {this.addYoutubeGridItem("Saint-Quay-Portieux", "lWPgeICToUk")}

            {/* Binic */}
            {this.addYoutubeGridItem("Binic", "8DThsr2fxwk")}

            {/* Pléneuf */}
            {this.addHlsPlayerGridItem("Pléneuf", 'https://hls.iwilive.net/live/pleneuf0.stream/chunklist_w1311621573.m3u8')}

            {/* SAINT-CAST-LE GUILDO */}
            {this.addHlsPlayerGridItem("SAINT-CAST-LE GUILDO", "https://hls.iwilive.net/live/stcast0.stream/chunklist_w382338439.m3u8")}

            {/* Dinard */}
            {this.addMdpPlayerGridItem("Dinard", "https://deliverys4.joada.net/contents/encodings/vod/b751a540-393a-485c-3539-3430-6d61-63-af54-f2141dcc23ead/mpd.mpd")}

            {/* Saint-Malo */}
            {this.addYoutubeGridItem("Saint-Malo", "OetL01QjfBs")}

            {/* Cancale */}
            {this.addYoutubeGridItem("Cancale", "o06T213KolE")}

          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
