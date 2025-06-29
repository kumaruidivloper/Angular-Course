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


  onKeyPress() {
    console.log('KeyPress event is triggered')
  }

  onKeyDown() {
    console.log('Keydown event is triggered')
  }

  onKeyDownEnter() {
    console.log('Keydown Enter event is triggered')
  }

  onKeyUp() {
    console.log('Keyup event is triggered')
  }

  onFocus() {
    console.log('Focus event is triggered')
  }

  onSelect() {
    console.log('Select event is triggered')
  }
  
}