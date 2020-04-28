import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Ingredient } from 'src/app/Shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  form: FormGroup;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      ingredientName: new FormControl(null, Validators.required),
      amount: new FormControl(null, [Validators.required, Validators.min(1)]),
    });

    this.subscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editedItemIndex = index;
      this.editedItem = this.shoppingListService.getIngredient(index);
      this.form.setValue({
        ingredientName: this.editedItem.name,
        amount : this.editedItem.amount
      });
    });
  }
  onAddListItem() {
    const newIngredient = {
      name: this.form.value.ingredientName,
      amount: this.form.value.amount
    };

    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.shoppingListService.onAddIngredient(newIngredient);
    }
    this.editMode = false;
    this.form.reset();
  }
  onDeleteListItem() {
    this.shoppingListService.onDeleteIngredient(this.editedItemIndex);
    this.onClearInput();
  }
  onClearInput() {
    this.form.reset();
    this.editMode = false;
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
