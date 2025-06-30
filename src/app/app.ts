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
  
  onClick(e: MouseEvent, msg: string, num: number ) {
    console.log('Event', e);
    console.log('Message', msg);
    console.log('Number', num);
  }

  isShift() {
    console.log('Shift + Y is pressd')
  }

  isShiftEvent(event: any) {
    if(event.shiftKey && event.key === 'Y') {
        console.log('Shift + Y is pressd', event)
    }
  }

}