export class Teacher {
    constructor(
        public id : string = "", 
        public username: string = "",
        public age:number,
        public lat:number,
        public lng:number,
        public lastname: string = "",
        public native_language: string = "",
        public currency:string = "",
        public price:number,
        public other_languages: [],
        public skills: [],
    ) {

    }
}