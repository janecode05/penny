import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, NgForm} from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import { Router, RouterLink } from '@angular/router';
import {PennyService} from '../../service/penny.service';



@Component({
  imports: [MatCardModule, FormsModule, MatDividerModule,
    MatButtonModule, MatInputModule, MatFormFieldModule, RouterLink],
  selector: 'app-login',
  styleUrl: './login.scss',
  templateUrl: './login.html',
  standalone: true
})
export class Login implements OnInit {
  username: string = '';
  password: string = '';
  constructor(private router: Router , private pennyService: PennyService) { }
  ngOnInit() {

  }
  onSubmit(data: NgForm) {
debugger;    
  let loginData = {
     username: data.value.username,
     password: data.value.password
  }
this.pennyService.login(loginData.username, loginData.password).subscribe({
  next: (response: any) => {
    console.log('Login successful', response);
    // Save token using a secure authentication strategy
    this.router.navigate(['/dashboard']);
  },
  error: (error) => {
    console.log('Invalid credentials');
  },
});
  //this.router.navigate(['/dashboard']);
  }
}
