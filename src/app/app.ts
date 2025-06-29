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
  counterDbl: number = 0;
  counterMouseOver: number = 0;
  counterMouseLeave: number = 0;
  counterMouseDown: number = 0;
  counterMouseUp: number = 0;
  counterMouseDrag: number = 0;
  counterDragOver: number = 0;

  incrDbl() {
     this.counterDbl++;
  }

  incrMouseOver() {
     this.counterMouseOver++;
  }

  incrMouseLeave() {
    this.counterMouseLeave++;
  }
  
  incrMouseDown() {
    this.counterMouseDown++
  }

  incrMouseUp() {
    this.counterMouseUp++
  }

  incrMouseDrag() {
    this.counterMouseDrag++
  }

  incrMouseDragOver() {
    this.counterDragOver++
  }
  
}