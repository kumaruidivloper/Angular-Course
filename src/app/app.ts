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
  nm = '';
  em = '';
  ph = '';
  add = '';
  submitted: boolean = false;
  showHeading: boolean = true;
  qualification = [{ school: '', degree: '', year: '' }];

  addQualification() {
    this.qualification.push({ school: '', degree: '', year: '' });
  }

  formSubmit() {
    this.submitted = true;
    this.showHeading = false;
  }

  formEdit() {
    this.submitted = false;
    this.showHeading = true;
  }
}
