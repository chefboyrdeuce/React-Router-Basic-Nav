import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <>
  <div>
    <Navigation />
  </div>
  
    <Route exact path="/" component={Home} />
    <Route path="/" component={About} />
    <Route path="/" component={Contact} />
  </>
);

export default App;
