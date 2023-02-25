import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


 
 
@Component({
  selector: 'app-lms-landing-page',
  templateUrl: './lms-landing-page.component.html',
  styleUrls: ['./lms-landing-page.component.css']
})
export class LMSLandingPageComponent implements OnInit {
  fullname:string
  constructor(public route:ActivatedRoute) { }
  ngOnInit(): void {
    this.fullname=this.route.snapshot.queryParamMap.get('fullName');
    const email=this.route.snapshot.queryParamMap.get('email')
    console.log(this.fullname,email)
  }

}
