import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }
  dat!: any;

  data(){
    this.dat=this.dataService.geta();
  }
  ngOnInit(): void {
    this.data();
    console.log(this.dat)

  }
  navigate(){
  this.router.navigate(['forms/edit'])
  }

}
