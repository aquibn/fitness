import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FitnessService } from '../fitness.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  Fatpercent: any;
  macronutrient: any;


  constructor(private fitnessService: FitnessService) { }
  public data:any;
  public show!:boolean;
  BMI !:any;
  macroAmount!:any;
  mets!:any;
  dailycalory!:any;
  idealweight!:any;




  ngOnInit(): void {

  }
  api(form:NgForm){
    console.log(form.value);

    this.fitnessService.bmi(form.value.age,form.value.weight,form.value.height).subscribe(data =>{
      this.BMI = data;
      console.log(this.BMI);
    });
    this.fitnessService.macroamount(form.value.gender,form.value.height,form.value.weight,form.value.activity,form.value.goal).subscribe(data=>{
      this.macroAmount=data;
      console.log(this.macroAmount);

    });
    this.fitnessService.mets().subscribe(data=>{
     this.mets=data;
     console.log(this.mets);

    });
    this.fitnessService.fatpercent(form.value.age,form.value.gender,form.value.height,form.value.weight,form.value.neck,form.value.waist,form.value.hip).subscribe(data=>{
      this.Fatpercent=data;
      console.log(this.Fatpercent);});

      this.fitnessService.idealweight(form.value.gender,form.value.height,form.value.weight).subscribe(data=>{
      this.idealweight=data;
      console.log(this.idealweight);
      });

    this.fitnessService.macronutrients().subscribe(data=>{
      this.macronutrient=data;
      console.log(this.macronutrient);
    })





  }




  }

