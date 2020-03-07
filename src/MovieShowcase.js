import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js';
import movieData from './data.js';

// MovieShowcase(App.js) is the component that will house all of the 'raw' data associated with the movies we want to display
export default class MovieShowcase extends Component {
  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map((m, index) => (
      <MovieCard
        key={index}
        title={m.title}
        IMDBRating={m.IMDBRating}
        genres={m.genres}
        poster={m.poster}
      />
    ));
  };

  render() {
    return <div id='movie-showcase'> {this.generateMovieCards()} </div>;
  }
}
