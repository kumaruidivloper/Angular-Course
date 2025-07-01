import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  fullStackDev = [
    {
      id: 1,
      name: 'Angular',
    },
    {
      id: 2,
      name: 'React',
    },
    {
      id: 3,
      name: 'Next.js',
    },
    {
      id: 4,
      name: 'NestJS',
    },
  ];

  items: any[] = ['Apple', 'Banana', 'Orange', 'Mango']

  trackByItemID(item: any) {
    return item.id
  }

  updateItem() {
    this.fullStackDev[1] = {id: 2, name: 'Veu'};
  }

  matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
  ]
}
