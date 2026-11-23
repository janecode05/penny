import { Component, OnInit } from '@angular/core';
import { PennyService } from '../../service/penny.service';

@Component({
  imports: [],
  selector: 'app-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export class Dashboard implements OnInit {
  username: string = '';
  constructor(private pennyService: PennyService) {}
  ngOnInit() {
    this.getuserlogin();
  }
  getuserlogin(){
    this.username = this.pennyService.getLoginData().username;
  }
}
