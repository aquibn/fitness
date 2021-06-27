import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formdetail',
  templateUrl: './formdetail.component.html',
  styleUrls: ['./formdetail.component.css']
})
export class FormdetailComponent implements OnInit {

  navigate(){
    this.router.navigate(['forms/edit']);
 }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
