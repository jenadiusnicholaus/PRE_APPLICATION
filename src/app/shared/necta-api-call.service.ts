import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { TypeModifier } from '@angular/compiler';
import { importProvidersFrom, Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { MakeRequestService } from './make-request.service';
import { ApplicantExistenceInterface } from './models/necta-models/applicant-existence-model';
import { ApplicantType } from './models/necta-models/applicant-type';
import { ApplicantContactInterface } from './models/necta-models/contact-info-model';
import { ApplicantPaymentStatusInterface } from './models/necta-models/payment-status-model';
import { SelfRegistrationInterface } from './models/necta-models/registration-response-model';
import { SchoolInterface } from './models/necta-models/school-model';
import {SearchedApplicantInterface} from './models/necta-models/searched-applicant-model';
import { Constants } from './utils';


@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  APPLICATION_BASE_URL = Constants.APPLICATION_BASE_URL
  EDUCATION_BASE_URL = Constants.EDUCATION_BASE_URL
 

  constructor(private http: HttpClient, public makerequestService: MakeRequestService) { }

// necta requests

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
        let response = this.makerequestService.post<ApplicantExistenceInterface>(headers, url, body,);
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


  
  // none necta requests


  searchNoneNecta(){
    let headers = this.makerequestService.getHeaders({'Content-Type': 'application/json',})
    let url = `${this.APPLICATION_BASE_URL}registration/`

  }

}
