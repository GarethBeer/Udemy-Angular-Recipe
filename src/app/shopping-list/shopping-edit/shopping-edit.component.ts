import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  EventEmitter,
  Output
} from "@angular/core";
import { Ingredient } from "src/app/Shared/ingredient.model";
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput") nameInputRef: ElementRef;
  @ViewChild("amountInput") amountInputRef: ElementRef;
  
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}
  onAddListItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppingListService.onAddIngredient(newIngredient);
    
  }
  onDeleteListItem() {
    console.log("delete");
  }
  onClearInput() {
    console.log("clear");
  }
}
