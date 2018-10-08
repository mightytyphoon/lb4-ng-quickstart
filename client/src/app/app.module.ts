import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { RouterModule , Route } from '@angular/router'

import { AppComponent } from './app.component';
import { ContactPage } from './pages/contact/contact.page'
import { HomePage } from './pages/home/home.page'

import { HelloService } from './helloworld.service'

export const routes : Route[] = [
  { path: '', component: HomePage },
  { path: 'contact', component: ContactPage },
  { path: '**', redirectTo: '/' },
]

@NgModule({
  declarations: [
    AppComponent,
    ContactPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ HelloService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
