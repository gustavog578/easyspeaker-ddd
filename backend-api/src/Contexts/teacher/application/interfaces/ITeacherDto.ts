export default interface ITeacherDto {
    id: string,
    username: string,
    lastname : string,
    genre: string,
    email: string,
    password: string,
    skills: Array<string>,
    lat: number,
    lng: number,
    other_languages: Array<string>,
    native_language: string,
    currency: string,
    price: number
}