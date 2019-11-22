import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createStyles, withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom";

const styles = createStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    removeUnderline: {
        textDecoration: "none",
        color: "white"
    }
}));

class Header extends Component {
    render() {
        console.log(this.props);
        const {classes} = this.props;
        console.log(classes);
        return (
            <div className={classes.root}>
                <AppBar position="static" >
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Temara service directory
                        </Typography>

                        <Link to="/login">
                            <Button color="inherit" className={classes.removeUnderline}>Login</Button>
                        </Link>
                        <Link to="/register">
                            <Button color="inherit" className={classes.removeUnderline}>Register</Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(withStyles(styles)(Header));
