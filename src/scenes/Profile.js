import React, {Component} from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles';
import AvatarPicker from "material-ui-avatar-picker";

const styles = (theme) => ({
   grid: {
      height: '50px',
   }
});

class Profile extends Component {
   state = {
      previewOpen: false,
      img: "http://www.placekitten.com/400/400",
      savedImg: "http://www.placekitten.com/400/400"
   };

   previewBackgroundColor = "gray";

   handleFileChange = (dataURI) => {
      this.setState({
         img: dataURI,
         savedImg: this.state.savedImg,
         previewOpen: true
      });
   };

   handleSave = (dataURI)=> {
      this.setState({
         previewOpen: false,
         img: null,
         savedImg: dataURI
      });
   };

   handleRequestHide = () => {
      this.setState({
         previewOpen: false
      });
   };

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
