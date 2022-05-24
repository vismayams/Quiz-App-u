import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TakequizComponent } from './takequiz/takequiz.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuizesComponent } from './quizes/quizes.component';
import { EducationComponent } from './education/education.component';
import { SubjectComponent } from './subject/subject.component';
import { NaturalComponent } from './natural/natural.component';
import { EngineeringComponent } from './engineering/engineering.component';
import { MedicalComponent } from './medical/medical.component';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { SocialComponent } from './social/social.component';
import { HumanitiesComponent } from './humanities/humanities.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChangeBgDirective } from './change-bg.directive';
import { FooterComponent } from './footer/footer.component';
import { LanguagesComponent } from './languages/languages.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TakequizComponent,
    HomeComponent,
    QuizesComponent,
    EducationComponent,
    SubjectComponent,
    NaturalComponent,
    EngineeringComponent,
    MedicalComponent,
    AgricultureComponent,
    SocialComponent,
    HumanitiesComponent,
    ChangeBgDirective,
    FooterComponent,
    LanguagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
