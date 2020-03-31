import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  recipePage = false;
  shoppingList = false;
  onNavigate(page: string) {
    if (page === "shopping-list") {
      this.recipePage = false;
      this.shoppingList = !this.shoppingList;
    }
    if (page === "recipes") {
      this.shoppingList = false;
      this.recipePage = !this.recipePage;
    }
  }
}
