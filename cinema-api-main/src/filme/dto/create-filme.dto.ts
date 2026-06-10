import { ApiProperty } from '@nestjs/swagger';

export class CreateFilmeDto {
  @ApiProperty({ example: 'Vingadores' })
  titulo!: string;

  @ApiProperty({ example: 'Um grupo de heróis...' })
  sinopse!: string;

  @ApiProperty({ example: '14' })
  classificacao!: string;

  @ApiProperty({ example: 120 })
  duracao!: number;

  @ApiProperty({ example: 'Ação' })
  genero!: string;

  @ApiProperty({ example: '2024-01-01T00:00:00.000Z' })
  dataInicioExibicao!: Date;

  @ApiProperty({ example: '2024-03-01T00:00:00.000Z' })
  dataFinalExibicao!: Date;

  @ApiProperty({ example: 1 })
  cinemaId!: number;
}