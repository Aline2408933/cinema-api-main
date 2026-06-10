import { Module } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [PedidoController],
  providers: [PedidoService],
  imports: [PrismaModule],
})
export class PedidoModule {}
