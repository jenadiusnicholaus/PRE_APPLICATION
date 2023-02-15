import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MakeRequestService } from './make-request.service';
import { ApplicantPaymentStatusInterface } from './models/necta-models/payment-status-model';
import { NoneNecta } from './models/none-necta-models/search-applicant';
import { NoneNectaSelfRegistration } from './models/none-necta-models/self-registration-model';
import { NoneNactaContactInfos } from './models/none-necta-models/updated-contact-model';
import { Constants } from './utils';

@Injectable({
  providedIn: 'root'
})
export class NoneNectaApiCallService {

  APPLICATION_BASE_URL = Constants.APPLICATION_BASE_URL
  EDUCATION_BASE_URL = Constants.EDUCATION_BASE_URL
  
 
  constructor(private http: HttpClient, public makeRequestService: MakeRequestService) { }

  searchApplicant(body: any){
  
    let headers = this.makeRequestService.getHeaders({'Content-Type': 'application/json'})
    let url = `${this.APPLICATION_BASE_URL}search-applicant/`
    let response = this.makeRequestService.post<NoneNecta.SearchedApplicantINterface>(headers, url, body)
    
    return response;
  }

  updateContactInfos(body:any){

    let headers = this.makeRequestService.getHeaders({'Content-Type': 'application/json'})
    let url = `${this.APPLICATION_BASE_URL}pre-applicant-none-necta-contact-infos/`
    let response = this.makeRequestService.post<NoneNactaContactInfos.ContactInfosInterface>(headers, url, body)
    
    return response;

  }

  checkApplicantPaymentStatusOnCategoryChanges(body){

    let headers = this.makeRequestService.getHeaders({'Content-Type': 'application/json',})
    let url = `${this.APPLICATION_BASE_URL}choose-apploicant-category/`
    let response = this.makeRequestService.post<ApplicantPaymentStatusInterface>(headers, url, body,);
    return response

  }

  selfRegistration(body:any) {
    let headers = this.makeRequestService.getHeaders({'Content-Type': 'application/json',})
    let url = `${this.APPLICATION_BASE_URL}registration/`
    let response = this.makeRequestService.post<NoneNectaSelfRegistration.SelfRegistrationInterface>(headers, url, body);
    return response
  }

}
