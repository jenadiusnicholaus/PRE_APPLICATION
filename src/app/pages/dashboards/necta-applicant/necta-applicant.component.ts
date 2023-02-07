import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, UntypedFormBuilder, Validators, UntypedFormGroup } from '@angular/forms';
import { ApiCallService } from 'src/app/shared/api-call.service';
import { SchoolInterface } from 'src/app/shared/models/school-model';
import { SearchedApplicantInterface } from 'src/app/shared/models/searched-applicant-model';
import { ApplicantExistenceInterface } from 'src/app/shared/models/applicant-existence-model';
import { ChangeEvent } from 'preact/compat';
import { ApplicantPaymentStatusInterface } from 'src/app/shared/models/payment-status-model';
import { ApplicantContactInterface } from 'src/app/shared/models/contact-info-model';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-necta-applicant',
  templateUrl: './necta-applicant.component.html',
  styleUrls: ['./necta-applicant.component.scss']
})
export class NectaApplicantComponent implements OnInit {


  applicant_type: String;
  submit: boolean;
  formsubmit: boolean;
  typesubmit: boolean;
  rangesubmit: boolean;

  // check for payement status
  // this when submiting the contact form and we want to see if th controll number is generated on 
  // to help us render the UI accordingly
  control_number_generated: boolean = false

  is_control_exists_and_paid: boolean = false
  payment_details_found: Boolean = false
  // control_number_found:boolean =false



  // forms
  validationform: UntypedFormGroup;
  searchApplicantForm: UntypedFormGroup;
  typeValidationForm: UntypedFormGroup;
  rangeValidationForm: UntypedFormGroup;
  contact_form: UntypedFormGroup;


  // models instances/interface
  school_details: SchoolInterface
  applicant_existence_model: ApplicantExistenceInterface
  applicant_payment_status_model: ApplicantPaymentStatusInterface
  applicant_contact_info_model: ApplicantContactInterface

  // school_center
  sufix_school_center: string
  is_school_not_found: boolean
  complete_center_number: string

  // refresh app
  refreshing: boolean = false


  //searched Applicant both necta and internet neacta table
  searched_applicant: SearchedApplicantInterface

  // when upding the applicant contact info
  is_update_contact_info_time: boolean = false



  constructor(
    private route: ActivatedRoute,
    public formBuilder: UntypedFormBuilder,
    private api_call_service: ApiCallService,
    private router: Router

  ) { }
  // ngModel field
  candidate_number: String

  // ngModel field
  year_completed: string


  // candidate type 
  // ng Model Field
  selectedOption: any;
  // selection option
  options = [{ label: 'S', value: 'S' }, { label: 'P', value: 'P' }];
  optionNotSeclectError: any

  // applicant category
  // ng Model Field
  selected_applicant_category_option: any
  // selection option
  category_options = [{ label: 'LUG', value: 'LUG' }, { label: 'PGD', value: 'PGD' }, { label: 'PGDL', value: 'PGDL' }];
  category_optionNotSeclectError: any


  //shoe loaders

  is_checking_status = false





