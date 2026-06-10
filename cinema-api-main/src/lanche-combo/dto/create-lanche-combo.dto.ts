import { ApiProperty } from '@nestjs/swagger';

export class CreateLancheComboDto {
  @ApiProperty({ example: 'Combo Família' })
  nome!: string;

  @ApiProperty({ example: 'Pipoca grande + 2 refrigerantes' })
  descricao!: string;

  @ApiProperty({ example: 45.0 })
  valorUnitario!: number;

  @ApiProperty({ example: 1 })
  qtUnidade!: number;

  @ApiProperty({ example: 45.0 })
  subtotal!: number;

  @ApiProperty({ example: 1, required: false })
  pedidoId?: number;
}