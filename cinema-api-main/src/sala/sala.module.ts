import { Module } from '@nestjs/common';
import { SalaService } from './sala.service';
import { SalaController } from './sala.controller';
import { PrismaModule } from 'src/prisma/prisma.module';


@Module({
  controllers: [SalaController],
  providers: [SalaService],
  imports: [PrismaModule]
})
export class SalaModule {}
