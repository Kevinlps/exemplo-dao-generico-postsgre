import { Entety } from "./Entity"

export class Post extends Entety{
    
    title: string
    content: string
    creationDate: Date

    constructor(title: string, content: string, creationdate:Date){
        super()
        this.title=title
        this.content=content
        this.creationDate = creationdate
    }
}