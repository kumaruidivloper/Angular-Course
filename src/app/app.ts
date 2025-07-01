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
  subjectList = [
    {
      subCode: 101,
      name: 'JavaScript',
    },
    {
      subCode: 102,
      name: 'C++',
    },
    {
      subCode: 103,
      name: 'NestJS',
    },
  ];
}
