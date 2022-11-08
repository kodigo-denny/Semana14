import { Component } from "react";
import Producto from "./Producto";

class ListaProductos extends Component{
    
    render(){
        const {lista,agregarAlCarrito} = this.props;
        //console.log(this.props.lista)
            return(
            <div className="row">
                {lista.map((p) => 
                   <Producto agregarAlCarrito={agregarAlCarrito} producto={p} ></Producto>
                )}
            </div>
        )
    }
}

export default ListaProductos