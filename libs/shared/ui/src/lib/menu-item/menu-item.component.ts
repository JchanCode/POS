import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from './menu-item.type';

@Component({
  selector: 'menu-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
})
export class MenuItemComponent {
  constructor() {

  }
  @Input({required: true}) item: MenuItem | undefined = undefined;
  
  @Output() itemSelectedEvent = new EventEmitter<number>();

  addMenuItem(itemId: number) {
    console.log(`Selected ${itemId}: ${this.item?.name}`)
    this.itemSelectedEvent.emit(itemId)
    return null;
  }
}
