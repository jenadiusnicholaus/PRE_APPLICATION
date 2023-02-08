import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/shared/necta-api-call.service';
import { ApplicantType } from 'src/app/shared/models/necta-models/applicant-type';

@Component({
  selector: 'app-apply-for-loan',
  templateUrl: './apply-for-loan.component.html',
  styleUrls: ['./apply-for-loan.component.scss']
})
export class ApplyForLoanComponent implements OnInit {
  applicant_type:  ApplicantType
  constructor(private api_call_service: ApiCallService, private router: Router) { }

  ngOnInit(): void {
  }

  redirectToPage(applicant_type:String) {

    if(applicant_type === "necta"){
      this.api_call_service.getApplicantType(applicant_type).subscribe((data)=>{
        this.applicant_type = data
    
        this.router.navigate(['/dashboards/necta-applicant',applicant_type]);
   
       })
    }
    else{
      this.api_call_service.getApplicantType(applicant_type).subscribe((data)=>{
        this.applicant_type = data
    
        this.router.navigate(['/dashboards/none-necta-applicant',applicant_type]);
   
       })
    }
  }
}
