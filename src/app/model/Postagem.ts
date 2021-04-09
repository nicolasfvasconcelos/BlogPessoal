import { Tema } from "./Tema"
import { User } from "./User" //3 - Importado pós relacionamento

export class Postagem{
    // 1 - Pegando atributos
    public id: number
    public titulo: string
    public texto: string
    public date: Date
    // 2 - fazendo relacionamento postagem-usuario --> por isso tipo User
    public usuario: User 
    public tema: Tema


} 