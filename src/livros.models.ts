import { Table,Model, Column, DataType } from "sequelize-typescript"

@Table
export class LivrosModels extends Model<LivrosModels > {

    @Column({
        type : DataType.STRING(60),
        allowNull:false,
    })
    private codigo : string 

    @Column({
        type : DataType.STRING(),
        allowNull:false,
    })
    private nome : string 

    @Column({
        type : DataType.DECIMAL(10,2),
        allowNull:false,
    })
    private preco : number 


    setID (id : number ){ 
        this.id = id 
    }

    setCodigo(codigo : string ){
        this.codigo = codigo 
    }

    setNome(nome:string){
        this.nome = nome 
    }

    setPreco(preco:number){
        this.preco = preco 
    }

    getID(): number{
        return this.id
    }

    getCodigo():string {
        return this.codigo
    }

    getNome(): string {
       return this.nome
    }

    getPreco():number {
        return this.preco
    }
}