import React, { Component } from 'react';

class Login extends Component {

    render() {
        return (
            <div className="user-form">
                <form action="http://dev3.apppartner.com/Reactors/scripts/user-login.php" method="post">
                    <input className="emailIcon" type="text" placeholder="email" name="email"/>
                    <br/>
                    <input className="passwordIcon" type="text" placeholder="password" name="password"/>
                    <input className="buttons"type="submit" value="Log In"/>
                </form>
            </div>
        );
    }
}

export default Login;