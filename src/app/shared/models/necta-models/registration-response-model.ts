

 export   declare module NectaSelfRegistration {

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
        }
    
        export interface User {
            id: number;
            password: string;
            last_login: Date;
            is_superuser: boolean;
            username: string;
            first_name: string;
            last_name: string;
            email: string;
            is_staff: boolean;
            is_active: boolean;
            date_joined: Date;
            groups: any[];
            user_permissions: any[];
        }
    
        export interface UserProfile {
            id: number;
            applicant: Applicant;
            user: User;
            secret_question: string;
            secret_answer: string;
            confirmed: boolean;
        }
    
        export interface ApplicationCategory2 {
            id: number;
            name: string;
            description?: any;
            updated_at: Date;
            created_at: Date;
        }
    
        export interface Necta2 {
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
    
        export interface ApplicantType2 {
            id: number;
            necta: Necta2;
            none_necta?: any;
            description?: any;
            updated_at: Date;
            created_at: Date;
        }
    
        export interface ApplicantDetails2 {
            applicant_type: ApplicantType2;
            email: string;
            phonenumber: string;
            created_at: Date;
            updated_at: Date;
        }
    
        export interface Applicant2 {
            id: number;
            application_category: ApplicationCategory2;
            applicant_details: ApplicantDetails2;
            created_at: Date;
            updated_at: Date;
        }
    
        export interface PaymentDetails {
            id: number;
            applicant: Applicant2;
            payment_status: number;
            control_number: string;
            reference: string;
            paid_when?: any;
            amount_paid: string;
            used_by: string;
            used_when: Date;
            used_status: number;
            updated_at: Date;
            created_at: Date;
        }
    
        export interface Data {
            user_profile: UserProfile;
            payment_details: PaymentDetails;
        }
    
        export interface SelfRegistrationInterface {
            success: boolean;
            status_code: number;
            message: string;
            data: Data;
        }
    
    }
    
     
