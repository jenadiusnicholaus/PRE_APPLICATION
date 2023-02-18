import { Component, OnInit, HostBinding } from '@angular/core';
import { UntypedFormBuilder, Validators, UntypedFormGroup, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { slideInOutAnimation } from 'src/app/shared/animations';
import { ApiCallService } from 'src/app/shared/necta-api-call.service';
import { SearchedApplicantInterface } from 'src/app/shared/models/necta-models/searched-applicant-model';
import { MustMatch } from 'src/app/shared/validation.mustmuch';
import { NectaSelfRegistration } from 'src/app/shared/models/necta-models/registration-response-model';


@Component({
  selector: 'app-necta-self-registration',
  templateUrl: './necta-self-registration.component.html',
  styleUrls: ['./necta-self-registration.component.scss'],
  animations: [slideInOutAnimation]
})
export class NectaSelfRegistrationComponent implements OnInit {
  //  forms 
  registration_form: UntypedFormGroup; // bootstrap validation form
  constructor(private formBuilder: UntypedFormBuilder, private route: ActivatedRoute, private api_call_service: ApiCallService) { }

  // Form submition
  submit: boolean;
  formsubmit: boolean;
  formsubmitting: boolean = false

  // models
  searched_applicant: SearchedApplicantInterface
  registration_model: NectaSelfRegistration.SelfRegistrationInterface

  // index number:
  selectedOption = 's'
  options = [{ label: 'S', value: 'S' }, { label: 'P', value: 'P' }];
  optionNotSeclectError: any

  // question

  question = [
    { label: 'What is you mothers\'s name?', value: 'What is you mothers\'s name?' },
    { label: 'What is you primary school\'s name?', value: 'What is you primary school\'s name?' }
  ];



  // animation
  @HostBinding('@slideInOutAnimation')
  public slideInOutAnimation = true;
  candidate_no


  ngOnInit(): void {

    this.registration_form = this.formBuilder.group({
      candidate_type: [``],
      school_number: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      year_completed: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      candidate_number: ['', [Validators.pattern('[a-zA-Z0-9]+')]],
      applicant_category: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      transaction_id: ['', [Validators.pattern('[a-zA-Z0-9]+')]],
      password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+'), Validators.minLength(6)]],
      password2: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+'), Validators.minLength(6)]],
      question: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      answer: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      phone_number: ['', [Validators.pattern('[a-zA-Z0-9]+')]],
      email: ['', [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],

    });


    this.route.queryParams.subscribe(params => {
      this.candidate_no = params['candidate_no']

      this.api_call_service.searchApplicant(params).subscribe((data) => {


        this.searched_applicant = data
      })
    });

    this.submit = false;
    this.formsubmit = false;



  }


  get formData() {
    return this.registration_form.controls;
  }

  /**
   * Bootstrap tooltip form validation submit method
   */
  formSubmit() {
    this.formsubmit = true;

    if (this.registration_form.value['question'] === "" && this.registration_form.value['password'] === "" && this.registration_form.value['answer'] === "") return;
    else {
      this.formsubmitting = true
      let body = {
        "index_no": this.searched_applicant.data.new_index_no,
        "secret_question": this.registration_form.value['question'],
        "secret_answer": this.registration_form.value['answer'],
        "password": this.registration_form.value['password'],
        "applicant_type": "necta",
        "transaction_id": this.searched_applicant.data.payment_details[0].reference,
        "applicant_category": this.searched_applicant.data.payment_details[0].applicant.application_category.name
      }
      this.api_call_service.selfRegistration(body).subscribe((data) => {
        setTimeout(() => {
          this.registration_model = data
          this.formsubmitting = false
        }, 2000)

      })
    }


  }









}
