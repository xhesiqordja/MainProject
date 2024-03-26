import {Component, EventEmitter, Output} from '@angular/core';
import {RecipeModel} from "../../../shared/models/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  @Output() recipeWasSelected = new EventEmitter<RecipeModel>();

  recipes: RecipeModel[] = [
    {name: 'Recipe One', description: 'Some description for Recipe One', imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'},
    {name: 'Recipe Two', description: 'Some description for Recipe One', imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2023/11/Slow-cooker-pumpkin-soup-40b22fb.jpg?quality=90&webp=true&resize=375,341'},
    {name: 'Recipe Three', description: 'Some description for Recipe One', imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-373498_11-af7aea1.jpg?quality=90&webp=true&resize=440,400'},
    {name: 'Recipe Four', description: 'Some description for Recipe One', imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/mexican-style-stuffed-peppers-23ce35d.jpg?quality=90&webp=true&resize=440,400'},
    {name: 'Recipe Five', description: 'Some description for Recipe One', imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/padron-peppers-900e031.jpg?quality=90&webp=true&resize=440,400'},
   
  ];

  onSelected(recipe: RecipeModel) {
    this.recipeWasSelected.emit(recipe)
  }
}
