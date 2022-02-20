declare namespace app.models { 
    export interface RegisterUserModel { 
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
        acceptedTerms: boolean;
        newsletterSubscription: boolean;
    }
}