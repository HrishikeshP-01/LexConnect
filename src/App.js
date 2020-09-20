import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'
import {BrowserRouter, Route} from 'react-router-dom'
import LinkSender from './components/LinkSender';
import SendOption from './components/SendOptions';
import MusicSender from './components/MusicSender';
import RecieveOption from './components/RecieveOption';
import TextReciever from './components/TextReciever';
import MusicReciever from './components/MusicReciever';

function App() {
  return (
    <BrowserRouter>
    <div className="App black">
      <Navbar />
      <Route exact path='/' component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/LinkSender" component={LinkSender}/>
      <Route path="/MusicSender" component={MusicSender}/>
      <Route path="/SendOption" component={SendOption}/>
      <Route path="/RecieveOption" component={RecieveOption}/>
      <Route path="/TextReciever" component={TextReciever}/>
      <Route path="/MusicReciever" component={MusicReciever}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
