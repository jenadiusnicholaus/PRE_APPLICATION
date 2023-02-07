import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { TypeModifier } from '@angular/compiler';
import { importProvidersFrom, Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { MakeRequestService } from './make-request.service';
import { ApplicantExistenceInterface } from './models/applicant-existence-model';
import { ApplicantType } from './models/applicant-type';
import { ApplicantContactInterface } from './models/contact-info-model';
import { ApplicantPaymentStatusInterface } from './models/payment-status-model';
import { SelfRegistrationInterface } from './models/registration-response-model';
import { SchoolInterface } from './models/school-model';
import {SearchedApplicantInterface} from './models/searched-applicant-model';


@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  APPLICATION_BASE_URL = 'http://127.0.0.1:8000/api/application/'
  EDUCATION_BASE_URL ='http://127.0.0.1:8000/api/education-info/'
 

  constructor(private http: HttpClient, public makerequestService: MakeRequestService) { }


  getApplicantType(applicantType:String): Observable<ApplicantType>{
        let body = {"applicant_type": applicantType}
        let headers = this.makerequestService.getHeaders({'Content-Type': 'application/json',})
        let url = `${this.APPLICATION_BASE_URL}applicant-type/`
        let response = this.makerequestService.post<ApplicantType>(headers, url, body )
        return response
        }


  checkSchool(center_number:String): Observable<SchoolInterface>{
        let body = {"center_number":center_number}
        let headers = this.makerequestService.getHeaders({'Content-Type': 'application/json',})
        let url =  `${this.EDUCATION_BASE_URL}check-school-existance/`
        let response = this.makerequestService.post<SchoolInterface>(headers, url, body,);
        return response
      }


  searchApplicant(body:any): Observable<SearchedApplicantInterface>{
  

      let headers = this.makerequestService.getHeaders({'Content-Type': 'application/json',})
      let url = `${this.APPLICATION_BASE_URL}search-applicant/`
      let response = this.makerequestService.post<SearchedApplicantInterface>(headers,url, body);
      return response
      }

  applicantExistenceInApplicationTable(body:any): Observable<ApplicantExistenceInterface>{
  
        let headers = this.makerequestService.getHeaders({'Content-Type': 'application/json',})
        let url = `${this.APPLICATION_BASE_URL}applicant-existance/`
        let response = this.makerequestService.post<ApplicantExistenceInterface>(headers,body, url);
        return response
      }


  saveContactInfos(body:any): Observable<ApplicantContactInterface>{
  
          let headers = this.makerequestService.getHeaders({'Content-Type': 'application/json',})
          let url = `${this.APPLICATION_BASE_URL}pre-applicant-necta-contact-infos/`
          let response = this.makerequestService.post<ApplicantContactInterface>(headers, url, body);
          return response
        }

  checkApplicantPaymentStatusOnCategoryChanges(body:any): Observable<ApplicantPaymentStatusInterface>{

          let headers = this.makerequestService.getHeaders({'Content-Type': 'application/json',})
          let url = `${this.APPLICATION_BASE_URL}choose-apploicant-category/`
          let response = this.makerequestService.post<ApplicantPaymentStatusInterface>(headers, url, body,);
          return response
        }
        
  selfRegistration(body:any): Observable<SelfRegistrationInterface>{
            let headers = this.makerequestService.getHeaders({'Content-Type': 'application/json',})
           let url = `${this.APPLICATION_BASE_URL}registration/`
            let response = this.makerequestService.post<SelfRegistrationInterface>(headers, url, body);
            return response
          }
  
  

}
