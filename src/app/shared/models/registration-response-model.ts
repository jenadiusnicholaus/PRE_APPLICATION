
    export interface ApplicationCategory {
        id: number;
        name: string;
        description: string;
        updated_at: Date;
        created_at: Date;
    }

    export interface Necta {
        id: number;
        index_no: string;
        education_level: string;
        first_name: string;
        middle_name: string;
        sur_name: string;
        app_year: string;
        last_name: string;
        exam_year: string;
        sex: string;
        updated_at: Date;
        created_at: Date;
    }

    export interface ApplicantType {
        id: number;
        necta: Necta;
        none_necta?: any;
        description?: any;
        updated_at: Date;
        created_at: Date;
    }

    export interface ApplicantDetails {
        applicant_type: ApplicantType;
        email?: any;
        phonenumber: string;
        created_at: Date;
        updated_at: Date;
    }

    export interface Applicant {
        id: number;
        application_category: ApplicationCategory;
        applicant_details: ApplicantDetails;
        created_at: Date;
        updated_at: Date;
    }

    export interface PaymentDetails {
        id: number;
        applicant: Applicant;
        payment_status: number;
        control_number: string;
        reference: string;
        paid_when: Date;
        amount_paid: string;
        used_by: string;
        used_when: Date;
        used_status: number;
        updated_at: Date;
        created_at: Date;
    }

    export interface Data {
        payment_details: PaymentDetails;
    }

    export interface SelfRegistrationInterface {
        success: boolean;
        status_code: number;
        message: string;
        data: Data;
    }


