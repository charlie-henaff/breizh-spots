import { Box, Grid, IconButton, Paper } from '@material-ui/core';
import PauseIcon from '@material-ui/icons/PauseRounded';
import PlayIcon from '@material-ui/icons/PlayArrowRounded';
import { Component } from 'react';
import { readRemoteFile } from 'react-papaparse';
import ReactPlayer from 'react-player';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            playing: false,
            items: null,
            disabledItemKeys: [],
        }
    }

    componentDidMount() {
        readRemoteFile(`${process.env.PUBLIC_URL}/cam.csv`, {
            complete: (results) => this.setState({ items: results.data }),
            comments: '#'
        });
    }

    addPlayerGridItem(name, url, playing, itemKey) {
        const { disabledItemKeys } = this.state;
        const addToDisabledItemsKey = () => this.setState({ disabledItemKeys: [...disabledItemKeys, itemKey] });
        return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={itemKey} >
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
                                playing={playing}
                                muted={true}
                                controls={true}
                                onError={(e) => {
                                    console.log(e);
                                    addToDisabledItemsKey();
                                }} />
                        </div>
                        <Box m={1}><a target="_blank" rel="noopener noreferrer" href={`https://www.google.fr/maps/search/${name}`}><b>{name}</b></a></Box>
                    </Box>
                </Paper>
            </Grid>
        );
    }

    render() {
        const { playing, items, disabledItemKeys } = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <h2>Breizh spots live</h2>
                    <div className="App-header-actions">
                        <IconButton color="secondary" onClick={() => this.setState({ playing: !playing })}>
                            {playing ? <PauseIcon /> : <PlayIcon />}
                        </IconButton>
                    </div>
                </header>
                <div className="App-content">
                    <Grid container spacing={3}>
                        {items && items
                            .filter(item => item[0].length > 0 && item[1].length > 0)
                            .filter(item => !disabledItemKeys.includes(item[1]))
                            .map(item => this.addPlayerGridItem(item[0], item[1], playing, item[1]))
                        }
                    </Grid>
                </div>
            </div>
        );
    }
}

export default App;
