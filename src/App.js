import Profile from './Profile.js';

import { useState } from 'react';

import './App.css';
export default function Main() {
  
  return (
    <section>
      <div className="App">
    
     <h1>React Calculator</h1>
     
      <input value="0" id="Screen"type="text"></input>
      <div class="grid-container">
      <Profile label="7" />
      <Profile label="8" />
      <Profile label="9" />
      <Profile label="÷" />
      <Profile label="4" />
      <Profile label="5" />
      <Profile label="6" />
      <Profile label="x" />
      <Profile label="1" />
      <Profile label="2" />
      <Profile label="3" />
      <Profile label="-" />
      <Profile label="CR" />
      <Profile label="0" />
      <Profile id="plus"label="=" />
      <Profile label="+"/>
      </div>
      </div>
    
    </section>
  );
}
