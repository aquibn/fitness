import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EditComponent } from './edit/edit.component';
import { EventsComponent } from './events/events.component';
import { FormdetailComponent } from './formdetail/formdetail.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', component:HomeComponent},
{path:'events',component:EventsComponent},
{path:'contacts',component:ContactsComponent},
{path:'forms',component:FormdetailComponent,children:[{path:'edit',component:EditComponent}]},
{path:'fitnesstracker',component:AboutComponent},
{path:'confirm',component:ConfirmComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
