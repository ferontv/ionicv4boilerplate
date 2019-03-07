import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'planets', loadChildren: './pages/planets/planets.module#PlanetsPageModule' },
  { path: 'people', loadChildren: './pages/people/people.module#PeoplePageModule' },
  { path: 'starships', loadChildren: './pages/starships/starships.module#StarshipsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
