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
    clicks: 0,
  }

  agregarAlCarrito = (producto) => {
    
    for(let i = 0; i < this.state.productos.length; i++){
      
      if(producto.id == this.state.productos[i].id){
        //if(this.state.productos[i].cantidad == 0){
          this.setState({contador: this.state.contador+1});
        //}
        this.state.productos[i].cantidad = this.state.productos[i].cantidad + 1;
        this.setState({clicks: this.state.clicks+1});
      }
    }
    
  }

  quitarDelCarrito = (producto) => {
    for(let i = 0; i < this.state.productos.length; i++){
      if(producto.id == this.state.productos[i].id){
        this.state.productos[i].cantidad = this.state.productos[i].cantidad - 1;
        this.setState({clicks: this.state.clicks+1});
        //if(this.state.productos[i].cantidad == 0){
          this.setState({contador: this.state.contador-1});
        //}
      }
    }
  }

  render(){
    return(
      <div>
        <Menu quitarDelCarrito={this.quitarDelCarrito} valor={this.state.contador} lista={this.state.productos}>Nombre de la tienda</Menu>
        <ListaProductos agregarAlCarrito={this.agregarAlCarrito} lista={this.state.productos}></ListaProductos>
      </div>
    )
  }
}

export default App