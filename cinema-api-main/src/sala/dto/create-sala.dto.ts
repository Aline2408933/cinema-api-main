import { ApiProperty } from '@nestjs/swagger';

export class CreateSalaDto {
  @ApiProperty({ example: 1 })
  numero!: number;

  @ApiProperty({ example: 100 })
  capacidade!: number;

  @ApiProperty({ example: 1 })
  cinemaId!: number;
}