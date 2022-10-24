export default class User {

    constructor(
        public id: string ,
        public username: string,
        public lastname : string,
        public genre: string,
        public email: string,
        public password: string,
        public skills: Array<string>,
        public lat: number,
        public lng: number,
        public interest_languages: Array<string>,
        public native_language: string,
        public currency: string,
        
    )
    {

    }
}