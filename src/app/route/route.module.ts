import { NgModule } from '@angular/core';
import { RouterModule, Route, PreloadingStrategy } from '@angular/router';
import { OneComponent } from '../one/one.component';
import { TwoComponent } from '../two/two.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { Observable, of } from 'rxjs';


export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    return route.data && route.data.preload ? load() : of(null);
  }
}

const routes: Route[] = [
  {path: 'one', component: OneComponent, children:[
    {path: 'two/:id', component: TwoComponent}
  ]},
  {path: 'two', component: TwoComponent},
  {path: 'my-lazy', 
  loadChildren: '../second/second.module#SecondModule',
  data: {preload: false}
  },
  {path: 'my-lazy2', 
  loadChildren: '../another-lazy/another-lazy.module#AnotherLazyModule',
  data: {preload: true}
  },
  {path: '', 
  redirectTo: '',
  pathMatch: 'full'
  },
  {path: '**', component: NotFoundComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomPreloadingStrategy
    })
  ],
  exports: [RouterModule],
  providers: [CustomPreloadingStrategy]
})
export class RouteModule { }
