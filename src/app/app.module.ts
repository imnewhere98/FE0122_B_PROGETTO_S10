import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import { HomeComponent } from './component/home/home.component';
import { Route, RouterModule } from '@angular/router';
import { DettagliComponent } from './component/dettagli/dettagli.component';
import { CarrelloComponent } from './component/carrello/carrello.component';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  {path: 'dettagli', component: DettagliComponent},
  {path: 'carrello', component: CarrelloComponent},


]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    DettagliComponent,
    CarrelloComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
