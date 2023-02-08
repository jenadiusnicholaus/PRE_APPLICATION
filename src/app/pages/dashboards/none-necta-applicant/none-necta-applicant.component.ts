import { BootstrapOptions, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoneNectaApiCallService } from 'src/app/shared/none-necta-api-call.service';
import { NoneNecta } from 'src/app/shared/none-necta-models/search-applicant';

import { UntypedFormBuilder, Validators, UntypedFormGroup } from '@angular/forms';
import { NoneNactaContactInfos } from 'src/app/shared/none-necta-models/updated-contact-model';
import { ApplicantPaymentStatusInterface } from 'src/app/shared/models/necta-models/payment-status-model';


@Component({
  selector: 'app-none-necta-applicant',
  templateUrl: './none-necta-applicant.component.html',
  styleUrls: ['./none-necta-applicant.component.scss']
})
export class NoneNectaApplicantComponent implements OnInit {
  applicant_type: String

  // models
  searched_applicant: NoneNecta.SearchedApplicantINterface
  contact_infos_model : NoneNactaContactInfos.ContactInfosInterface
  applicant_payment_status_model: ApplicantPaymentStatusInterface

  // forms
  update_contact_applicant_form:  UntypedFormGroup;

  constructor(public formBuilder: UntypedFormBuilder, private route: ActivatedRoute, private api_call_service: NoneNectaApiCallService, private router: Router) { }
  // bread crumb items
  breadCrumbItems: Array<{}>;

  // Form submition
  submit: boolean;
  formsubmit: boolean;
  typesubmit: boolean;
  rangesubmit: boolean;
  payments_found: boolean = false
  loading_contact_form: boolean =false
  control_no_exists_and_paid:boolean= false
  is_checking_status:boolean = false

  control_number_generated : boolean = false

  // ngModels
  prefix_index_no: any
  sufix_index_no: any

  ngOnInit() {

    this.breadCrumbItems = [{ label: 'Forms' }, { label: 'Form Validation', active: true }];
   
    this. update_contact_applicant_form = this.formBuilder.group({
      first_name: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      last_name: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      middle_name: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      sur_name: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      sex: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      candidate_category: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],

      phone_number: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],

      email:['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],

    });



    this.submit = false;
    this.formsubmit = false;
    this.typesubmit = false;
    this.rangesubmit = false;
  }


  searchApplicant(){

    let body = {
      "index_no":`${this.prefix_index_no}`,
      "app_year":"",
      "exam_year":  `${this.sufix_index_no}`,
      "applicant_type": "none_necta"
    }
 
    if (this.sufix_index_no != undefined){
    this.api_call_service.searchApplicant(body).subscribe((data)=>{
      this.searched_applicant = data
      // this.loading_contact_form= true
      console.log(data)
      if(this.searched_applicant.data.payment_details.length !==0 &&  this.searched_applicant.data.payment_details[0].control_number!== null){
        this.payments_found = true

        if( data?.data.payment_details[0].payment_status === 0)   {
          this.control_no_exists_and_paid = false
        }
        else{
          this.control_no_exists_and_paid = true
        }
      } 
    });
  }
  }


  get formData() {
    return this.update_contact_applicant_form.controls;
  }


  upddateContactInfosformSubmit() {
    this.formsubmit = true;
    if(this.update_contact_applicant_form.valid){
    let  first_name =  this.update_contact_applicant_form.value['first_name']
    let last_name = this.update_contact_applicant_form.value['last_name']
    let middle_name = this.update_contact_applicant_form.value['middle_name']
    let sur_name = this.update_contact_applicant_form.value['sur_name']
    let sex =this.update_contact_applicant_form.value['sex']
    let applicant_category = this.update_contact_applicant_form.value['candidate_category']
    let phone_number = this.update_contact_applicant_form.value['phone_number']
    let email = this.update_contact_applicant_form.value['email']

    let  body = {
      "index_no": `${this.prefix_index_no}`,
      "app_year": "",
      "applicant_type":"none_necta", 
      "first_name": first_name,
      "middle_name": middle_name,
      "last_name":last_name,
      "sur_name": sur_name,
      "sex": sex,
      "exam_year": this.sufix_index_no,
      "applicant_category": applicant_category,
      "phone_number": phone_number,
      "email":email
    }
    this.api_call_service.updateContactInfos(body).subscribe((data)=>{
      this. contact_infos_model = data
      console.log(this.contact_infos_model)
      // call the check for applicant category paye=ment status
      if(data.status_code==200){
        this.getPaymentStatus()
      }
    })

    console.log(body)
  }
    
  }


  getPaymentStatus() {
    let body = {
      "index_no": `${this.contact_infos_model.data?.applicant_details.applicant_type.none_necta.original_no}`,
      "app_year": `${this.contact_infos_model.data?.applicant_details.applicant_type.none_necta.app_year}`,
      "applicant_category": `${this.contact_infos_model.data?.application_category.name}`,
      "applicant_type": "none_necta"
    }

    console.log(body)

    setTimeout(() => {
      this.is_checking_status = true
      this.api_call_service.checkApplicantPaymentStatusOnCategoryChanges(body).subscribe((data) => {
        if (data.status_code == 200) {
          this.is_checking_status = false
          this.applicant_payment_status_model = data
          if (data.data.control_number) {
            this.control_number_generated = true
          }
         
        }
      })
    }, 2000);

  }

 gotoSelfRegistration(){
  let params = {

    "index_no": this.contact_infos_model?.data?.applicant_details.applicant_type.none_necta.original_no,
    "app_year": '',
    "exam_year": this.contact_infos_model?.data?.applicant_details.applicant_type.none_necta.exam_year,
    "applicant_type": "none_necta",
  

  }

  this.router.navigate(['/dashboards/none-necta-registration'], { queryParams: params });


 }

}
