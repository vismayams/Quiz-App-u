import { Injectable } from '@angular/core';
import{ HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http : HttpClient) { }
  getQuestionJson(){
    return this.http.get<any>('assets/questions.json')
  }
  getEngQuestionjson(){
    return this.http.get<any>('assets/questioneng.json')
  }
  getsocialQuestionJson(){
    return this.http.get<any>('assets/questionsocial.json')
  }
  getMedicalQuestionJson(){
    return this.http.get<any>('assets/questionmedical.json')
  }
  getAgricultureQuestion(){
    return this.http.get<any>('assets/questionagriculture.json')
  }
  getHumanitiesQuestion(){
    return this.http.get<any>('assets/questionhumanities.json')
  }

}
