import { Entety } from "./Entity"

export class User extends Entety{
    
    name: string
    email: string
    
    constructor(name:string , email:string ){
        super()
        this.email = email
        this.name = name
    }
}