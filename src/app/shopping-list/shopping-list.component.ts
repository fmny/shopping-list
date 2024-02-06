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
  selectedIngredientIndex : number | null;

  constructor() {}

  ngOnInit() {  }


  onIngredientAdded(ingredient : Ingredient) {
    this.ingredients.push(ingredient);
    console.log("ajout")
  }

  onDeleteIngredient() {
    console.log(this.selectedIngredientIndex );
    if ( this.selectedIngredientIndex !== null && this.selectedIngredientIndex !== -1 &&
        this.selectedIngredientIndex < this.ingredients.length) {
      this.ingredients.splice(this.selectedIngredientIndex, 1);
    }
    this.selectedIngredientIndex = -1;
  }

  clearIngredients() {
    console.log("blabla");
    this.ingredients = [];
  }
  
}
