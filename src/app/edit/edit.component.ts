import { Component, OnInit } from '@angular/core';
import {FormControl, NgForm, Validators} from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  value={name: '',surname: '',telephone: '',email: '',options:'',emergency:''};
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {this.data();
  }
onSubmit(form:NgForm) {
console.log(form.value);
this.dataService.setA(form.value);
this.router.navigate(['confirm']);
}
data(){
  let val=this.dataService.geta();
   if(val){
     this.value=val;
    }
 console.log(this.value);
}

}
