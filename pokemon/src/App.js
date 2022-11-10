import React from 'react'
import Contador from './Components/Contador'
import ListaPokemon from './Components/ListaPokemon'
import Seleccion from './Components/Seleccion'


const App = () => {
  return (
    <div>App
        <Seleccion />
        <ListaPokemon></ListaPokemon>
    </div>
  )
}

export default App