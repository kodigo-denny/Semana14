import {React, useState} from 'react'
import Boton from './Boton'

const Pokemon = ({children, front, back, especie, peso}) => {
    const [imagen, setImagen] = useState(front)
    
  return (
    <div className='card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2'>
        <div className='row'>
            <Boton evento={() => setImagen(front)}>Front</Boton>
            <img className='card-img-top' src={imagen} />
            <Boton evento={() => setImagen(back)}>Back</Boton>
        </div>
        
        <div className='card-body'>
            <h5 className='card-title alert alert-secondary'>{children}</h5>
            <p className='card-text alert alert-secondary'>
                <b>Especie:</b> {especie}<br />
                <b>Peso:</b> {peso}
            </p>
            
            
        </div>
    </div>
  )
}

export default Pokemon