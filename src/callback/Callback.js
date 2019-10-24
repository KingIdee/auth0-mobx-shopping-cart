import React from 'react';
import { withRouter } from 'react-router';

function Callback(props) {
    // props.auth.handleAuthentication();
    setTimeout(() => {
        props.auth.handleAuthentication().then((res) => {
            console.log(res);
            props.history.push('/');
        });
    }, 1000);
    

    return (
        <div>
            Loading user profile.
    </div>
    );
}

export default withRouter(Callback);