import { Component } from "react";

class BotonQuitar extends Component{
    render(){
        const {quitarDelCarrito, producto} = this.props;
        return(
                <button onClick={() => quitarDelCarrito(producto)} className="btn btn-danger badge">-</button>

        )
    }
}

export default BotonQuitar