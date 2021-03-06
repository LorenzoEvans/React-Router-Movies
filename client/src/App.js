import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import MovieCard from './Movies/MovieCard';
import Movie from './Movies/Movie'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => { 
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (

  <div>  
  <SavedList list={this.state.savedList} />
  {/* <div>Replace this Div with your Routes</div> */}
  <Route exact path='/' component={MovieList}
   />
   <Route exact path="/movies" component={MovieList} />
  <Route exact path="/movies/:id" component={Movie} />
  {/* <Route exact path="/movies/:id/info" component={MovieCard} /> */}
  
  </div>
      
    );
  }
}