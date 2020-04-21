import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import ItemList from './ItemList';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Title />
      <ItemList />
      <Footer />
    </div>
  );
}

export default App;
