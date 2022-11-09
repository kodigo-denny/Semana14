import { Component } from "react";
import Contador from "./Contador";
import ListaItems from "./ListaItems";

class BotonCarrito extends Component{
    render(){
        const {children, valor, lista, quitarDelCarrito} = this.props;
        
        return(
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {children}&nbsp;
                    <Contador valor={valor}></Contador>
                </button>
                <ul className="dropdown-menu">
                    <ListaItems quitarDelCarrito={quitarDelCarrito} lista={lista}></ListaItems>
                </ul>
                
            </div>
        )
    }
}

export default BotonCarrito