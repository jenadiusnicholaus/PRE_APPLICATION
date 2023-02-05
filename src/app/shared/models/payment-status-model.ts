
export interface ApplicationCategory {
    id: number;
    name: string;
    description?: any;
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
    email: string;
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
    confirmed: boolean;
}

export interface Data {
    id: number;
    applicant: Applicant;
    payment_status: string;
    control_number: string;
    reference?: any;
    paid_when?: any;
    used_by?: any;
    used_when?: any;
    used_status?: any;
    updated_at: Date;
    created_at: Date;
}

export interface ApplicantPaymentStatusInterface {
    success: boolean;
    status_code: number;
    message: string;
    data: Data;
}



