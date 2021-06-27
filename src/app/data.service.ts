import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';





@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http:HttpClient) {}
   Form!:any;

   geta(){
   return this.Form;
   }
   setA(value:any){
     this.Form = value;
   };

   getsearch(a:string){

   };

}
