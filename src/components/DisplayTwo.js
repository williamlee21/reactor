import React, { Component } from 'react';
import peopleImage from '../assets/3.png';
import landsacpeImage from '../assets/4.png';
import fireworkImage from '../assets/5.png';
import streetImage from '../assets/6.png';

class DisplayTwo extends Component {

    render() {
        return (
            <div style={{padding: "100px"}}>
                <h3>Maui By Air The Best Way Around The Island</h3>
                <div className="container">
                    <div className="containerTwo">
                        <img src={peopleImage} alt="Awesome People" className="DisplayTwoImage"/>
                        <h3>East Josianefurt</h3>
                        <p>085 Daron Via</p>
                    </div>
                    <div className="containerTwo">
                        <img src={landsacpeImage} alt="Awesome People" className="DisplayTwoImage"/>
                        <h3>South Cristopherport</h3>
                        <p>162 Chandler Ville</p>
                    </div>
                    <div className="containerTwo">
                        <img src={fireworkImage} alt="Awesome People" className="DisplayTwoImage"/>
                        <h3>Concepcionbury</h3>
                        <p>7643 Kylie Burgs</p>
                    </div>
                    <div className="containerTwo">
                        <img src={streetImage} alt="Awesome People" className="DisplayTwoImage"/>
                        <h3>Reychester</h3>
                        <p>5590 Gabe Views Apt. 004</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default DisplayTwo;