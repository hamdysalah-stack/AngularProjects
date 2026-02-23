import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Main } from './main/main';
import { Employee } from './employee/employee';
import { About } from './about/about';

const routes: Routes = [
  { path: '', component: Main },
  { path: 'employee/:id', component: Employee },
  { path: 'about', component: About },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
