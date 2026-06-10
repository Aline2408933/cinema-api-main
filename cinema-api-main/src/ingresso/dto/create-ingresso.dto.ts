import { ApiProperty } from '@nestjs/swagger';

export class CreateIngressoDto {
  @ApiProperty({ example: 30.0 })
  valorInteira!: number;

  @ApiProperty({ example: 15.0 })
  valorMeia!: number;

  @ApiProperty({ example: 1 })
  sessaoId!: number;

  @ApiProperty({ example: 1, required: false })
  pedidoId?: number;
}