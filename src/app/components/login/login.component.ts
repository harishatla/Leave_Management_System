import { Component, OnInit } from '@angular/core';
import { loginData } from 'src/app/modals/loginData';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService) { }
  loginData:loginData={
    userId:'',
    password:''
  }

  ngOnInit(): void {
  }
  submitLogin(f:any){
    this.auth.login(f.value).subscribe(res=>console.log(res))
    console.log(f.value);
    
    f.reset()

  }

}
