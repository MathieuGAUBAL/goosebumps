import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import WatchMovie from './components/watchMovie/WatchMovie';
import Homepage from './components/homepage/Homepage';
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer';


function App() {
  return (
    <div>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/WatchMovie' component={WatchMovie}/>

    </Switch>
</div>
  );
}

export default App;

