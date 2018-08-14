import React, { Component } from 'react';

class Subscribe extends Component {

    render() {
        return (
            <div>
                <br/>
                <hr/>
                <br/>
                <h2>SUBSCRIBE TO NEWSLETTER</h2>
                <form action="http://dev3.apppartner.com/Reactors/scripts/add-email.php" method="post">
                    <input placeholder="Your Email" name="email"/>
                    <button className="subscribe-button">Submit</button>
                </form>
            </div>
        );
    }
}

export default Subscribe;