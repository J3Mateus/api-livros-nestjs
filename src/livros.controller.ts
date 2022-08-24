import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { LivrosModels } from "./livros.models";
import { LivrosService } from "./livros.service";

@Controller('livros')
export class LivrosController{ 
    
    constructor(private livroService : LivrosService){}

    @Get()
    async obtertodos(): Promise<LivrosModels[]>{
        return this.livroService.obtertodos()
    }

    @Get(':id')
    async obterApenasUm(@Param() params ):Promise<LivrosModels>{
        return this.livroService.obterApenasUm(params.id)
    }

    @Post()
    async criarUmLivro(@Body() data:LivrosModels){
        this.livroService.criarUmLivro(data)
    }

    @Put()
    async AtualizarLivro(@Body() data:LivrosModels): Promise<[number]>{
       return this.livroService.AtualizarLivro(data)
    }

    @Delete(':id')
    async ApagarLivro(@Param() params ){
         this.livroService.ApagarLivro(params.id)

    }


}