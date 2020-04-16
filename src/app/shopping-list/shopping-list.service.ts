import { Ingredient } from "../Shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10),
  ];
  getIngredients() {
    return this.ingredients.slice();
  }

  onAddIngredient(ingredient: Ingredient) {
    const ingredientsArr = this.ingredients.map((ingr) => ingr.name);
    if (ingredientsArr.includes(ingredient.name)) {
      return;
    } else {
      this.ingredients.push(ingredient);
      this.ingredientsChanged.emit(this.ingredients.slice());
      return;
    }
  }
}
