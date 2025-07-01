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
  showDetails = {
    name: 'UserA',
    age: 29,
    location: 'New York',
  };

  a: number = 10;
  b: number = 20;

  calc(): number {
    return this.a + this.b;
  }


  employees = [
    {id: 1, name: 'UserA', salary: 45000},
    {id: 2, name: 'UserB', salary: 50000},
    {id: 3, name: 'UserC', salary: 65000},
  ]
}
