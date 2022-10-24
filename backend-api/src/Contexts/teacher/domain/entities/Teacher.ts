export default class Teacher {

    constructor (
        public id: string ,
        public username: string,
        public lastname : string,
        public genre: string,
        public email: string,
        public password: string,
        public skills: Array<string>,
        public lat: number,
        public lng: number,
        public other_languages: Array<string>,
        public native_language: string,
        public currency: string,
        public price: number
    )
    {

    }
}