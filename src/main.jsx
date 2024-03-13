import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { NavContainer } from './Body/NavContainer/NavContainer.jsx'
import { MainContainer } from './Body/MainContainer/MainContainer.jsx'
import { Parrafo } from './components/Parrafos/Parrafo.jsx'
import { CapitulosContainer } from './Body/CapitulosContainer/CapitulosContainer.jsx'
import { FrasesContainer } from './Body/FrasesContainer/FrasesContainer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavContainer />
    <MainContainer/>
    <CapitulosContainer />
    <Parrafo />
    <FrasesContainer />
  </React.StrictMode>,
)
