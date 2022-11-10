import React from 'react'
import Pokemon from './Pokemon'

const ListaPokemon = () => {
  return (
    <div className='row'>
        <Pokemon especie={"NombreEspecie"} peso={25} front="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" back="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png">Nombre</Pokemon>
    </div>
  )
}

export default ListaPokemon