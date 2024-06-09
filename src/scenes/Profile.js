import React, {Component} from 'react'
import {Card, CardContent, Checkbox, Typography} from "@mui/material";
import {FormContainer, TextFieldElement} from "react-hook-form-mui";

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

  handleSave = (dataURI) => {
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

  handleChange = () => {
    console.log("change");
  }

  render() {
    let checked = false;
    let div = <div>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h4">
            Profile
          </Typography>
          <FormContainer
            defaultValues={{name: ''}}
            onSuccess={data => console.log(data)}
          >
            <TextFieldElement name="name" label="First Name" required/>
            <TextFieldElement name="name" label="Last Name" required/>
            <Checkbox
              checked={checked}
              onChange={this.handleChange}
              inputProps={{'aria-label': 'controlled'}}
            />
          </FormContainer>
        </CardContent>
      </Card>
    </div>;
    return div
  }
}

export default Profile;
