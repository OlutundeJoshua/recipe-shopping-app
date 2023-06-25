import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Recipe } from "./recipes.model";
import { DataDtorageService } from "../shared/data-storage.service";
import { RecipeService } from "./recipe.service";

@Injectable({ providedIn: 'root' })
export class RecipeResolverService implements Resolve<Recipe[]> {
  constructor(
    private dataStorageService: DataDtorageService,
    private recipeService: RecipeService
    ) {}

  resolve(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipeService.getRecipes()

    if(recipes.length === 0 ) {
    return this.dataStorageService.fetchRecipes()
    } else {
      return recipes;
    }
  }
}