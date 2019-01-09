import React, { Component } from 'react';

class Login extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="login">
                        <button className="btn btn-primary" onClick={this.props.auth.login}>
                            Login
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;
