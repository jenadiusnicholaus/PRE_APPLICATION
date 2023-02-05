

    export interface NectaApplicant {
        id: number;
        index_no: string;
        original_no?: any;
        first_name: string;
        middle_name: string;
        last_name: string;
        app_year: string;
        exam_year: string;
        sur_name: string;
        sex: string;
        updated_at: Date;
        created_at: Date;
        changed_necta?: any;
    }

    export interface Data {
        id: number;
        necta_applicants: NectaApplicant[];
        center_number: string;
        center_name: string;
        updated_at: Date;
        created_at: Date;
    }

    export interface SchoolInterface {
        success: boolean;
        status_code: number;
        message: string;
        data: Data;
    }


