import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { importProvidersFrom, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicantExistenceInterface } from './models/applicant-existence-model';
import { ApplicantType } from './models/applicant-type';
import { ApplicantContactInterface } from './models/contact-info-model';
import { ApplicantPaymentStatusInterface } from './models/payment-status-model';
import { SchoolInterface } from './models/school-model';
import {SearchedApplicantInterface} from './models/searched-applicant-model';


@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  APPLICATION_BASE_URL = 'http://127.0.0.1:8000/api/application/'
  EDUCATION_BASE_URL ='http://127.0.0.1:8000/api/education-info/'
 

  constructor(private http: HttpClient) { }

  getApplicantType(applicantType:String): Observable<ApplicantType>{
    let body = {"applicant_type": applicantType}
    console.log(body)
    const headers = new HttpHeaders({
     'Content-Type': 'application/json',
   });
   
     let response = this.http.post<ApplicantType>(`${this.APPLICATION_BASE_URL}applicant-type/`,body,{headers});
     return response
    }


  checkSchool(center_number:String): Observable<SchoolInterface>{
      let body = {
        "center_number":center_number
    }
      console.log(body)
      const headers = new HttpHeaders({
       'Content-Type': 'application/json',
     });
     
       let response = this.http.post<SchoolInterface>(`${this.EDUCATION_BASE_URL}check-school-existance/`, body,{headers});
       return response
      }


  searchApplicant(body:any): Observable<SearchedApplicantInterface>{
  
    console.log(body)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    
      let response = this.http.post<SearchedApplicantInterface>(`${this.APPLICATION_BASE_URL}search-applicant/`, body,{headers});
      return response
    }

  applicantExistenceInApplicationTable(body:any): Observable<ApplicantExistenceInterface>{
  
      console.log(body)
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
      
        let response = this.http.post<ApplicantExistenceInterface>(`${this.APPLICATION_BASE_URL}applicant-existance/`, body,{headers});
        return response
      }

  saveContactInfos(body:any): Observable<ApplicantContactInterface>{
  
        console.log(body)
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
        });
        
          let response = this.http.post<ApplicantContactInterface>(`${this.APPLICATION_BASE_URL}pre-applicant-necta-contact-infos/`, body,{headers});
          return response
        }

  checkApplicantPaymentStatusOnCategoryChanges(body:any): Observable<ApplicantPaymentStatusInterface>{
  
        console.log(body)
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
        });
        
          let response = this.http.post<ApplicantPaymentStatusInterface>(`${this.APPLICATION_BASE_URL}choose-apploicant-category/`, body,{headers});
          return response
        }

  

}
