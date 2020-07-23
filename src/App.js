import React from 'react';
import './Styles/App.css';
import Header from './Components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './Pages/Home';
import Project from './Pages/Project';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';


function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/portfolio/:slug' component={Project} />
            <Route exact path='/about' component={About} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
