import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm :FormGroup

  constructor(public fb:FormBuilder,private auth:AuthService,private route:Router, public router:ActivatedRoute ) { 
    this.registerForm= this.fb.group(
      {
      firstName:['',[Validators.required,Validators.minLength(4)]],
      // middleName:[''],
      lastName:[''],
      email:[''],
      phone:[''],
      // address:[''],
      // city:[''],
      // state:[''],
      // pin:[''],
      // country:[''],
      password:['']
      }
    )
  }
  submitted=false;

  // get f(): { [key: string]: AbstractControl } 
  // {
  //   return this.registerForm.controls;
  // }

  get firstName(){
    return this.registerForm.get('firstName')
  }
  get lastName(){
    return this.registerForm.get('firstName')
  }
  get email(){
    return this.registerForm.get('firstName')
  }
  
  ngOnInit(): void {
  }
  submitFormData(data:any){
    this.submitted=true
    console.log(data)
    console.log(data.value)
    this.auth.register(data.value).subscribe((res)=>{
      // console.log(JSON.parse(res))
      // console.log(JSON.stringify(res))
      console.log(res.userId);
      this.route.navigate(['/login'],{queryParams:{userId:res.userId}})
    })
    this.registerForm.reset()
  }
}
