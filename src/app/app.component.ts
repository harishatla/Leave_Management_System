import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  ngOninit(){
  }
  constructor(public tokenService:TokenStorageService,public route:Router){}
  title = 'LMS';
  
}
