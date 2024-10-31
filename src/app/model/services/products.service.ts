import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Iproducts[] = [
    {id: 1, name: "Indomável", price: 50.0, description: "Um livro maravilhoso", image:'../julia1.png'},
    {id: 2, name: "Brilhante", price: 50.0, description: "Um livro maravilhoso", image:'../julia2.png'},
    {id: 3, name: "Esplêndida", price: 50.0, description: "Um livro maravilhoso", image:'../julia3.png'},
    {id: 4, name: "Mais forte que o Sol", price: 50.0, description: "Um livro maravilhoso", image:'../julia4.png'},
    {id: 5, name: "Mais Lindo que a Lua", price: 50.0, description: "Um livro maravilhoso", image:'../julia5.png'},
    {id: 6, name: "Minha Vida Fora de Série 1", price: 50.0, description: "Um livro maravilhoso", image: '../paula1.png'},
    {id: 7, name: "Minha Vida Fora de Série 2", price: 50.0, description: "Um livro maravilhoso", image: '../paula2.png'},
    {id: 8, name: "Minha Vida Fora de Série 3", price: 50.0, description: "Um livro maravilhoso", image: '../paula3.png'},
    {id: 9, name: "Minha Vida Fora de Série 4", price: 50.0, description: "Um livro maravilhoso", image: '../paula4.png'},
    {id: 10, name: "Minha Vida Fora de Série 5", price: 50.0, description: "Um livro maravilhoso", image: '../paula5.png'},
    
  ];

  getProducts(): Iproducts[] {
    return this.products;
  }
}
