import { ApiProperty } from '@nestjs/swagger';

export class CreatePedidoDto {
  @ApiProperty({ example: 2 })
  qtInteira!: number;

  @ApiProperty({ example: 1 })
  qtMeia!: number;

  @ApiProperty({ example: 75.0 })
  valorTotal!: number;
}