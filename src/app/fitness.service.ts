import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FitnessService {
  constructor(private http:HttpClient) { }
  _url:string = 'https://fitness-calculator.p.rapidapi.com'

  macroamount(gender:string,height:any,weight:any,activity:any,goal:any){

   let url = this._url+'/macrocalculator';
   return this.http.get(url,{ headers: {'x-rapidapi-key':'3530a07d68msh6a4a22f4b6f72c8p10609ajsn84e4d3c9d78a',
  'x-rapidapi-host':'fitness-calculator.p.rapidapi.com','useQueryString':'true'},params:{"age": "25",
	gender: gender,
	height: height,
	weight: weight,
	activitylevel:activity,
	goal: goal}});
 };

 bmi(age:number,weight:number,height:number){
   let url = this._url+`/bmi?age=${age}&weight=${weight}&height=${height}`;
   console.log(url);
   return this.http.get(url,{ headers: {'x-rapidapi-key':'3530a07d68msh6a4a22f4b6f72c8p10609ajsn84e4d3c9d78a',
  'x-rapidapi-host':'fitness-calculator.p.rapidapi.com','useQueryString':'true'}});
 };

 mets(){
   let url = this._url+'/mets';
   return this.http.get(url,{ headers: {'x-rapidapi-key':'3530a07d68msh6a4a22f4b6f72c8p10609ajsn84e4d3c9d78a',
  'x-rapidapi-host':'fitness-calculator.p.rapidapi.com','useQueryString':'true'}});
 };

 dailycalory(age:number,gender:string,height:any,weight:any){
let url = this._url+`/dailycalory?age=${age}&gender=${gender}&height=${height}&weight=${weight}`;
   return this.http.get(url,{ headers: {'x-rapidapi-key':'3530a07d68msh6a4a22f4b6f72c8p10609ajsn84e4d3c9d78a',
  'x-rapidapi-host':'fitness-calculator.p.rapidapi.com','useQueryString':'true'}});
 };

 fatpercent(age: number,gender: string,heigth:number,weight: number,neck:number,waist:number,hip:number){
   let url = this._url+`/bodyfat?age=${age}&gender=${gender}&height=${heigth}&weight=${weight}&hip=${hip}&waist=${waist}&neck=${neck}`;
   return this.http.get(url,{ headers: {'x-rapidapi-key':'3530a07d68msh6a4a22f4b6f72c8p10609ajsn84e4d3c9d78a',
  'x-rapidapi-host':'fitness-calculator.p.rapidapi.com','useQueryString':'true'}});
 };
 idealweight(gender: string,heigth:number,weigth:number){

   let url = this._url+`/idealweight?gender=${gender}&height=${heigth}&weight=${weigth}`;
   return this.http.get(url,{ headers: {'x-rapidapi-key':'3530a07d68msh6a4a22f4b6f72c8p10609ajsn84e4d3c9d78a',
  'x-rapidapi-host':'fitness-calculator.p.rapidapi.com','useQueryString':'true'}});
 };

macronutrients(){
  let url = this._url+"/macros";
  return this.http.get(url,{ headers: {'x-rapidapi-key':'3530a07d68msh6a4a22f4b6f72c8p10609ajsn84e4d3c9d78a',
 'x-rapidapi-host':'fitness-calculator.p.rapidapi.com','useQueryString':'true'}});
};

}
