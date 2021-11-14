import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {WeatherComponent} from "./weather/weather.component";
import {ViewComponent} from "./view/view.component";

const routes: Routes = [
  {path: '', component: WeatherComponent},
  {path: 'location', component: ViewComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
