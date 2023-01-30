import Main from './App.js';
import { useState } from 'react';

export default function Profile({label}) {
    
    


    const hello =() =>{
     console.log(label);

    }
    return (
        
  <button onClick={hello} class="grid-item" type="submit">{label}</button>
    );
  }