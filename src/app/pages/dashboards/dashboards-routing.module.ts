import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyForLoanComponent } from './apply-for-loan/apply-for-loan.component';

import { DefaultComponent } from './default/default.component';
import { NectaApplicantComponent } from './necta-applicant/necta-applicant.component';
import { NectaContactInfosComponent } from './necta-contact-infos/necta-contact-infos.component';
import { NectaSelfRegistrationComponent } from './necta-self-registration/necta-self-registration.component';
import { NoneNectaApplicantComponent } from './none-necta-applicant/none-necta-applicant.component';
import { NoneNectaSelfRegistrationComponent } from './none-necta-self-registration/none-necta-self-registration.component';

const routes: Routes = [
    {
        path: 'default',
        component: DefaultComponent
    },

    {
        path: 'apply-for-loan',
        component: ApplyForLoanComponent
    },

    {
        path: 'necta-applicant/:applicant_type',
        component: NectaApplicantComponent
    },

    {
        path: 'none-necta-applicant/:applicant_type',
        component: NoneNectaApplicantComponent
    },

    {
        path: 'necta-applicant-contact-infos',
        component: NectaContactInfosComponent
    },

    {
        path: 'necta-registration',
        component: NectaSelfRegistrationComponent
    },

    {
        path: 'none-necta-registration',
        component: NoneNectaSelfRegistrationComponent
    },

    
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardsRoutingModule {}
