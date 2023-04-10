import './App.css';
import { Component } from 'react';
import { Box, Grid, IconButton, Paper } from '@material-ui/core';
import ReactPlayer from 'react-player'
import PlayIcon from '@material-ui/icons/PlayArrowRounded';
import PauseIcon from '@material-ui/icons/PauseRounded';

class App extends Component {

  constructor (props) {
  	super(props)
    this.state = {
    	playing: false
    }
  }

  addPlayerGridItem(name, url) {
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
              <ReactPlayer
                width="100%"
                height="100%"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
                url={url}
                playing={this.state.playing}
                muted={true}
                controls={true}
                onError={(e)=> console.log(e)} />
            </div>
            <Box m={1}><a target="_blank" rel="noopener noreferrer" href={`https://www.google.fr/maps/search/${name}`}><b>{name}</b></a></Box>
          </Box>
        </Paper>
      </Grid>
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Breizh spots live</h2>
          <div className="App-header-actions">
            <IconButton color="secondary" onClick={() => this.setState({playing: !this.state.playing})}>
              {this.state.playing ? <PauseIcon/> : <PlayIcon/>}
            </IconButton>
          </div>
        </header>
        <div className="App-content">
          <Grid container spacing={3}>
            {/* Perros-Guirec */}
            {this.addPlayerGridItem("Perros-Guirec", "https://www.youtube.com/watch?v=ui_9qAoosls")}

            {/* Trestraou */}
            {/* this.addPlayerGridItem("Trestraou", "https://youtu.be/_5kHwxpR3tA") */}

            {/* Saint-Quay-Portieux */}
            {this.addPlayerGridItem("Saint-Quay-Portieux", "https://www.youtube.com/watch?v=lWPgeICToUk")}

            {/* Binic */}
            {/* {this.addPlayerGridItem("Binic", "https://www.youtube.com/watch?v=8DThsr2fxwk")} */}
            
            {/* Étables-sur-Mer */}
            {this.addPlayerGridItem("Étables-sur-Mer", "https://www.youtube.com/watch?v=4b2NDbyw5ZQ")}
            
            {/* Pléneuf Val André */}
            {this.addPlayerGridItem("Pléneuf-Val-André", 'https://hls.iwilive.net/live/pleneuf0.stream/chunklist_w1311621573.m3u8')}

            {/* SAINT-CAST-LE GUILDO */}
            {/* {this.addPlayerGridItem("SAINT-CAST-LE GUILDO", "https://hls.iwilive.net/live/stcast0.stream/chunklist_w382338439.m3u8")} */}

            {/* Dinard */}
            {/* {this.addPlayerGridItem("Dinard", "https://deliverys4.joada.net/contents/encodings/vod/d0ea84ed-5a5e-4c06-3539-3430-6d61-63-9bf8-d855548eb34ed/mpd.mpd")} */}

            {/* Saint-Malo */}
            {this.addPlayerGridItem("Saint-Malo", "https://youtu.be/2uznaTjvb7I")}

            {/* Cancale */}
            {/* {this.addPlayerGridItem("Cancale", "https://www.youtube.com/watch?v=o06T213KolE")} */}

          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
