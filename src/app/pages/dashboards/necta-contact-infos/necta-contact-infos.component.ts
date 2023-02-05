import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicantExistenceInterface } from 'src/app/shared/models/applicant-existence-model';

@Component({
  selector: 'app-necta-contact-infos',
  templateUrl: './necta-contact-infos.component.html',
  styleUrls: ['./necta-contact-infos.component.scss']
})
export class NectaContactInfosComponent implements OnInit {

  prams: ApplicantExistenceInterface

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.prams = params as ApplicantExistenceInterface
      console.log(params.data.data);
      
    });
  }

}
