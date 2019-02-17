import React from 'react'
// import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import LinkedCamera from '@material-ui/icons/LinkedCamera'

const styles = {
    root: {
        flexGrow:1,
    },
};

class Header extends React.Component {
    render(){

        const { classes } = this.props;

        return (
            <AppBar position="static" color="default" className={classes.root}>
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        Insta
                    </Typography>
                    <LinkedCamera/>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(Header);