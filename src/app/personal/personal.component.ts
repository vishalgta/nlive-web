import { Component, OnInit , Input} from '@angular/core';
import { Router } from '@angular/router';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

import { UserFormsService } from '../';

declare var Stamplay;
declare var require;

@Component({
  moduleId: module.id,
  selector: 'user-personal-display',
  templateUrl: 'personal.component.html',
  styleUrls: ['personal.component.css'],
  directives:[  MD_LIST_DIRECTIVES, MD_CARD_DIRECTIVES ]
})
export class PersonalComponent implements OnInit {
  @Input() userInfo : any;
  personalformdata : any;

  constructor(private router : Router) {}

  ngOnInit() {
    Stamplay.Object("userformpersonal").get({person: this.userInfo.id}).then((res)=>{
      this.personalformdata = res.data[0];
    })
  //  this.displayInfo = this.formservice.getuserFormInfo();
  }
  editinfo(){
    this.router.navigate(['/personal']);
  }


}
