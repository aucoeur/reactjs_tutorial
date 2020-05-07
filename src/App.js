import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import './App.css';
import About from './About/About';
import Title from './Title/Title';
import ItemList from './ItemList/ItemList';
import Footer from './Footer/Footer';
import ItemDetails from './ItemDetails/ItemDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Route exact path="/" component={ItemList} />
        <Route path="/about" component= {About} />
        <Route path="/details/:id" component={ItemDetails} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
