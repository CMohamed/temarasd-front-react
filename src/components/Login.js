import React, {Component} from 'react';
import {connect} from 'react-redux';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {createStyles, withStyles} from "@material-ui/core";

const styles = createStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        width: 200,
    },
}));

class Login extends Component {
    render() {
        console.log(this.props);
        const {classes} = this.props;
        return (
            <form className={classes.container} >
                <div>
                    <TextField
                        required
                        error={false}
                        id="username"
                        className={classes.textField}
                        label="Username"
                        margin="normal"
                        variant="outlined"
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="password"
                        type="password"
                        className={classes.textField}
                        label="Password"
                        margin="normal"
                        variant="outlined"
                    />
                </div>
                <Button variant="contained" color="primary">
                    Login
                </Button>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(withStyles(styles)(Login));
