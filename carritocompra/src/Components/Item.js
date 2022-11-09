import { Component } from "react";
import BotonQuitar from "./BotonQuitar";
import Contador from "./Contador";

class Item extends Component{
    render(){
        const {producto, quitarDelCarrito} = this.props
        
        return(
            <li>
                {producto.cantidad==0?"":<BotonQuitar producto={producto} quitarDelCarrito={quitarDelCarrito}></BotonQuitar>}
                {producto.cantidad==0?"":<Contador valor={producto.cantidad}></Contador>}
                {producto.cantidad==0?"":<img width={40} src={producto.imagen}></img>}
                {producto.cantidad==0?"":producto.nombre}
            </li>
        )
    }
}

export default Item