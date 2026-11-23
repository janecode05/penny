import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PennyService } from '../../service/penny.service';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-createlogin',
  styleUrl: './createlogin.scss',
  templateUrl: './createlogin.html',
})
export class Createlogin {
  username = '';
  password = '';
  confirmPassword = '';
  showPassword = false;
  submitted = false;

  constructor(
    private readonly router: Router,
    private readonly pennyService: PennyService,
  ) {}

  onSubmit(form: NgForm): void {
  debugger;    
    this.submitted = true;
    if (!form.valid || this.password !== this.confirmPassword) {
      return;
    }
    this.pennyService.register(this.username, this.password).subscribe({
      next: (response: any) => {
        console.log('Registration successful', response);

        // Save token using a secure
        // authentication strategy

        // Navigate to dashboard
        this.router.navigate(['/login']);
      },

      error: (error) => {
        console.log('Invalid credentials');
      },
    });
  }
}
