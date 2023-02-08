import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { UIModule } from '../../shared/ui/ui.module';
import { WidgetModule } from '../../shared/widget/widget.module';

import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbDropdownModule, NgbTooltipModule, NgbNavModule, NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap'
import { SimplebarAngularModule } from 'simplebar-angular';

import { DefaultComponent } from './default/default.component';
import { ApplyForLoanComponent } from './apply-for-loan/apply-for-loan.component';
import { NectaApplicantComponent } from './necta-applicant/necta-applicant.component';
import { NoneNectaApplicantComponent } from './none-necta-applicant/none-necta-applicant.component';
import { NectaContactInfosComponent } from './necta-contact-infos/necta-contact-infos.component';
import { NectaSelfRegistrationComponent } from './necta-self-registration/necta-self-registration.component';
import { NoneNectaSelfRegistrationComponent } from './none-necta-self-registration/none-necta-self-registration.component';

@NgModule({
  declarations: [DefaultComponent, ApplyForLoanComponent, NectaApplicantComponent, NoneNectaApplicantComponent, NectaContactInfosComponent, NectaSelfRegistrationComponent, NoneNectaSelfRegistrationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardsRoutingModule,
    UIModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbNavModule,
    NgbCarouselModule,
    WidgetModule,
    NgApexchartsModule,
    SimplebarAngularModule,
    NgbAlertModule

  ]
})
export class DashboardsModule { }
