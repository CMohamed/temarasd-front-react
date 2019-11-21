import React, {Component} from 'react';
import {connect} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import {register, updateGuest} from "../actions/actions";

const container = {
    display: 'flex',
    flexWrap: 'wrap',
};

const textField = {
    marginLeft: 2,
    marginRight: 2,
    width: 200,
};

class Register extends Component {
    render() {
        return (
            <form className={container} onSubmit={this.props.submit}>
                <div>
                    <TextField
                        required
                        error={false}
                        id="username"
                        style={textField}
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
                        style={textField}
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
                        style={textField}
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
)(Register);

