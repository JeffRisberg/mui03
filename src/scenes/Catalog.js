import React, {Component} from 'react'
import {Avatar, Card, CardContent, CircularProgress, Grid, LinearProgress, Typography} from "@mui/material";

/**
 * the catalog screen
 */
const styles = (theme) => ({
  grid: {
    height: '50px',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  progress: {
    margin: theme.spacing(2),
  },
});

class Catalog extends Component {

  state = {
    completed: 0,
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const {completed} = this.state;
    this.setState({completed: completed >= 100 ? 0 : completed + 1});
  };

  render() {
    const {classes} = this.props;

    return (
      <div>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h4">
              Catalog
            </Typography>

            <Grid container justify="center" alignItems="center">
              <Avatar alt="Remy Sharp" src="/avatars/1.jpg" />
              <Avatar alt="Remy Sharp" src="/avatars/1.jpg" />
            </Grid>
            <LinearProgress/>
            <br/>
            <LinearProgress color="secondary"/>
            <div>
              <CircularProgress
                //className={classes.progress}
                variant="determinate"
                value={this.state.completed}
              />
              <CircularProgress
                //className={classes.progress}
                variant="determinate"
                value={this.state.completed}
                color="secondary"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default Catalog;
