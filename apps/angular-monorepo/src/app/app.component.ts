import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MenuItem, MenuItemComponent } from '@angular-monorepo/shared-ui'

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MenuItemComponent],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-monorepo';
  menu: MenuItem[] = [
    {id: 101,category: 'appetizer', name:'french toast', price: 10.00},
    {id: 201,category: 'entree',sub_category:"rice",name:'tomato pork chop', price: 10.00},
    {id: 301,category: 'drinks',name:'milk tea', price: 10.00},
    {id: 401,category: 'dessert',name:'yin-yurn affogato', price: 10.00},
  ]

  //Need to create a parent for menuItemComponent and Receipt component.
  addItemToReceipt($itemId: number) {
    console.log(`adding to Receipt array in parent component. {id: ${$itemId}}`)
    return null;
  }
}
