import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import red from '@material-ui/core/colors/red'

const styles = theme => ({
    card: {
        // maxWidth: 400,
    },
    media:{
        height: 400,
        paddingTop: '56.26', //16:9
    },
    actions:{
        display:'flex',
    },
    avatar:{
        backgroundColor: red[500],
    },

}); 

class Post extends Component {

    constructor(props){
        super(props);
    }

    render(){

        const { classes } = this.props;
        const avatar = this.props.avatar;
        const image = this.props.image;

        return (
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar arial-label="thumbnail" className={classes.avatar}>
                            {avatar}
                        </Avatar> 
                    }
                    title="Tea with Boston"
                    subheader="February 11, 2019"
                />    
                <CardMedia
                    className={classes.media}
                    image={image}
                    title="Quincy Market"
                />
                <CardContent>
                    <Typography component="p">
                        Shopping center with many stores 
                        & restaurants comprising 3 historic 
                        market buildings & a promenade
                    </Typography>
                </CardContent>
                <CardActions disableActionSpacing className={classes.actions}>
                    <IconButton aria-label="Add to favourites">
                        <FavoriteIcon/>
                    </IconButton>
                    <IconButton aria-label="Share">
                        <ShareIcon/>
                    </IconButton>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(styles)(Post);