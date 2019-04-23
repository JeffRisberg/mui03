import React, {Component} from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles';
import AvatarPicker from "material-ui-avatar-picker/lib";

const styles = (theme) => ({
   grid: {
      height: '50px',
   }
});

class Profile extends Component {
   state = {
      img: null,
   };

   previewBackgroundColor = "gray";

   handleRequestHide() {
      console.log("handleRequestHide");
   }

   handleSave() {
      console.log("handleSave");
   }

   render() {
      return (
         <div>
            <Card>
               <CardContent>
                  <Typography gutterBottom variant="h4">
                     Profile
                  </Typography>
                  <AvatarPicker
                     onRequestHide={this.handleRequestHide}
                     previewBackgroundColor={this.previewBackgroundColor}
                     onSave={this.handleSave}
                     image={this.state.img}
                     width={400}
                     height={400}
                  />
               </CardContent>
            </Card>
         </div>
      )
   }
}

export default withStyles(styles)(Profile);
