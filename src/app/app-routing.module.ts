import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { StoneResultComponent } from './main/stone/stone-result/stone-result.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
 
  {
    path: '', component: HomeComponent,
   
    
  },
  { path: 'sapphires/basic-search/.', component: StoneResultComponent, data: { stone: 'sapphire',gem_id:19 } },
  { path: 'ruby/basic-search/.', component: StoneResultComponent, data: { stone: 'ruby',gem_id:20 } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

