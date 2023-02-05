import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-none-necta-applicant',
  templateUrl: './none-necta-applicant.component.html',
  styleUrls: ['./none-necta-applicant.component.scss']
})
export class NoneNectaApplicantComponent implements OnInit {
  applicant_type: String
  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.applicant_type = this.route.snapshot.paramMap.get('applicant_type');
  }


}
