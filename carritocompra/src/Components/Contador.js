import { Component } from "react";

class Contador extends Component{
    render(){
        const {valor} = this.props;
        return(
            <span className="badge text-bg-warning">{valor}</span>
        )
    }
}

export default Contador