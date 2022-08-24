import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivrosController } from './livros.controller';
import { LivrosModels } from './livros.models';
import { LivrosService } from './livros.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'livros',
      autoLoadModels:true,
      synchronize : true 
    }),
    SequelizeModule.forFeature([LivrosModels])
  ],
  controllers: [AppController,LivrosController],
  providers: [AppService,LivrosService],
})
export class AppModule {}
