import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  isAuthorized: boolean = true;

  listItems: string[] = ['ItemA', 'ItemB', 'ItemC', 'ItemD'];

  listItemsEmpty: string[] = [];

  
}
