import React, { Component } from 'react'; 
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import Header from './components/header';
import Post from './components/post';
import BostonTeaParty from './assets/Boston-Tea-Party.png';
import './App.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  // paper: {
  //   padding: theme.spacing.unit * 2,
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // },
});

class App extends Component {

  render() {

    return (
      <div>
        <Header/>
        <Grid container spacing={24}>
          <Grid item xs={2} sm={2}></Grid> 
          <Grid item xs={12}>
            <Post avatar="N" image={BostonTeaParty}/>
          </Grid>
        </Grid>
      </div>
    );
  }
}


export default App;
