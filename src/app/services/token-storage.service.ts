import { Injectable } from '@angular/core';


const Token_Key='Auth Token'
 
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }
  

  saveToken(token){
    console.log(token)
    window.sessionStorage.removeItem(Token_Key)
    window.sessionStorage.setItem(Token_Key,token);
  }

  saveUser(data){
    console.log(data)
    // window.sessionStorage.removeItem(User_Key)
    window.sessionStorage.setItem(Token_Key,data);


  }
  

  removeToken(){
    window.sessionStorage.clear()
  }

   getToken():string | null{
    return window.sessionStorage.getItem(Token_Key)
   }
}
