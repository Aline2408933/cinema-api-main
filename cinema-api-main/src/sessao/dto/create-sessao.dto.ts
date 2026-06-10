import { ApiProperty } from '@nestjs/swagger';

export class CreateSessaoDto {
  @ApiProperty({ example: '2024-06-01T19:00:00.000Z' })
  horarioExibicao!: Date;

  @ApiProperty({ example: 1 })
  filmeId!: number;

  @ApiProperty({ example: 1 })
  salaId!: number;
}