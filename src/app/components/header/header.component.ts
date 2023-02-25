import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public tokenService:TokenStorageService,public route:Router) { }


  ngOnInit(): void {
    
  }
  getUser():boolean{
    const userData = this.tokenService.getToken()
    console.log(userData)
    let isAvailable= userData == null?false:true
    console.log(isAvailable)
    return isAvailable
  }

  // getUser():boolean{
  //   const userData=this.tokenService.getUser()
  //   let isAvailable = userData == null ? false : true;
  //   return isAvailable
    
  // }
  
  logout(){
    this.tokenService.removeToken();
    this.route.navigate(['register'])
  }

}
