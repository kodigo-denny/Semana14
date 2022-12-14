import { Component } from "react";
import BotonCarrito from "./BotonCarrito";

class Menu extends Component{
    render(){
        const {children, valor, lista, quitarDelCarrito} = this.props;
        return(
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{children}</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        </ul>
                        <div className="d-flex" >
                            <BotonCarrito quitarDelCarrito={quitarDelCarrito} valor={valor} lista={lista}>Carrito de compra</BotonCarrito>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Menu