import { useState } from 'react'
import './App.css';
import ButtonComponent from './components/button.jsx'; 

function App() {
  return (
    <>
      <div className="app"> 
        <h1 className="centered-h1">Simple Quote Generator</h1>
        <h2 className="Quote">"quote"</h2>
        <h2 className="Quote">- Quote Author</h2>
        <ButtonComponent />
      </div>
    </>
  )
}

export default App
