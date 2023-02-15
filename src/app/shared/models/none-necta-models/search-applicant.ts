// export declare module NoneNecta {

//     export interface Applicant {
//         id: number;
//         index_no: string;
//         original_no: string;
//         first_name: string;
//         middle_name: string;
//         last_name: string;
//         app_year: string;
//         exam_year: string;
//         sur_name: string;
//         sex: string;
//         updated_at: Date;
//         created_at: Date;
//         changed_necta: boolean;
//     }

//     export interface ApplicationCategory {
//         id: number;
//         name: string;
//         description?: any;
//         updated_at: Date;
//         created_at: Date;
//     }

//     export interface NoneNecta {
//         id: number;
//         index_no: string;
//         original_no: string;
//         first_name: string;
//         middle_name: string;
//         last_name: string;
//         app_year: string;
//         exam_year: string;
//         sur_name: string;
//         sex: string;
//         updated_at: Date;
//         created_at: Date;
//         changed_necta: boolean;
//     }

//     export interface ApplicantType {
//         id: number;
//         necta?: any;
//         none_necta: NoneNecta;
//         description?: any;
//         updated_at: Date;
//         created_at: Date;
//     }

//     export interface ApplicantDetails {
//         applicant_type: ApplicantType;
//         email: string;
//         phonenumber: string;
//         created_at: Date;
//         updated_at: Date;
//     }

//     export interface Applicant2 {
//         id: number;
//         application_category: ApplicationCategory;
//         applicant_details: ApplicantDetails;
//         created_at: Date;
//         updated_at: Date;
//     }

//     export interface PaymentDetail {
//         id: number;
//         applicant: Applicant2;
//         payment_status: number;
//         control_number?: any;
//         reference?: any;
//         paid_when?: any;
//         amount_paid?: any;
//         used_by: string;
//         used_when?: any;
//         used_status: number;
//         updated_at: Date;
//         created_at: Date;
//     }

//     export interface Data {
//         applicant: Applicant;
//         payment_details: PaymentDetail[];
//     }

//     export interface SearchedApplicantINterface{
//         status_code: number;
//         message: string;
//         success: boolean;
//         data: Data;
//     }


// }


export declare module NoneNecta {

    export interface Applicant {
        id: number;
        index_no: string;
        original_no: string;
        first_name: string;
        middle_name: string;
        last_name: string;
        app_year: string;
        exam_year: string;
        sur_name: string;
        sex: string;
        updated_at: Date;
        created_at: Date;
        changed_necta: boolean;
    }

    export interface ApplicationCategory {
        id: number;
        name: string;
        description?: any;
        updated_at: Date;
        created_at: Date;
    }

    export interface NoneNecta {
        id: number;
        index_no: string;
        original_no: string;
        first_name: string;
        middle_name: string;
        last_name: string;
        app_year: string;
        exam_year: string;
        sur_name: string;
        sex: string;
        updated_at: Date;
        created_at: Date;
        changed_necta: boolean;
    }

    export interface ApplicantType {
        id: number;
        necta?: any;
        none_necta: NoneNecta;
        description?: any;
        updated_at: Date;
        created_at: Date;
    }

    export interface ApplicantDetails {
        applicant_type: ApplicantType;
        email: string;
        phonenumber: string;
        created_at: Date;
        updated_at: Date;
    }

    export interface Applicant2 {
        id: number;
        application_category: ApplicationCategory;
        applicant_details: ApplicantDetails;
        created_at: Date;
        updated_at: Date;
    }

    export interface PaymentDetails {
        id: number;
        applicant: Applicant2;
        payment_status: number;
        control_number: string;
        reference?: any;
        paid_when?: any;
        amount_paid?: any;
        used_by: string;
        used_when?: any;
        used_status: number;
        updated_at: Date;
        created_at: Date;
    }

    export interface Data {
        applicant: Applicant;
        payment_details: PaymentDetails;
    }

    export interface SearchedApplicantINterface {
        status_code: number;
        message: string;
        success: boolean;
        data: Data;
    }

}



