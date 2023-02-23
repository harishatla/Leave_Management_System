import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm :FormGroup

  constructor(public fb:FormBuilder,private auth:AuthService ) { 
    this.registerForm= this.fb.group(
      {
      firstName:['',[Validators.required,Validators.minLength(10),Validators.maxLength(30)]],
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

  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }
  
  ngOnInit(): void {
  }
  submitFormData(data:any){
    console.log(data)
    console.log(data.value)
    this.auth.register(data.value).subscribe((res)=>{
      // console.log(JSON.parse(res))
      console.log(JSON.stringify(res))
    })
    this.registerForm.reset()
  }
}
