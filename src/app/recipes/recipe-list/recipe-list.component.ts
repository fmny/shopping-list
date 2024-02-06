import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  ngOnInit(){
  }

  onRecipeSelected(recipe : Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  recipes : Recipe[]=[new Recipe('a test recipe','this is a test','https://upload.wikimedia.org/wikipedia/commons/e/ed/Larves_d%27insectes_%28recette%29.JPG')
,new Recipe('another test recipe','this is a 2nd test','https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Recette_de_gateau_hk.jp.jpg/800px-Recette_de_gateau_hk.jp.jpg')];
}
