import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createStyles, withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import {register, updateGuest} from "../actions/actions";

const styles = createStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

class Register extends Component {
    render() {
        console.log(this.props);
        const {classes} = this.props;
        console.log(classes);
        return (
            <form className={classes.container} onSubmit={this.props.submit}>
                <div>
                    <TextField
                        required
                        error={false}
                        id="username"
                        className={classes.textField}
                        label="Username"
                        margin="normal"
                        variant="outlined"
                        onChange={this.props.updateUser}
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
                        onChange={this.props.updateUser}
                    />
                </div>
                <div>
                    <TextField
                        required
                        error={false}
                        id="email"
                        className={classes.textField}
                        label="Email"
                        margin="normal"
                        variant="outlined"
                        onChange={this.props.updateUser}
                    />
                </div>
                <Button variant="contained" color="primary" onClick={this.props.submit}>
                    Register
                </Button>
            </form>
        );
    }
}


function mapStateToProps(state) {
    return {user: state.guest};
}

function mapDispatchToProps(dispatch) {
    return {
        updateUser: (e) => {
            let guest = {};
            guest[e.target.id] = e.target.value;
            return dispatch(updateGuest(guest))
        },
        submit: () => {
            return dispatch(register())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Register));

