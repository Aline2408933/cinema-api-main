import { Module } from '@nestjs/common';
import { FilmeController } from './filme.controller';
import { FilmeService } from './filme.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [FilmeController],
  providers: [FilmeService],
})
export class FilmeModule {}