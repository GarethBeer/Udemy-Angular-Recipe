import { Recipe } from './recipe.model';
import { Subject } from 'rxjs';
import { Ingredient } from '../Shared/ingredient.model';

export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'Spaghetti Bolognaise',
      'A Lovely home cooked Italian Classic with Tomatoes, Garlic, Mince and Spaghetti',
      'https://www.kitchensanctuary.com/wp-content/uploads/2019/09/Spaghetti-Bolognese-square-FS-0204.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Spaghetti', 5)]
    ),
    new Recipe(
      'Spaghetti MeatBalls',
      'A Lovely home cooked Italian Classic with Tomatoes, Garlic, Mince and Spaghetti',
      'https://hips.hearstapps.com/delish/assets/17/39/1506456062-delish-spaghetti-meatballs.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Spaghetti', 5)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(newRecipe: Recipe, index: number) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
