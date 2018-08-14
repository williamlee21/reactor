import React, { Component } from 'react';

class SignUp extends Component {

    render() {
        return (
            <div className="user-form">
                <form action="http://dev3.apppartner.com/Reactors/scripts/user-signup.php" method="post">
                    <input className="usernameIcon" type="text" placeholder="username" name="username"/>
                    <br/>
                    <input className="emailIcon" type="text" placeholder="email" name="email"/>
                    <br/>
                    <input className="passwordIcon" type="text" placeholder="password" name="password"/>
                    <input className="buttons" type="submit" value="Sign Up"/>
                </form>
            </div>
        );
    }
}

export default SignUp;