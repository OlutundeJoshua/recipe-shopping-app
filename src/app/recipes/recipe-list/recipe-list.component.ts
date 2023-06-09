import { Component } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes:Recipe[] = [
    new Recipe('A test Recipe', 'this is simply a test', 
    'https://www.deliciousmagazine.co.uk/wp-content/uploads/2022/01/DEL_2022_Q1_SAM_FOLAN_SAVILLE_ORANGE_CHICKEN_WITH_NDUJA_HARICOT_BEANS0289-_960x1200.jpg')
  ];

}
