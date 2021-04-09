import { Postagem } from "./Postagem"

export class Tema{
    public id_tema: number
    public categoria: string
    //simbolo de array porque temos um array de postagens no tema
    public postagem: Postagem []
}