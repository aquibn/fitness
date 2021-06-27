import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  ip!: string;
  data!: any;

  constructor(private router: Router, private dataService: DataService) { }
  route(){
    this.router.navigate(['home']);
  };
  route1(){
    this.router.navigate(['events']);
  };
  route2(){
    this.router.navigate(['fitnesstracker']);
  };
  route3(){
    this.router.navigate(['contacts']);
  };
  route4(){
    this.router.navigate(['forms']);

  };
  ngOnInit(): void {
  }
  search(){



  return 1 }

}
