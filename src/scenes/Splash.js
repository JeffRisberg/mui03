import React, {Component} from 'react'
import {Card, CardContent, Typography} from "@mui/material";

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

export default Splash;
