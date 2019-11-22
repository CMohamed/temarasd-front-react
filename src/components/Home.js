import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from "./Header";

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Header></Header>
                <h1>Welcome Home</h1>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(Home);
