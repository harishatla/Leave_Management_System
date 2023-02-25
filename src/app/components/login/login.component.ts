import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { loginData } from 'src/app/modals/loginData';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService,
              private route:Router, 
              public router:ActivatedRoute,
              public tokenService:TokenStorageService) {
    this.loginData.userId=this.router.snapshot.queryParamMap.get('userId');
   }
  loginData:loginData={
    userId:'',
    password:''
  }

  ngOnInit(): void {
  }
  
  submitLogin(f:any){
    console.log(f)

    this.auth.login(f.value).subscribe((res)=>{
      console.log(res)
      this.tokenService.saveToken(res.token);
      this.tokenService.saveUser(res.token);
      alert('logged in successfully');
      this.route.navigate(['/lms_landingPage'],{queryParams:{fullName:res.fullName,email:res.email}})
    });
    // f.reset()
  }

}
