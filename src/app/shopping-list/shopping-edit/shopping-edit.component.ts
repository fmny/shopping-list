import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Recipe } from '../../recipes/recipe.model';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {


  @ViewChild('nameInput') nameInputRef : ElementRef; //contient un element HTML générique
  @ViewChild('amountInput') amountInputRef : ElementRef;
  

  @Output()ingredientAdded = new EventEmitter<Ingredient>();

  @Output() ingredientIndexDeleted = new EventEmitter<void>();

  @Output() clearRequested = new EventEmitter<void>();


 onAddItem() {
  const ingName=this.nameInputRef.nativeElement.value; //nativeElement : recupère l'instance HTML stocké dans ElementRef
  const ingAmount=this.amountInputRef.nativeElement.value;
  const newIngredient=new Ingredient(ingName,ingAmount);

  this.ingredientAdded.emit(newIngredient);
  }

  refreshButton() {
    this.nameInputRef.nativeElement.value="";
  }

  onDelete() {
    this.ingredientIndexDeleted.emit();
  }
  
  onClear() {
    this.clearRequested.emit(); 
  }
}
