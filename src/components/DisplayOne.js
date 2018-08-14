import React, { Component } from 'react';
import tableImage from '../assets/1.png';
import cookieImage from '../assets/2.png';

class DisplayOne extends Component {

    render() {
        return (
            <div className="container light-sage">
                <div className="containerOne">       
                    <img src={tableImage} alt="Awesome Table" className="DisplayOneImage"/>
                    <p>Title</p>
                    <p>
                        The quick brown fox jumps over a lazy dog.
                        DJS folock by when MTV ax quiz prog.
                        Junk MTV quize graced by fox whelps.
                        Bawds job flick quartz, vezy nymphs.
                    </p>
                </div>
                <div className="containerOne">                        
                    <img src={cookieImage} alt="Awesome Cookie" className="DisplayOneImage"/>
                    <p>Title</p>
                    <p>
                        The quick brown fox jumps over a lazy dog.
                        DJS folock by when MTV ax quiz prog.
                        Junk MTV quize graced by fox whelps.
                        Bawds job flick quartz, vezy nymphs.
                    </p>
                </div>
            </div>
        );
    }
}

export default DisplayOne;