import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { LivrosModels } from "./livros.models";

@Injectable()
export class LivrosService {

    constructor(
        @InjectModel(LivrosModels)
        private livroModel : typeof LivrosModels
    ){}

    async obtertodos(): Promise<LivrosModels[]> {
        return this.livroModel.findAll()
    }

    async obterApenasUm(id : number):Promise<LivrosModels>{
        return await this.livroModel.findByPk(id)
    }

    async criarUmLivro(livro : LivrosModels){
        this.livroModel.create(livro)
    }


    async AtualizarLivro(livro : LivrosModels): Promise<[number]>{
        return this.livroModel.update(livro,{where:{id : livro.id}}) 
    }

    async ApagarLivro(id : number){
        const livro : LivrosModels = await this.obterApenasUm(id);
        livro.destroy()
    }
}