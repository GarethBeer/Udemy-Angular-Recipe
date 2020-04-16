import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../recipe.model";
import { Ingredient } from "src/app/Shared/ingredient.model";
import { ShoppingListService } from "src/app/shopping-list/shopping-list.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}
  onShoppingListClick(ingredients: Ingredient[]) {
    console.log(ingredients);
    ingredients.map((ingredient) =>
      this.shoppingListService.onAddIngredient(ingredient)
    );
  }
}
