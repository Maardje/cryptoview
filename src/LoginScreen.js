import React, { Component } from 'react';


class Login extends Component {
    constructor() {
        super();
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this)
        this.state = {
            loggedIn: false
        }
    }

    login() {
        this.setState({ loggedIn: true });
        }

    logout() {
        this.setState({loggedIn: false});
    }

    render() {
        return (
        <div>
            {!this.state.loggedIn &&
                <button onClick={this.login}> login </button>
            }
            {this.state.loggedIn &&
                <button onClick={this.logout}> logout </button>
            }
        </div>
        )
    }
}

export default Login;