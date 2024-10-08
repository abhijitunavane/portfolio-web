import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { 
  NavbarComponent, 
  FooterComponent, 
  AboutComponent, 
  WorkComponent,
  GithubCornerComponent,
  DomainComponent,
  ProjectComponent,
  TooltipComponent,
  PhotographyComponent,
  PhotographyDetailsDialogComponent,
  PhotographyCategoryComponent,
  ToastComponent,
  SquareSpinnerComponent,
  ShareModalComponent,
  RoundedSpinnerComponent,
  ErrorCardComponent,
  TypewriterComponent,
  SearchWorkComponent } from './components/components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    WorkComponent,
    GithubCornerComponent,
    DomainComponent,
    ProjectComponent,
    TooltipComponent,
    PhotographyComponent,
    PhotographyDetailsDialogComponent,
    PhotographyCategoryComponent,
    ToastComponent,
    SquareSpinnerComponent,
    ShareModalComponent,
    RoundedSpinnerComponent,
    ErrorCardComponent,
    TypewriterComponent,
    SearchWorkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
