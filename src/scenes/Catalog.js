import React, {Component} from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles';

/**
 * the catalog screen, with sign-in
 */
const styles = (theme) => ({
   grid: {
      height: '50px',
   }
});

class Catalog extends Component {

   render() {
      return (
         <div>
            <Card>
               <CardContent>
                  <Typography gutterBottom variant="h4">
                     Catalog
                  </Typography>
               </CardContent>
            </Card>
         </div>
      )
   }
}

export default withStyles(styles)(Catalog);
