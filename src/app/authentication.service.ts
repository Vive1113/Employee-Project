import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    constructor() { }

    authenticate(email : any, password : any){
        if(email === "vivekajol1113@gmail.com" && password === "Vive@1113"){
            sessionStorage.setItem('email', email)
            return true;
        }
        else{
            return false;
        }
    }
    isUserLoggedIn(){
        let user = sessionStorage.getItem('email')
        console.log(!(user === null))
        return !(user === null)
    }

    logOut(){
        sessionStorage.removeItem('email')
    }
}




