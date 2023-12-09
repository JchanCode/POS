import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { mockMenu } from '../menu-item/menu-item.mocks';

@Component({
  selector: 'selection-bridge',
  standalone: true,
  imports: [CommonModule, MenuItemComponent],
  templateUrl: './selection-bridge.component.html',
  styleUrl: './selection-bridge.component.scss',
})
export class SelectionBridgeComponent {
  menu = mockMenu;

  //Need to create a parent for menuItemComponent and Receipt component.
  addItemToReceipt($itemId: number) {
    console.log(`adding to Receipt array in parent component. {id: ${$itemId}}`)
    return null;
  }
}
