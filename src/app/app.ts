import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  
  counter: number = 0;

  onKeyDown(event: KeyboardEvent) {
    console.log(event)
    if(event.key === 'ArrowUp') {
       this.counter++
    } else if(event.key === 'ArrowDown') {
      this.counter--
    }
  }

}