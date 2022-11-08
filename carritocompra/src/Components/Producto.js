import { Component } from "react";
import Boton from "./Boton";

class Producto extends Component{
    render(){
        const {agregarAlCarrito, producto} = this.props;
        //console.log(producto)
        return(
            <div className="card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <img className="card-img-top" src={producto.imagen} height={"75%"}></img>
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">Precio: $ {producto.precio}</p>
                <Boton agregarAlCarrito={agregarAlCarrito} producto={this.props.producto}>Comprar</Boton>

            </div>
        )
    }
}

export default Producto