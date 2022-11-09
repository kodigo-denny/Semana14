import { Component } from "react";

class Boton extends Component{
    render(){
        const {children, agregarAlCarrito, producto} = this.props;
        //console.log(this.props)
        return(
            <div>
                <button onClick={() => agregarAlCarrito(producto)} className="btn btn-primary">
                    {children}
                </button>
            </div>
        )
    }
}

export default Boton