import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  // Kind of Data Members

  heading: '';
  disabled: Boolean;

  constructor() {
    this.heading = '';
    this.disabled = true;
  }

  ngOnInit(): void {}

  registerUser() {
    alert('User Registered Successfully');
  }

  myEvent(e: any) {
    console.log(e);
    this.heading = e;
  }

  toggleTextBox() {
    console.log('Enable button clicked');
    this.disabled = !this.disabled;
  }
}
