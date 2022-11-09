import { Component } from "react";
import Item from "./Item";

class ListaItems extends Component{
    render(){
        const {lista, quitarDelCarrito} = this.props
        console.log("Items:", lista);
        return(
            <div>
                {lista.map((p) => 
                    <Item quitarDelCarrito={quitarDelCarrito} producto={p}></Item>
                )}
                
            </div>
        )
    }
}

export default ListaItems