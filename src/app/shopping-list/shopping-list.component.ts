import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';



@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit{

  ingredients: Ingredient[] = [
    new Ingredient('apple',5),
    new Ingredient('tomatoes',3),
    new Ingredient('sugar',500)
  ];
  
  constructor() {}

  ngOnInit(): void {}

}
