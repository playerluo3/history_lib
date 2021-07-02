import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Footer from './components/Footer'
import Chunqiu from './components/pages/Chunqiu';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/chunqiu" exact component={Chunqiu} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
