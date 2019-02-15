import React, { Component } from "react";
import PokemonCard from "./components/PokemonCard";

class App extends Component {
  state = {
    data: [],
    isClicked: false
  };
  async componentDidMount() {
    await fetch("https://pokeapi.co/api/v2/pokemon/?limit=29")
      .then(data => data.json())
      .then(res => {
        console.log(res);
        this.setState({
          data: res.results
        });
      });
  }

  getData = async e => {
    let id = e.target.id;
    await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      .then(data => data.json())
      .then(res => {
        console.log(res);
        return res.results.map(url =>
          fetch(url.url)
            .then(pokemon => pokemon.json())
            .then(res => console.log(res))
        );
      });
  };

  render() {
    return (
      <div className="container list ">
        <h1 className="text-center display-3">Pokemon List </h1>
        {this.state.data.map((pokemon, i) => (
          <button
            type="button"
            onClick={this.getData}
            key={i}
            className=" m-2 "
          >
            {pokemon.name}
          </button>
        ))}
        <PokemonCard />
      </div>
    );
  }
}

export default App;
