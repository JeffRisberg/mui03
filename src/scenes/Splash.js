import React, {Component} from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles';

/**
 * the welcome screen, with sign-in
 */
const styles = (theme) => ({
   grid: {
      height: '50px',
   }
});

class Splash extends Component {

   render() {
      return (
         <div>
            <Card>
               <CardContent>
                  <Typography gutterBottom variant="h4">
                     Welcome to MUI03
                  </Typography>
               </CardContent>
            </Card>
         </div>
      )
   }
}

export default withStyles(styles)(Splash);
