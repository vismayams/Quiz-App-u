import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { EducationComponent } from './education/education.component';
import { EngineeringComponent } from './engineering/engineering.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HumanitiesComponent } from './humanities/humanities.component';
import { LanguagesComponent } from './languages/languages.component';
import { MedicalComponent } from './medical/medical.component';
import { NaturalComponent } from './natural/natural.component';
import { QuizesComponent } from './quizes/quizes.component';
import { SocialComponent } from './social/social.component';
import { SubjectComponent } from './subject/subject.component';
import { TakequizComponent } from './takequiz/takequiz.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"takequiz",component:TakequizComponent},
  {path:"quizes",component:QuizesComponent},
  {path:"subject",component:SubjectComponent},
  {path:"education",component:EducationComponent},
  {path:"naturalscience",component:NaturalComponent},
  {path:"engineering",component:EngineeringComponent},
  {path:"medical",component:MedicalComponent},
  {path:"agriculture",component:AgricultureComponent},
  {path:"social",component:SocialComponent},
  {path:"humanities",component:HumanitiesComponent},
  {path:"languages",component:LanguagesComponent},

  
  
  

  
  


  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
