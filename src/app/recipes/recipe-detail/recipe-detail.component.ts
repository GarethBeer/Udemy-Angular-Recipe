import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
import { Ingredient } from "src/app/Shared/ingredient.model";
import { ShoppingListService } from "src/app/shopping-list/shopping-list.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { RecipeService } from "../recipe.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"],
})
export class RecipeDetailComponent implements OnInit {
  id: number;
  recipe: Recipe;

  constructor(
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  onShoppingListClick(ingredients: Ingredient[]) {
    ingredients.map((ingredient) =>
      this.shoppingListService.onAddIngredient(ingredient)
    );
    this.router.navigate(["/shoppingList"]);
  }

  onEditRecipe() {
    console.log(this.route)
    this.router.navigate(["edit"], { relativeTo: this.route });
  }
}
