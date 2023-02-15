

export declare module NoneNactaContactInfos {

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

    export interface Data {
        id: number;
        application_category: ApplicationCategory;
        applicant_details: ApplicantDetails;
        created_at: Date;
        updated_at: Date;
    }

    export interface ContactInfosInterface {
        success: boolean;
        status_code: number;
        message: string;
        data: Data;
    }

}



