import { Injectable } from "@angular/core";
import { Recipe } from "./recipes.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  private recipes:Recipe[] = [
    new Recipe(
      'A test Recipe', 
      'this is simply a test', 
      'https://www.deliciousmagazine.co.uk/wp-content/uploads/2022/01/DEL_2022_Q1_SAM_FOLAN_SAVILLE_ORANGE_CHICKEN_WITH_NDUJA_HARICOT_BEANS0289-_960x1200.jpg',
      [
        new Ingredient('Meat', 10),
        new Ingredient('Fries', 10),
      ]),
    new Recipe(
      'Another test Recipe', 
      'this is simply a test', 
      'https://www.deliciousmagazine.co.uk/wp-content/uploads/2022/01/DEL_2022_Q1_SAM_FOLAN_SAVILLE_ORANGE_CHICKEN_WITH_NDUJA_HARICOT_BEANS0289-_960x1200.jpg',
      [
        new Ingredient('Bread', 2),
        new Ingredient('Beef', 6)
      ])
    ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients)
  }

}