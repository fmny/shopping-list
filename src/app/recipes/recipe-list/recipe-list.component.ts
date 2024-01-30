import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  
  

  ngOnInit(): void {
  }

  recipes : Recipe[]=[new Recipe('a test recipe','this is a test','https://upload.wikimedia.org/wikipedia/commons/e/ed/Larves_d%27insectes_%28recette%29.JPG')
,new Recipe('a test recipe','this is a test','https://upload.wikimedia.org/wikipedia/commons/e/ed/Larves_d%27insectes_%28recette%29.JPG')];
}
