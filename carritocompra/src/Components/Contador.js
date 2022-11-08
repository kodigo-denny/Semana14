import { Component } from "react";

class Contador extends Component{
    render(){
        const {valor} = this.props;
        return(
            <span class="badge text-bg-danger">{valor}</span>
        )
    }
}

export default Contador