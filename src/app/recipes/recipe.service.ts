import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Spaghetti Bolognaise',
      'A Lovely home cooked Italian Classic with Tomatoes, Garlic, Mince and Spaghetti',
      'https://www.kitchensanctuary.com/wp-content/uploads/2019/09/Spaghetti-Bolognese-square-FS-0204.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Spaghetti', 5)
      ]
    ),
    new Recipe(
      'Spaghetti MeatBalls',
      'A Lovely home cooked Italian Classic with Tomatoes, Garlic, Mince and Spaghetti',
      'https://www.kitchensanctuary.com/wp-content/uploads/2019/09/Spaghetti-Bolognese-square-FS-0204.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Spaghetti', 5)
      ]
    ),
  ];

  getRecipes() {
      return this.recipes.slice();
  }

}
