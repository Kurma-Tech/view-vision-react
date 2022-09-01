export interface LoginDetails {
    email: string;
    password: string;
}

export interface RegisterDetails {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    phone?: string;
    business_name?: string;
    street_address?: string;
}
