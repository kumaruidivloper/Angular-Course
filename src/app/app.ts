import { routes } from './app.routes';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';

interface empInterface {
  id: number;
  name: string;
  role: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  employees = signal<empInterface[]>([
    {id: 1, name: 'EmployeeA', role: 'Admin'},
    {id: 2, name: 'EmployeeB', role: 'HR'},
    {id: 3, name: 'EmployeeC', role: 'Marketing'},
    {id: 4, name: 'EmployeeD', role: 'Developer'},
    {id: 5, name: 'EmployeeE', role: 'Team Lead'}
  ])
}
