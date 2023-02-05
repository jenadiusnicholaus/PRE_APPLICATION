
export interface Applicant {
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

export interface NectaApplicant {
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

export interface SchoolInfos {
    id: number;
    necta_applicants: NectaApplicant[];
    center_number: string;
    center_name: string;
    updated_at: Date;
    created_at: Date;
}

export interface Data {
    applicant_type: string;
    new_index_no: string;
    applicant: Applicant;
    school_infos: SchoolInfos;
}

export interface SearchedApplicantInterface {
    success: boolean;
    status_code: number;
    message: string;
    data: Data;
}





