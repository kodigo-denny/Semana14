import { Component } from "react";
import ListaProductos from "./Components/ListaProductos";
import Menu from "./Components/Menu"

class App extends Component{
  state = {
    productos: [
      {id: 1, nombre: 'Manzana', precio: 1.5, imagen: 'img/manzana.jpg', cantidad: 0},
      {id: 2, nombre: 'Tomate', precio: 0.5, imagen: 'img/tomate.jpg', cantidad: 0},
      {id: 3, nombre: 'Uva', precio: 0.25, imagen: 'img/uva.jpg', cantidad:0},
      {id: 4, nombre: 'Lechuga', precio: 0.75, imagen: 'img/lechuga.jpg', cantidad:0},
    ],
    contador: 0,
  }

  agregarAlCarrito = (producto) => {
    console.log("Se agrego", producto);
  }

  render(){
    return(
      <div>
        <Menu valor={this.state.contador}>Nombre de la tienda</Menu>
        <ListaProductos agregarAlCarrito={this.agregarAlCarrito} lista={this.state.productos}></ListaProductos>
      </div>
    )
  }
}

export default App