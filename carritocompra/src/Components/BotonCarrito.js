import { Component } from "react";
import Contador from "./Contador";

class BotonCarrito extends Component{
    render(){
        const {children, valor} = this.props;
        return(
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {children}&nbsp;
                    <Contador valor={valor}></Contador>
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
        )
    }
}

export default BotonCarrito