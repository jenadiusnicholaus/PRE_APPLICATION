import { Inject, Injectable } from "@angular/core";

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

export interface SchoolInfo {
        id: number;
        necta_applicants: NectaApplicant[];
        center_number: string;
        center_name: string;
        updated_at: Date;
        created_at: Date;
    }

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

export interface Applicant2 {
        id: number;
        application_category: ApplicationCategory;
        applicant_details: ApplicantDetails;
        created_at: Date;
        updated_at: Date;
        confirmed: boolean;
    }

export interface PaymentDetail {
        id: number;
        applicant: Applicant2;
        payment_status: any;
        control_number?: any;
        reference?: any;
        paid_when?: any;
        amount_paid: any
        used_by?: any;
        used_when?: any;
        used_status?: any;
        updated_at: Date;
        created_at: Date;
    }

export interface Data {
        necta_index_no: string;
        new_index_no: string;
        applicant: Applicant;
        school_infos: SchoolInfo[];
        payment_details: PaymentDetail[];
    }

export interface SearchedApplicantInterface {
        status_code: number;
        message: string;
        success: boolean;
        data: Data;
    }
