import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  input='';
  count=0;
  taken:string[]=[];
   counted(){

     this.count+=1;
     console.log(this.count);
   }
  take(){

    if(this.input){
     this.taken.push(this.input);   /*this.taken[this.count]=this.input;  */
      this.input="input please";

     }else {
       alert( 'Please give an input' );
     }
     console.log( this.taken[this.count])
     return false;
  };
   remove(j:number){
   this.taken.splice(j, 1);
   console.log( this.taken)

   }


 constructor() {


  }

 ngOnInit(): void {
 }

}
