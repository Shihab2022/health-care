export type TAdmin = {
    name: string,
    email: string,
    profilePhoto: string,
    contactNumber: string,
    isDeleted: boolean
    // "name": "admin",
    // "email": "use@gmail.com",
    // "profilePhoto": null,
    // "contactNumber": "01568924",
    // "isDeleted": false,
}

export type IAdminFilterRequest = {
    name?: string | undefined;
    email?: string | undefined;
    contactNumber?: string | undefined;
    searchTerm?: string | undefined;
}