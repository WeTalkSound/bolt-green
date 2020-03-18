import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import './App.css';

import Home from '../Home/Home';
import Header from '../Header/Header';
import Quiz from '../Question/Quiz';
import Default from '../Default';
import Footer from '../Footer/Footer';

import car from '../assets/img/car.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/questions" component={ Quiz } />
            <Route component={ Default } />
          </Switch>
        </BrowserRouter>

        <img className="aux-background d-none d-md-block" src={car} />
        <img className="d-block d-md-none img-fluid" src={car} />
        <Footer />
      </div>
    );
  }
}

export default App;
