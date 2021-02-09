import React, { Component } from 'react';
import './Pokecards.css';

class Pokecards extends Component {
    render() {

        function generateId(id) {
            let i = "";
            if (id < 10 && id < 100) {
                i = "00";
            } else if (id >= 10 && id < 100) {
                i = "0";
            }
            return `${i}${id}`;
        }

        let imgSrc = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${generateId(this.props.id)}.png`;

        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{this.props.name}</h1>
                <img className="Pokecard-img" src={imgSrc} />
                <div className="Pokecard-data">EXP: {this.props.base_experience}</div>
                <div className="Pokecard-data">Type: {this.props.type}</div>
            </div>

        );
    }
}

export default Pokecards;
