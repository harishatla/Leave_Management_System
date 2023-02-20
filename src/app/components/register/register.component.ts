import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm :FormGroup
  constructor(public fb:FormBuilder) { 
    this.registerForm= new FormGroup(
      {
      firstName:new FormControl(''),
      middleName:new FormControl(''),
      lastName:new FormControl(''),
      email:new FormControl(''),
      phone:new FormControl(''),
      address:new FormControl(''),
      city:new FormControl(''),
      state:new FormControl(''),
      pin:new FormControl(''),
      country:new FormControl(''),
      password:new FormControl('')
      }
    )
     
    
  }
  

  ngOnInit(): void {
  }

  formData(data:any){
    console.log(data.value)
    this.registerForm.reset()

  }

}