  ngOnInit(): void {

    this.applicant_type = this.route.snapshot.paramMap.get('applicant_type');
    console.log(this.route.snapshot.paramMap)

    this.contact_form = this.formBuilder.group({
      applicant_category: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      phone_number: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+'), Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    });

    this.submit = false;
    this.formsubmit = false;
    this.typesubmit = false;
    this.rangesubmit = false;
  }

  // even function

  isInputValueANumber(value: string): boolean {
    return !isNaN(parseInt(value));
  }


  centerNumberonKeyUp() {

    if (this.selectedOption === undefined) {
      this.optionNotSeclectError = "Choose Candidate Type"
      return;
    }

    this.complete_center_number = this.selectedOption + this.sufix_school_center.toString()
    let center_number = this.complete_center_number
  
    this.refreshing = true

    this.api_call_service.checkSchool(center_number).subscribe((data) => {
      this.school_details = data

      setTimeout(() => {
        this.centerNumberonKeyUp()
        this.refreshing = false
      }, 2000)



    })
  }


  completeYearOnKeyUp(event: KeyboardEvent) {
    let center_numer = this.complete_center_number
    let candidate_number = this.candidate_number;
    let exam_year = this.year_completed;
    let index_no = `${center_numer}-${candidate_number}`;
    let body = {

      "index_no": index_no,
      "app_year": '',
      "exam_year": exam_year,
      "applicant_type": "necta"

    }

    if (exam_year.length == 4) {
      this.api_call_service.searchApplicant(body).subscribe((data) => {
        this.refreshing =true

        if (data.status_code === 200) {
          setTimeout(() => {
            this.centerNumberonKeyUp()
            this.refreshing = false
          }, 2000)

          this.searched_applicant = data

          if (this.searched_applicant.data.payment_details.length !== 0 && this.searched_applicant?.data.payment_details[0].control_number !== null) {
            this.payment_details_found = true

            if (data?.data.payment_details[0].payment_status === 0) {
              this.is_control_exists_and_paid = false
            }
            else {
              this.is_control_exists_and_paid = true
            }

          }
          else {
            this.payment_details_found = false

          }
        }
      }
      )
    }
  }



  onConfirmCandidateInfo() {
    if (this.searched_applicant) {
      let body = {
        "index_no": this.school_details,
        "app_year": this.searched_applicant.data.applicant.app_year,
        "applicant_type": "necta"
      }
      this.api_call_service.applicantExistenceInApplicationTable(body).subscribe((data) => {
        this.applicant_existence_model = data;
        this.is_update_contact_info_time = true
      })
     

    }
    return;
  }

  contactFormSubmit() {
    this.formsubmit = true;
    if (this.contact_form.valid) {

      let phonm_number = `${this.contact_form.value['phone_number']}`;
      let email = `${this.contact_form.value['email']}`;
      let applicant_category = this.contact_form.value['applicant_category']

      let body = {
        "index_no": `${this.searched_applicant.data.applicant.index_no}`,
        "app_year": `${this.searched_applicant.data.applicant.app_year}`,
        "applicant_type": "necta",
        "applicant_category": `${applicant_category}`,
        "phone_number": `${phonm_number}`,
        "email": `${email}`

      }
      this.api_call_service.saveContactInfos(body).subscribe((data) => {
        // if data.data

        this.applicant_contact_info_model = data
        if (data.status_code == 200) {
          this.getPaymentStatus()
        }
      })
    }
  }

  // todo
  getPaymentStatus() {
    let body = {
      "index_no": `${this.applicant_contact_info_model.data.applicant_details.applicant_type.necta.index_no}`,
      "app_year": `${this.applicant_contact_info_model.data.applicant_details.applicant_type.necta.app_year}`,
      "applicant_category": `${this.applicant_contact_info_model.data.application_category.name}`,
      "applicant_type": "necta"
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

  gotToRegistrationPage(){
    let center_numer = this.complete_center_number
    let candidate_number = this.candidate_number;
    let exam_year = this.year_completed;
    let index_no = `${center_numer}-${candidate_number}`;
    let params = {

      "index_no": index_no,
      "app_year": '',
      "exam_year": exam_year,
      "applicant_type": "necta",
      "candidate_no": this.candidate_number

    }

    this.router.navigate(['/dashboards/necta-registration'], { queryParams: params });

  
}

  //  for form validation

  /**
   * Returns form
   */
  get form() {
    return this.validationform.controls;
  }

  /**
   * Bootsrap validation form submit method
   */
  validSubmit() {
    this.submit = true;

  }

  /**
   * returns tooltip validation form
   */
  get formData() {
    return this.contact_form.controls;
  }

  /**
   * Bootstrap tooltip form validation submit method
   */


  /**
   * Returns the type validation form
   */
  get type() {
    return this.typeValidationForm.controls;
  }

  /**
   * Type validation form submit data
   */
  typeSubmit() {
    this.typesubmit = true;
  }

  /**
   * Returns the range validation form
   */
  get range() {
    return this.rangeValidationForm.controls;
  }

  /**
   * range validation submit data
   */
  rangeSubmit() {
    this.rangesubmit = true;
  }

}


